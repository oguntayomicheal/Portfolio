const formInfo = document.querySelector('#form');

formInfo.addEventListener('change', (e) => {
    const details = {
        fullname : document.getElementById('saveName1').value,
        email : document.getElementById('saveEmail').value,
        comment : document.getElementById('saveComment').value,
    };
    localStorage.setItem('formDetails', JSON.stringify(details));
});

const getDetails = localStorage.getItem('formDetails');
const eachValue = JSON.parse(getDetails);
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('formDetails')){
        document.getElementById('saveName1').value = eachValue.fullname;
        document.getElementById('saveEmail').value = eachValue.email;
        document.getElementById('saveComment').value = eachValue.comment;
    }
});