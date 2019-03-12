import axios from 'axios'


export const onLoginClick = (user, pass) => {
    return (dispatch) => {
        axios.get("http://localhost:1996/users", {
            params: {
                username: user,
                password: pass
            }
        }).then(res => { 
            if (res.data.length > 0) {
                console.log(res.data[0])

                const {id, username} = res.data[0]

                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: {id, username}
                })
            } else {
                console.log("Username dan password salah")
            }

        }).catch(err => {
            console.log("System Error")
        })
    }
}


export const onRegisterUser = (user,emayl,pass) => {
    return dispatch => {
        axios.get('http://localhost:1996/users', {
            params: {
                username: user
            }
        }).then(res => {
            if(res.data[0].length === 0){
                axios.post('http://localhost:1996/users', {
                    username: user,
                    email: emayl,
                    password: pass
                }).then(res => {
                    console.log("registrasi berhasil")
                })
            } else {
                dispatch({
                    type: 'AUTH_ERROR',
                    payload: 'Username has been taken'
                })
            }
        })







        
    }
}