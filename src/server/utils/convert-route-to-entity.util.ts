const mapping: Record<string, string> = {
  'access-rights': 'access_right',
  bookings: 'booking',
  cars: 'car',
  companies: 'company',
  invitations: 'invitation',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
