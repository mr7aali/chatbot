
'use server'

import { cookies } from 'next/headers'

export async function handleLogin(token: string) {

    cookies().set('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
    })

}

export async function getCookies(key: string) {
    const token = cookies().get(key)?.value;
    return token;
}