import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-bottom: 45px;
`;

const Title = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  margin-bottom: 1em;
  align-self: flex-start;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledFormItem = styled.div`
  /* width: 250px; */
  margin-bottom: 0.5em;
  input {
    font-size: 16px;
    padding: 10px 14px;
  }
`;

const SubmitButton = styled.input`
  width: 100px;
  background-color: rgba(241, 247, 173, 1);
  border-color: #fff;
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.7s ease;

  &:hover {
    background-color: #222;
    color: #fff;
  }
`;

type TFormValues = {
  name?: string;
  status?: string;
  gender?: string;
  type?: string;
  species?: string;
};

export const FilterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      status: '',
      gender: '',
      type: '',
      species: '',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Filter by</Title>
      <ItemsWrapper>
        <StyledFormItem>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, ...other } }) => <input placeholder="Name" value={value || ''} {...other} />}
          />
        </StyledFormItem>

        <StyledFormItem>
          <Controller
            name="status"
            control={control}
            render={({ field: { value, ...other } }) => <input placeholder="Status" value={value || ''} {...other} />}
          />
        </StyledFormItem>

        <StyledFormItem>
          <Controller
            name="gender"
            control={control}
            render={({ field: { value, ...other } }) => <input placeholder="Gender" value={value || ''} {...other} />}
          />
        </StyledFormItem>

        <StyledFormItem>
          <Controller
            name="type"
            control={control}
            render={({ field: { value, ...other } }) => <input placeholder="Type" value={value || ''} {...other} />}
          />
        </StyledFormItem>

        <StyledFormItem>
          <Controller
            name="species"
            control={control}
            render={({ field: { value, ...other } }) => <input placeholder="Species" value={value || ''} {...other} />}
          />
        </StyledFormItem>
      </ItemsWrapper>

      <SubmitButton type="submit" value="Go" />
    </StyledForm>
  );
};
