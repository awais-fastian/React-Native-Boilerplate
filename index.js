import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './app/index';
import i18next from './app/I18next';

AppRegistry.registerComponent(appName, () => App);
