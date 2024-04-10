import { useEffect, useState } from "react";
function Login () {
    
    const [accessToken, setAccessToken] = useState("")
    const handleLogin = () => {
        const CLIENT_ID = "852624947732-dkdop5l4ho4kn03njbsn2ouijgq17svo.apps.googleusercontent.com"
        const REDIRECT_URI = "http://localhost:3000/Main"
        const SCOPE = "https://mail.google.com/"
        const AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token`;
        window.location.href = AUTH_URL;
    };
    const getAccessToken = () => {
        const url = window.location.href
        const token = url.match(/access_token=([^&]+)/)
        localStorage.setItem("Token",token && token[1])
        console.log("Token is", localStorage.getItem("Token"))

    }
    useEffect(() => (
        getAccessToken()
    ), [])

    return (
        <>
          <div>
            {accessToken ? (
                <div>
                    <h1>Access token</h1>
                    <p>Access Token: {accessToken}</p>
                </div>) : (
                <>
                    <button onClick={handleLogin}>Sign In With Google</button>
                    {/* <button onClick={() => getEmailData()}> Get Emails</button>
                    <button onClick={() => fetchMail("18e462bcf161bc72")}> Fetch Emails</button> */}
                </>
            )
            }
        </div>
        </>
    )
}

export default Login