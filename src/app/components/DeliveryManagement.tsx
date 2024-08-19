import React from "react";
import { Table, Select, Tag } from "antd";

const { Option } = Select;

const DeliveryManagement = () => {
  const handleStatusChange = (value: string, record: any) => {
    console.log(`Cambiado el estado del producto ${record.product} a ${value}`);
    // Aquí puedes manejar la lógica de cambio de estado
  };

  const columns = [
    {
      title: "Producto",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Serie",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Usuario",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Entregado" ? "green" : "volcano"}>
          {status.toUpperCase()}
        </Tag>
      ),
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
          <Option value="Pendiente">Pendiente</Option>
          <Option value="Entregado">Entregado</Option>
          <Option value="En Proceso">En Proceso</Option>
        </Select>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      product: "Producto A",
      serial: "12345",
      user: "Juan Pérez",
      status: "Pendiente",
    },
    {
      key: "2",
      product: "Producto B",
      serial: "67890",
      user: "María López",
      status: "Entregado",
    },
    {
      key: "3",
      product: "Producto C",
      serial: "54321",
      user: "Carlos García",
      status: "En Proceso",
    },
  ];

  return (
    <div className="p-8 bg-white ">
      <h2 className="text-2xl font-bold mb-6">Gestión de Inventario</h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 'max-content' }}
    />
    </div>
  );
};

export default DeliveryManagement;
