const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const btn11 = document.getElementById("btn11");
const btn12 = document.getElementById("btn12");
const btn13 = document.getElementById("btn13");
const btn14 = document.getElementById("btn14");
const btn15 = document.getElementById("btn15");
const btn16 = document.getElementById("btn16");
const btn17 = document.getElementById("btn17");

const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16, btn17]

buttons.forEach(btn => {
    btn.style.backgroundImage = "url('https://www.hebe.pl/on/demandware.static/-/Library-Sites-HebeSharedLibrary/pl_PL/v1720742560624/landing-myhebe2/images/button_down.png')";
});

    

    const myInsertText1 = 'Ako my hebe STANDARD môžete naraz získať diamanty za každých 25 Kč utratených kartou my hebe v drogériách alebo po prihlásení na stránke hebe.pl, v aplikácii.';
    const myInsertText2 = 'Každý diamant je platný 365 dní od dátumu, kedy ste ho získali.';
    const myInsertText3 = 'Diamanty sa z vášho účtu strhnú v prípade zrušenia objednávky alebo vrátenia výrobku.';
    const myInsertText4 = 'Aktuálny počet a históriu diamantov si môžete skontrolovať na svojom účte my hebe po prihlásení v aplikácii a na stránke hebe.pl.';
    const myInsertText5 = 'Diamanty za nákupy sú pripísané do 24 hodín od uskutočnenia nákupu. V opačnom prípade nás prosím kontaktujte.';
    const myInsertText6 = 'Áno, diamanty za nákupy produktov Hebe Partner vám budú pripísané za každých 25 Kč, ktoré jednorazovo miniete svojou kartou my hebe v drogérii alebo po prihlásení na stránke hebe.pl, v aplikácii.';
    const myInsertText7 = 'Keď ako zákazník my hebe STANDARD nazbierate 20 diamantov, vymeníme vám ich za status my hebe VIP. Status my hebe VIP je platný 12 mesiacov od jeho získania.';
    const myInsertText8 = 'Ako zákazník my hebe STANDARD môžete naraz zbierať diamanty za každých 25 Kč, ktoré miniete s kartou my hebe. Získaním 20 diamantov sa nazbierané diamenty vymenia za status my hebe VIP.';
    const myInsertText9 = 'Keď získate status my hebe VIP, nakupujte a zbierajte diamanty, ktoré môžete vymeniť za poukážky. Čím viac diamantov nazbierate, tým viac výhod získate.';
    const myInsertText10 = 'Informácie o dostupných a aktívnych poukážkach nájdete po prihlásení do svojho účtu na stránke hebe.pl alebo v aplikácii v časti Moje poukážky.';
    const myInsertText11 = 'Každá zľavová poukážka má dátum platnosti, po jeho uplynutí ju nemôžete uplatniť a diamanty sa vám do vášho balíka nevrátia.';
    const myInsertText12 = 'V prípade vrátenia alebo zrušenia sa získané diamanty za nákupy odpočítajú z vášho balíka.';
    const myInsertText13 = 'Na uplatnenie kupónu v drogérii musíte predložiť svoju kartu my hebe. Pri nákupoch online sa musíte prihlásiť na stránke hebe.pl alebo v aplikácii, aby ste mohli poukážku uplatniť.';
    const myInsertText14 = 'Ak na vašom kupóne nie je uvedené, že ho možno uplatniť na výrobky Hebe Partner, znamená to, že kupón je pre danú ponuku vylúčený.';
    const myInsertText15 = 'Počas jednej transakcie nemôžete kombinovať žiadne kupóny na stránke hebe.pl ani v kamenných predajniach. Platí pravidlo 1 transakcia = 1 kupón.';
    const myInsertText16 = 'Aby ste si mohli predĺžiť svoj status my hebe VIP, musíte počas 12 mesiacov nazbierať 20 diamantov. Keď nazbierate celú sumu, váš status my hebe VIP sa predĺži o ďalších 12 mesiacov.';
    const myInsertText17 = 'Predĺženie vášho statusu my hebe VIP neuberá diamanty z vášho účtu.';

    function toggleAnswears(button, answearPlace, answearText) {
        // const isMobile = window.innerWidth <= 600
        if (answearPlace.innerHTML === answearText) {
            answearPlace.innerHTML = '';
            button.style.backgroundImage = "url('https://www.hebe.pl/on/demandware.static/-/Library-Sites-HebeSharedLibrary/pl_PL/v1720742560624/landing-myhebe2/images/button_down.png')"
        } else {
            answearPlace.innerHTML = answearText;
            button.style.backgroundImage = "url('https://www.hebe.pl/on/demandware.static/-/Library-Sites-HebeSharedLibrary/pl_PL/v1720742560624/landing-myhebe2/images/button_up.png')"
        }
    }
    

function btn1Click(){
    const answear1Place = document.getElementById("answear1");
    const answear1Text = myInsertText1;

    toggleAnswears(btn1, answear1Place, answear1Text);
}

function btn2Click(){
    const answear2Place = document.getElementById("answear2");
    const answear2Text = myInsertText2;

    toggleAnswears(btn2, answear2Place, answear2Text);
}

function btn3Click(){
    const answear3Place = document.getElementById("answear3");
    const answear3Text = myInsertText3;

    toggleAnswears(btn3, answear3Place, answear3Text);
}

function btn4Click(){
    const answear4Place = document.getElementById("answear4");
    const answear4Text = myInsertText4;

    toggleAnswears(btn4, answear4Place, answear4Text);
}

function btn5Click(){
    const answear5Place = document.getElementById("answear5");
    const answear5Text = myInsertText5;

    toggleAnswears(btn5, answear5Place, answear5Text);
}

function btn6Click(){
    const answear6Place = document.getElementById("answear6");
    const answear6Text = myInsertText6;

    toggleAnswears(btn6, answear6Place, answear6Text);
}

function btn7Click(){
    const answear7Place = document.getElementById("answear7");
    const answear7Text = myInsertText7;

    toggleAnswears(btn7, answear7Place, answear7Text);
}

function btn8Click(){
    const answear8Place = document.getElementById("answear8");
    const answear8Text = myInsertText8;

    toggleAnswears(btn8, answear8Place, answear8Text);
}

function btn9Click(){
    const answear9Place = document.getElementById("answear9");
    const answear9Text = myInsertText9;

    toggleAnswears(btn9, answear9Place, answear9Text);
}

function btn10Click(){
    const answear10Place = document.getElementById("answear10");
    const answear10Text = myInsertText10;

    toggleAnswears(btn10, answear10Place, answear10Text);
}

function btn11Click(){
    const answear11Place = document.getElementById("answear11");
    const answear11Text = myInsertText11;

    toggleAnswears(btn11, answear11Place, answear11Text);
}

function btn12Click(){
    const answear12Place = document.getElementById("answear12");
    const answear12Text = myInsertText12;

    toggleAnswears(btn12, answear12Place, answear12Text);
}

function btn13Click(){
    const answear13Place = document.getElementById("answear13");
    const answear13Text = myInsertText13;

    toggleAnswears(btn13, answear13Place, answear13Text);
}

function btn14Click(){
    const answear14Place = document.getElementById("answear14");
    const answear14Text = myInsertText14;

    toggleAnswears(btn14, answear14Place, answear14Text);
}

function btn15Click(){
    const answear15Place = document.getElementById("answear15");
    const answear15Text = myInsertText15;

    toggleAnswears(btn15, answear15Place, answear15Text);
}

function btn16Click(){
    const answear16Place = document.getElementById("answear16");
    const answear16Text = myInsertText16;

    toggleAnswears(btn16, answear16Place, answear16Text);
}

function btn17Click(){
    const answear17Place = document.getElementById("answear17");
    const answear17Text = myInsertText17;

    toggleAnswears(btn17, answear17Place, answear17Text);
}