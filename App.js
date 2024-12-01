import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from './InputField';
import Modal from './Modal';

const Container = styled.div`
  position: relative;
  width: 1256px;
  height: 849px;
  background: #232323;
  border-radius: 12px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  position: absolute;
  width: 134px;
  height: 24px;
  left: 20px;
  top: 26px;
  font-family: 'Alliance No.2', sans-serif;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #bababa;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 4px;
  position: absolute;
  width: 131px;
  height: 36px;
  left: 1105px;
  top: 20px;
  background: #ff4d14;
  border-radius: 6px;
  color: #ffffff;
  font-family: 'Alliance No.2', sans-serif;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.4px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <Header>Rules Engine</Header>
    </Container>
    <Container>
      <InputField label="Rule Name" placeholder="Enter rule name" />
      <Button onClick={toggleModal}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Modal Title</h2>
        <p>Some content for the modal.</p>
        <Button onClick={toggleModal}>Close</Button>
      </Modal>
    </Container>
  );
};
export default App;