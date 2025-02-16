import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export function useAuthGuard() {
  const { data: session } = useSession();

  const guardAction = (callback: () => void) => {
    if (!session) {
      signIn();
      return;
    }
    callback();
  };

  return { guardAction, isAuthenticated: !!session };
} 