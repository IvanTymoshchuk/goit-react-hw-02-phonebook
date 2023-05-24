import React from 'react';
import { ListWrap, List, Paragraf } from './ContactList.styled';
import { Button } from 'components/FormList/FormList.styled';
import { UserDeleteOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return(
    <ListWrap>
    {contacts.map(({ id, name, number }) => (
      <List key={id}>
        <Paragraf>{name}</Paragraf>
        <Paragraf>{number}</Paragraf>
        <Button type="button" onClick={() => onDelete(id)}>
        <UserDeleteOutlined />
        </Button>
      </List>
    ))}
  </ListWrap>
  )
};


export default ContactList;
