import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  invitee_email: yup.string().required(),
  inviter_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
