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
      <a href="/" className="text-4xl var StyleNavDisclosureButton inline-flex items-center justify-center rounded-md p-3 text-gray-400 bg-gray-800  hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white " >Powrót na stronę główną</a>
    </div>
  );
}