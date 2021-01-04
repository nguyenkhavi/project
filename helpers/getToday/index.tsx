export default function getToday(){
    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = String(date.getFullYear());
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const Today = time + '-' + mm + '/' + dd + '/' + yyyy;
    return Today
}