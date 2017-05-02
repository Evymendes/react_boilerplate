import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
const req = require.context('../stories', true, /.js$/);

setAddon(infoAddon);

const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

configure(loadStories, module);
