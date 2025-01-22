import React, { useCallback } from 'react';
import { Button, Form, FormField, SpaceBetween, Container, ContentLayout, Header } from '@cloudscape-design/components';
import { CInput, CTextarea } from 'react-hook-form-cloudscape';
import { useForm, get } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
});

// Form default values
const defaultValues = {
  name: '',
  description: '',
};

interface Props {
  onSubmit: (data: any) => void;
}

const FormBasic: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onHandleSubmit = useCallback(
    (data: any) => {
      onSubmit(data);
    },
    [onSubmit]
  );

  return (
    <ContentLayout
      header={
        <Header variant="h1" description="Basic form usage example">
          Basic form
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
              <FormField label="Name" errorText={get(errors, 'name.message')}>
                <CInput control={control} name="name" placeholder="Name" />
              </FormField>
              <FormField
                label={
                  <>
                    Description <i>- optional</i>
                  </>
                }
                errorText={get(errors, 'description.message')}
              >
                <CTextarea control={control} name="description" placeholder="Description" />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      </form>
    </ContentLayout>
  );
};

export default FormBasic;
