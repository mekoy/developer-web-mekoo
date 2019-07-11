export const reduxFormProps = {
    dirty: false,
    form: 'form-name',
    invalid: true,
    initialized: true,
    pristine: true,
    pure: true,
    submitFailed: false,
    submitSucceeded: false,
    valid: false,
    asyncValidate: () => {},
    autofill: () => {},
    blur: () => {},
    change: () => {},
    clearAsyncError: () => {},
    destroy: () => {},
    initialize: () => {},
    touch: () => {},
    submit: () => {},
    untouch: () => {},
    clearSubmit: () => {},
    anyTouched: false,
    submitting: false,
    touched: false,
    error: null,
    reset: () => {},
    onSaveResponse: Promise.resolve(),
    asyncValidating: false,
    handleSubmit: fn => fn,
  };
  
  export const intlProps = {
    intl: {
      formatMessage: val => (val && val.defaultMessage) ? val.defaultMessage : val,
      formatDate: () => {},
      formatTime: () => {},
      formatRelative: () => {},
      formatNumber: () => {},
      formatPlural: () => {},
      'formatHTMLMessage': () => {},
      now: () => {},
    },
  };
  
  
  // Use to test component with async life cycle methods
  // see https://github.com/airbnb/enzyme/issues/1587
  export const resolveAsyncMethods = async () => await new Promise(resolve => setImmediate(resolve));
  