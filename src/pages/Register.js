import { Button, Form, Input, InputNumber } from 'antd';
import AnchorLink from 'antd/es/anchor/AnchorLink';
import Link from 'antd/es/typography/Link';
import React from 'react'

function Register() {
  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Faça o seu registro</h1>
            <Form layout='vertical'>

                <Form.Item label='Nome' name='name'>
                   <Input placeholder='Nome'/>                  
                </Form.Item>
                <Form.Item label='Email' name='email'>
                   <Input placeholder='Email'/>                  
                </Form.Item>
                <Form.Item label='Senha' name='senha'>
                   <Input placeholder='Senha'/>                  
                </Form.Item>

                <Button className='primary-button my-2'>REGISTRAR</Button> 
                
                <Link to="/login" className='anchor mt-2'>CLIQUE PARA LOGAR</Link>
                 

            </Form>
      </div>
    </div>
  );
}

export default Register
