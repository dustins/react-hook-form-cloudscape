import { default as React } from 'react';
import { Control, FieldValues, Path } from 'react-hook-form';
import { CodeEditorProps } from '@cloudscape-design/components';
export interface CCodeEditorProps<T extends FieldValues> extends Omit<CodeEditorProps, 'value'> {
    name: Path<T>;
    control?: Control<T>;
}
declare const CCodeEditor: <TFieldValues extends FieldValues>({ name, control, onChange, ...props }: CCodeEditorProps<TFieldValues>) => React.JSX.Element;
export default CCodeEditor;
