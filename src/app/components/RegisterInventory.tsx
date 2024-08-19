import React from 'react';
import { Form, Input, InputNumber, Select, Button, DatePicker } from 'antd';

const { Option } = Select;

const RegisterInventory = () => {
    const handleFinish = (values: any) => {
        console.log('Form Values:', values);
    };

    return (
        <div className="flex items-center justify-center ">
            <div className="w-full max-w-lg p-8  ">
                <h2 className="text-2xl font-bold mb-6">Registrar Inventario</h2>
                <Form layout="vertical" onFinish={handleFinish}>
                    <Form.Item label="Nombre" name="name" rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}>
                        <Input placeholder="Ingrese su nombre" />
                    </Form.Item>

                    <Form.Item label="Correo" name="email" rules={[{ required: true, message: 'Por favor ingrese su correo', type: 'email' }]}>
                        <Input placeholder="Ingrese su correo" />
                    </Form.Item>

                    <Form.Item label="Teléfono" name="phone" rules={[{ required: true, message: 'Por favor ingrese su teléfono' }]}>
                        <InputNumber style={{ width: '100%' }} placeholder="Ingrese su teléfono" />
                    </Form.Item>

                    <Form.Item label="No. Identificación" name="idNumber" rules={[{ required: true, message: 'Por favor ingrese su número de identificación' }]}>
                        <Input placeholder="Ingrese su número de identificación" />
                    </Form.Item>

                    <Form.Item label="Tipo de documento" name="documentType" rules={[{ required: true, message: 'Por favor seleccione el tipo de documento' }]}>
                        <Select placeholder="Seleccione el tipo de documento">
                            <Option value="CC">Cédula de Ciudadanía</Option>
                            <Option value="CE">Cédula de Extranjería</Option>
                            <Option value="TI">Tarjeta de Identidad</Option>
                            <Option value="PP">Pasaporte</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Producto" name="product" rules={[{ required: true, message: 'Por favor seleccione un producto' }]}>
                        <Select placeholder="Seleccione el producto">
                            <Option value="producto1">Producto 1</Option>
                            <Option value="producto2">Producto 2</Option>
                            <Option value="producto3">Producto 3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Número de Serie" name="serialNumber" rules={[{ required: true, message: 'Por favor ingrese el número de serie' }]}>
                        <Input placeholder="Ingrese el número de serie" />
                    </Form.Item>

                    <Form.Item label="Fecha de Entrega" name="deliveryDate" rules={[{ required: true, message: 'Por favor seleccione la fecha de entrega' }]}>
                        <DatePicker style={{ width: '100%' }} />
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
