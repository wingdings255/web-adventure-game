const $ = function (id) { return document.getElementById(id); };

let theme;

function themeSW (theme) {
    theme = $('themeSwitch').innerHTML;
    if (theme === 'Dark') {
        theme = 'Light';
        $('themeSwitch').innerHTML = theme;
        $('b').classList.remove('Dark');
    } else if (theme === 'Light') {
        theme = 'Dark';
        $('themeSwitch').innerHTML = theme;
        $('b').classList.remove('Light');
    };
    $('b').classList.toggle(theme);
};

window.onload = function () {
    $('themeSwitch').onclick = function () { themeSW(theme); };
};
