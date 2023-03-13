import { useRouteError } from 'react-router-dom';
import './routes-css/error-page.scss'

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="grid grid-cols-1 gap-2 place-items-center h-1/2">
      <h1>Uh oh! An error occurred!</h1>
      <pre>{error.message}</pre>
      <p>
        <i>{error.status} {error.statusText || error.message}</i>
      </p>
    </div>
  );
}