import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import {
  ButtonCommonStyles,
  ButtonsWrapper,
  ItemsWrapper,
  ResetButton,
  StyledForm,
  StyledFormItem,
  SubmitButton,
  Title,
} from './styledComonents';

type TFormValues = {
  name?: string;
  status?: string;
  gender?: string;
  type?: string;
  species?: string;
};

type Props = {
  updateFilters: (data: any) => void;
};

export const FilterForm = ({ updateFilters }: Props) => {
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
    updateFilters(data);
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
        <ResetButton type="button" onClick={() => clearFilters()} value="Clear filters" />
        <SubmitButton type="submit" value="Go" />
      </ButtonsWrapper>
    </StyledForm>
  );
};
