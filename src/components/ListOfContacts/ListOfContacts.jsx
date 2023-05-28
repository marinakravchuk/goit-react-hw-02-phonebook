import { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ListOfContacts extends Component {
  state = {};

  render() {
    const { onDeleteBtn, listToRender } = this.props;
    return (
      <div>
        <ul>
          {listToRender.map(({ id, name, number }) => {
            return (
              <Lishka key={id}>
                <span>
                  {name}: {number}
                </span>
                <NotUglyBtn type="button" onClick={() => onDeleteBtn(id)}>
                  Delete
                </NotUglyBtn>
              </Lishka>
            );
          })}
        </ul>
      </div>
    );
  }
}

const NotUglyBtn = styled.button`
  margin-left:15px;
  border-radius: 10%;
  border-color: black;
  background-color: transparent;

  :active {
    background-color: #e07474;
  }
`;

const Lishka = styled.li`
  display: flex;
  align-items: center;
`;

ListOfContacts.propTypes = {
  listToRender: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteBtn: PropTypes.func,
};

export default ListOfContacts;
