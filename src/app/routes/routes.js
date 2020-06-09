// Router.set('/', 'home');
// Router.set('/', 'home', { middleware: ['auth'] });
// Router.set('/', 'home', { name: 'home' });
// Router.group({ prefix: 'users', middleware: ['auth']}, ({ set }) => {
//     set('password', 'home', { middleware: ['acl', 'auth'] });
// });

Router.set('/', 'home');
// AUTH
Router.set('/login', 'auth-page',  { name: 'login' });
Router.set('/criar-conta', 'auth-page',  { name: 'create' });
Router.set('/entrar', 'auth-page',  { name: 'enter' });

Router.set('*', '404');