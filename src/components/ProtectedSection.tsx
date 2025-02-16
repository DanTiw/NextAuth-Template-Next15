"use client";

import { useAuthGuard } from "@/hooks/useAuthGuard";

export function ProtectedSection({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const { isAuthenticated } = useAuthGuard();

  if (!isAuthenticated) {
    return fallback || (
      <div className="p-4 border rounded-md bg-gray-100">
        <p>Please sign in to view this content</p>
      </div>
    );
  }

  return <>{children}</>;
} 