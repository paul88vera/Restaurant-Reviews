import { useRouteError } from "react-router";

export default function ErrorMessage() {
  const error = useRouteError();
  return (
    <div>
      {import.meta.env.MODE !== "production" && (
        <>
          {error.message}
          {error.stack}
        </>
      )}
    </div>
  );
}
