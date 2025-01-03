import React, { useCallback } from 'react';
import { Control, Controller, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { MultiselectProps, NonCancelableCustomEvent, Multiselect } from '@cloudscape-design/components';
import { transformMultiselectOptionsToArray, mapSelectedOptionsWithOptions } from './utils';

export interface ControlledMultiselectProps<T extends FieldValues> extends Omit<MultiselectProps, 'selectedOptions'> {
  name: FieldPath<T>;
  control?: Control<T>;
  options?: MultiselectProps.Options;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
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
}: ControlledMultiselectProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (formOnBlur: () => void, e: NonCancelableCustomEvent<MultiselectProps.MultiselectChangeDetail>) => {
      formOnBlur();
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (formOnChange: (value: unknown) => void, e: NonCancelableCustomEvent<MultiselectProps.MultiselectChangeDetail>) => {
      formOnChange(transformMultiselectOptionsToArray(e.detail.selectedOptions));
      onChange?.(e);
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
      render={({ field: { ref, onChange, onBlur, value } }) => {
        return (
          <Multiselect
            ref={ref}
            options={options}
            onBlur={() => handleOnBlur.bind(null, onBlur)}
            onChange={handleOnChange.bind(null, onChange)}
            selectedOptions={mapSelectedOptionsWithOptions(options, value)}
            {...props}
          />
        );
      }}
    />
  );
};

export default CMultiselect;
