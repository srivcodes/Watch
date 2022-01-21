import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const NewLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter email'),
      password: Yup.string().required('Please enter password')
    }),
    onSubmit: (values) => {
      setIsLoggedIn(true);
      console.log('logged in!');
      // formSubmit(values);
    }
  });

  const formSubmit = async ({
    email,
    password,
    from,
    setLoginError,
    setIsLoading,
    login
  }) => {
    setLoginError('');
    setIsLoading(true);

    const response = await login({ email, password, from });

    if (response?.status !== 200) {
      setLoginError(response?.data?.message || 'Please try again!');
      setIsLoading(false);
    }
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
    >
      <div className="field">
        <label htmlFor="email">Email Address</label>
        {formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        {formik.touched.email && formik.errors.email ? (
          <span className="error">{formik.errors.email}</span>
        ) : null}
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
      </div>
      <button type="submit" className="submit-btn">
        Login
      </button>
    </form>
  );
};
