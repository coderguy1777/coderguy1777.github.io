let githubProfile = document.getElementById("githubln");
let animationPage = document.getElementById("animationln");
let programmingPage = document.getElementById("programmingln");

githubProfile.addEventListener('click', function() {
    window.open('https://www.github.com/coderguy1777');
});

animationPage.addEventListener('click', function() {
    window.open('animation.html', '_self', false);
});

programmingPage.addEventListener('click', function() {
    window.open('programming.html', '_self', false);
});