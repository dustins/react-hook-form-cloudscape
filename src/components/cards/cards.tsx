import { CardsProps, NonCancelableCustomEvent, Cards } from '@cloudscape-design/components';
import React, { useCallback } from 'react';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

export interface ControlledCardsProps<T extends FieldValues>
  extends Omit<
    Required<Pick<CardsProps, 'trackBy'>> & Required<Pick<CardsProps, 'selectionType'>> & CardsProps,
    'value'
  > {
  name: Path<T>;
  control?: Control<T>;
}

export const CCards = <TFieldValues extends FieldValues>({
  name,
  control,
  onSelectionChange,
  ...props
}: ControlledCardsProps<TFieldValues>) => {
  const handleOnChange = useCallback(
    (
      formOnChange: (selectedItems: TFieldValues[]) => void,
      e: NonCancelableCustomEvent<CardsProps.SelectionChangeDetail<TFieldValues>>
    ) => {
      formOnChange(e.detail.selectedItems);
      onSelectionChange?.(e);
    },
    [onSelectionChange]
  );

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Cards onSelectionChange={handleOnChange.bind(null, onChange)} selectedItems={value} {...props} />
      )}
    />
  );
};

export default CCards;
