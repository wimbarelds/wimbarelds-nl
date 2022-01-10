import { Route } from 'vue-router';

const defaultMeta = {
  title: 'WimBarelds.nl',
  description: 'Wim Barelds is a frontend developer, a gamer, a nerd and a climber?',
};

const setDescription = (description: string) => {
  const metaDescription = document.querySelector<HTMLMetaElement>('meta[name=description]');
  if (metaDescription) metaDescription.content = description;
};

export const metaDataNavHook = (to: Route): void => {
  document.title = to.meta?.title || defaultMeta.title;
  setDescription(to.meta?.description || defaultMeta.description);
};
