import { useRouteError } from 'react-router-dom';
import './routes-css/error-page.scss'
import ukw_error from '../assets/UKWOUT.png'
export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div className="gap-2 grid grid-cols-1 h-1/2 my-5">
      <div className="flex fl flex-col px-40 text-black dark:text-white text-2xl font-bold items-center py-5 mx-20 bg-violet-100 border-l-8 border-violet-700 dark:bg-zinc-800 dark:border-zinc-300 ">
      <img src={ukw_error} className=""/>
      <h1 className="">O nie, jesteśmy zgubieni!</h1>
      <pre>{error.message}</pre>
      <p>
        <i>{error.status}: {error.statusText || error.message}</i>
        
        {error.status === 404  ? null  : null}
        
      </p>
      
      
      </div>
      <a href="/" className="text-xl border-red-700 border-l-8 mx-20 bg-red-100 py-2 dark:bg-zinc-700 dark:border-zinc-300">Powrót na stronę główną</a>
    </div>
  );
}