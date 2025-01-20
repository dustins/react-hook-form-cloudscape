import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { NonCancelableCustomEvent, Slider, SliderProps } from '@cloudscape-design/components';

export interface CSliderProps<T extends FieldValues> extends Omit<SliderProps, 'value' | 'onChange'> {
  name: FieldPath<T>;
  control: Control<T>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  shouldUnregister?: boolean;
  onChange?: (event: NonCancelableCustomEvent<SliderProps.ChangeDetail>) => void;
}

const CSlider = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  ...props
}: CSliderProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (event: NonCancelableCustomEvent<SliderProps.ChangeDetail>) => {
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
      render={({ field: { onChange: formOnChange, value } }) => (
        <Slider
          value={value}
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

export default CSlider;
