text_color_val = undefined;
text_bg_color = undefined;
text_font_family = undefined;

function update_text_color() {
    text_color_val = document.getElementById('textcolorpicker').value;
    document.getElementById('testing').style.color = text_color_val;
    console.log(text_color_val)
}

function update_background_color() {
    text_bg_color = document.getElementById('bgcolor').value;
    document.getElementById('testing').style = `background-color: ${text_bg_color};`;
    console.log(text_bg_color)
}    

function update_font_family() {
    text_font_family = document.getElementById('font_picker').value;
    document.getElementById('testing').style = `font-family: ${text_font_family};`;
    console.log(text_font_family)
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
Rubik Moonrocks
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