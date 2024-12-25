import React from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';
import { TextFilterProps } from '@cloudscape-design/components';
export interface CTextFilterProps<T extends FieldValues> extends Omit<TextFilterProps, 'filteringText'> {
    name: Path<T>;
    control?: Control<T>;
}
declare const CTextFilter: <TFieldValues extends FieldValues>({ name, control, onChange, ...props }: CTextFilterProps<TFieldValues>) => React.JSX.Element;
export default CTextFilter;
