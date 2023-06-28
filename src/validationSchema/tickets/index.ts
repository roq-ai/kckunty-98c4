import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  status: yup.string().required(),
  event_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
