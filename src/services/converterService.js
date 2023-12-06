const moment = require('moment-timezone');

const convertTimeBR = (date) => {
    return moment(date).tz('America/Sao_Paulo').format('DD-MM-YYYY HH:mm:ss');
}

module.exports ={
    convertTimeBR
}