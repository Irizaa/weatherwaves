const redirect_uri = "http://127.0.0.1:5501/index.html"
const client_id = "615be8ca71b842359f17802bf18e8b22"
const client_secret = "669e1a82648244f594f1969ef0b7df22"
const authorize = "https://accounts.spotify.com/authorize?"


function getAuth() {
    let url = authorize
    url+= "client_id=" + client_id
    url+= "&response_type=code"
    url+= "&redirect_uri=" + encodeURI(redirect_uri)
    url+= "&show_dialog=true"
    url += "&scope=user-read-private user-follow-read user-library-read playlist-modify-private playlist-read-collaborative playlist-read-private user-top-read playlist-modify-public user-read-recently-played"
    window.location.href = url
    document.getElementById("landingblock").style.display = "none";
}