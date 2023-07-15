import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(2, 'Password is too short')
    .max(8, 'Password is too long'),
});

const initialValues = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form style={{ display: 'flex' }}>
        <label htmlFor="login">
          Login
          <Field type="email" name="login" />
          <ErrorMessage
            name="login"
            component="div"
            className="error-message"
          />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
