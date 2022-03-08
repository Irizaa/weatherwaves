const redirect_uri = ""
const client_id = ""
const client_secret = ""
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
