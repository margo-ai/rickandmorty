import React, { ChangeEvent } from "react";

import { SelectWrapper } from "./styledComponents";

type Props = {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ label, value, options, onChange }: Props) => {
  return (
    <SelectWrapper>
      <label htmlFor="select">{label}</label>
      <select id="select" value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </SelectWrapper>
  );
};
