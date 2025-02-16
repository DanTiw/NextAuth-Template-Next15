"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function Home() {
    const { data: session } = useSession();
    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        if (session) {
            setIsSignedIn(true);
        }
    }, [session]);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                {isSignedIn ? (
                    <h1>Hello {session?.user?.name}</h1>
                ) : (
                    <h1>Sign in to see your name</h1>
                )}
                
            </div>
            {
                !isSignedIn && (
                    <>
                        <button className="bg-blue-500 text-white p-2 rounded-md m-4" onClick={() => signIn("github")}>Sign in with github</button>
                        <button className="bg-blue-500 text-white p-2 rounded-md m-4" onClick={() => signIn("google")}>Sign in with Google</button>
                    </>
                )
            }
            {
                isSignedIn && (
                    <button className="bg-red-500 text-white p-2 rounded-md m-4" onClick={() => signOut()}>Sign out</button>
                )
            }
            <Link href="/protected">Protected Page</Link>
            <Link href="/example">Example Page</Link>
        </div>
    )
}
