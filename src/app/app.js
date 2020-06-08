class App {
    static start () {
        document.title = Env.get('PROJECT_NAME', 'Protein Now');
        const router = Router.createVueRouter()
        const app = (new Vue({router})).$mount('#app');
        return app;
    }
}
