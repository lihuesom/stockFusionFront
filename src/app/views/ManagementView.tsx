import React, { useState } from "react";
import { Layout, Modal, Button } from "antd";
import DeliveryManagement from "../components/DeliveryManagement";
import RegisterInventory from "../components/RegisterInventory";
import ProductList from "../components/ProductList";

const { Header, Content } = Layout;

const ManagementView = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const showModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  
  return (
    <Layout className="min-h-screen">
      {/* Header */}
      <Header className="flex justify-between items-center bg-white shadow-md">
        <div className="text-lg font-bold">
          <img
            src={require("../../common/assets/Logo_2.0_banco_de_bogota.png")}
            alt="Logo"
            className="inline-block h-12 mr-4"
          />
          Test - Banco de Bogotá
        </div>
      </Header>

      {/* Content */}
      <Content className="p-8 bg-[#f5f7fa]">
        <h1 className="text-2xl font-bold mb-4">
          Administración de productos financieros
        </h1>
        <p className="mb-8 text-gray-600">
          Gestiona y supervisa de manera integral los productos financieros de
          nuestros clientes, desde la selección y registro hasta la entrega,
          asegurando un servicio eficiente y personalizado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Listado de productos</h3>
            <p className="text-gray-600">
              Explora los productos financieros disponibles para nuestros
              clientes y descubre cuál se adapta mejor a sus necesidades.
            </p>
            <button
              onClick={() => showModal(<ProductList />)}
              className="text-blue-500 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Ir &rsaquo;
            </button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Registro</h3>
            <p className="text-gray-600">
              Registra de manera eficiente el producto financiero que el cliente
              desea adquirir, asegurando un proceso rápido y preciso.
            </p>
            <button
              onClick={() => showModal(<RegisterInventory  onClose={closeModal} />)}
              className="text-blue-500 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Ir &rsaquo;
            </button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Gestión de entregas</h3>
            <p className="text-gray-600">
              Monitorea y verifica el estado de entrega de los productos
              financieros solicitados por nuestros clientes.
            </p>
            <button
              onClick={() => showModal(<DeliveryManagement  onClose={closeModal}  />)}
              className="text-blue-500 mt-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Ir &rsaquo;
            </button>
          </div>
        </div>
      </Content>

      <Modal
        title="Detalles"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="rounded-lg overflow-hidden"
        centered
        width="40%"
      >
        {modalContent}
      </Modal>
    </Layout>
  );
};

export default ManagementView;
