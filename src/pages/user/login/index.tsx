import React, { Component } from "react";
import {Button, Form, Icon, Input} from "antd";
import {FormComponentProps} from "antd/es/form";

interface LoginProps extends FormComponentProps{}

class Login extends Component<LoginProps> {

  handleSubmit = (e) => {
    e.preventDefault();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />)}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>

        </Form>
      </div>
    )
  }
}

export default Form.create<LoginProps>({})(Login)
