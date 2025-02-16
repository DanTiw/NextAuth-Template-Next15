"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function ProtectedPage() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (!session) {
        return (
            <div>
                You must be logged in to view this page.
               <br />
               <button>
                    <Link href="/">Home</Link>
                </button>
            </div>
        );

    }

    return (
        <div>
            <h1>Protected Page</h1>
            <p>Welcome, {session.user?.name}!</p>
            <Link href="/">Home</Link>
        </div>
    );
}