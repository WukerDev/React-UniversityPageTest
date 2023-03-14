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
        
        {error.status === 404  ? null  : null}
        
      </p>
      <img src={ukw_eeror} />
      <a href="/" className="text-4xl text-sky-500 hover:text-sky-800" >Powrót na stronę główną</a>
    </div>
  );
}