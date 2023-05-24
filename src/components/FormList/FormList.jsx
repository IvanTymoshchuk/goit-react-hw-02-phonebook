import React, { Component } from 'react';
import { UserAddOutlined } from '@ant-design/icons';

import { Form, Label, Input, Button, Span } from './FormList.styled';

class FormList extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = name => e => {
    const { target } = e;
    this.setState({
      [name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} autoComplete="off">
        <Label>
          <Span>Name</Span>
          <Input
            type="text"
            placeholder="Your name"
            name="name"
            value={name}
            onChange={this.handleChange('name')}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Span>Number</Span>
          <Input
            type="tel"
            placeholder="Your number"
            name="number"
            value={number}
            onChange={this.handleChange('number')}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add to contacts
        <UserAddOutlined /></Button>
      </Form>
    );
  }
}

export default FormList;
