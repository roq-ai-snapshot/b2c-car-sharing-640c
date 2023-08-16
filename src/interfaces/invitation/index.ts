import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  status: string;
  invitee_email: string;
  inviter_id?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  invitee_email?: string;
  inviter_id?: string;
  company_id?: string;
}
