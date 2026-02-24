text_color_val = undefined;
text_bg_color = undefined;
text_font_family = undefined;
text_size = undefined;
text_value = undefined;

console.log(document.getElementById('document_writing').value)

function update_text_color() {
    text_color_val = document.getElementById('textcolorpicker').value;
    document.getElementById('document_writing').style = ` font-size: ${document.getElementById('document_writing').style.fontSize}; font-family: ${document.getElementById('document_writing').style.fontFamily}; color: ${text_color_val}; background-color: ${document.getElementById('document_writing').style.backgroundColor};`
    console.log(text_color_val)
}

function update_background_color() {
    text_bg_color = document.getElementById('bgcolor').value;
    document.getElementById('document_writing').style = `background-color: ${text_bg_color}; font-size: ${document.getElementById('document_writing').style.fontSize}; color: ${document.getElementById('document_writing').style.color}; font-family: ${document.getElementById('document_writing').style.fontFamily};`;
    console.log(text_bg_color)
}

function update_font_family() {
    text_font_family = document.getElementById('font_picker').value;
    document.getElementById('document_writing').style = `font-family: ${text_font_family};background-color: ${document.getElementById('document_writing').style.backgroundColor}; font-size: ${document.getElementById('document_writing').style.fontSize}; color: ${document.getElementById('document_writing').style.color};`;
    console.log(text_font_family)
}

function update_text_size() {
    text_size = document.getElementById('txt_size').value;
    document.getElementById('document_writing').style = `font-size: ${text_size}px; background-color:  ${document.getElementById('document_writing').style.backgroundColor}; font-family: ${document.getElementById('document_writing').style.fontFamily}; color: ${document.getElementById('document_writing').style.color};`;
    console.log(text_size)
}

function showAllFonts() {
    alert(`Here Are Some of The Fonts (the rest will be shown after you press "ok"):
Alfa Slab One
Badeen Display
Ballet
Barriecito
Birthstone
Bungee Tint
Cherry Bomb One
Chocolate Classical Sans
DM Serif Text 
Faster One
Fleur De Leah
Freckle Face
Funnel Sans 
Galada
Google Sans Code 
Honk 
Instrument Serif 
Kablammo
Knewave
Merriweather 
Modak
Monsieur La Doulaise
Nabla`)

    alert(`
Oi
Orbitron 
Oxygen 
Pacifico
Red Hat Text 
Rock 3D
Rubik Glitch
Rubik MoonrocksHello, World 
Rubik Spray Paint
Sansation 
Sixtyfour Convergence
Sour Gummy 
Tac One
TikTok Sans 
Yellowtail
Zalando Sans Expanded 
Zalando Sans SemiExpanded
`)
}


function saveState() {
    text_value = document.getElementById('document_writing').value;
    console.log(document.getElementById('document_writing').value)
    if (text_bg_color === undefined && text_color_val === undefined && text_font_family === undefined && text_size === undefined && text_value === undefined) {
        alert('Nothing To Save!')
    } else {
        localStorage.setItem('DocTextBgColor', text_bg_color);
        localStorage.setItem('DocTextColor', text_color_val);
        localStorage.setItem('DocTextFont', text_font_family);
        localStorage.setItem('DocTextSize', text_size);
        localStorage.setItem('DocText', text_value)
    }
    console.log('bg color', localStorage.getItem('DocTextBgColor'), 'color', localStorage.getItem('DocTextColor'), 'font', localStorage.getItem('DocTextFont'), 'size', localStorage.getItem('DocTextSize'), 'val', localStorage.getItem('DocText'))
}

function loadState() {
    document.getElementById('document_writing').value = localStorage.getItem('DocText'); document.getElementById('document_writing').style = `color: ${localStorage.getItem('DocTextColor')}; background-color: ${localStorage.getItem('DocTextBgColor')}; font-family: ${localStorage.getItem('DocTextFont')}; font-size: ${localStorage.getItem('DocTextSize')}px;`
    document.getElementById('bgcolor').value = localStorage.getItem('DocTextBgColor');
    document.getElementById('textcolorpicker').value = localStorage.getItem('DocTextColor');
    document.getElementById('font_picker').value = localStorage.getItem('DocTextFont');
    document.getElementById('txt_size').value = localStorage.getItem('DocTextSize');
}

loadState();

console.log(localStorage.getItem('DocText'))
