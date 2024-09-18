const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;app.get('/', (req, res) => {
	res.redirect('https://github.com/Braedeng0/curl_parrot');
});
app.get('/help', (req, res) => {
	res.sendFile(__dirname + '/README.md');
});
function parrotRequest(parrot) {
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
	parrotRequest('balconyparrot')
});

app.get('/bulgariaparrot', (req, res) => {
	parrotRequest('bulgariaparrot')
});

app.get('/partycage', (req, res) => {
	parrotRequest('partycage')
});

app.get('/jumpingparrot', (req, res) => {
	parrotRequest('jumpingparrot')
});

app.get('/northmacedoniaparrot', (req, res) => {
	parrotRequest('northmacedoniaparrot')
});

app.get('/singaporeparrot', (req, res) => {
	parrotRequest('singaporeparrot')
});

app.get('/vaccineparrot', (req, res) => {
	parrotRequest('vaccineparrot')
});

app.get('/sudanparrot', (req, res) => {
	parrotRequest('sudanparrot')
});

app.get('/gabonparrot', (req, res) => {
	parrotRequest('gabonparrot')
});

app.get('/italyparrot', (req, res) => {
	parrotRequest('italyparrot')
});

app.get('/hondurasparrot', (req, res) => {
	parrotRequest('hondurasparrot')
});

app.get('/luxembourgparrot', (req, res) => {
	parrotRequest('luxembourgparrot')
});

app.get('/stubparrot', (req, res) => {
	parrotRequest('stubparrot')
});

app.get('/rwandaparrot', (req, res) => {
	parrotRequest('rwandaparrot')
});

app.get('/cameroonparrot', (req, res) => {
	parrotRequest('cameroonparrot')
});

app.get('/surinameparrot', (req, res) => {
	parrotRequest('surinameparrot')
});

app.get('/romaniaparrot', (req, res) => {
	parrotRequest('romaniaparrot')
});

app.get('/bahamasparrot', (req, res) => {
	parrotRequest('bahamasparrot')
});

app.get('/partytux', (req, res) => {
	parrotRequest('partytux')
});

app.get('/elsalvadorparrot', (req, res) => {
	parrotRequest('elsalvadorparrot')
});

app.get('/vietnamparrot', (req, res) => {
	parrotRequest('vietnamparrot')
});

app.get('/rythmicalparrot', (req, res) => {
	parrotRequest('rythmicalparrot')
});

app.get('/bluntparrot', (req, res) => {
	parrotRequest('bluntparrot')
});

app.get('/flyingmoneyparrot', (req, res) => {
	parrotRequest('flyingmoneyparrot')
});

app.get('/cyprusparrot', (req, res) => {
	parrotRequest('cyprusparrot')
});

app.get('/biparrot', (req, res) => {
	parrotRequest('biparrot')
});

app.get('/palauparrot', (req, res) => {
	parrotRequest('palauparrot')
});

app.get('/portalorangeparrot', (req, res) => {
	parrotRequest('portalorangeparrot')
});

app.get('/hypnoparrotdark', (req, res) => {
	parrotRequest('hypnoparrotdark')
});

app.get('/vacationparrot', (req, res) => {
	parrotRequest('vacationparrot')
});

app.get('/argentinaparrot', (req, res) => {
	parrotRequest('argentinaparrot')
});

app.get('/bhutanparrot', (req, res) => {
	parrotRequest('bhutanparrot')
});

app.get('/gothparrot', (req, res) => {
	parrotRequest('gothparrot')
});

app.get('/guatemalaparrot', (req, res) => {
	parrotRequest('guatemalaparrot')
});

app.get('/trinidadandtobagoparrot', (req, res) => {
	parrotRequest('trinidadandtobagoparrot')
});

app.get('/vikingparrot', (req, res) => {
	parrotRequest('vikingparrot')
});

app.get('/dominicanrepublicparrot', (req, res) => {
	parrotRequest('dominicanrepublicparrot')
});

app.get('/docparrot', (req, res) => {
	parrotRequest('docparrot')
});

app.get('/boredparrot', (req, res) => {
	parrotRequest('boredparrot')
});

app.get('/panamaparrot', (req, res) => {
	parrotRequest('panamaparrot')
});

app.get('/picassoparrot', (req, res) => {
	parrotRequest('picassoparrot')
});

app.get('/jumpingparrotjr', (req, res) => {
	parrotRequest('jumpingparrotjr')
});

app.get('/staytfhomeparrot', (req, res) => {
	parrotRequest('staytfhomeparrot')
});

app.get('/moroccoparrot', (req, res) => {
	parrotRequest('moroccoparrot')
});

app.get('/maliparrot', (req, res) => {
	parrotRequest('maliparrot')
});

app.get('/pumpkinparrot', (req, res) => {
	parrotRequest('pumpkinparrot')
});

app.get('/newzealandparrot', (req, res) => {
	parrotRequest('newzealandparrot')
});

app.get('/quadparrot', (req, res) => {
	parrotRequest('quadparrot')
});

app.get('/kindasusparrot', (req, res) => {
	parrotRequest('kindasusparrot')
});

app.get('/shuffleparrot', (req, res) => {
	parrotRequest('shuffleparrot')
});

app.get('/cookislandsparrot', (req, res) => {
	parrotRequest('cookislandsparrot')
});

app.get('/gumiparrot', (req, res) => {
	parrotRequest('gumiparrot')
});

app.get('/angryparrot', (req, res) => {
	parrotRequest('angryparrot')
});

app.get('/haitiparrot', (req, res) => {
	parrotRequest('haitiparrot')
});

app.get('/playcatchleftparrot', (req, res) => {
	parrotRequest('playcatchleftparrot')
});

app.get('/marshallislandsparrot', (req, res) => {
	parrotRequest('marshallislandsparrot')
});

app.get('/sithparrot', (req, res) => {
	parrotRequest('sithparrot')
});

app.get('/frenchparrot', (req, res) => {
	parrotRequest('frenchparrot')
});

app.get('/fastparrot', (req, res) => {
	parrotRequest('fastparrot')
});

app.get('/bootlegparrot', (req, res) => {
	parrotRequest('bootlegparrot')
});

app.get('/papuanewguineaparrot', (req, res) => {
	parrotRequest('papuanewguineaparrot')
});

app.get('/austriaparrot', (req, res) => {
	parrotRequest('austriaparrot')
});

app.get('/togoparrot', (req, res) => {
	parrotRequest('togoparrot')
});

app.get('/batparrot', (req, res) => {
	parrotRequest('batparrot')
});

app.get('/thisisfineparrot', (req, res) => {
	parrotRequest('thisisfineparrot')
});

app.get('/philippinesparrot', (req, res) => {
	parrotRequest('philippinesparrot')
});

app.get('/pokeparrot', (req, res) => {
	parrotRequest('pokeparrot')
});

app.get('/parrotpoop', (req, res) => {
	parrotRequest('parrotpoop')
});

app.get('/aussieparrot', (req, res) => {
	parrotRequest('aussieparrot')
});

app.get('/levitationparrot', (req, res) => {
	parrotRequest('levitationparrot')
});

app.get('/myanmarparrot', (req, res) => {
	parrotRequest('myanmarparrot')
});

app.get('/bosniaandherzegovinaparrot', (req, res) => {
	parrotRequest('bosniaandherzegovinaparrot')
});

app.get('/harpoparrot', (req, res) => {
	parrotRequest('harpoparrot')
});

app.get('/imposterparrot', (req, res) => {
	parrotRequest('imposterparrot')
});

app.get('/croissantparrot', (req, res) => {
	parrotRequest('croissantparrot')
});

app.get('/tajikistanparrot', (req, res) => {
	parrotRequest('tajikistanparrot')
});

app.get('/ukraineparrot', (req, res) => {
	parrotRequest('ukraineparrot')
});

app.get('/guineaparrot', (req, res) => {
	parrotRequest('guineaparrot')
});

app.get('/congaparrot', (req, res) => {
	parrotRequest('congaparrot')
});

app.get('/sahrawiarabdemocraticrepublicparrot', (req, res) => {
	parrotRequest('sahrawiarabdemocraticrepublicparrot')
});

app.get('/partygeeko', (req, res) => {
	parrotRequest('partygeeko')
});

app.get('/sadparrot', (req, res) => {
	parrotRequest('sadparrot')
});

app.get('/japanparrot', (req, res) => {
	parrotRequest('japanparrot')
});

app.get('/partyparrot', (req, res) => {
	parrotRequest('partyparrot')
});

app.get('/latviaparrot', (req, res) => {
	parrotRequest('latviaparrot')
});

app.get('/daftpunkparrot', (req, res) => {
	parrotRequest('daftpunkparrot')
});

app.get('/boomparrot', (req, res) => {
	parrotRequest('boomparrot')
});

app.get('/lebanonparrot', (req, res) => {
	parrotRequest('lebanonparrot')
});

app.get('/sanmarinoparrot', (req, res) => {
	parrotRequest('sanmarinoparrot')
});

app.get('/redenvelopeparrot', (req, res) => {
	parrotRequest('redenvelopeparrot')
});

app.get('/indonesiaparrot', (req, res) => {
	parrotRequest('indonesiaparrot')
});

app.get('/sloveniaparrot', (req, res) => {
	parrotRequest('sloveniaparrot')
});

app.get('/partyfieri', (req, res) => {
	parrotRequest('partyfieri')
});

app.get('/southkoreaparrot', (req, res) => {
	parrotRequest('southkoreaparrot')
});

app.get('/astronautparrot', (req, res) => {
	parrotRequest('astronautparrot')
});

app.get('/turkeyparrot', (req, res) => {
	parrotRequest('turkeyparrot')
});

app.get('/belarusparrot', (req, res) => {
	parrotRequest('belarusparrot')
});

app.get('/samoaparrot', (req, res) => {
	parrotRequest('samoaparrot')
});

app.get('/originalparrot', (req, res) => {
	parrotRequest('originalparrot')
});

app.get('/scienceparrot', (req, res) => {
	parrotRequest('scienceparrot')
});

app.get('/afghanistanparrot', (req, res) => {
	parrotRequest('afghanistanparrot')
});

app.get('/saintluciaparrot', (req, res) => {
	parrotRequest('saintluciaparrot')
});

app.get('/horizontalparrot', (req, res) => {
	parrotRequest('horizontalparrot')
});

app.get('/vueparrot', (req, res) => {
	parrotRequest('vueparrot')
});

app.get('/abkhaziaparrot', (req, res) => {
	parrotRequest('abkhaziaparrot')
});

app.get('/estoniaparrot', (req, res) => {
	parrotRequest('estoniaparrot')
});

app.get('/party-k8s', (req, res) => {
	parrotRequest('party-k8s')
});

app.get('/innersourceparrot', (req, res) => {
	parrotRequest('innersourceparrot')
});

app.get('/icelandparrot', (req, res) => {
	parrotRequest('icelandparrot')
});

app.get('/pakistanparrot', (req, res) => {
	parrotRequest('pakistanparrot')
});

app.get('/opensourceparrot', (req, res) => {
	parrotRequest('opensourceparrot')
});

app.get('/saudiarabiaparrot', (req, res) => {
	parrotRequest('saudiarabiaparrot')
});

app.get('/nigerparrot', (req, res) => {
	parrotRequest('nigerparrot')
});

app.get('/guyanaparrot', (req, res) => {
	parrotRequest('guyanaparrot')
});

app.get('/maskparrot', (req, res) => {
	parrotRequest('maskparrot')
});

app.get('/sintparrot', (req, res) => {
	parrotRequest('sintparrot')
});

app.get('/fijiparrot', (req, res) => {
	parrotRequest('fijiparrot')
});

app.get('/sierraleoneparrot', (req, res) => {
	parrotRequest('sierraleoneparrot')
});

app.get('/northerncyprusparrot', (req, res) => {
	parrotRequest('northerncyprusparrot')
});

app.get('/ceilingparrot', (req, res) => {
	parrotRequest('ceilingparrot')
});

app.get('/headbangingparrot', (req, res) => {
	parrotRequest('headbangingparrot')
});

app.get('/partygopher', (req, res) => {
	parrotRequest('partygopher')
});

app.get('/vanuatuparrot', (req, res) => {
	parrotRequest('vanuatuparrot')
});

app.get('/middleparrot', (req, res) => {
	parrotRequest('middleparrot')
});

app.get('/guineabissauparrot', (req, res) => {
	parrotRequest('guineabissauparrot')
});

app.get('/switzerlandparrot', (req, res) => {
	parrotRequest('switzerlandparrot')
});

app.get('/malaysiaparrot', (req, res) => {
	parrotRequest('malaysiaparrot')
});

app.get('/maltaparrot', (req, res) => {
	parrotRequest('maltaparrot')
});

app.get('/uruguayparrot', (req, res) => {
	parrotRequest('uruguayparrot')
});

app.get('/nodeparrot', (req, res) => {
	parrotRequest('nodeparrot')
});

app.get('/tuvaluparrot', (req, res) => {
	parrotRequest('tuvaluparrot')
});

app.get('/hanamiparrot', (req, res) => {
	parrotRequest('hanamiparrot')
});

app.get('/israelparrot', (req, res) => {
	parrotRequest('israelparrot')
});

app.get('/checkeredflagparrot', (req, res) => {
	parrotRequest('checkeredflagparrot')
});

app.get('/mongoliaparrot', (req, res) => {
	parrotRequest('mongoliaparrot')
});

app.get('/stayhomeparrotwindow', (req, res) => {
	parrotRequest('stayhomeparrotwindow')
});

app.get('/westernsaharaparrot', (req, res) => {
	parrotRequest('westernsaharaparrot')
});

app.get('/raceconditionparrot', (req, res) => {
	parrotRequest('raceconditionparrot')
});

app.get('/gentlemanparrot', (req, res) => {
	parrotRequest('gentlemanparrot')
});

app.get('/zambiaparrot', (req, res) => {
	parrotRequest('zambiaparrot')
});

app.get('/tanzaniaparrot', (req, res) => {
	parrotRequest('tanzaniaparrot')
});

app.get('/egyptparrot', (req, res) => {
	parrotRequest('egyptparrot')
});

app.get('/laosparrot', (req, res) => {
	parrotRequest('laosparrot')
});

app.get('/sherlockholmesparrot', (req, res) => {
	parrotRequest('sherlockholmesparrot')
});

app.get('/sushiparrot', (req, res) => {
	parrotRequest('sushiparrot')
});

app.get('/tiedyeparrot', (req, res) => {
	parrotRequest('tiedyeparrot')
});

app.get('/cryingjordanparrot', (req, res) => {
	parrotRequest('cryingjordanparrot')
});

app.get('/ecuadorparrot', (req, res) => {
	parrotRequest('ecuadorparrot')
});

app.get('/easttimorparrot', (req, res) => {
	parrotRequest('easttimorparrot')
});

app.get('/chinaparrot', (req, res) => {
	parrotRequest('chinaparrot')
});

app.get('/sleepingparrot', (req, res) => {
	parrotRequest('sleepingparrot')
});

app.get('/unitedkingdomparrot', (req, res) => {
	parrotRequest('unitedkingdomparrot')
});

app.get('/lithuaniaparrot', (req, res) => {
	parrotRequest('lithuaniaparrot')
});

app.get('/nyanparrot', (req, res) => {
	parrotRequest('nyanparrot')
});

app.get('/dealwithitparrot', (req, res) => {
	parrotRequest('dealwithitparrot')
});

app.get('/armeniaparrot', (req, res) => {
	parrotRequest('armeniaparrot')
});

app.get('/redbullparrot', (req, res) => {
	parrotRequest('redbullparrot')
});

app.get('/bruneiparrot', (req, res) => {
	parrotRequest('bruneiparrot')
});

app.get('/cambodiaparrot', (req, res) => {
	parrotRequest('cambodiaparrot')
});

app.get('/partysloth', (req, res) => {
	parrotRequest('partysloth')
});

app.get('/niueparrot', (req, res) => {
	parrotRequest('niueparrot')
});

app.get('/reverseportalblueparrot', (req, res) => {
	parrotRequest('reverseportalblueparrot')
});

app.get('/headsetparrot', (req, res) => {
	parrotRequest('headsetparrot')
});

app.get('/southafricaparrot', (req, res) => {
	parrotRequest('southafricaparrot')
});

app.get('/mergeimmediatelyparrot', (req, res) => {
	parrotRequest('mergeimmediatelyparrot')
});

app.get('/saintkittsandnevisparrot', (req, res) => {
	parrotRequest('saintkittsandnevisparrot')
});

app.get('/laptop_parrot', (req, res) => {
	parrotRequest('laptop_parrot')
});

app.get('/liechtensteinparrot', (req, res) => {
	parrotRequest('liechtensteinparrot')
});

app.get('/exceptionallyfastparrot', (req, res) => {
	parrotRequest('exceptionallyfastparrot')
});

app.get('/transnistriaparrot', (req, res) => {
	parrotRequest('transnistriaparrot')
});

app.get('/mergetrainparrot', (req, res) => {
	parrotRequest('mergetrainparrot')
});

app.get('/northern-ireland-ulster-banner', (req, res) => {
	parrotRequest('northern-ireland-ulster-banner')
});

app.get('/brazilianfanparrot', (req, res) => {
	parrotRequest('brazilianfanparrot')
});

app.get('/beerparrot', (req, res) => {
	parrotRequest('beerparrot')
});

app.get('/mauritaniaparrot', (req, res) => {
	parrotRequest('mauritaniaparrot')
});

app.get('/wendyparrot', (req, res) => {
	parrotRequest('wendyparrot')
});

app.get('/malawiparrot', (req, res) => {
	parrotRequest('malawiparrot')
});

app.get('/northkoreaparrot', (req, res) => {
	parrotRequest('northkoreaparrot')
});

app.get('/wineparrot', (req, res) => {
	parrotRequest('wineparrot')
});

app.get('/quebecparrot', (req, res) => {
	parrotRequest('quebecparrot')
});

app.get('/azerbaijanparrot', (req, res) => {
	parrotRequest('azerbaijanparrot')
});

app.get('/fasttwinsparrot', (req, res) => {
	parrotRequest('fasttwinsparrot')
});

app.get('/partyblobcat', (req, res) => {
	parrotRequest('partyblobcat')
});

app.get('/russiaparrot', (req, res) => {
	parrotRequest('russiaparrot')
});

app.get('/montenegroparrot', (req, res) => {
	parrotRequest('montenegroparrot')
});

app.get('/nepalparrot', (req, res) => {
	parrotRequest('nepalparrot')
});

app.get('/backwardsparrot', (req, res) => {
	parrotRequest('backwardsparrot')
});

app.get('/serbiaparrot', (req, res) => {
	parrotRequest('serbiaparrot')
});

app.get('/thailandparrot', (req, res) => {
	parrotRequest('thailandparrot')
});

app.get('/aussiereversecongaparrot', (req, res) => {
	parrotRequest('aussiereversecongaparrot')
});

app.get('/yosemitesamparrot', (req, res) => {
	parrotRequest('yosemitesamparrot')
});

app.get('/bugparrot', (req, res) => {
	parrotRequest('bugparrot')
});

app.get('/slowparrot', (req, res) => {
	parrotRequest('slowparrot')
});

app.get('/bobaparrot', (req, res) => {
	parrotRequest('bobaparrot')
});

app.get('/turkmenistanparrot', (req, res) => {
	parrotRequest('turkmenistanparrot')
});

app.get('/confusedparrot', (req, res) => {
	parrotRequest('confusedparrot')
});

app.get('/footballparrot', (req, res) => {
	parrotRequest('footballparrot')
});

app.get('/jamaicaparrot', (req, res) => {
	parrotRequest('jamaicaparrot')
});

app.get('/congapartyparrot', (req, res) => {
	parrotRequest('congapartyparrot')
});

app.get('/party-wizard', (req, res) => {
	parrotRequest('party-wizard')
});

app.get('/coffeeparrot', (req, res) => {
	parrotRequest('coffeeparrot')
});

app.get('/accessibleparrot', (req, res) => {
	parrotRequest('accessibleparrot')
});

app.get('/partywumpus', (req, res) => {
	parrotRequest('partywumpus')
});

app.get('/wales', (req, res) => {
	parrotRequest('wales')
});

app.get('/australiaparrot', (req, res) => {
	parrotRequest('australiaparrot')
});

app.get('/portalblueparrot', (req, res) => {
	parrotRequest('portalblueparrot')
});

app.get('/ivorycoastparrot', (req, res) => {
	parrotRequest('ivorycoastparrot')
});

app.get('/canadaparrot', (req, res) => {
	parrotRequest('canadaparrot')
});

app.get('/discoduck', (req, res) => {
	parrotRequest('discoduck')
});

app.get('/braveheartparrot', (req, res) => {
	parrotRequest('braveheartparrot')
});

app.get('/germanyparrot', (req, res) => {
	parrotRequest('germanyparrot')
});

app.get('/czechrepublicparrot', (req, res) => {
	parrotRequest('czechrepublicparrot')
});

app.get('/paraguayparrot', (req, res) => {
	parrotRequest('paraguayparrot')
});

app.get('/qatarparrot', (req, res) => {
	parrotRequest('qatarparrot')
});

app.get('/jordanparrot', (req, res) => {
	parrotRequest('jordanparrot')
});

app.get('/maracasparrot', (req, res) => {
	parrotRequest('maracasparrot')
});

app.get('/trollparrot', (req, res) => {
	parrotRequest('trollparrot')
});

app.get('/yemenparrot', (req, res) => {
	parrotRequest('yemenparrot')
});

app.get('/temporaltableparrot', (req, res) => {
	parrotRequest('temporaltableparrot')
});

app.get('/moonparrot', (req, res) => {
	parrotRequest('moonparrot')
});

app.get('/freebelarusparrot', (req, res) => {
	parrotRequest('freebelarusparrot')
});

app.get('/taiwanparrot', (req, res) => {
	parrotRequest('taiwanparrot')
});

app.get('/boliviaparrot', (req, res) => {
	parrotRequest('boliviaparrot')
});

app.get('/norwegianblueparrot', (req, res) => {
	parrotRequest('norwegianblueparrot')
});

app.get('/capsparrot', (req, res) => {
	parrotRequest('capsparrot')
});

app.get('/tinfoilhatparrot', (req, res) => {
	parrotRequest('tinfoilhatparrot')
});

app.get('/cubaparrot', (req, res) => {
	parrotRequest('cubaparrot')
});

app.get('/christmasparrot', (req, res) => {
	parrotRequest('christmasparrot')
});

app.get('/covid19parrot', (req, res) => {
	parrotRequest('covid19parrot')
});

app.get('/tpparrot', (req, res) => {
	parrotRequest('tpparrot')
});

app.get('/kosovoparrot', (req, res) => {
	parrotRequest('kosovoparrot')
});

app.get('/srilankaparrot', (req, res) => {
	parrotRequest('srilankaparrot')
});

app.get('/popcornparrot', (req, res) => {
	parrotRequest('popcornparrot')
});

app.get('/liberiaparrot', (req, res) => {
	parrotRequest('liberiaparrot')
});

app.get('/mozambiqueparrot', (req, res) => {
	parrotRequest('mozambiqueparrot')
});

app.get('/parrot', (req, res) => {
	parrotRequest('parrot')
});

app.get('/kyrgyzstanparrot', (req, res) => {
	parrotRequest('kyrgyzstanparrot')
});

app.get('/wfhparrot', (req, res) => {
	parrotRequest('wfhparrot')
});

app.get('/illuminatiparrot', (req, res) => {
	parrotRequest('illuminatiparrot')
});

app.get('/iranparrot', (req, res) => {
	parrotRequest('iranparrot')
});

app.get('/reverseportalorangeparrot', (req, res) => {
	parrotRequest('reverseportalorangeparrot')
});

app.get('/norwayparrot', (req, res) => {
	parrotRequest('norwayparrot')
});

app.get('/beretparrot', (req, res) => {
	parrotRequest('beretparrot')
});

app.get('/meldparrot', (req, res) => {
	parrotRequest('meldparrot')
});

app.get('/cakeparrot', (req, res) => {
	parrotRequest('cakeparrot')
});

app.get('/partyannoyedbird', (req, res) => {
	parrotRequest('partyannoyedbird')
});

app.get('/dadparrot', (req, res) => {
	parrotRequest('dadparrot')
});

app.get('/monacoparrot', (req, res) => {
	parrotRequest('monacoparrot')
});

app.get('/headingparrot', (req, res) => {
	parrotRequest('headingparrot')
});

app.get('/polandparrot', (req, res) => {
	parrotRequest('polandparrot')
});

app.get('/zoukparrot', (req, res) => {
	parrotRequest('zoukparrot')
});

app.get('/spyparrot', (req, res) => {
	parrotRequest('spyparrot')
});

app.get('/gambiaparrot', (req, res) => {
	parrotRequest('gambiaparrot')
});

app.get('/nicaraguaparrot', (req, res) => {
	parrotRequest('nicaraguaparrot')
});

app.get('/dominicaparrot', (req, res) => {
	parrotRequest('dominicaparrot')
});

app.get('/sneezyparrot', (req, res) => {
	parrotRequest('sneezyparrot')
});

app.get('/birthdaypartyparrot', (req, res) => {
	parrotRequest('birthdaypartyparrot')
});

app.get('/lesothoparrot', (req, res) => {
	parrotRequest('lesothoparrot')
});

app.get('/stayhomeparrotcloser', (req, res) => {
	parrotRequest('stayhomeparrotcloser')
});

app.get('/partygfm', (req, res) => {
	parrotRequest('partygfm')
});

app.get('/albaniaparrot', (req, res) => {
	parrotRequest('albaniaparrot')
});

app.get('/everythingsfineparrot', (req, res) => {
	parrotRequest('everythingsfineparrot')
});

app.get('/reactparrot', (req, res) => {
	parrotRequest('reactparrot')
});

app.get('/revolutionparrot', (req, res) => {
	parrotRequest('revolutionparrot')
});

app.get('/dailyparrot', (req, res) => {
	parrotRequest('dailyparrot')
});

app.get('/ultrafastparrot', (req, res) => {
	parrotRequest('ultrafastparrot')
});

app.get('/somalilandparrot', (req, res) => {
	parrotRequest('somalilandparrot')
});

app.get('/antiguaandbarbudaparrot', (req, res) => {
	parrotRequest('antiguaandbarbudaparrot')
});

app.get('/partyblob', (req, res) => {
	parrotRequest('partyblob')
});

app.get('/zimbabweparrot', (req, res) => {
	parrotRequest('zimbabweparrot')
});

app.get('/djiboutiparrot', (req, res) => {
	parrotRequest('djiboutiparrot')
});

app.get('/soccerparrot', (req, res) => {
	parrotRequest('soccerparrot')
});

app.get('/dealwithitnowparrot', (req, res) => {
	parrotRequest('dealwithitnowparrot')
});

app.get('/southsudanparrot', (req, res) => {
	parrotRequest('southsudanparrot')
});

app.get('/mergeconflictparrot', (req, res) => {
	parrotRequest('mergeconflictparrot')
});

app.get('/burkinafasoparrot', (req, res) => {
	parrotRequest('burkinafasoparrot')
});

app.get('/mateparrot', (req, res) => {
	parrotRequest('mateparrot')
});

app.get('/chicoparrot', (req, res) => {
	parrotRequest('chicoparrot')
});

app.get('/kazakhstanparrot', (req, res) => {
	parrotRequest('kazakhstanparrot')
});

app.get('/calvinist_parrot', (req, res) => {
	parrotRequest('calvinist_parrot')
});

app.get('/aussiecongaparrot', (req, res) => {
	parrotRequest('aussiecongaparrot')
});

app.get('/brazilparrot', (req, res) => {
	parrotRequest('brazilparrot')
});

app.get('/greekmacedoniaparrot', (req, res) => {
	parrotRequest('greekmacedoniaparrot')
});

app.get('/angelparrot', (req, res) => {
	parrotRequest('angelparrot')
});

app.get('/partypicard', (req, res) => {
	parrotRequest('partypicard')
});

app.get('/deletedparrot', (req, res) => {
	parrotRequest('deletedparrot')
});

app.get('/costaricaparrot', (req, res) => {
	parrotRequest('costaricaparrot')
});

app.get('/glimpseparrot', (req, res) => {
	parrotRequest('glimpseparrot')
});

app.get('/reverseparrot', (req, res) => {
	parrotRequest('reverseparrot')
});

app.get('/scotland', (req, res) => {
	parrotRequest('scotland')
});

app.get('/zombieparrot', (req, res) => {
	parrotRequest('zombieparrot')
});

app.get('/chefparrot', (req, res) => {
	parrotRequest('chefparrot')
});

app.get('/uzbekistanparrot', (req, res) => {
	parrotRequest('uzbekistanparrot')
});

app.get('/unitedstatesofamericaparrot', (req, res) => {
	parrotRequest('unitedstatesofamericaparrot')
});

app.get('/hackerparrot', (req, res) => {
	parrotRequest('hackerparrot')
});

app.get('/belizeparrot', (req, res) => {
	parrotRequest('belizeparrot')
});

app.get('/hmmparrot', (req, res) => {
	parrotRequest('hmmparrot')
});

app.get('/irelandparrot', (req, res) => {
	parrotRequest('irelandparrot')
});

app.get('/omanparrot', (req, res) => {
	parrotRequest('omanparrot')
});

app.get('/barbadosparrot', (req, res) => {
	parrotRequest('barbadosparrot')
});

app.get('/pingpongparrot', (req, res) => {
	parrotRequest('pingpongparrot')
});

app.get('/invisibleparrot', (req, res) => {
	parrotRequest('invisibleparrot')
});

app.get('/stableparrot', (req, res) => {
	parrotRequest('stableparrot')
});

app.get('/prideparrot', (req, res) => {
	parrotRequest('prideparrot')
});

app.get('/bunnyparrot', (req, res) => {
	parrotRequest('bunnyparrot')
});

app.get('/old-man-yells-at-parrot', (req, res) => {
	parrotRequest('old-man-yells-at-parrot')
});

app.get('/transparrot', (req, res) => {
	parrotRequest('transparrot')
});

app.get('/hungaryparrot', (req, res) => {
	parrotRequest('hungaryparrot')
});

app.get('/somaliaparrot', (req, res) => {
	parrotRequest('somaliaparrot')
});

app.get('/eritreaparrot', (req, res) => {
	parrotRequest('eritreaparrot')
});

app.get('/transparront', (req, res) => {
	parrotRequest('transparront')
});

app.get('/kuwaitparrot', (req, res) => {
	parrotRequest('kuwaitparrot')
});

app.get('/donutparrot', (req, res) => {
	parrotRequest('donutparrot')
});

app.get('/marshmallowparrot', (req, res) => {
	parrotRequest('marshmallowparrot')
});

app.get('/thankyouparrot', (req, res) => {
	parrotRequest('thankyouparrot')
});

app.get('/shortparrot', (req, res) => {
	parrotRequest('shortparrot')
});

app.get('/falklandislandsparrot', (req, res) => {
	parrotRequest('falklandislandsparrot')
});

app.get('/belgiumparrot', (req, res) => {
	parrotRequest('belgiumparrot')
});

app.get('/nigeriaparrot', (req, res) => {
	parrotRequest('nigeriaparrot')
});

app.get('/inverseparrot', (req, res) => {
	parrotRequest('inverseparrot')
});

app.get('/swedenparrot', (req, res) => {
	parrotRequest('swedenparrot')
});

app.get('/denmarkparrot', (req, res) => {
	parrotRequest('denmarkparrot')
});

app.get('/partykeanu', (req, res) => {
	parrotRequest('partykeanu')
});

app.get('/botswanaparrot', (req, res) => {
	parrotRequest('botswanaparrot')
});

app.get('/croatiaparrot', (req, res) => {
	parrotRequest('croatiaparrot')
});

app.get('/maldivesparrot', (req, res) => {
	parrotRequest('maldivesparrot')
});

app.get('/reversecongaparrot', (req, res) => {
	parrotRequest('reversecongaparrot')
});

app.get('/madagascarparrot', (req, res) => {
	parrotRequest('madagascarparrot')
});

app.get('/equatorialguineaparrot', (req, res) => {
	parrotRequest('equatorialguineaparrot')
});

app.get('/bahrainparrot', (req, res) => {
	parrotRequest('bahrainparrot')
});

app.get('/jediparrot', (req, res) => {
	parrotRequest('jediparrot')
});

app.get('/discoparrot', (req, res) => {
	parrotRequest('discoparrot')
});

app.get('/partygritty', (req, res) => {
	parrotRequest('partygritty')
});

app.get('/grenadaparrot', (req, res) => {
	parrotRequest('grenadaparrot')
});

app.get('/michaeljacksonparrot', (req, res) => {
	parrotRequest('michaeljacksonparrot')
});

app.get('/netherlandsparrot', (req, res) => {
	parrotRequest('netherlandsparrot')
});

app.get('/redhatparrot', (req, res) => {
	parrotRequest('redhatparrot')
});

app.get('/micronesiaparrot', (req, res) => {
	parrotRequest('micronesiaparrot')
});

app.get('/chileparrot', (req, res) => {
	parrotRequest('chileparrot')
});

app.get('/libyaparrot', (req, res) => {
	parrotRequest('libyaparrot')
});

app.get('/chadparrot', (req, res) => {
	parrotRequest('chadparrot')
});

app.get('/pirateparrot', (req, res) => {
	parrotRequest('pirateparrot')
});

app.get('/resonatingredparrot', (req, res) => {
	parrotRequest('resonatingredparrot')
});

app.get('/stayhomeparrot', (req, res) => {
	parrotRequest('stayhomeparrot')
});

app.get('/chefkissparrot', (req, res) => {
	parrotRequest('chefkissparrot')
});

app.get('/republicofthecongoparrot', (req, res) => {
	parrotRequest('republicofthecongoparrot')
});

app.get('/grouchoparrot', (req, res) => {
	parrotRequest('grouchoparrot')
});

app.get('/mustacheparrot', (req, res) => {
	parrotRequest('mustacheparrot')
});

app.get('/northern-ireland-st-patricks-saltire', (req, res) => {
	parrotRequest('northern-ireland-st-patricks-saltire')
});

app.get('/bikerparrot', (req, res) => {
	parrotRequest('bikerparrot')
});

app.get('/finlandparrot', (req, res) => {
	parrotRequest('finlandparrot')
});

app.get('/hypnoparrotlight', (req, res) => {
	parrotRequest('hypnoparrotlight')
});

app.get('/darkmodeparrot', (req, res) => {
	parrotRequest('darkmodeparrot')
});

app.get('/franceparrot', (req, res) => {
	parrotRequest('franceparrot')
});

app.get('/copparrot', (req, res) => {
	parrotRequest('copparrot')
});

app.get('/rubyparrot', (req, res) => {
	parrotRequest('rubyparrot')
});

app.get('/euparrot', (req, res) => {
	parrotRequest('euparrot')
});

app.get('/blurryparrot', (req, res) => {
	parrotRequest('blurryparrot')
});

app.get('/whitewalkerparrot', (req, res) => {
	parrotRequest('whitewalkerparrot')
});

app.get('/senegalparrot', (req, res) => {
	parrotRequest('senegalparrot')
});

app.get('/kiribatiparrot', (req, res) => {
	parrotRequest('kiribatiparrot')
});

app.get('/thumbsupparrot', (req, res) => {
	parrotRequest('thumbsupparrot')
});

app.get('/turndownforwatchparrot', (req, res) => {
	parrotRequest('turndownforwatchparrot')
});

app.get('/puertoricoparrot', (req, res) => {
	parrotRequest('puertoricoparrot')
});

app.get('/badparrot', (req, res) => {
	parrotRequest('badparrot')
});

app.get('/bangladeshparrot', (req, res) => {
	parrotRequest('bangladeshparrot')
});

app.get('/england', (req, res) => {
	parrotRequest('england')
});

app.get('/partyfsjal', (req, res) => {
	parrotRequest('partyfsjal')
});

app.get('/capeverdeparrot', (req, res) => {
	parrotRequest('capeverdeparrot')
});

app.get('/venezuelaparrot', (req, res) => {
	parrotRequest('venezuelaparrot')
});

app.get('/vibepartycat', (req, res) => {
	parrotRequest('vibepartycat')
});

app.get('/peruparrot', (req, res) => {
	parrotRequest('peruparrot')
});

app.get('/parrotnotfound', (req, res) => {
	parrotRequest('parrotnotfound')
});

app.get('/beninparrot', (req, res) => {
	parrotRequest('beninparrot')
});

app.get('/ethiopiaparrot', (req, res) => {
	parrotRequest('ethiopiaparrot')
});

app.get('/algeriaparrot', (req, res) => {
	parrotRequest('algeriaparrot')
});

app.get('/witnessprotectionparrot', (req, res) => {
	parrotRequest('witnessprotectionparrot')
});

app.get('/andorraparrot', (req, res) => {
	parrotRequest('andorraparrot')
});

app.get('/unitedarabemiratesparrot', (req, res) => {
	parrotRequest('unitedarabemiratesparrot')
});

app.get('/dogeparrot', (req, res) => {
	parrotRequest('dogeparrot')
});

app.get('/slovakiaparrot', (req, res) => {
	parrotRequest('slovakiaparrot')
});

app.get('/nauruparrot', (req, res) => {
	parrotRequest('nauruparrot')
});

app.get('/saotomeandprincipeparrot', (req, res) => {
	parrotRequest('saotomeandprincipeparrot')
});

app.get('/hongkongparrot', (req, res) => {
	parrotRequest('hongkongparrot')
});

app.get('/namibiaparrot', (req, res) => {
	parrotRequest('namibiaparrot')
});

app.get('/solomonislandsparrot', (req, res) => {
	parrotRequest('solomonislandsparrot')
});

app.get('/60fpsparrot', (req, res) => {
	parrotRequest('60fpsparrot')
});

app.get('/sassyparrot', (req, res) => {
	parrotRequest('sassyparrot')
});

app.get('/thefastestparrot', (req, res) => {
	parrotRequest('thefastestparrot')
});

app.get('/hardhatparrot', (req, res) => {
	parrotRequest('hardhatparrot')
});

app.get('/preetjusticeparrot', (req, res) => {
	parrotRequest('preetjusticeparrot')
});

app.get('/partymoogle', (req, res) => {
	parrotRequest('partymoogle')
});

app.get('/saintvincentandthegrenadinesparrot', (req, res) => {
	parrotRequest('saintvincentandthegrenadinesparrot')
});

app.get('/burundiparrot', (req, res) => {
	parrotRequest('burundiparrot')
});

app.get('/portugalparrot', (req, res) => {
	parrotRequest('portugalparrot')
});

app.get('/indiaparrot', (req, res) => {
	parrotRequest('indiaparrot')
});

app.get('/tongaparrot', (req, res) => {
	parrotRequest('tongaparrot')
});

app.get('/artsakhparrot', (req, res) => {
	parrotRequest('artsakhparrot')
});

app.get('/greeceparrot', (req, res) => {
	parrotRequest('greeceparrot')
});

app.get('/flowerparrot', (req, res) => {
	parrotRequest('flowerparrot')
});

app.get('/twinsparrot', (req, res) => {
	parrotRequest('twinsparrot')
});

app.get('/spinningparrot', (req, res) => {
	parrotRequest('spinningparrot')
});

app.get('/tunisiaparrot', (req, res) => {
	parrotRequest('tunisiaparrot')
});

app.get('/ugandaparrot', (req, res) => {
	parrotRequest('ugandaparrot')
});

app.get('/eswatiniparrot', (req, res) => {
	parrotRequest('eswatiniparrot')
});

app.get('/seychellesparrot', (req, res) => {
	parrotRequest('seychellesparrot')
});

app.get('/macauparrot', (req, res) => {
	parrotRequest('macauparrot')
});

app.get('/comorosparrot', (req, res) => {
	parrotRequest('comorosparrot')
});

app.get('/tennisparrot', (req, res) => {
	parrotRequest('tennisparrot')
});

app.get('/mauritiusparrot', (req, res) => {
	parrotRequest('mauritiusparrot')
});

app.get('/angolaparrot', (req, res) => {
	parrotRequest('angolaparrot')
});

app.get('/greenlandparrot', (req, res) => {
	parrotRequest('greenlandparrot')
});

app.get('/brazilianplayerparrot', (req, res) => {
	parrotRequest('brazilianplayerparrot')
});

app.get('/democraticrepublicofthecongoparrot', (req, res) => {
	parrotRequest('democraticrepublicofthecongoparrot')
});

app.get('/sidewaysparrot', (req, res) => {
	parrotRequest('sidewaysparrot')
});

app.get('/moldovaparrot', (req, res) => {
	parrotRequest('moldovaparrot')
});

app.get('/bouncingparrot', (req, res) => {
	parrotRequest('bouncingparrot')
});

app.get('/ghanaparrot', (req, res) => {
	parrotRequest('ghanaparrot')
});

app.get('/ripparrot', (req, res) => {
	parrotRequest('ripparrot')
});

app.get('/antarcticaparrot', (req, res) => {
	parrotRequest('antarcticaparrot')
});

app.get('/mardigrasparrot', (req, res) => {
	parrotRequest('mardigrasparrot')
});

app.get('/mexicoparrot', (req, res) => {
	parrotRequest('mexicoparrot')
});

app.get('/centralafricanrepublicparrot', (req, res) => {
	parrotRequest('centralafricanrepublicparrot')
});

app.get('/syriaparrot', (req, res) => {
	parrotRequest('syriaparrot')
});

app.get('/southossetiaparrot', (req, res) => {
	parrotRequest('southossetiaparrot')
});

app.get('/iraqparrot', (req, res) => {
	parrotRequest('iraqparrot')
});

app.get('/evilparrot', (req, res) => {
	parrotRequest('evilparrot')
});

app.get('/georgiaparrot', (req, res) => {
	parrotRequest('georgiaparrot')
});

app.get('/phparrot', (req, res) => {
	parrotRequest('phparrot')
});

app.get('/vaticancityparrot', (req, res) => {
	parrotRequest('vaticancityparrot')
});

app.get('/spainparrot', (req, res) => {
	parrotRequest('spainparrot')
});

app.get('/githubparrot', (req, res) => {
	parrotRequest('githubparrot')
});

app.get('/kenyaparrot', (req, res) => {
	parrotRequest('kenyaparrot')
});

app.get('/unicornparrot', (req, res) => {
	parrotRequest('unicornparrot')
});

app.get('/playcatchrightparrot', (req, res) => {
	parrotRequest('playcatchrightparrot')
});

app.get('/hypnoparrot', (req, res) => {
	parrotRequest('hypnoparrot')
});

app.get('/palestineparrot', (req, res) => {
	parrotRequest('palestineparrot')
});

app.get('/verticalparrot', (req, res) => {
	parrotRequest('verticalparrot')
});

app.get('/colombiaparrot', (req, res) => {
	parrotRequest('colombiaparrot')
});

app.get('/moonwalkingparrot', (req, res) => {
	parrotRequest('moonwalkingparrot')
});

app.get('/autonomousparrot', (req, res) => {
	parrotRequest('autonomousparrot')
});app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});