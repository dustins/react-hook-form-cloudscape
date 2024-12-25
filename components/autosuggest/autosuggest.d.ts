import { default as React } from 'react';
import { Control, Path, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';
import { AutosuggestProps } from '@cloudscape-design/components';
export interface CAutosuggestProps<T extends FieldValues> extends Omit<AutosuggestProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
    defaultValue?: FieldPathValue<T, FieldPath<T>>;
    rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
    onBlur?: AutosuggestProps['onBlur'];
    onChange?: AutosuggestProps['onChange'];
}
export declare const CAutosuggest: <T extends FieldValues>({ name, control, defaultValue, rules, shouldUnregister, onBlur, onChange, ...props }: CAutosuggestProps<T>) => React.JSX.Element;
export default CAutosuggest;
