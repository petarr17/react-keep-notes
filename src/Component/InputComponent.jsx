import React from "react";

export default function InputComponent({
  placeholder,
  data,
  name,
  value,
  handleChange,
  maxLength,
}) {
  return (
    <input
      type="text"
      maxLength={maxLength ? maxLength : ""}
      placeholder={placeholder}
      data={data}
      autoComplete="off"
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
}
