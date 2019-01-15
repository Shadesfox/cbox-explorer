import axios from 'axios'
import FormData from 'form-data'

// Not yet used. In Rev0 only using the conversion from ER code.
function getUserCbox (userId) {
    return axios.get('https://new-chat.rpnetwork.org/api/cbox/' + userId, {
        withCredentials: true
    }).then(({data}) => {
        return data
    })
}

function convertERtoCbox (erData) {
    var form = new FormData()
    form.append('cbox',erData)
    var sendData = 'cbox=' + erData
    return axios.post('https://new-chat.rpnetwork.org/cgi-bin/ercode2json.pl', sendData, {
        withCredentials: false,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }).then(({data}) => {
        return data
    })
}

export default {
    getUserCbox,
    convertERtoCbox
}
