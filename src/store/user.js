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
        },
        update_state_avatar(state, avatar_url) {
            state.avatar_url = avatar_url;
        },
        logout(state) {
            state.id = "";
            state.username = "";
            state.avatar = "";
            state.description = "";
            state.is_login = false;
            state.token = "";
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
                    if (resp.state === "success") {
                        localStorage.setItem("jwt_token", resp.jwt_token)
                        ctx.commit("updateToken", resp.jwt_token);
                        data.success();
                    } else {
                        data.error();
                    }
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
        },

        logout(ctx) {
            localStorage.removeItem("jwt_token");
            ctx.commit("logout");
        },

        updateAvatar(ctx, data) {
            $.ajax({
                url: "http://127.0.0.1:8000/auth/updateAvatar/",
                type: "POST",
                headers: {
                    Authorization: "TOKEN " + ctx.state.token,
                },
                data: data.formData,
                processData: false,
                contentType: false,
                success(resp) {
                    if (resp.state === "success") {
                        ctx.commit("update_state_avatar", resp.avatar_url);
                        data.success(resp.avatar_url);
                    }
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