import { S3ResourceSelectorProps, NonCancelableCustomEvent, S3ResourceSelector } from '@cloudscape-design/components';
import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, FieldPathValue, FieldPath, RegisterOptions } from 'react-hook-form';

export interface ControlledS3ResourceSelectorProps<T extends FieldValues>
  extends Omit<S3ResourceSelectorProps, 'resource'> {
  name: FieldPath<T>;
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  rules?: Omit<RegisterOptions<T, FieldPath<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
  shouldUnregister?: boolean;
}

export const CS3ResourceSelector = <TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister = false,
  onChange,
  ...props
}: ControlledS3ResourceSelectorProps<TFieldValues>): React.ReactElement => {
  const handleOnChange = useCallback(
    (
      formOnChange: (resource: S3ResourceSelectorProps.Resource) => void,
      e: NonCancelableCustomEvent<S3ResourceSelectorProps.ChangeDetail>
    ) => {
      formOnChange(e.detail.resource);
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
        <S3ResourceSelector
          ref={ref}
          resource={value ?? { uri: '' }}
          onChange={handleOnChange.bind(null, onChange)}
          {...props}
        />
      )}
    />
  );
};

export default CS3ResourceSelector;
