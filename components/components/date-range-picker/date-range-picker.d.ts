import { DateRangePickerProps } from '@cloudscape-design/components';
import React from 'react';
import { Control, Path, FieldValues } from 'react-hook-form';
export interface CDateRangePickerProps<T extends FieldValues> extends Omit<DateRangePickerProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}
declare const CDateRangePicker: <TFieldValues extends FieldValues>({ name, control, onBlur, onChange, ...props }: CDateRangePickerProps<TFieldValues>) => React.JSX.Element;
export default CDateRangePicker;
