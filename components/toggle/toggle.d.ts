import { default as React } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';
import { ToggleProps } from '@cloudscape-design/components';
export interface CToggleProps<T extends FieldValues> extends Omit<ToggleProps, 'checked'> {
    name: Path<T>;
    control: Control<T>;
}
declare const CToggle: <TFieldValues extends FieldValues>({ name, control, onChange, ...props }: CToggleProps<TFieldValues>) => React.JSX.Element;
export default CToggle;
