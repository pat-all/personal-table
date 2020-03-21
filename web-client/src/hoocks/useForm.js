import { useState } from "react";

const useForm = initialState => {
  const [form, setForm] = useState(initialState);
  const resetForm = () => setForm(initialState);
  const changeFormHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return { form, changeFormHandler, resetForm };
};

export default useForm;
