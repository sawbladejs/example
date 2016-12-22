import { bootstrap } from 'sawblade';
import HashUrlProvider from 'sawblade-hash';
import routes from './routes';
import App from './App';

bootstrap(new App({ target: document.getElementById('app') }), routes, new HashUrlProvider());
