/// ALKU ///
// Varaustunnus-asiakasmääreen siirto asiakkaan muokkausnäytöllä asiakkaan tiedot-nääkymään alapuolelle. Napin uudelleengenerointi
$(document).ready(function () {
    if (window.location.href.indexOf("members/memberentry.pl") > -1) {
        var holdidelem = $("[data-pa_code=HOLDID]");
        $("#identity_lgd").next().append(holdidelem);
        
        var holdid_textfield = holdidelem.children('textarea').eq(0);
        var clearbutton = holdidelem.find('.clear_attribute');
        
        //clearbutton.replaceWith( '<button type="button" class="fa fa-fw fa-trash fa-lg" style="color:green; border:none;">' );
        //var trashcan =  holdidelem.children('button').eq(0);
        
        clearbutton.on('click', function(e){
            e.preventDefault()
        holdid_textfield.val('');
        });
    }
});
/// LOPPU ///

//ALKU
// Varaustunnuksen automaattinen generointi. Kentän jälkeen lisätty kolme pistettä, josta muodostus tapahtuu. Uudelle asiakkaalle varaustunnus muodostuu automaattisesti kolmea pistettä painamatta.
$(document).ready(function () {
    if (window.location.pathname == '/cgi-bin/koha/members/memberentry.pl') {
        var unixepoch = Math.round((new Date()).getTime() / 10).toString();
        var epochdashed = unixepoch.replace(/(....)/g, '$1-').replace(/-$/, '');
        var holdidelem = $("[data-pa_code=HOLDID]");
        var holdid_textfield = holdidelem.children('textarea').eq(0);

        holdid_textfield.val(epochdashed);

        $('<a class="buttonDot" href="#" id="generate_holdid" title="Luo varaustunnus" style="vertical-align: top;"> ...</a>').insertAfter(holdid_textfield);
        $("#generate_holdid").click(function (event) {
            event.preventDefault();
            unixepoch = Math.round((new Date()).getTime() / 10).toString();
            epochdashed = unixepoch.replace(/(....)/g, '$1-').replace(/-$/, '');
            holdid_textfield.val(epochdashed);
            holdid_textfield.trigger('blur');
        });
    }
});

//LOPPU