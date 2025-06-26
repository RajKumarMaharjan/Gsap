document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        alert('Button clicked!');
    });
    console.log('DOM fully loaded and parsed');
})