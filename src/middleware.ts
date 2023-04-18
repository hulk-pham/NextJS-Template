import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { isAuthenticated } from './@core/utils/auth'

export function middleware(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.redirect(new URL('/pages/login/', request.url))
  }
}

export const config = {
  matcher: '/account-settings/'
}
