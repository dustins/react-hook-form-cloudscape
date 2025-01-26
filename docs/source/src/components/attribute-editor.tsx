import React from 'react';
import { Button, Form, FormField, SpaceBetween, Container, ContentLayout, Header } from '@cloudscape-design/components';
import { CAttributeEditor, CInput } from 'react-hook-form-cloudscape';

import { useForm, get, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  fieldName: yup.array().of(
    yup.object().shape({
      key: yup.string().required('Key is required'),
      value: yup.string().required('Value is required')
    })
  ).min(1, 'At least one item is required.').required(),
}).required();

const defaultValues = {
  fieldName: [{ key: '', value: '' }],
};

interface Props {
  onSubmit: (data: any) => void;
}

const AttributeEditor: React.FC<Props> = ({ onSubmit }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'fieldName',
  });

  const onHandleSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Attribute Editor component usage example">
          Attribute Editor
        </Header>
      }
    >
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <Form
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button formAction="none" onClick={() => reset()}>
                Reset
              </Button>
              <Button variant="primary">Submit</Button>
            </SpaceBetween>
          }
        >
          <Container>
            <SpaceBetween size="s">
              <FormField label="Input" errorText={get(errors, `fieldName.message`)}>
                <CAttributeEditor
                  control={control} // Pass the control prop
                  name="fieldName" // Pass the name of the field
                  onAddButtonClick={() => append({ key: '', value: '' })}
                  onRemoveButtonClick={({ detail: { itemIndex } }) => remove(itemIndex)}
                  addButtonText="Add new item"
                  definition={[
                    {
                      label: "Key",
                      control: (item, itemIndex) => (
                        <CInput
                          control={control}
                          name={`fieldName[${itemIndex}].key`}
                          placeholder="Enter key" />
                      )
                    },
                    {
                      label: "Value",
                      control: (item, itemIndex) => (
                        <CInput
                          control={control}
                          name={`fieldName[${itemIndex}].value`}
                          placeholder="Enter value" />
                      )
                    }
                  ]}
                  empty="No items associated with the resource."
                  defaultValue={undefined}
                />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>

  );
};

export default AttributeEditor;
