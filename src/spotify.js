//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#


//endpointi ku kena me qu userin per me login mansej kur tkryhet loginin aj vjen nappin ton apet
export const authEndpoint = "https://accounts.spotify.com/authorize";
//kur tkthehet useri vjen nqit link
// const redirectUri = "http://localhost:3000/";
const redirectUri = "https://spotify-56d9a.web.app/";


const clientId = 'ad3ff0e00d574419b906dff7201be353';
//mi kallxu spotify qe me lon klonin ton mi bo krejt qito sene
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//%20 ose ascii code per space 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;
//once authenticated give me back a token(osht string)
//show dialog ta qet qat senin


// me marr tokenin qe na ka kthy spotify e marrum prej urls
//window.location.hash e gjen # ku o e masnej me spubstring e marrum krejt pjesen mas # e masnej e splitum per me marr veq tokenin jo najsen tjeter me reduce 

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            //accessToken=asdasdasddas&name=asd
            //parts=accessToken=asdasdasddas
            let parts = item.split("=");
            //parts[0]=accessToken
            initial[parts[0]] = decodeURIComponent(parts[1]);//=asdasdasddas

            return initial;
        }, {});
};