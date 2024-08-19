import React, { useEffect, useState } from "react";
import { Table, Select, Tag, message, Button } from "antd";
import { GetInventory } from "../services/responses/InventoryResponse";
import { getInventory, updateInventoryItem} from "../services/InventoryService";

const { Option } = Select;
interface RegisterInventoryProps {
  onClose: () => void;
}

const DeliveryManagement = (props: RegisterInventoryProps) => {
  const [data, setData] = useState<GetInventory[]>([]);
  const [loading, setLoading] = useState(true);
  const [updates, setUpdates] = useState<Map<string, string>>(new Map());

  const handleStatusChange = (value: string, record: any) => {
    console.log(`Cambiado el estado del producto ${record.product} a ${value}`);
    setUpdates((prev) => new Map(prev).set(record._id, value));
  };

  const handleUpdate = async () => {
    try {
      // Prepare data to send to backend
      const updatesArray = Array.from(updates.entries()).map(
        ([_id, status]) => ({ _id, status })
      );

      // Send updates to backend
      const response = await updateInventoryItem(updatesArray)
      if (response) {
        message.success("Estados actualizados exitosamente");
        setUpdates(new Map()); // Clear updates after successful submission
        props.onClose();
      } else {
        message.error("Error al actualizar los estados");
        props.onClose();
      }
    } catch (error) {
      console.error("Error al enviar las actualizaciones:", error);
      message.error("Error al actualizar los estados");
    }
  };
  const columns = [
    {
      title: "Producto",
      dataIndex: "product",
      key: "product",
      render: (product: { name: string }) => product.name,
    },
    {
      title: "Serie",
      dataIndex: "serie",
      key: "serie",
    },
    {
      title: "Usuario",
      dataIndex: "owner",
      key: "owner",
      render: (owner: { fullname: string }) => owner.fullname,
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color;
        let label;

        switch (status) {
          case "delivered":
            color = "green";
            label = "Entregado";
            break;
          case "pending":
            color = "volcano";
            label = "Pendiente";
            break;
          case "returned":
            color = "orange";
            label = "Devuelto";
            break;
          case "lost":
            color = "red";
            label = "Perdido";
            break;
          case "damaged":
            color = "gray";
            label = "Dañado";
            break;
          case "under_review":
            color = "blue";
            label = "En Revisión";
            break;
          default:
            color = "default";
            label = status;
        }

        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
      title: "Acciones",
      key: "actions",
      render: (record: any) => (
        <Select
          defaultValue={record.status}
          onChange={(value) => handleStatusChange(value, record)}
          style={{ width: 120 }}
        >
          <Option value="pending">Pendiente</Option>
          <Option value="delivered">Entregado</Option>
          <Option value="returned">Devuelto</Option>
          <Option value="lost">Perdido</Option>
          <Option value="damaged">Dañado</Option>
          <Option value="under_review">En Revisión</Option>
        </Select>
      ),
    },
  ];

  useEffect(() => {
    const fetchInventory = async () => {
      const inventory = await getInventory();
      setData(inventory);
      setLoading(false);
    };

    fetchInventory();
  }, []);

  return (
    <div className="p-8 bg-white ">
      <h2 className="text-2xl font-bold mb-6">Gestión de Inventario</h2>
      <Table
        columns={columns}
        dataSource={data.map((inventory) => ({
          key: inventory._id,
          ...inventory,
        }))}
        loading={loading}
        pagination={false}
        scroll={{ x: "max-content" }}
      />
      <Button
        type="primary"
        onClick={handleUpdate}
        disabled={updates.size === 0}
        style={{ marginTop: 16 }}
      >
        Actualizar registros
      </Button>
    </div>
  );
};

export default DeliveryManagement;
