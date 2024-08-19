import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { GetProduct } from "../services/responses/ProductResponse";
import { getProducts } from "../services/ProductResponse";

const ProductList = () => {
  const [data, setData] = useState<GetProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      title: "Producto",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Fecha de Emisión",
      dataIndex: "issued_date",
      key: "issued_date",
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setData(products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex items-center mt-5 justify-center bg-white">
      <div className="w-full max-w-4xl">
        <Table
          columns={columns}
          dataSource={data.map((product) => ({
            key: product.id,
            ...product,
          }))}
          loading={loading}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default ProductList;
