import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { Input, InputProps, NonCancelableCustomEvent } from '@cloudscape-design/components';

export interface CInputProps<T extends FieldValues> extends Omit<InputProps, 'value'> {
  name: FieldPath<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

const CInput = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onBlur,
  onChange,
  ...props
}: CInputProps<TFieldValues>): React.ReactElement => {
  const handleOnBlur = useCallback(
    (event: NonCancelableCustomEvent<null>) => {
      onBlur?.(event);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (event: NonCancelableCustomEvent<InputProps.ChangeDetail>) => {
      onChange?.(event);
    },
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { ref, onBlur: formOnBlur, onChange: formOnChange, value } }) => (
        <Input
          ref={ref}
          name={name}
          value={value}
          onBlur={(e) => {
            formOnBlur();
            handleOnBlur(e);
          }}
          onChange={(e) => {
            formOnChange(e.detail.value);
            handleOnChange(e);
          }}
          {...props}
        />
      )}
    />
  );
};

export default CInput;
