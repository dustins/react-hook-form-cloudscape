import React, { useCallback } from 'react';
import { Control, Controller, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { Multiselect, MultiselectProps, NonCancelableCustomEvent } from '@cloudscape-design/components';
import MultiSelectUtils from './utils';

export interface CMultiselectProps<T extends FieldValues> extends Omit<MultiselectProps, 'selectedOptions'> {
  name: FieldPath<T>;
  control?: Control<T>;
  options: MultiselectProps.Options; // Changed to required
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
  onBlur?: MultiselectProps['onBlur'];
  onChange?: MultiselectProps['onChange'];
}

const CMultiselect = <TFieldValues extends FieldValues>({
  name,
  control,
  options,
  defaultValue,
  rules,
  onBlur,
  onChange,
  shouldUnregister = false,
  ...props
}: CMultiselectProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (event: NonCancelableCustomEvent<object>) => {
      onBlur?.(event);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (event: NonCancelableCustomEvent<MultiselectProps.MultiselectChangeDetail>) => {
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
        <Multiselect
          ref={ref}
          options={options}
          onBlur={(e) => {
            formOnBlur();
            handleOnBlur(e);
          }}
          onChange={(e) => {
            formOnChange(MultiSelectUtils.transformMultiselectOptionsToArray(e.detail.selectedOptions)); // Transform selectedOptions
            handleOnChange(e);
          }}
          selectedOptions={value} // Directly use value
          {...props}
        />
      )}
    />
  );
};

export default CMultiselect;
