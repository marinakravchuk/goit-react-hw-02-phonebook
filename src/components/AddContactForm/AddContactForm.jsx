import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ButtonAddFriend, Title } from './AddContactForm.styled';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onSubmit(newContact);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Title>Name</Title>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInput}
        />
        <Title>Phone number</Title>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInput}
        />
        <ButtonAddFriend type="submit">Add contact</ButtonAddFriend>
      </form>
    );
  }
}

AddContactForm.propType = { onSubmit: PropTypes.func.isRequired };

export default AddContactForm;
