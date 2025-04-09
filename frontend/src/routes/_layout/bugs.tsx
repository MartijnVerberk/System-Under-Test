import { createFileRoute } from "@tanstack/react-router";
import useAuth from "@/hooks/useAuth";

export const Route = createFileRoute("/_layout/bugs")({
  component: Bugs,
});

function Bugs() {
  const { user: currentUser } = useAuth();

  return (
    <>
      <h1>Bug management</h1>
      <p>Welcome to the bug management section!</p>
      {currentUser?.is_superuser && <p>You have access.</p>}
    </>
  );
}