// Router.set('/', 'home');
// Router.set('/', 'home', { middleware: ['auth'] });
// Router.set('/', 'home', { name: 'home' });
// Router.group({ prefix: 'users', middleware: ['auth']}, ({ set }) => {
//     set('password', 'home', { middleware: ['acl', 'auth'] });
// });

Router.set('/', 'home');
Router.set('/login', 'auth-page');

Router.set('*', '404');