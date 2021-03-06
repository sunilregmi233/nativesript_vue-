// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import * as Kinvey from "kinvey-nativescript-sdk";

Kinvey.init({
    appKey: "kid_S1MTiqRmB",
    appSecret: "705797ee1e1b4b9b8b145e6222428469"
});

export default class BackendService {

    isLoggedIn() {
        return !!Kinvey.User.getActiveUser();
    }

    login(user) {
        return Kinvey.User.login(user.email, user.password);
    }

    logout() {
        return Kinvey.User.logout();
    }

    register(user) {
        return Kinvey.User.signup({ username: user.email, password: user.password });
    }
}

