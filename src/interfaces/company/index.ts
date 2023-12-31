import { AccessRightInterface } from 'interfaces/access-right';
import { CarInterface } from 'interfaces/car';
import { InvitationInterface } from 'interfaces/invitation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  access_right?: AccessRightInterface[];
  car?: CarInterface[];
  invitation?: InvitationInterface[];
  user?: UserInterface;
  _count?: {
    access_right?: number;
    car?: number;
    invitation?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
