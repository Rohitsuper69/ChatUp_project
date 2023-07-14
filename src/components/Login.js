import React from 'react'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import * as firebase from 'firebase/app'
import {auth} from '../firebase'


const Login = () => {
  return (
    <div>
        <div id="login-page">
            <div id='login-card'>
                <h2>Welcome to ChatUp</h2>
                <div
                    className='login-button google'
                    onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined />
                    <span> Sign in with Google</span>
                </div>
                <br /><br />
                {/* <div
                    className='login-button facebook'
                >
                    <FacebookOutlined />
                    <span> Sign in with Facebook</span>
                </div> */}
                <br /><br />
            </div>
        </div>
    </div>
  )
}
export default Login
