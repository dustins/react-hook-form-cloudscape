import { DateRangePickerProps, DateRangePicker, NonCancelableCustomEvent } from '@cloudscape-design/components';
import React, { useCallback } from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';

export interface CDateRangePickerProps<T extends FieldValues> extends Omit<DateRangePickerProps, 'value'> {
  name: Path<T>;
  control?: Control<T>;
}

const CDateRangePicker = <TFieldValues extends FieldValues>({
  name,
  control,
  onBlur,
  onChange,
  ...props
}: CDateRangePickerProps<TFieldValues>) => {
  const handleOnBlur = useCallback(
    (event: NonCancelableCustomEvent<null>) => {
      onBlur?.(event);
    },
    [onBlur]
  );

  const handleOnChange = useCallback(
    (event: NonCancelableCustomEvent<DateRangePickerProps.ChangeDetail>) => {
      onChange?.(event);
    },
    [onChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onBlur: formOnBlur, onChange: formOnChange, value } }) => (
        <DateRangePicker
          ref={ref}
          value={value as DateRangePickerProps.Value}
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

export default CDateRangePicker;
