"use client";

import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function ExamplePage() {
  const { guardAction } = useAuthGuard();

  const handleProtectedAction = () => {
    // This is the protected action
    console.log("Performing protected action");
  };

  return (
    <div>
      <h1>Public Content</h1>
      <p>Everyone can see this content</p>
      
      <button
        onClick={() => guardAction(handleProtectedAction)}
        className="bg-blue-500 text-white p-2 rounded-md m-4"
      >
        Protected Action
      </button>
    </div>
  );
} 