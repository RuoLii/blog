//  存储用户基本信息(用户名、密码、token 等)
import $ from 'jquery';

export default {
    state: {
        id: "",
        username: "",
        avatar: "",
        description: "",
        is_login: false,
        token: "",
    },
    getters: {

    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        },
        updateUser(state, resp) {
            state.username = resp.username;
            state.avatar = resp.avatar;
            state.description = resp.description;
            state.is_login = true;
        }
    },
    actions: {
        login(ctx, data){
            $.ajax({
                url: "http://127.0.0.1:8000/auth/login/",
                type: "POST",
                data: {
                    "username": data.username,
                    "password": data.password,
                },
                success(resp) {
                    localStorage.setItem("litoken", resp.litoken)
                    ctx.commit("updateToken", resp.litoken);
                    data.success();
                },
                error() {
                    data.error();
                }
            })
        },

        getMember(ctx, data) {
            $.ajax({
                url: "http://127.0.0.1:8000/getinfo/",
                type: "GET",
                headers: {
                    Authorization: "TOKEN " + ctx.state.token
                },
                success(resp) {
                    ctx.commit("updateUser", {
                        ...resp,
                        is_login: true,
                    });
                    data.success();
                },
                error() {
                    data.error();
                }
            })
        }

    },
    modules: {

    }
}