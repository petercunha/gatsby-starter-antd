import React from 'react'
import { Link } from 'gatsby'
import { Icon, Switch, Checkbox, Button, Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber } from 'antd'

import Home from '../components/home'

// FORM OPTIONS
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

// CHECKBOX OPTIONS
const CheckboxGroup = Checkbox.Group;
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];


const IndexPage = () => (
  <Home>
    <h1>Welcome to Gatsby Ant Design UI: Starter</h1>
    <p>This project was built using the latest version of Gatsby 2, so don't worry about starter template incompatibilities (which a lot of the other Gatsby starters have)!</p>
    <p>I've demonstrated a few of the components below, but feel free to read the official Ant Design docs here: <a href="https://ant.design/">https://ant.design</a></p>
    <br />

    <h2>Here's some buttons:</h2>
    <Button style={{ margin: '5px' }} type="primary">Primary</Button>
    <Button style={{ margin: '5px' }}>Default</Button>
    <Button style={{ margin: '5px' }} type="dashed">Dashed</Button>
    <Button style={{ margin: '5px' }} type="danger">Danger</Button>
    <br />
    <Button style={{ margin: '5px' }} type="primary" shape="circle" icon="search" />
    <Button style={{ margin: '5px' }} type="primary" icon="search">Search</Button>
    <Button style={{ margin: '5px' }} shape="circle" icon="search" />
    <Button style={{ margin: '5px' }} icon="search">Search</Button>
    <br /><br /><br /><br />

    <h2>Here's some checkboxes:</h2>
    <CheckboxGroup options={options} defaultValue={['Pear']} onChange={() => { }} />
    <br /><br />
    <Switch defaultChecked style={{ marginRight: '20px' }} />
    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} />
    <br /><br />
    <Switch style={{ marginRight: '20px' }} />
    <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />
    <br /><br /><br /><br />

    <h2>Here's some cool forms:</h2>
    <Form style={{ marginTop: '10px' }}>
      <FormItem
        {...formItemLayout}
        label="Fail"
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input placeholder="unavailable choice" id="error" />
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Warning"
        validateStatus="warning"
      >
        <Input placeholder="Warning" id="warning" />
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Input placeholder="I'm the content is being validated" id="validating" />
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Success"
        hasFeedback
        validateStatus="success"
      >
        <Input placeholder="I'm the content" id="success" />
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Warning"
        hasFeedback
        validateStatus="warning"
      >
        <Input placeholder="Warning" id="warning" />
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Fail"
        hasFeedback
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <Input placeholder="unavailable choice" id="error" />
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Success"
        hasFeedback
        validateStatus="success"
      >
        <DatePicker style={{ width: '100%' }} />
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Warning"
        hasFeedback
        validateStatus="warning"
      >
        <TimePicker style={{ width: '100%' }} />
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Error"
        hasFeedback
        validateStatus="error"
      >
        <Select defaultValue="1">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select>
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <Cascader defaultValue={['1']} options={[]} />
      </FormItem>

      <FormItem
        label="inline"
        {...formItemLayout}
      >
        <Col span={11}>
          <FormItem validateStatus="error" help="Please select the correct date">
            <DatePicker />
          </FormItem>
        </Col>
        <Col span={2}>
          <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
            -
        </span>
        </Col>
        <Col span={11}>
          <FormItem>
            <DatePicker />
          </FormItem>
        </Col>
      </FormItem>

      <FormItem
        {...formItemLayout}
        label="Success"
        hasFeedback
        validateStatus="success"
      >
        <InputNumber style={{ width: '100%' }} />
      </FormItem>
    </Form>
    <Link to="/about">Go to /about/</Link>
  </Home>
)

export default IndexPage
