import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import styled from 'styled-components';

import { variables } from '../../styles/variables';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin-bottom: 45px;
`;

const Title = styled.h2`
  font-size: ${variables.fontSizes.fontM}px;
  text-transform: uppercase;
  margin-bottom: 1em;
  align-self: flex-start;

  @media screen and (max-width: 640px) {
    font-size: ${variables.fontSizes.fontS}px;
    align-self: auto;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.2em;
  margin-bottom: 20px;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    gap: 0.8em;
  }

  @media screen and (max-width: 500px) {
    gap: 0.5em;
  }
`;

const StyledFormItem = styled.div`
  margin-bottom: 0.5em;
  input {
    font-size: ${variables.fontSizes.fontXs}px;
    padding: 10px 14px;

    @media screen and (max-width: 500px) {
      font-size: ${variables.fontSizes.fontXss}px;
      padding: 8px 12px;
    }
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 0;
  }
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonCommonStyles = styled.button`
  background-color: ${variables.colors.background};
  border-color: #fff;
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #222;
    color: #fff;
  }

  @media screen and (max-width: 500px) {
    font-size: ${variables.fontSizes.fontXs}px;
    padding: 5px 8px;
  }
`;
const SubmitButton = styled(ButtonCommonStyles)`
  width: 100px;
`;

const ResetButton = styled(ButtonCommonStyles)`
  width: 150px;

  @media screen and (max-width: 500px) {
    width: 130px;
  }
`;

type TFormValues = {
  name?: string;
  status?: string;
  gender?: string;
  type?: string;
  species?: string;
};

type Props = {
  updateFilters: (data: any) => void;
  filterValues: TFormValues;
};

export const FilterForm = ({ updateFilters, filterValues }: Props) => {
  const { control, handleSubmit, reset } = useForm({
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
    updateFilters(data);
    console.log(filterValues);
  };

  const clearFilters = () => {
    reset();
    updateFilters({ name: '', status: '', gender: '', type: '', species: '' });
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
      <ButtonsWrapper>
        <ResetButton onClick={() => clearFilters()}>Clear filters</ResetButton>
        <SubmitButton type="submit">Go</SubmitButton>
      </ButtonsWrapper>
    </StyledForm>
  );
};
