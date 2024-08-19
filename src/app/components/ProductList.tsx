import React from "react";
import { Table, Select, Tag } from "antd";

const products = [
  {
    name: "Producto A",
    description: "Descripción del Producto A",
    issued_date: "2024-01-01",
  },
  {
    name: "Producto B",
    description: "Descripción del Producto B",
    issued_date: "2024-02-15",
  },
  {
    name: "Producto C",
    description: "Descripción del Producto C",
    issued_date: "2024-03-10",
  },
];

const ProductList = () => {
  const columns = [
    {
      title: "Producto",
      dataIndex: "product",
      key: "product",
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Fecha de entrega",
      dataIndex: "issued_date",
      key: "issued_date",
    },
  ];

  const data = [
    {
      key: "1",
      product: "Producto A",
      description: "12345",
      issued_date: "Juan Pérez",
    },
    {
      key: "2",
      product: "Producto B",
      description: "67890",
      issued_date: "María López",
    },
    {
      key: "3",
      product: "Producto C",
      description: "54321",
      issued_date: "Carlos García",
    },
  ];
  return (
    <div className="flex items-center mt-5 justify-center bg-white">
      <div className="w-full max-w-4xl">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default ProductList;
