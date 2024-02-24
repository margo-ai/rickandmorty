import React, { ChangeEvent, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { Select } from "../ui/Select";

import {
  ButtonsWrapper,
  ItemsWrapper,
  ResetButton,
  StyledForm,
  StyledFormItem,
  SubmitButton,
  Title,
} from "./styledComonents";

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

export const FiltersForm = ({ updateFilters }: Props) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      status: "",
      gender: "",
      type: "",
      species: "",
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    updateFilters(data);
  };

  const clearFilters = () => {
    reset();
    updateFilters({ name: "", status: "", gender: "", type: "", species: "" });
  };

  const genders = [
    { value: "", label: "" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "genderless", label: "Genderless" },
    { value: "unknown", label: "Unknown" },
  ];

  const statuses = [
    { value: "", label: "" },
    { value: "alive", label: "Alive" },
    { value: "dead", label: "Dead" },
    { value: "unknown", label: "Unknown" },
  ];

  const [gender, setGender] = useState(genders[0].value);
  const [status, setStatus] = useState(statuses[0].value);

  const handleChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };
  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Filter by</Title>
      <ItemsWrapper>
        <StyledFormItem>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, ...other } }) => <input placeholder="Name" value={value || ""} {...other} />}
          />
        </StyledFormItem>

        <StyledFormItem>
          <Controller
            name="type"
            control={control}
            render={({ field: { value, ...other } }) => <input placeholder="Type" value={value || ""} {...other} />}
          />
        </StyledFormItem>

        <StyledFormItem>
          <Controller
            name="species"
            control={control}
            render={({ field: { value, ...other } }) => <input placeholder="Species" value={value || ""} {...other} />}
          />
        </StyledFormItem>

        <StyledFormItem>
          <Controller
            name="gender"
            control={control}
            render={({ field: { value, ...other } }) => (
              <Select value={value} label="Gender" options={genders} onChange={handleChangeGender} {...other} />
            )}
          />
        </StyledFormItem>

        <StyledFormItem>
          <Controller
            name="status"
            control={control}
            render={({ field: { value, ...other } }) => (
              <Select value={value} label="Status" options={statuses} onChange={handleChangeStatus} {...other} />
            )}
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
