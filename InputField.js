import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 316px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-family: 'Alliance No.2', sans-serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #656565;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 16px;
  background: #353535;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  line-height: 20px;
  color: #ebebeb;
`;

const InputField = ({ label, placeholder }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </InputContainer>
  );
};
export default InputField;