const configuration = {};
configuration.title = 'Ideas';
configuration.description = 'A Collection Of Good Ideas';
configuration.author = '@catpea';
configuration.generator = 'https://github.com/catpea';


configuration.navigation = [
    {
      name: 'Home',
      icon: 'house-door',
      text: 'Home Page',
      href: '/',
    }
];

configuration.network = [
  {
    name: 'Source',
    icon: 'code-slash',
    text: 'Source Code',
    href: 'https://github.com/catpea/peacekeeper',
  },
  {
    name: 'Bugs',
    icon: 'bug',
    text: 'Bug Repports',
    href: 'https://github.com/catpea/peacekeeper/issues',
  },
];

export {
  configuration,
};
