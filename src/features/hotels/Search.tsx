import * as React from 'react';
import { InjectedFormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../controls/Input';
import Button from '../../controls/Button';
import { SearchInput } from './types';

interface FormProps {
  handleSearch(searchInput: SearchInput): void;
}

interface FormValues {
  location: string;
}

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (
  props,
) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <div className="columns is-multiline is-gapless">
        <div className="column is-three-quarters">
          <div className="field">
            <div className="control">
              <Input
                id="location"
                name="location"
                type="text"
                placeholder="Location"
                data-testid="location-input"
                className="input is-large"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.location}
              />
            </div>
          </div>
        </div>
        <div className="column is-one-quarters">
          <Button
            label="Search"
            type="submit"
            data-testid="submit-search"
            className="button is-info is-large"
            disabled={props.isSubmitting}
          />
        </div>
        <div className="column is-half">
          {props.touched.location && props.errors.location &&
          <span data-testid="error-title" className="has-text-white">{props.errors.location}</span>}
        </div>
      </div>
    </div>
  </form>
);

export const Search = withFormik<FormProps, FormValues>({
  mapPropsToValues: () => ({ location: '' }),
  validationSchema: Yup.object().shape({
    location: Yup.string()
      .min(2, 'Please input 2 characters or less')
      .required('Please input location'),
    },
  ),
  handleSubmit: (values, { props, setSubmitting, resetForm } ) => {
    const searchInput: SearchInput = { location: values.location };
    props.handleSearch(searchInput);
    setSubmitting(false);
  },
})(InnerForm);

export default Search;