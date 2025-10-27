import { useState } from "react";
import emailjs from "@emailjs/browser";
import { notification } from "antd";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: { (values: IValues): IValues }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const values = formState.values;
  const errors = validate(values);
  setFormState((prevState) => ({ ...prevState, errors }));

  try {
    // Only proceed if no validation errors
    if (Object.values(errors).every((error) => error === "")) {
      const serviceID = "service_f3irfcn";
      const templateID = "template_z3ps1r5"; // e.g., 'template_xxx'
      const publicKey = "lXgTr_HiZMAF0QPmD"; // e.g., 'user_xxx'

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, values as unknown as Record<string, unknown>, publicKey);

      // Reset form
      (event.target as HTMLFormElement).reset();
      setFormState(() => ({
        values: { ...initialValues },
        errors: { ...initialValues },
      }));

      notification.success({
        message: "Success",
        description: "Your message has been sent!",
      });
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    notification.error({
      message: "Error",
      description:
        "There was an error sending your message, please try again later.",
    });
  }
};

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values: formState.values,
    errors: formState.errors,
  };
};
