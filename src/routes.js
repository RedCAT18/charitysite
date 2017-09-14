import Index from './components/Index.vue';

const Register = resolve => require(['./components/User/Register.vue'], resolve);
const Login = resolve => require(['./components/User/Login.vue'], resolve);

export const routes = [
    { path: '/', component: Index, name : 'index'},
    { path: '/register', component: Register, name: 'register'},
    { path: '/login', component: Login, name: 'login'}
];
