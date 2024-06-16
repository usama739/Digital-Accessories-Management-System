import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  } from '@ant-design/icons';

  import image from '../images/profile.jpg';

  import {
  AiOutlineDashboard,
  AiOutlineCustomerService,
  AiOutlineShoppingCart,
  AiFillFolderAdd,
  AiFillFileAdd,
  AiOutlineFolderAdd
} from 'react-icons/ai';
import {FcTodoList} from 'react-icons/fc'
import {IoNotificationsOutline} from 'react-icons/io5';
import {MdOutlineBrandingWatermark} from 'react-icons/md'
import {BiCategoryAlt,BiLogoBlogger} from 'react-icons/bi'
import {SiPytest} from 'react-icons/si'
import { Outlet } from 'react-router-dom';

import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

/* eslint-disable */
const MainLaout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate=useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <spam className='sm-logo'>DAMS</spam>
            <spam className='lg-logo'>Digital Accessories</spam>
          </h2>

        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
          if(key=='signout'){

          }
          else{
            navigate(key);
          }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-3'/>,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineCustomerService className='fs-3' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart className='fs-3' />,
              label: 'Catalog',
              children:[ {
                key: 'add-product',
                icon: <AiFillFolderAdd className='fs-3' />,
                label: 'Product',
              },
              {
                key: 'product-list',
                icon: <FcTodoList className='fs-3' />,
                label: 'Product List',
              },
              {
                key: 'category',
                icon: <BiCategoryAlt  />,
                label: 'Category',
              },
              {
                key: 'category-list',
                icon: <FcTodoList  className='fs-3'  />,
                label: 'Category List',
              },
            ]
            },
            {
              key: 'orders',
              icon: <FcTodoList  className='fs-3'  />,
              label: 'Orders',
            },
            {
              key: 'enquiries',
              icon: <SiPytest  className='fs-3'  />,
              label: 'Enquiries',
            },
            {
              key: 'contact',
              icon: <MdOutlineBrandingWatermark  className='fs-3'  />,
              label: 'Contact',
            },
           
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className='d-flex justify-content-between px-3 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
            <div className='d-flex gap-3 align-items-center'>
              <div className='position-relative'>
              <IoNotificationsOutline className='fs-4'/>
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>
                3
              </span>

              </div>
              <div className='d-flex gap-3 align-items-center'>
                <div>
                  <img style={{height:50,width:50,borderRadius:'40%'}} src={image} alt='None' />
                </div>
                <div>
                  <h5 className='mb-0'>Shahroz Maqsood</h5>
                  <p className='mb-0'>shahroz@gmail.com</p>
                </div>
              </div>
             </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          
          
            <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLaout;