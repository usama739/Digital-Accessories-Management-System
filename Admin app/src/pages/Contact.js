/* eslint-disable */

import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';



const Contact = () => {
  const [form] = Form.useForm();
  const [attachments, setAttachments] = useState([]);

  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append('to', values.to);
    formData.append('subject', values.subject);
    formData.append('text', values.text);
    // Attachments handling
    attachments.forEach((file, index) => {
        formData.append(`attachment${index + 1}`, file);
      });

    try {
      await axios.post('http://localhost:4000/email/send', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success('Email sent successfully');
      form.resetFields();
    } catch (error) {
      console.error('Error sending email:', error);
      message.error('Error sending email');
    }
  };

  const onFileChange = (info) => {
    
  // Ant Design Upload component provides file info as an object
  // Check if the file is uploaded successfully and update state accordingly
  if (info.file.status === 'done') {
    // Append the new file to the existing attachments array
    setAttachments([...attachments, info.file.originFileObj]);
  } else if (info.file.status === 'removed') {
    // Handle the case when a file is removed
    // Remove the file from the attachments array
    const updatedAttachments = attachments.filter(file => file.uid !== info.file.uid);
    setAttachments(updatedAttachments);
  }
  };

  return (
    <div className="email-component">
      <h2>Compose Email</h2>
      <Form  style={{marginTop:30}} form={form} onFinish={onFinish}>
        <Form.Item name="to" label="To" rules={[{ required: true, message: 'Please enter recipient email' }]}>
          <Input style={{marginLeft:40 , maxWidth:900}}/>
        </Form.Item>
        <Form.Item name="subject" label="Subject" rules={[{ required: true, message: 'Please enter email subject' }]}>
          <Input style={{marginLeft:10 , maxWidth:900}}/>
        </Form.Item>
        <Form.Item name="text" label="Email Text" rules={[{ required: true, message: 'Please enter email text' }]}>
          <Input.TextArea rows={4} style={{maxWidth:900}} />
        </Form.Item>
        <Form.Item
          name="attachments"
          label="Attachments"
          valuePropName="fileList"
          getValueFromEvent={onFileChange}
        >
          <Upload beforeUpload={() => false} maxCount={3} listType="file" multiple>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Email
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
/* eslint-enable */
export default Contact;
