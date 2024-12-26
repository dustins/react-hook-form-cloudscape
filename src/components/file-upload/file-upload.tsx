import { FileUpload, FileUploadProps, NonCancelableCustomEvent } from '@cloudscape-design/components';
import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';

export interface ControlledFileUploadProps<T extends FieldValues> extends Omit<FileUploadProps, 'value'> {
  name: FieldPath<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

export const CFileUpload = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  ...props
}: ControlledFileUploadProps<TFieldValues>): React.ReactElement => {
  const generateFilesArray = (files: File[]) => {
    return files?.length ? files : [];
  };

  const handleOnChange = useCallback(
    (formOnChange: (files: File[]) => void, e: NonCancelableCustomEvent<FileUploadProps.ChangeDetail>) => {
      formOnChange(generateFilesArray(e.detail.value));
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
      render={({ field: { ref, onChange, value } }) => (
        <FileUpload
          ref={ref}
          value={generateFilesArray(value)}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
    />
  );
};

export default CFileUpload;
