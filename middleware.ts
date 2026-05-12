import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Simulação de verificação de token/cookie (ex: NextAuth ou JWT)
  const userToken = request.cookies.get('auth_token'); 
  const userRole = request.cookies.get('user_role')?.value; // 'admin' ou 'user'

  const isProtectedRoute = request.nextUrl.pathname.startsWith('/admin');

  if (isProtectedRoute) {
    // 1. Se não estiver logado, vai para o login
    if (!userToken) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }

    // 2. Se estiver logado mas NÃO for admin, volta para a home do usuário
    if (userRole !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // Protege todas as sub-rotas de admin
};