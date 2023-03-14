import { useRouteError } from 'react-router-dom';
import './routes-css/error-page.scss'
import ukw_eeror from '../assets/UKWOUT.png'
export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="grid grid-cols-1 gap-2 place-items-center h-1/2">
      <h1 className="">O nie, mamy problem!</h1>
      <pre>{error.message}</pre>
      <p>
        <i>{error.status} {error.statusText || error.message}</i>
        <img src={ukw_eeror} />
        {error.status === 404  ? null  : null}
      </p>
    </div>
  );
}