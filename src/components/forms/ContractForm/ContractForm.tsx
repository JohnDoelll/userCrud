import { Button, Card, Flex, Form, type FormProps, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';
import InputMask from 'react-input-mask';

import { BackButton } from '@/components/BackButton';

import { FormItemWrapper } from '../FormItemWrapper';

interface ContractFormProps extends FormProps {}

const validatePhoneNumber = (_: unknown, value: string) => {
  const cleanValue = value.replaceAll(/\D/g, '');
  if (cleanValue.length === 12) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('The phone number is not fully entered!'));
};

const validateMinLength = (_: unknown, value: string) => {
  if (value && value.length >= 10) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('Please enter at least 10 characters!'));
};

export const ContractForm = (props: ContractFormProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    props.initialValues?.id && form.setFieldsValue(props.initialValues);
  }, [props, form]);

  return (
    <Form form={form} name='userForm' layout='vertical' {...props}>
      <Flex vertical gap={16}>
        <Card
          title={props.title}
          bordered={false}
          extra={
            <Space>
              <Button htmlType='submit' type='primary'>
                Save
              </Button>
              <BackButton />
            </Space>
          }
        >
          <FormItemWrapper grid={3}>
            <Form.Item
              label='Phone number'
              name='phoneNumber'
              rules={[{ validator: validatePhoneNumber }]}
              style={{ width: '100%' }}
            >
              <InputMask
                id='phoneNumber'
                placeholder='+998 (__) ___-__-__'
                mask='+\9\98 (99) 999-99-99'
                type='text'
                className='input-mask'
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item
              label='User info'
              name='userInfo'
              rules={[{ validator: validateMinLength }]}
              style={{ width: '100%' }}
            >
              <TextArea rows={1} placeholder='Please enter at least 10 characters!' />
            </Form.Item>
          </FormItemWrapper>
        </Card>
      </Flex>
    </Form>
  );
};
