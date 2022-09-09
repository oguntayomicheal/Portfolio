const formInfo = document.querySelector('#form');

formInfo.addEventListener('change', (e) => {
    const details = {
        fullname : document.getElementById('saveName1').value,
        email : document.getElementById('saveEmail').value,
        comment : document.getElementById('saveComment').value,
    };
    localStorage.setItem('formDetails', JSON.stringify(details));
});

