window.addEventListener('DOMContentLoaded', function() {
    var form   = document.getElementById('hire-me');
    var button = document.getElementById('submit-form');
    var status = document.getElementById('notification');

    function success() {
        form.reset();
        status.innerHTML = 'Thanks for contacting with me! I will be in touch with you ASAP.';
        status.classList = 'active';

        setTimeout(() => {
            status.classList = '';
        }, 5000);
    }

    function error() {
        status.innerHTML = 'Oops! There was a problem.';
        status.classList = 'active';

        setTimeout(() => {
            status.classList = '';
        }, 5000);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});


function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
