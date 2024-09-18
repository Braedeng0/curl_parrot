const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;

app.get('/', (req, res) => {
	res.redirect('https://github.com/Braedeng0/curl_parrot');
});

app.get('/help', (req, res) => {
	res.sendFile(__dirname + '/README.md');
});

function parrotRequest(parrot, req, res) {
    let filename = parrot;

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let fps = 15;
    let frameDuration = 1000 / fps;

    // Load the gif from the file  
    file = fs.readFileSync(`processed_gifs/${filename}.txt`, 'utf8');
    let frames = file.split('=====================');

    let counter = 0;
    res.write('\u001b[?25l'); // Hide cursor
    res.write('\x1b[2J'); // Clear screen

    const intervalId = setInterval(() => {
        if (res.writableEnded) {
            clearInterval(intervalId);
            return;
        }

        res.write('\x1b[H');
        res.write(frames[counter]);

        counter++;
        if (counter >= frames.length-1) {
            counter = 0;
        }
    }, frameDuration);

    req.on('close', () => {
        clearInterval(intervalId);
        if (!res.writableEnded) {
            res.write('\x1b[2J'); // Clear screen
            res.write('\u001b[?25h'); // Show cursor
            res.end();
        }
    });
}

app.get('/balconyparrot', (req, res) => {
	parrotRequest('parrots 2/balconyparrot', req, res)
});

app.get('/explodyparrot', (req, res) => {
	parrotRequest('parrots 2/explodyparrot', req, res)
});

app.get('/jumpingparrot', (req, res) => {
	parrotRequest('parrots 2/jumpingparrot', req, res)
});

app.get('/uparrowparrot', (req, res) => {
	parrotRequest('parrots 2/uparrowparrot', req, res)
});

app.get('/vaccineparrot', (req, res) => {
	parrotRequest('parrots 2/vaccineparrot', req, res)
});

app.get('/schnitzelparrot', (req, res) => {
	parrotRequest('parrots 2/schnitzelparrot', req, res)
});

app.get('/wave3parrot', (req, res) => {
	parrotRequest('parrots 2/wave3parrot', req, res)
});

app.get('/halalparrot', (req, res) => {
	parrotRequest('parrots 2/halalparrot', req, res)
});

app.get('/chillparrot', (req, res) => {
	parrotRequest('parrots 2/chillparrot', req, res)
});

app.get('/rythmicalparrot', (req, res) => {
	parrotRequest('parrots 2/rythmicalparrot', req, res)
});

app.get('/bluntparrot', (req, res) => {
	parrotRequest('parrots 2/bluntparrot', req, res)
});

app.get('/flyingmoneyparrot', (req, res) => {
	parrotRequest('parrots 2/flyingmoneyparrot', req, res)
});

app.get('/biparrot', (req, res) => {
	parrotRequest('parrots 2/biparrot', req, res)
});

app.get('/portalorangeparrot', (req, res) => {
	parrotRequest('parrots 2/portalorangeparrot', req, res)
});

app.get('/hypnoparrotdark', (req, res) => {
	parrotRequest('parrots 2/hypnoparrotdark', req, res)
});

app.get('/vacationparrot', (req, res) => {
	parrotRequest('parrots 2/vacationparrot', req, res)
});

app.get('/gothparrot', (req, res) => {
	parrotRequest('parrots 2/gothparrot', req, res)
});

app.get('/dizzyparrot', (req, res) => {
	parrotRequest('parrots 2/dizzyparrot', req, res)
});

app.get('/vikingparrot', (req, res) => {
	parrotRequest('parrots 2/vikingparrot', req, res)
});

app.get('/drupal_parrot', (req, res) => {
	parrotRequest('parrots 2/drupal_parrot', req, res)
});

app.get('/docparrot', (req, res) => {
	parrotRequest('parrots 2/docparrot', req, res)
});

app.get('/boredparrot', (req, res) => {
	parrotRequest('parrots 2/boredparrot', req, res)
});

app.get('/picassoparrot', (req, res) => {
	parrotRequest('parrots 2/picassoparrot', req, res)
});

app.get('/darkbeerparrot', (req, res) => {
	parrotRequest('parrots 2/darkbeerparrot', req, res)
});

app.get('/jumpingparrotjr', (req, res) => {
	parrotRequest('parrots 2/jumpingparrotjr', req, res)
});

app.get('/staytfhomeparrot', (req, res) => {
	parrotRequest('parrots 2/staytfhomeparrot', req, res)
});

app.get('/pumpkinparrot', (req, res) => {
	parrotRequest('parrots 2/pumpkinparrot', req, res)
});

app.get('/loveparrot', (req, res) => {
	parrotRequest('parrots 2/loveparrot', req, res)
});

app.get('/icecreamparrot', (req, res) => {
	parrotRequest('parrots 2/icecreamparrot', req, res)
});

app.get('/quadparrot', (req, res) => {
	parrotRequest('parrots 2/quadparrot', req, res)
});

app.get('/kindasusparrot', (req, res) => {
	parrotRequest('parrots 2/kindasusparrot', req, res)
});

app.get('/slomoparrot', (req, res) => {
	parrotRequest('parrots 2/slomoparrot', req, res)
});

app.get('/shuffleparrot', (req, res) => {
	parrotRequest('parrots 2/shuffleparrot', req, res)
});

app.get('/angryparrot', (req, res) => {
	parrotRequest('parrots 2/angryparrot', req, res)
});

app.get('/playcatchleftparrot', (req, res) => {
	parrotRequest('parrots 2/playcatchleftparrot', req, res)
});

app.get('/sithparrot', (req, res) => {
	parrotRequest('parrots 2/sithparrot', req, res)
});

app.get('/frenchparrot', (req, res) => {
	parrotRequest('parrots 2/frenchparrot', req, res)
});

app.get('/fastparrot', (req, res) => {
	parrotRequest('parrots 2/fastparrot', req, res)
});

app.get('/bootlegparrot', (req, res) => {
	parrotRequest('parrots 2/bootlegparrot', req, res)
});

app.get('/deployparrot', (req, res) => {
	parrotRequest('parrots 2/deployparrot', req, res)
});

app.get('/bananaparrot', (req, res) => {
	parrotRequest('parrots 2/bananaparrot', req, res)
});

app.get('/pokeparrot', (req, res) => {
	parrotRequest('parrots 2/pokeparrot', req, res)
});

app.get('/aussieparrot', (req, res) => {
	parrotRequest('parrots 2/aussieparrot', req, res)
});

app.get('/levitationparrot', (req, res) => {
	parrotRequest('parrots 2/levitationparrot', req, res)
});

app.get('/harpoparrot', (req, res) => {
	parrotRequest('parrots 2/harpoparrot', req, res)
});

app.get('/imposterparrot', (req, res) => {
	parrotRequest('parrots 2/imposterparrot', req, res)
});

app.get('/croissantparrot', (req, res) => {
	parrotRequest('parrots 2/croissantparrot', req, res)
});

app.get('/papalparrot', (req, res) => {
	parrotRequest('parrots 2/papalparrot', req, res)
});

app.get('/congaparrot', (req, res) => {
	parrotRequest('parrots 2/congaparrot', req, res)
});

app.get('/sadparrot', (req, res) => {
	parrotRequest('parrots 2/sadparrot', req, res)
});

app.get('/partyparrot', (req, res) => {
	parrotRequest('parrots 2/partyparrot', req, res)
});

app.get('/daftpunkparrot', (req, res) => {
	parrotRequest('parrots 2/daftpunkparrot', req, res)
});

app.get('/shufflepartyparrot', (req, res) => {
	parrotRequest('parrots 2/shufflepartyparrot', req, res)
});

app.get('/boomparrot', (req, res) => {
	parrotRequest('parrots 2/boomparrot', req, res)
});

app.get('/redenvelopeparrot', (req, res) => {
	parrotRequest('parrots 2/redenvelopeparrot', req, res)
});

app.get('/fidgetparrot', (req, res) => {
	parrotRequest('parrots 2/fidgetparrot', req, res)
});

app.get('/wave5parrot', (req, res) => {
	parrotRequest('parrots 2/wave5parrot', req, res)
});

app.get('/astronautparrot', (req, res) => {
	parrotRequest('parrots 2/astronautparrot', req, res)
});

app.get('/originalparrot', (req, res) => {
	parrotRequest('parrots 2/originalparrot', req, res)
});

app.get('/scienceparrot', (req, res) => {
	parrotRequest('parrots 2/scienceparrot', req, res)
});

app.get('/standupparrot', (req, res) => {
	parrotRequest('parrots 2/standupparrot', req, res)
});

app.get('/horizontalparrot', (req, res) => {
	parrotRequest('parrots 2/horizontalparrot', req, res)
});

app.get('/vueparrot', (req, res) => {
	parrotRequest('parrots 2/vueparrot', req, res)
});

app.get('/innersourceparrot', (req, res) => {
	parrotRequest('parrots 2/innersourceparrot', req, res)
});

app.get('/opensourceparrot', (req, res) => {
	parrotRequest('parrots 2/opensourceparrot', req, res)
});

app.get('/maskparrot', (req, res) => {
	parrotRequest('parrots 2/maskparrot', req, res)
});

app.get('/sintparrot', (req, res) => {
	parrotRequest('parrots 2/sintparrot', req, res)
});

app.get('/ceilingparrot', (req, res) => {
	parrotRequest('parrots 2/ceilingparrot', req, res)
});

app.get('/headbangingparrot', (req, res) => {
	parrotRequest('parrots 2/headbangingparrot', req, res)
});

app.get('/middleparrot', (req, res) => {
	parrotRequest('parrots 2/middleparrot', req, res)
});

app.get('/wave8parrot', (req, res) => {
	parrotRequest('parrots 2/wave8parrot', req, res)
});

app.get('/nodeparrot', (req, res) => {
	parrotRequest('parrots 2/nodeparrot', req, res)
});

app.get('/hanamiparrot', (req, res) => {
	parrotRequest('parrots 2/hanamiparrot', req, res)
});

app.get('/wave2parrot', (req, res) => {
	parrotRequest('parrots 2/wave2parrot', req, res)
});

app.get('/upvoteparrot', (req, res) => {
	parrotRequest('parrots 2/upvoteparrot', req, res)
});

app.get('/stayhomeparrotwindow', (req, res) => {
	parrotRequest('parrots 2/stayhomeparrotwindow', req, res)
});

app.get('/raceconditionparrot', (req, res) => {
	parrotRequest('parrots 2/raceconditionparrot', req, res)
});

app.get('/gentlemanparrot', (req, res) => {
	parrotRequest('parrots 2/gentlemanparrot', req, res)
});

app.get('/sherlockholmesparrot', (req, res) => {
	parrotRequest('parrots 2/sherlockholmesparrot', req, res)
});

app.get('/sushiparrot', (req, res) => {
	parrotRequest('parrots 2/sushiparrot', req, res)
});

app.get('/tiedyeparrot', (req, res) => {
	parrotRequest('parrots 2/tiedyeparrot', req, res)
});

app.get('/sleepingparrot', (req, res) => {
	parrotRequest('parrots 2/sleepingparrot', req, res)
});

app.get('/blondesassyparrot', (req, res) => {
	parrotRequest('parrots 2/blondesassyparrot', req, res)
});

app.get('/tacoparrot', (req, res) => {
	parrotRequest('parrots 2/tacoparrot', req, res)
});

app.get('/dealwithitparrot', (req, res) => {
	parrotRequest('parrots 2/dealwithitparrot', req, res)
});

app.get('/margaritaparrot', (req, res) => {
	parrotRequest('parrots 2/margaritaparrot', req, res)
});

app.get('/redbullparrot', (req, res) => {
	parrotRequest('parrots 2/redbullparrot', req, res)
});

app.get('/reverseportalblueparrot', (req, res) => {
	parrotRequest('parrots 2/reverseportalblueparrot', req, res)
});

app.get('/headsetparrot', (req, res) => {
	parrotRequest('parrots 2/headsetparrot', req, res)
});

app.get('/mergeimmediatelyparrot', (req, res) => {
	parrotRequest('parrots 2/mergeimmediatelyparrot', req, res)
});

app.get('/tripletsparrot', (req, res) => {
	parrotRequest('parrots 2/tripletsparrot', req, res)
});

app.get('/laptop_parrot', (req, res) => {
	parrotRequest('parrots 2/laptop_parrot', req, res)
});

app.get('/exceptionallyfastparrot', (req, res) => {
	parrotRequest('parrots 2/exceptionallyfastparrot', req, res)
});

app.get('/mergetrainparrot', (req, res) => {
	parrotRequest('parrots 2/mergetrainparrot', req, res)
});

app.get('/brazilianfanparrot', (req, res) => {
	parrotRequest('parrots 2/brazilianfanparrot', req, res)
});

app.get('/beerparrot', (req, res) => {
	parrotRequest('parrots 2/beerparrot', req, res)
});

app.get('/wendyparrot', (req, res) => {
	parrotRequest('parrots 2/wendyparrot', req, res)
});

app.get('/skiparrot', (req, res) => {
	parrotRequest('parrots 2/skiparrot', req, res)
});

app.get('/wineparrot', (req, res) => {
	parrotRequest('parrots 2/wineparrot', req, res)
});

app.get('/fasttwinsparrot', (req, res) => {
	parrotRequest('parrots 2/fasttwinsparrot', req, res)
});

app.get('/shipitparrot', (req, res) => {
	parrotRequest('parrots 2/shipitparrot', req, res)
});

app.get('/backwardsparrot', (req, res) => {
	parrotRequest('parrots 2/backwardsparrot', req, res)
});

app.get('/ryangoslingparrot', (req, res) => {
	parrotRequest('parrots 2/ryangoslingparrot', req, res)
});

app.get('/aussiereversecongaparrot', (req, res) => {
	parrotRequest('parrots 2/aussiereversecongaparrot', req, res)
});

app.get('/databaseparrot', (req, res) => {
	parrotRequest('parrots 2/databaseparrot', req, res)
});

app.get('/yosemitesamparrot', (req, res) => {
	parrotRequest('parrots 2/yosemitesamparrot', req, res)
});

app.get('/slowparrot', (req, res) => {
	parrotRequest('parrots 2/slowparrot', req, res)
});

app.get('/bobaparrot', (req, res) => {
	parrotRequest('parrots 2/bobaparrot', req, res)
});

app.get('/confusedparrot', (req, res) => {
	parrotRequest('parrots 2/confusedparrot', req, res)
});

app.get('/wave4parrot', (req, res) => {
	parrotRequest('parrots 2/wave4parrot', req, res)
});

app.get('/footballparrot', (req, res) => {
	parrotRequest('parrots 2/footballparrot', req, res)
});

app.get('/congapartyparrot', (req, res) => {
	parrotRequest('parrots 2/congapartyparrot', req, res)
});

app.get('/coffeeparrot', (req, res) => {
	parrotRequest('parrots 2/coffeeparrot', req, res)
});

app.get('/bobrossparrot', (req, res) => {
	parrotRequest('parrots 2/bobrossparrot', req, res)
});

app.get('/accessibleparrot', (req, res) => {
	parrotRequest('parrots 2/accessibleparrot', req, res)
});

app.get('/portalblueparrot', (req, res) => {
	parrotRequest('parrots 2/portalblueparrot', req, res)
});

app.get('/braveheartparrot', (req, res) => {
	parrotRequest('parrots 2/braveheartparrot', req, res)
});

app.get('/maracasparrot', (req, res) => {
	parrotRequest('parrots 2/maracasparrot', req, res)
});

app.get('/temporaltableparrot', (req, res) => {
	parrotRequest('parrots 2/temporaltableparrot', req, res)
});

app.get('/wave9parrot', (req, res) => {
	parrotRequest('parrots 2/wave9parrot', req, res)
});

app.get('/moonparrot', (req, res) => {
	parrotRequest('parrots 2/moonparrot', req, res)
});

app.get('/norwegianblueparrot', (req, res) => {
	parrotRequest('parrots 2/norwegianblueparrot', req, res)
});

app.get('/portalparrot', (req, res) => {
	parrotRequest('parrots 2/portalparrot', req, res)
});

app.get('/tinfoilhatparrot', (req, res) => {
	parrotRequest('parrots 2/tinfoilhatparrot', req, res)
});

app.get('/krakenparrot', (req, res) => {
	parrotRequest('parrots 2/krakenparrot', req, res)
});

app.get('/christmasparrot', (req, res) => {
	parrotRequest('parrots 2/christmasparrot', req, res)
});

app.get('/luckyparrot', (req, res) => {
	parrotRequest('parrots 2/luckyparrot', req, res)
});

app.get('/covid19parrot', (req, res) => {
	parrotRequest('parrots 2/covid19parrot', req, res)
});

app.get('/tpparrot', (req, res) => {
	parrotRequest('parrots 2/tpparrot', req, res)
});

app.get('/pythonparrot', (req, res) => {
	parrotRequest('parrots 2/pythonparrot', req, res)
});

app.get('/popcornparrot', (req, res) => {
	parrotRequest('parrots 2/popcornparrot', req, res)
});

app.get('/parrot', (req, res) => {
	parrotRequest('parrots 2/parrot', req, res)
});

app.get('/shufflefurtherparrot', (req, res) => {
	parrotRequest('parrots 2/shufflefurtherparrot', req, res)
});

app.get('/fiestaparrot', (req, res) => {
	parrotRequest('parrots 2/fiestaparrot', req, res)
});

app.get('/wfhparrot', (req, res) => {
	parrotRequest('parrots 2/wfhparrot', req, res)
});

app.get('/illuminatiparrot', (req, res) => {
	parrotRequest('parrots 2/illuminatiparrot', req, res)
});

app.get('/pear-parrots', (req, res) => {
	parrotRequest('parrots 2/pear-parrots', req, res)
});

app.get('/reverseportalorangeparrot', (req, res) => {
	parrotRequest('parrots 2/reverseportalorangeparrot', req, res)
});

app.get('/beretparrot', (req, res) => {
	parrotRequest('parrots 2/beretparrot', req, res)
});

app.get('/meldparrot', (req, res) => {
	parrotRequest('parrots 2/meldparrot', req, res)
});

app.get('/cakeparrot', (req, res) => {
	parrotRequest('parrots 2/cakeparrot', req, res)
});

app.get('/dadparrot', (req, res) => {
	parrotRequest('parrots 2/dadparrot', req, res)
});

app.get('/fadingparrot', (req, res) => {
	parrotRequest('parrots 2/fadingparrot', req, res)
});

app.get('/headingparrot', (req, res) => {
	parrotRequest('parrots 2/headingparrot', req, res)
});

app.get('/zoukparrot', (req, res) => {
	parrotRequest('parrots 2/zoukparrot', req, res)
});

app.get('/spyparrot', (req, res) => {
	parrotRequest('parrots 2/spyparrot', req, res)
});

app.get('/sneezyparrot', (req, res) => {
	parrotRequest('parrots 2/sneezyparrot', req, res)
});

app.get('/espressomartiniparrot', (req, res) => {
	parrotRequest('parrots 2/espressomartiniparrot', req, res)
});

app.get('/birthdaypartyparrot', (req, res) => {
	parrotRequest('parrots 2/birthdaypartyparrot', req, res)
});

app.get('/stayhomeparrotcloser', (req, res) => {
	parrotRequest('parrots 2/stayhomeparrotcloser', req, res)
});

app.get('/harrypotterparrot', (req, res) => {
	parrotRequest('parrots 2/harrypotterparrot', req, res)
});

app.get('/everythingsfineparrot', (req, res) => {
	parrotRequest('parrots 2/everythingsfineparrot', req, res)
});

app.get('/reactparrot', (req, res) => {
	parrotRequest('parrots 2/reactparrot', req, res)
});

app.get('/revolutionparrot', (req, res) => {
	parrotRequest('parrots 2/revolutionparrot', req, res)
});

app.get('/dailyparrot', (req, res) => {
	parrotRequest('parrots 2/dailyparrot', req, res)
});

app.get('/mergedparrot', (req, res) => {
	parrotRequest('parrots 2/mergedparrot', req, res)
});

app.get('/asyncparrot', (req, res) => {
	parrotRequest('parrots 2/asyncparrot', req, res)
});

app.get('/wave1parrot', (req, res) => {
	parrotRequest('parrots 2/wave1parrot', req, res)
});

app.get('/ultrafastparrot', (req, res) => {
	parrotRequest('parrots 2/ultrafastparrot', req, res)
});

app.get('/mongodbparrot', (req, res) => {
	parrotRequest('parrots 2/mongodbparrot', req, res)
});

app.get('/soccerparrot', (req, res) => {
	parrotRequest('parrots 2/soccerparrot', req, res)
});

app.get('/dealwithitnowparrot', (req, res) => {
	parrotRequest('parrots 2/dealwithitnowparrot', req, res)
});

app.get('/mergeconflictparrot', (req, res) => {
	parrotRequest('parrots 2/mergeconflictparrot', req, res)
});

app.get('/mateparrot', (req, res) => {
	parrotRequest('parrots 2/mateparrot', req, res)
});

app.get('/chicoparrot', (req, res) => {
	parrotRequest('parrots 2/chicoparrot', req, res)
});

app.get('/calvinist_parrot', (req, res) => {
	parrotRequest('parrots 2/calvinist_parrot', req, res)
});

app.get('/aussiecongaparrot', (req, res) => {
	parrotRequest('parrots 2/aussiecongaparrot', req, res)
});

app.get('/angelparrot', (req, res) => {
	parrotRequest('parrots 2/angelparrot', req, res)
});

app.get('/dreidelparrot', (req, res) => {
	parrotRequest('parrots 2/dreidelparrot', req, res)
});

app.get('/deletedparrot', (req, res) => {
	parrotRequest('parrots 2/deletedparrot', req, res)
});

app.get('/glimpseparrot', (req, res) => {
	parrotRequest('parrots 2/glimpseparrot', req, res)
});

app.get('/reverseparrot', (req, res) => {
	parrotRequest('parrots 2/reverseparrot', req, res)
});

app.get('/zombieparrot', (req, res) => {
	parrotRequest('parrots 2/zombieparrot', req, res)
});

app.get('/chefparrot', (req, res) => {
	parrotRequest('parrots 2/chefparrot', req, res)
});

app.get('/hackerparrot', (req, res) => {
	parrotRequest('parrots 2/hackerparrot', req, res)
});

app.get('/hmmparrot', (req, res) => {
	parrotRequest('parrots 2/hmmparrot', req, res)
});

app.get('/pingpongparrot', (req, res) => {
	parrotRequest('parrots 2/pingpongparrot', req, res)
});

app.get('/wave7parrot', (req, res) => {
	parrotRequest('parrots 2/wave7parrot', req, res)
});

app.get('/hamburgerparrot', (req, res) => {
	parrotRequest('parrots 2/hamburgerparrot', req, res)
});

app.get('/invisibleparrot', (req, res) => {
	parrotRequest('parrots 2/invisibleparrot', req, res)
});

app.get('/stableparrot', (req, res) => {
	parrotRequest('parrots 2/stableparrot', req, res)
});

app.get('/bunnyparrot', (req, res) => {
	parrotRequest('parrots 2/bunnyparrot', req, res)
});

app.get('/transparront', (req, res) => {
	parrotRequest('parrots 2/transparront', req, res)
});

app.get('/donutparrot', (req, res) => {
	parrotRequest('parrots 2/donutparrot', req, res)
});

app.get('/marshmallowparrot', (req, res) => {
	parrotRequest('parrots 2/marshmallowparrot', req, res)
});

app.get('/thankyouparrot', (req, res) => {
	parrotRequest('parrots 2/thankyouparrot', req, res)
});

app.get('/shortparrot', (req, res) => {
	parrotRequest('parrots 2/shortparrot', req, res)
});

app.get('/ethparrot', (req, res) => {
	parrotRequest('parrots 2/ethparrot', req, res)
});

app.get('/dabparrot', (req, res) => {
	parrotRequest('parrots 2/dabparrot', req, res)
});

app.get('/inverseparrot', (req, res) => {
	parrotRequest('parrots 2/inverseparrot', req, res)
});

app.get('/bluescluesparrot', (req, res) => {
	parrotRequest('parrots 2/bluescluesparrot', req, res)
});

app.get('/reversecongaparrot', (req, res) => {
	parrotRequest('parrots 2/reversecongaparrot', req, res)
});

app.get('/jediparrot', (req, res) => {
	parrotRequest('parrots 2/jediparrot', req, res)
});

app.get('/discoparrot', (req, res) => {
	parrotRequest('parrots 2/discoparrot', req, res)
});

app.get('/michaeljacksonparrot', (req, res) => {
	parrotRequest('parrots 2/michaeljacksonparrot', req, res)
});

app.get('/redhatparrot', (req, res) => {
	parrotRequest('parrots 2/redhatparrot', req, res)
});

app.get('/pirateparrot', (req, res) => {
	parrotRequest('parrots 2/pirateparrot', req, res)
});

app.get('/resonatingredparrot', (req, res) => {
	parrotRequest('parrots 2/resonatingredparrot', req, res)
});

app.get('/stayhomeparrot', (req, res) => {
	parrotRequest('parrots 2/stayhomeparrot', req, res)
});

app.get('/chefkissparrot', (req, res) => {
	parrotRequest('parrots 2/chefkissparrot', req, res)
});

app.get('/grouchoparrot', (req, res) => {
	parrotRequest('parrots 2/grouchoparrot', req, res)
});

app.get('/mustacheparrot', (req, res) => {
	parrotRequest('parrots 2/mustacheparrot', req, res)
});

app.get('/bikerparrot', (req, res) => {
	parrotRequest('parrots 2/bikerparrot', req, res)
});

app.get('/sovjetparrot', (req, res) => {
	parrotRequest('parrots 2/sovjetparrot', req, res)
});

app.get('/matrixparrot', (req, res) => {
	parrotRequest('parrots 2/matrixparrot', req, res)
});

app.get('/hypnoparrotlight', (req, res) => {
	parrotRequest('parrots 2/hypnoparrotlight', req, res)
});

app.get('/darkmodeparrot', (req, res) => {
	parrotRequest('parrots 2/darkmodeparrot', req, res)
});

app.get('/copparrot', (req, res) => {
	parrotRequest('parrots 2/copparrot', req, res)
});

app.get('/rubyparrot', (req, res) => {
	parrotRequest('parrots 2/rubyparrot', req, res)
});

app.get('/blurryparrot', (req, res) => {
	parrotRequest('parrots 2/blurryparrot', req, res)
});

app.get('/whitewalkerparrot', (req, res) => {
	parrotRequest('parrots 2/whitewalkerparrot', req, res)
});

app.get('/revertitparrot', (req, res) => {
	parrotRequest('parrots 2/revertitparrot', req, res)
});

app.get('/thumbsupparrot', (req, res) => {
	parrotRequest('parrots 2/thumbsupparrot', req, res)
});

app.get('/turndownforwatchparrot', (req, res) => {
	parrotRequest('parrots 2/turndownforwatchparrot', req, res)
});

app.get('/badparrot', (req, res) => {
	parrotRequest('parrots 2/badparrot', req, res)
});

app.get('/parrotnotfound', (req, res) => {
	parrotRequest('parrots 2/parrotnotfound', req, res)
});

app.get('/metalparrot', (req, res) => {
	parrotRequest('parrots 2/metalparrot', req, res)
});

app.get('/fixparrot', (req, res) => {
	parrotRequest('parrots 2/fixparrot', req, res)
});

app.get('/60fpsparrot', (req, res) => {
	parrotRequest('parrots 2/60fpsparrot', req, res)
});

app.get('/sassyparrot', (req, res) => {
	parrotRequest('parrots 2/sassyparrot', req, res)
});

app.get('/thefastestparrot', (req, res) => {
	parrotRequest('parrots 2/thefastestparrot', req, res)
});

app.get('/hardhatparrot', (req, res) => {
	parrotRequest('parrots 2/hardhatparrot', req, res)
});

app.get('/wave6parrot', (req, res) => {
	parrotRequest('parrots 2/wave6parrot', req, res)
});

app.get('/rotatingparrot', (req, res) => {
	parrotRequest('parrots 2/rotatingparrot', req, res)
});

app.get('/flowerparrot', (req, res) => {
	parrotRequest('parrots 2/flowerparrot', req, res)
});

app.get('/twinsparrot', (req, res) => {
	parrotRequest('parrots 2/twinsparrot', req, res)
});

app.get('/spinningparrot', (req, res) => {
	parrotRequest('parrots 2/spinningparrot', req, res)
});

app.get('/tennisparrot', (req, res) => {
	parrotRequest('parrots 2/tennisparrot', req, res)
});

app.get('/brazilianplayerparrot', (req, res) => {
	parrotRequest('parrots 2/brazilianplayerparrot', req, res)
});

app.get('/sidewaysparrot', (req, res) => {
	parrotRequest('parrots 2/sidewaysparrot', req, res)
});

app.get('/bouncingparrot', (req, res) => {
	parrotRequest('parrots 2/bouncingparrot', req, res)
});

app.get('/ripparrot', (req, res) => {
	parrotRequest('parrots 2/ripparrot', req, res)
});

app.get('/mardigrasparrot', (req, res) => {
	parrotRequest('parrots 2/mardigrasparrot', req, res)
});

app.get('/stalkerparrot', (req, res) => {
	parrotRequest('parrots 2/stalkerparrot', req, res)
});

app.get('/richpartyparrot', (req, res) => {
	parrotRequest('parrots 2/richpartyparrot', req, res)
});

app.get('/oldtimeyparrot', (req, res) => {
	parrotRequest('parrots 2/oldtimeyparrot', req, res)
});

app.get('/cryptoparrot', (req, res) => {
	parrotRequest('parrots 2/cryptoparrot', req, res)
});

app.get('/evilparrot', (req, res) => {
	parrotRequest('parrots 2/evilparrot', req, res)
});

app.get('/phparrot', (req, res) => {
	parrotRequest('parrots 2/phparrot', req, res)
});

app.get('/githubparrot', (req, res) => {
	parrotRequest('parrots 2/githubparrot', req, res)
});

app.get('/unicornparrot', (req, res) => {
	parrotRequest('parrots 2/unicornparrot', req, res)
});

app.get('/playcatchrightparrot', (req, res) => {
	parrotRequest('parrots 2/playcatchrightparrot', req, res)
});

app.get('/hypnoparrot', (req, res) => {
	parrotRequest('parrots 2/hypnoparrot', req, res)
});

app.get('/pizzaparrot', (req, res) => {
	parrotRequest('parrots 2/pizzaparrot', req, res)
});

app.get('/verticalparrot', (req, res) => {
	parrotRequest('parrots 2/verticalparrot', req, res)
});

app.get('/moonwalkingparrot', (req, res) => {
	parrotRequest('parrots 2/moonwalkingparrot', req, res)
});

app.get('/autonomousparrot', (req, res) => {
	parrotRequest('parrots 2/autonomousparrot', req, res)
});

app.get('/bulgariaparrot', (req, res) => {
	parrotRequest('flags/bulgariaparrot', req, res)
});

app.get('/northmacedoniaparrot', (req, res) => {
	parrotRequest('flags/northmacedoniaparrot', req, res)
});

app.get('/singaporeparrot', (req, res) => {
	parrotRequest('flags/singaporeparrot', req, res)
});

app.get('/sudanparrot', (req, res) => {
	parrotRequest('flags/sudanparrot', req, res)
});

app.get('/gabonparrot', (req, res) => {
	parrotRequest('flags/gabonparrot', req, res)
});

app.get('/italyparrot', (req, res) => {
	parrotRequest('flags/italyparrot', req, res)
});

app.get('/hondurasparrot', (req, res) => {
	parrotRequest('flags/hondurasparrot', req, res)
});

app.get('/luxembourgparrot', (req, res) => {
	parrotRequest('flags/luxembourgparrot', req, res)
});

app.get('/rwandaparrot', (req, res) => {
	parrotRequest('flags/rwandaparrot', req, res)
});

app.get('/cameroonparrot', (req, res) => {
	parrotRequest('flags/cameroonparrot', req, res)
});

app.get('/surinameparrot', (req, res) => {
	parrotRequest('flags/surinameparrot', req, res)
});

app.get('/romaniaparrot', (req, res) => {
	parrotRequest('flags/romaniaparrot', req, res)
});

app.get('/bahamasparrot', (req, res) => {
	parrotRequest('flags/bahamasparrot', req, res)
});

app.get('/elsalvadorparrot', (req, res) => {
	parrotRequest('flags/elsalvadorparrot', req, res)
});

app.get('/vietnamparrot', (req, res) => {
	parrotRequest('flags/vietnamparrot', req, res)
});

app.get('/cyprusparrot', (req, res) => {
	parrotRequest('flags/cyprusparrot', req, res)
});

app.get('/palauparrot', (req, res) => {
	parrotRequest('flags/palauparrot', req, res)
});

app.get('/argentinaparrot', (req, res) => {
	parrotRequest('flags/argentinaparrot', req, res)
});

app.get('/bhutanparrot', (req, res) => {
	parrotRequest('flags/bhutanparrot', req, res)
});

app.get('/guatemalaparrot', (req, res) => {
	parrotRequest('flags/guatemalaparrot', req, res)
});

app.get('/trinidadandtobagoparrot', (req, res) => {
	parrotRequest('flags/trinidadandtobagoparrot', req, res)
});

app.get('/dominicanrepublicparrot', (req, res) => {
	parrotRequest('flags/dominicanrepublicparrot', req, res)
});

app.get('/panamaparrot', (req, res) => {
	parrotRequest('flags/panamaparrot', req, res)
});

app.get('/moroccoparrot', (req, res) => {
	parrotRequest('flags/moroccoparrot', req, res)
});

app.get('/maliparrot', (req, res) => {
	parrotRequest('flags/maliparrot', req, res)
});

app.get('/newzealandparrot', (req, res) => {
	parrotRequest('flags/newzealandparrot', req, res)
});

app.get('/cookislandsparrot', (req, res) => {
	parrotRequest('flags/cookislandsparrot', req, res)
});

app.get('/haitiparrot', (req, res) => {
	parrotRequest('flags/haitiparrot', req, res)
});

app.get('/marshallislandsparrot', (req, res) => {
	parrotRequest('flags/marshallislandsparrot', req, res)
});

app.get('/papuanewguineaparrot', (req, res) => {
	parrotRequest('flags/papuanewguineaparrot', req, res)
});

app.get('/austriaparrot', (req, res) => {
	parrotRequest('flags/austriaparrot', req, res)
});

app.get('/togoparrot', (req, res) => {
	parrotRequest('flags/togoparrot', req, res)
});

app.get('/philippinesparrot', (req, res) => {
	parrotRequest('flags/philippinesparrot', req, res)
});

app.get('/myanmarparrot', (req, res) => {
	parrotRequest('flags/myanmarparrot', req, res)
});

app.get('/bosniaandherzegovinaparrot', (req, res) => {
	parrotRequest('flags/bosniaandherzegovinaparrot', req, res)
});

app.get('/tajikistanparrot', (req, res) => {
	parrotRequest('flags/tajikistanparrot', req, res)
});

app.get('/ukraineparrot', (req, res) => {
	parrotRequest('flags/ukraineparrot', req, res)
});

app.get('/guineaparrot', (req, res) => {
	parrotRequest('flags/guineaparrot', req, res)
});

app.get('/sahrawiarabdemocraticrepublicparrot', (req, res) => {
	parrotRequest('flags/sahrawiarabdemocraticrepublicparrot', req, res)
});

app.get('/japanparrot', (req, res) => {
	parrotRequest('flags/japanparrot', req, res)
});

app.get('/latviaparrot', (req, res) => {
	parrotRequest('flags/latviaparrot', req, res)
});

app.get('/lebanonparrot', (req, res) => {
	parrotRequest('flags/lebanonparrot', req, res)
});

app.get('/sanmarinoparrot', (req, res) => {
	parrotRequest('flags/sanmarinoparrot', req, res)
});

app.get('/indonesiaparrot', (req, res) => {
	parrotRequest('flags/indonesiaparrot', req, res)
});

app.get('/sloveniaparrot', (req, res) => {
	parrotRequest('flags/sloveniaparrot', req, res)
});

app.get('/southkoreaparrot', (req, res) => {
	parrotRequest('flags/southkoreaparrot', req, res)
});

app.get('/turkeyparrot', (req, res) => {
	parrotRequest('flags/turkeyparrot', req, res)
});

app.get('/belarusparrot', (req, res) => {
	parrotRequest('flags/belarusparrot', req, res)
});

app.get('/samoaparrot', (req, res) => {
	parrotRequest('flags/samoaparrot', req, res)
});

app.get('/afghanistanparrot', (req, res) => {
	parrotRequest('flags/afghanistanparrot', req, res)
});

app.get('/saintluciaparrot', (req, res) => {
	parrotRequest('flags/saintluciaparrot', req, res)
});

app.get('/abkhaziaparrot', (req, res) => {
	parrotRequest('flags/abkhaziaparrot', req, res)
});

app.get('/estoniaparrot', (req, res) => {
	parrotRequest('flags/estoniaparrot', req, res)
});

app.get('/icelandparrot', (req, res) => {
	parrotRequest('flags/icelandparrot', req, res)
});

app.get('/pakistanparrot', (req, res) => {
	parrotRequest('flags/pakistanparrot', req, res)
});

app.get('/saudiarabiaparrot', (req, res) => {
	parrotRequest('flags/saudiarabiaparrot', req, res)
});

app.get('/nigerparrot', (req, res) => {
	parrotRequest('flags/nigerparrot', req, res)
});

app.get('/guyanaparrot', (req, res) => {
	parrotRequest('flags/guyanaparrot', req, res)
});

app.get('/fijiparrot', (req, res) => {
	parrotRequest('flags/fijiparrot', req, res)
});

app.get('/sierraleoneparrot', (req, res) => {
	parrotRequest('flags/sierraleoneparrot', req, res)
});

app.get('/northerncyprusparrot', (req, res) => {
	parrotRequest('flags/northerncyprusparrot', req, res)
});

app.get('/vanuatuparrot', (req, res) => {
	parrotRequest('flags/vanuatuparrot', req, res)
});

app.get('/guineabissauparrot', (req, res) => {
	parrotRequest('flags/guineabissauparrot', req, res)
});

app.get('/switzerlandparrot', (req, res) => {
	parrotRequest('flags/switzerlandparrot', req, res)
});

app.get('/malaysiaparrot', (req, res) => {
	parrotRequest('flags/malaysiaparrot', req, res)
});

app.get('/maltaparrot', (req, res) => {
	parrotRequest('flags/maltaparrot', req, res)
});

app.get('/uruguayparrot', (req, res) => {
	parrotRequest('flags/uruguayparrot', req, res)
});

app.get('/tuvaluparrot', (req, res) => {
	parrotRequest('flags/tuvaluparrot', req, res)
});

app.get('/israelparrot', (req, res) => {
	parrotRequest('flags/israelparrot', req, res)
});

app.get('/checkeredflagparrot', (req, res) => {
	parrotRequest('flags/checkeredflagparrot', req, res)
});

app.get('/mongoliaparrot', (req, res) => {
	parrotRequest('flags/mongoliaparrot', req, res)
});

app.get('/westernsaharaparrot', (req, res) => {
	parrotRequest('flags/westernsaharaparrot', req, res)
});

app.get('/zambiaparrot', (req, res) => {
	parrotRequest('flags/zambiaparrot', req, res)
});

app.get('/tanzaniaparrot', (req, res) => {
	parrotRequest('flags/tanzaniaparrot', req, res)
});

app.get('/egyptparrot', (req, res) => {
	parrotRequest('flags/egyptparrot', req, res)
});

app.get('/laosparrot', (req, res) => {
	parrotRequest('flags/laosparrot', req, res)
});

app.get('/ecuadorparrot', (req, res) => {
	parrotRequest('flags/ecuadorparrot', req, res)
});

app.get('/easttimorparrot', (req, res) => {
	parrotRequest('flags/easttimorparrot', req, res)
});

app.get('/chinaparrot', (req, res) => {
	parrotRequest('flags/chinaparrot', req, res)
});

app.get('/unitedkingdomparrot', (req, res) => {
	parrotRequest('flags/unitedkingdomparrot', req, res)
});

app.get('/lithuaniaparrot', (req, res) => {
	parrotRequest('flags/lithuaniaparrot', req, res)
});

app.get('/armeniaparrot', (req, res) => {
	parrotRequest('flags/armeniaparrot', req, res)
});

app.get('/bruneiparrot', (req, res) => {
	parrotRequest('flags/bruneiparrot', req, res)
});

app.get('/cambodiaparrot', (req, res) => {
	parrotRequest('flags/cambodiaparrot', req, res)
});

app.get('/niueparrot', (req, res) => {
	parrotRequest('flags/niueparrot', req, res)
});

app.get('/southafricaparrot', (req, res) => {
	parrotRequest('flags/southafricaparrot', req, res)
});

app.get('/saintkittsandnevisparrot', (req, res) => {
	parrotRequest('flags/saintkittsandnevisparrot', req, res)
});

app.get('/liechtensteinparrot', (req, res) => {
	parrotRequest('flags/liechtensteinparrot', req, res)
});

app.get('/transnistriaparrot', (req, res) => {
	parrotRequest('flags/transnistriaparrot', req, res)
});

app.get('/northern-ireland-ulster-banner', (req, res) => {
	parrotRequest('flags/northern-ireland-ulster-banner', req, res)
});

app.get('/mauritaniaparrot', (req, res) => {
	parrotRequest('flags/mauritaniaparrot', req, res)
});

app.get('/malawiparrot', (req, res) => {
	parrotRequest('flags/malawiparrot', req, res)
});

app.get('/northkoreaparrot', (req, res) => {
	parrotRequest('flags/northkoreaparrot', req, res)
});

app.get('/quebecparrot', (req, res) => {
	parrotRequest('flags/quebecparrot', req, res)
});

app.get('/azerbaijanparrot', (req, res) => {
	parrotRequest('flags/azerbaijanparrot', req, res)
});

app.get('/russiaparrot', (req, res) => {
	parrotRequest('flags/russiaparrot', req, res)
});

app.get('/montenegroparrot', (req, res) => {
	parrotRequest('flags/montenegroparrot', req, res)
});

app.get('/nepalparrot', (req, res) => {
	parrotRequest('flags/nepalparrot', req, res)
});

app.get('/serbiaparrot', (req, res) => {
	parrotRequest('flags/serbiaparrot', req, res)
});

app.get('/thailandparrot', (req, res) => {
	parrotRequest('flags/thailandparrot', req, res)
});

app.get('/turkmenistanparrot', (req, res) => {
	parrotRequest('flags/turkmenistanparrot', req, res)
});

app.get('/jamaicaparrot', (req, res) => {
	parrotRequest('flags/jamaicaparrot', req, res)
});

app.get('/wales', (req, res) => {
	parrotRequest('flags/wales', req, res)
});

app.get('/australiaparrot', (req, res) => {
	parrotRequest('flags/australiaparrot', req, res)
});

app.get('/ivorycoastparrot', (req, res) => {
	parrotRequest('flags/ivorycoastparrot', req, res)
});

app.get('/canadaparrot', (req, res) => {
	parrotRequest('flags/canadaparrot', req, res)
});

app.get('/germanyparrot', (req, res) => {
	parrotRequest('flags/germanyparrot', req, res)
});

app.get('/czechrepublicparrot', (req, res) => {
	parrotRequest('flags/czechrepublicparrot', req, res)
});

app.get('/paraguayparrot', (req, res) => {
	parrotRequest('flags/paraguayparrot', req, res)
});

app.get('/qatarparrot', (req, res) => {
	parrotRequest('flags/qatarparrot', req, res)
});

app.get('/jordanparrot', (req, res) => {
	parrotRequest('flags/jordanparrot', req, res)
});

app.get('/yemenparrot', (req, res) => {
	parrotRequest('flags/yemenparrot', req, res)
});

app.get('/freebelarusparrot', (req, res) => {
	parrotRequest('flags/freebelarusparrot', req, res)
});

app.get('/taiwanparrot', (req, res) => {
	parrotRequest('flags/taiwanparrot', req, res)
});

app.get('/boliviaparrot', (req, res) => {
	parrotRequest('flags/boliviaparrot', req, res)
});

app.get('/cubaparrot', (req, res) => {
	parrotRequest('flags/cubaparrot', req, res)
});

app.get('/kosovoparrot', (req, res) => {
	parrotRequest('flags/kosovoparrot', req, res)
});

app.get('/srilankaparrot', (req, res) => {
	parrotRequest('flags/srilankaparrot', req, res)
});

app.get('/liberiaparrot', (req, res) => {
	parrotRequest('flags/liberiaparrot', req, res)
});

app.get('/mozambiqueparrot', (req, res) => {
	parrotRequest('flags/mozambiqueparrot', req, res)
});

app.get('/kyrgyzstanparrot', (req, res) => {
	parrotRequest('flags/kyrgyzstanparrot', req, res)
});

app.get('/iranparrot', (req, res) => {
	parrotRequest('flags/iranparrot', req, res)
});

app.get('/norwayparrot', (req, res) => {
	parrotRequest('flags/norwayparrot', req, res)
});

app.get('/monacoparrot', (req, res) => {
	parrotRequest('flags/monacoparrot', req, res)
});

app.get('/polandparrot', (req, res) => {
	parrotRequest('flags/polandparrot', req, res)
});

app.get('/gambiaparrot', (req, res) => {
	parrotRequest('flags/gambiaparrot', req, res)
});

app.get('/nicaraguaparrot', (req, res) => {
	parrotRequest('flags/nicaraguaparrot', req, res)
});

app.get('/dominicaparrot', (req, res) => {
	parrotRequest('flags/dominicaparrot', req, res)
});

app.get('/lesothoparrot', (req, res) => {
	parrotRequest('flags/lesothoparrot', req, res)
});

app.get('/albaniaparrot', (req, res) => {
	parrotRequest('flags/albaniaparrot', req, res)
});

app.get('/somalilandparrot', (req, res) => {
	parrotRequest('flags/somalilandparrot', req, res)
});

app.get('/antiguaandbarbudaparrot', (req, res) => {
	parrotRequest('flags/antiguaandbarbudaparrot', req, res)
});

app.get('/zimbabweparrot', (req, res) => {
	parrotRequest('flags/zimbabweparrot', req, res)
});

app.get('/djiboutiparrot', (req, res) => {
	parrotRequest('flags/djiboutiparrot', req, res)
});

app.get('/southsudanparrot', (req, res) => {
	parrotRequest('flags/southsudanparrot', req, res)
});

app.get('/burkinafasoparrot', (req, res) => {
	parrotRequest('flags/burkinafasoparrot', req, res)
});

app.get('/kazakhstanparrot', (req, res) => {
	parrotRequest('flags/kazakhstanparrot', req, res)
});

app.get('/brazilparrot', (req, res) => {
	parrotRequest('flags/brazilparrot', req, res)
});

app.get('/greekmacedoniaparrot', (req, res) => {
	parrotRequest('flags/greekmacedoniaparrot', req, res)
});

app.get('/costaricaparrot', (req, res) => {
	parrotRequest('flags/costaricaparrot', req, res)
});

app.get('/scotland', (req, res) => {
	parrotRequest('flags/scotland', req, res)
});

app.get('/uzbekistanparrot', (req, res) => {
	parrotRequest('flags/uzbekistanparrot', req, res)
});

app.get('/unitedstatesofamericaparrot', (req, res) => {
	parrotRequest('flags/unitedstatesofamericaparrot', req, res)
});

app.get('/belizeparrot', (req, res) => {
	parrotRequest('flags/belizeparrot', req, res)
});

app.get('/irelandparrot', (req, res) => {
	parrotRequest('flags/irelandparrot', req, res)
});

app.get('/omanparrot', (req, res) => {
	parrotRequest('flags/omanparrot', req, res)
});

app.get('/barbadosparrot', (req, res) => {
	parrotRequest('flags/barbadosparrot', req, res)
});

app.get('/prideparrot', (req, res) => {
	parrotRequest('flags/prideparrot', req, res)
});

app.get('/transparrot', (req, res) => {
	parrotRequest('flags/transparrot', req, res)
});

app.get('/hungaryparrot', (req, res) => {
	parrotRequest('flags/hungaryparrot', req, res)
});

app.get('/somaliaparrot', (req, res) => {
	parrotRequest('flags/somaliaparrot', req, res)
});

app.get('/eritreaparrot', (req, res) => {
	parrotRequest('flags/eritreaparrot', req, res)
});

app.get('/kuwaitparrot', (req, res) => {
	parrotRequest('flags/kuwaitparrot', req, res)
});

app.get('/falklandislandsparrot', (req, res) => {
	parrotRequest('flags/falklandislandsparrot', req, res)
});

app.get('/belgiumparrot', (req, res) => {
	parrotRequest('flags/belgiumparrot', req, res)
});

app.get('/nigeriaparrot', (req, res) => {
	parrotRequest('flags/nigeriaparrot', req, res)
});

app.get('/swedenparrot', (req, res) => {
	parrotRequest('flags/swedenparrot', req, res)
});

app.get('/denmarkparrot', (req, res) => {
	parrotRequest('flags/denmarkparrot', req, res)
});

app.get('/botswanaparrot', (req, res) => {
	parrotRequest('flags/botswanaparrot', req, res)
});

app.get('/croatiaparrot', (req, res) => {
	parrotRequest('flags/croatiaparrot', req, res)
});

app.get('/maldivesparrot', (req, res) => {
	parrotRequest('flags/maldivesparrot', req, res)
});

app.get('/madagascarparrot', (req, res) => {
	parrotRequest('flags/madagascarparrot', req, res)
});

app.get('/equatorialguineaparrot', (req, res) => {
	parrotRequest('flags/equatorialguineaparrot', req, res)
});

app.get('/bahrainparrot', (req, res) => {
	parrotRequest('flags/bahrainparrot', req, res)
});

app.get('/grenadaparrot', (req, res) => {
	parrotRequest('flags/grenadaparrot', req, res)
});

app.get('/netherlandsparrot', (req, res) => {
	parrotRequest('flags/netherlandsparrot', req, res)
});

app.get('/micronesiaparrot', (req, res) => {
	parrotRequest('flags/micronesiaparrot', req, res)
});

app.get('/chileparrot', (req, res) => {
	parrotRequest('flags/chileparrot', req, res)
});

app.get('/libyaparrot', (req, res) => {
	parrotRequest('flags/libyaparrot', req, res)
});

app.get('/chadparrot', (req, res) => {
	parrotRequest('flags/chadparrot', req, res)
});

app.get('/republicofthecongoparrot', (req, res) => {
	parrotRequest('flags/republicofthecongoparrot', req, res)
});

app.get('/northern-ireland-st-patricks-saltire', (req, res) => {
	parrotRequest('flags/northern-ireland-st-patricks-saltire', req, res)
});

app.get('/finlandparrot', (req, res) => {
	parrotRequest('flags/finlandparrot', req, res)
});

app.get('/franceparrot', (req, res) => {
	parrotRequest('flags/franceparrot', req, res)
});

app.get('/euparrot', (req, res) => {
	parrotRequest('flags/euparrot', req, res)
});

app.get('/senegalparrot', (req, res) => {
	parrotRequest('flags/senegalparrot', req, res)
});

app.get('/kiribatiparrot', (req, res) => {
	parrotRequest('flags/kiribatiparrot', req, res)
});

app.get('/puertoricoparrot', (req, res) => {
	parrotRequest('flags/puertoricoparrot', req, res)
});

app.get('/bangladeshparrot', (req, res) => {
	parrotRequest('flags/bangladeshparrot', req, res)
});

app.get('/england', (req, res) => {
	parrotRequest('flags/england', req, res)
});

app.get('/capeverdeparrot', (req, res) => {
	parrotRequest('flags/capeverdeparrot', req, res)
});

app.get('/venezuelaparrot', (req, res) => {
	parrotRequest('flags/venezuelaparrot', req, res)
});

app.get('/peruparrot', (req, res) => {
	parrotRequest('flags/peruparrot', req, res)
});

app.get('/beninparrot', (req, res) => {
	parrotRequest('flags/beninparrot', req, res)
});

app.get('/ethiopiaparrot', (req, res) => {
	parrotRequest('flags/ethiopiaparrot', req, res)
});

app.get('/algeriaparrot', (req, res) => {
	parrotRequest('flags/algeriaparrot', req, res)
});

app.get('/andorraparrot', (req, res) => {
	parrotRequest('flags/andorraparrot', req, res)
});

app.get('/unitedarabemiratesparrot', (req, res) => {
	parrotRequest('flags/unitedarabemiratesparrot', req, res)
});

app.get('/slovakiaparrot', (req, res) => {
	parrotRequest('flags/slovakiaparrot', req, res)
});

app.get('/nauruparrot', (req, res) => {
	parrotRequest('flags/nauruparrot', req, res)
});

app.get('/saotomeandprincipeparrot', (req, res) => {
	parrotRequest('flags/saotomeandprincipeparrot', req, res)
});

app.get('/hongkongparrot', (req, res) => {
	parrotRequest('flags/hongkongparrot', req, res)
});

app.get('/namibiaparrot', (req, res) => {
	parrotRequest('flags/namibiaparrot', req, res)
});

app.get('/solomonislandsparrot', (req, res) => {
	parrotRequest('flags/solomonislandsparrot', req, res)
});

app.get('/saintvincentandthegrenadinesparrot', (req, res) => {
	parrotRequest('flags/saintvincentandthegrenadinesparrot', req, res)
});

app.get('/burundiparrot', (req, res) => {
	parrotRequest('flags/burundiparrot', req, res)
});

app.get('/portugalparrot', (req, res) => {
	parrotRequest('flags/portugalparrot', req, res)
});

app.get('/indiaparrot', (req, res) => {
	parrotRequest('flags/indiaparrot', req, res)
});

app.get('/tongaparrot', (req, res) => {
	parrotRequest('flags/tongaparrot', req, res)
});

app.get('/artsakhparrot', (req, res) => {
	parrotRequest('flags/artsakhparrot', req, res)
});

app.get('/greeceparrot', (req, res) => {
	parrotRequest('flags/greeceparrot', req, res)
});

app.get('/tunisiaparrot', (req, res) => {
	parrotRequest('flags/tunisiaparrot', req, res)
});

app.get('/ugandaparrot', (req, res) => {
	parrotRequest('flags/ugandaparrot', req, res)
});

app.get('/eswatiniparrot', (req, res) => {
	parrotRequest('flags/eswatiniparrot', req, res)
});

app.get('/seychellesparrot', (req, res) => {
	parrotRequest('flags/seychellesparrot', req, res)
});

app.get('/macauparrot', (req, res) => {
	parrotRequest('flags/macauparrot', req, res)
});

app.get('/comorosparrot', (req, res) => {
	parrotRequest('flags/comorosparrot', req, res)
});

app.get('/mauritiusparrot', (req, res) => {
	parrotRequest('flags/mauritiusparrot', req, res)
});

app.get('/angolaparrot', (req, res) => {
	parrotRequest('flags/angolaparrot', req, res)
});

app.get('/greenlandparrot', (req, res) => {
	parrotRequest('flags/greenlandparrot', req, res)
});

app.get('/democraticrepublicofthecongoparrot', (req, res) => {
	parrotRequest('flags/democraticrepublicofthecongoparrot', req, res)
});

app.get('/moldovaparrot', (req, res) => {
	parrotRequest('flags/moldovaparrot', req, res)
});

app.get('/ghanaparrot', (req, res) => {
	parrotRequest('flags/ghanaparrot', req, res)
});

app.get('/antarcticaparrot', (req, res) => {
	parrotRequest('flags/antarcticaparrot', req, res)
});

app.get('/mexicoparrot', (req, res) => {
	parrotRequest('flags/mexicoparrot', req, res)
});

app.get('/centralafricanrepublicparrot', (req, res) => {
	parrotRequest('flags/centralafricanrepublicparrot', req, res)
});

app.get('/syriaparrot', (req, res) => {
	parrotRequest('flags/syriaparrot', req, res)
});

app.get('/southossetiaparrot', (req, res) => {
	parrotRequest('flags/southossetiaparrot', req, res)
});

app.get('/iraqparrot', (req, res) => {
	parrotRequest('flags/iraqparrot', req, res)
});

app.get('/georgiaparrot', (req, res) => {
	parrotRequest('flags/georgiaparrot', req, res)
});

app.get('/vaticancityparrot', (req, res) => {
	parrotRequest('flags/vaticancityparrot', req, res)
});

app.get('/spainparrot', (req, res) => {
	parrotRequest('flags/spainparrot', req, res)
});

app.get('/kenyaparrot', (req, res) => {
	parrotRequest('flags/kenyaparrot', req, res)
});

app.get('/palestineparrot', (req, res) => {
	parrotRequest('flags/palestineparrot', req, res)
});

app.get('/colombiaparrot', (req, res) => {
	parrotRequest('flags/colombiaparrot', req, res)
});

app.get('/threadparrot', (req, res) => {
	parrotRequest('guests/threadparrot', req, res)
});

app.get('/partycage', (req, res) => {
	parrotRequest('guests/partycage', req, res)
});

app.get('/stubparrot', (req, res) => {
	parrotRequest('guests/stubparrot', req, res)
});

app.get('/partytux', (req, res) => {
	parrotRequest('guests/partytux', req, res)
});

app.get('/minionparrot', (req, res) => {
	parrotRequest('guests/minionparrot', req, res)
});

app.get('/gumiparrot', (req, res) => {
	parrotRequest('guests/gumiparrot', req, res)
});

app.get('/batparrot', (req, res) => {
	parrotRequest('guests/batparrot', req, res)
});

app.get('/thisisfineparrot', (req, res) => {
	parrotRequest('guests/thisisfineparrot', req, res)
});

app.get('/parrotpoop', (req, res) => {
	parrotRequest('guests/parrotpoop', req, res)
});

app.get('/partygeeko', (req, res) => {
	parrotRequest('guests/partygeeko', req, res)
});

app.get('/partyfieri', (req, res) => {
	parrotRequest('guests/partyfieri', req, res)
});

app.get('/party-k8s', (req, res) => {
	parrotRequest('guests/party-k8s', req, res)
});

app.get('/partygopher', (req, res) => {
	parrotRequest('guests/partygopher', req, res)
});

app.get('/oriolesparrot', (req, res) => {
	parrotRequest('guests/oriolesparrot', req, res)
});

app.get('/cryingjordanparrot', (req, res) => {
	parrotRequest('guests/cryingjordanparrot', req, res)
});

app.get('/nyanparrot', (req, res) => {
	parrotRequest('guests/nyanparrot', req, res)
});

app.get('/partysloth', (req, res) => {
	parrotRequest('guests/partysloth', req, res)
});

app.get('/partyblobcat', (req, res) => {
	parrotRequest('guests/partyblobcat', req, res)
});

app.get('/bugparrot', (req, res) => {
	parrotRequest('guests/bugparrot', req, res)
});

app.get('/party-wizard', (req, res) => {
	parrotRequest('guests/party-wizard', req, res)
});

app.get('/partywumpus', (req, res) => {
	parrotRequest('guests/partywumpus', req, res)
});

app.get('/discoduck', (req, res) => {
	parrotRequest('guests/discoduck', req, res)
});

app.get('/trollparrot', (req, res) => {
	parrotRequest('guests/trollparrot', req, res)
});

app.get('/capsparrot', (req, res) => {
	parrotRequest('guests/capsparrot', req, res)
});

app.get('/partyannoyedbird', (req, res) => {
	parrotRequest('guests/partyannoyedbird', req, res)
});

app.get('/cursedparrot', (req, res) => {
	parrotRequest('guests/cursedparrot', req, res)
});

app.get('/partygfm', (req, res) => {
	parrotRequest('guests/partygfm', req, res)
});

app.get('/partyblob', (req, res) => {
	parrotRequest('guests/partyblob', req, res)
});

app.get('/catparrot', (req, res) => {
	parrotRequest('guests/catparrot', req, res)
});

app.get('/partypicard', (req, res) => {
	parrotRequest('guests/partypicard', req, res)
});

app.get('/old-man-yells-at-parrot', (req, res) => {
	parrotRequest('guests/old-man-yells-at-parrot', req, res)
});

app.get('/partykeanu', (req, res) => {
	parrotRequest('guests/partykeanu', req, res)
});

app.get('/partyrocket', (req, res) => {
	parrotRequest('guests/partyrocket', req, res)
});

app.get('/partygritty', (req, res) => {
	parrotRequest('guests/partygritty', req, res)
});

app.get('/partyfsjal', (req, res) => {
	parrotRequest('guests/partyfsjal', req, res)
});

app.get('/haroldparrot', (req, res) => {
	parrotRequest('guests/haroldparrot', req, res)
});

app.get('/partyowl', (req, res) => {
	parrotRequest('guests/partyowl', req, res)
});

app.get('/vibepartycat', (req, res) => {
	parrotRequest('guests/vibepartycat', req, res)
});

app.get('/witnessprotectionparrot', (req, res) => {
	parrotRequest('guests/witnessprotectionparrot', req, res)
});

app.get('/dogeparrot', (req, res) => {
	parrotRequest('guests/dogeparrot', req, res)
});

app.get('/congadoge', (req, res) => {
	parrotRequest('guests/congadoge', req, res)
});

app.get('/preetjusticeparrot', (req, res) => {
	parrotRequest('guests/preetjusticeparrot', req, res)
});

app.get('/partymoogle', (req, res) => {
	parrotRequest('guests/partymoogle', req, res)
});

app.get('/thegrokeparrot', (req, res) => {
	parrotRequest('guests/thegrokeparrot', req, res)
});
app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});