import * as yup from 'yup';

export const accessRightValidationSchema = yup.object().shape({
  access_level: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
