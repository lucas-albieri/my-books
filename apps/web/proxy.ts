import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtDecode } from 'jwt-decode'

const NON_AUTH_ROUTES = ['/entrar']

function decodeToken(token: string) {
    try {
        return jwtDecode(`${token}`)
    } catch (error) {
        return null
    }
}

export default function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname
    const token = request.cookies.get('token')

    const tokenData = decodeToken(`${token?.value}`)

    // denied non-auth routes
    // if (!NON_AUTH_ROUTES.includes(pathname) && !token) {
    //     return NextResponse.redirect(new URL('/entrar', request.nextUrl))
    // }

    // redirect logged users from root to dashboard
    // if (tokenData && pathname === '/') {
    //     return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    // }

    // if (tokenData && NON_AUTH_ROUTES.includes(pathname)) {
    //     return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
    // }

    return NextResponse.next()
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
