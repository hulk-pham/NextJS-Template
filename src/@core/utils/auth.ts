import { NextRequest } from 'next/server'

export function isAuthenticated(request: NextRequest) {
  const token = request.cookies.get('token')

  return !!token
}
