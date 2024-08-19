import React, { useState, useEffect } from "react";
import { Form, Input, InputNumber, Select, Button, DatePicker, message, } from "antd";
import { getProducts } from "../services/ProductResponse";
import { createInventoryItem } from "../services/InventoryService";
import moment from "moment";

const { Option } = Select;
interface RegisterInventoryProps {
    onClose: () => void;
  }

const RegisterInventory = (props: RegisterInventoryProps)  => {
  const [products, setProducts] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  const handleFinish = async (values: any) => {
    const formattedValues = {
      ...values,
      delivery_date:moment(values.delivery_date).format('YYYY-MM-DD'),
      registered_by: "example@example.com",
    };
    console.log("Form Values:", values);

    try {
      const response = await createInventoryItem(formattedValues);
      if (response) {
        console.log("Item creado exitosamente:", response);
        message.success("Registro creado exitosamente");
        props.onClose();
      }
    } catch (error) {
      console.error("Error creando el item:", error);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-lg p-8  ">
        <h2 className="text-2xl font-bold mb-6">Registrar Inventario</h2>
        <Form layout="vertical" onFinish={handleFinish}>
          <Form.Item
            label="Nombre"
            name="first_name"
            rules={[{ required: true, message: "Por favor ingrese su nombre" }]}
          >
            <Input placeholder="Ingrese su nombre" />
          </Form.Item>

          <Form.Item
            label="Apellido"
            name="last_name"
            rules={[
              { required: true, message: "Por favor ingrese su Apellido" },
            ]}
          >
            <Input placeholder="Ingrese su nombre" />
          </Form.Item>

          <Form.Item
            label="Correo"
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su correo",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Ingrese su correo" />
          </Form.Item>

          <Form.Item
            label="Teléfono"
            name="cellphone"
            rules={[
              { required: true, message: "Por favor ingrese su teléfono" },
            ]}
          >
            <InputNumber
              style={{ width: "100%" }}
              placeholder="Ingrese su teléfono"
            />
          </Form.Item>

          <Form.Item
            label="No. Identificación"
            name="identification"
            rules={[
              {
                required: true,
                message: "Por favor ingrese su número de identificación",
              },
            ]}
          >
            <Input placeholder="Ingrese su número de identificación" />
          </Form.Item>

          <Form.Item
            label="Tipo de documento"
            name="document_type"
            rules={[
              {
                required: true,
                message: "Por favor seleccione el tipo de documento",
              },
            ]}
          >
            <Select placeholder="Seleccione el tipo de documento">
              <Option value="CC">Cédula de Ciudadanía</Option>
              <Option value="NIT">NIT</Option>
              <Option value="TI">Tarjeta de Identidad</Option>
              <Option value="PAS">Pasaporte</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Producto"
            name="product"
            rules={[
              { required: true, message: "Por favor seleccione un producto" },
            ]}
          >
            <Select placeholder="Seleccione el producto">
              {products.map((product) => (
                <Option key={product.id} value={product.id}>
                  {product.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Número de Serie"
            name="serie"
            rules={[
              {
                required: true,
                message: "Por favor ingrese el número de serie",
              },
            ]}
          >
            <Input placeholder="Ingrese el número de serie" />
          </Form.Item>

          <Form.Item
            label="Fecha de Entrega"
            name="delivery_date"
            rules={[
              {
                required: true,
                message: "Por favor seleccione la fecha de entrega",
              },
            ]}
          >
            <DatePicker style={{ width: "100%" }} format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Registrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterInventory;
