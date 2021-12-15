import React, { ChangeEventHandler } from "react"

type StyledTextInputProps = {
  name: string;
  id: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: any;
  required: boolean;
  placeholder: string;
  inputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
};

const StyledTextInput = ({ ...props }: StyledTextInputProps) => (
  <>
    <label className="" htmlFor={props.id}>{props.label} {props.required && '*'}</label><br />
    <input className="mt-2 mb-4 p-2 w-full transition focus:ring focus:ring-accent required:ring-secondary outline-none text-md rounded-xl" type="text" name={props.name} onChange={props.onChange} value={props.value} required={props.required} placeholder={props.placeholder} {...props.inputProps}></input>
  </>
)

export default StyledTextInput