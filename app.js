const express = require('express');
const fs = require('fs');
const app = express();
const port = 80;app.get('/', (req, res) => {
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
	parrotRequest('balconyparrot', req, res)
});

app.get('/bulgariaparrot', (req, res) => {
	parrotRequest('bulgariaparrot', req, res)
});

app.get('/partycage', (req, res) => {
	parrotRequest('partycage', req, res)
});

app.get('/jumpingparrot', (req, res) => {
	parrotRequest('jumpingparrot', req, res)
});

app.get('/northmacedoniaparrot', (req, res) => {
	parrotRequest('northmacedoniaparrot', req, res)
});

app.get('/singaporeparrot', (req, res) => {
	parrotRequest('singaporeparrot', req, res)
});

app.get('/vaccineparrot', (req, res) => {
	parrotRequest('vaccineparrot', req, res)
});

app.get('/sudanparrot', (req, res) => {
	parrotRequest('sudanparrot', req, res)
});

app.get('/gabonparrot', (req, res) => {
	parrotRequest('gabonparrot', req, res)
});

app.get('/italyparrot', (req, res) => {
	parrotRequest('italyparrot', req, res)
});

app.get('/hondurasparrot', (req, res) => {
	parrotRequest('hondurasparrot', req, res)
});

app.get('/luxembourgparrot', (req, res) => {
	parrotRequest('luxembourgparrot', req, res)
});

app.get('/stubparrot', (req, res) => {
	parrotRequest('stubparrot', req, res)
});

app.get('/rwandaparrot', (req, res) => {
	parrotRequest('rwandaparrot', req, res)
});

app.get('/cameroonparrot', (req, res) => {
	parrotRequest('cameroonparrot', req, res)
});

app.get('/surinameparrot', (req, res) => {
	parrotRequest('surinameparrot', req, res)
});

app.get('/romaniaparrot', (req, res) => {
	parrotRequest('romaniaparrot', req, res)
});

app.get('/bahamasparrot', (req, res) => {
	parrotRequest('bahamasparrot', req, res)
});

app.get('/partytux', (req, res) => {
	parrotRequest('partytux', req, res)
});

app.get('/elsalvadorparrot', (req, res) => {
	parrotRequest('elsalvadorparrot', req, res)
});

app.get('/vietnamparrot', (req, res) => {
	parrotRequest('vietnamparrot', req, res)
});

app.get('/rythmicalparrot', (req, res) => {
	parrotRequest('rythmicalparrot', req, res)
});

app.get('/bluntparrot', (req, res) => {
	parrotRequest('bluntparrot', req, res)
});

app.get('/flyingmoneyparrot', (req, res) => {
	parrotRequest('flyingmoneyparrot', req, res)
});

app.get('/cyprusparrot', (req, res) => {
	parrotRequest('cyprusparrot', req, res)
});

app.get('/biparrot', (req, res) => {
	parrotRequest('biparrot', req, res)
});

app.get('/palauparrot', (req, res) => {
	parrotRequest('palauparrot', req, res)
});

app.get('/portalorangeparrot', (req, res) => {
	parrotRequest('portalorangeparrot', req, res)
});

app.get('/hypnoparrotdark', (req, res) => {
	parrotRequest('hypnoparrotdark', req, res)
});

app.get('/vacationparrot', (req, res) => {
	parrotRequest('vacationparrot', req, res)
});

app.get('/argentinaparrot', (req, res) => {
	parrotRequest('argentinaparrot', req, res)
});

app.get('/bhutanparrot', (req, res) => {
	parrotRequest('bhutanparrot', req, res)
});

app.get('/gothparrot', (req, res) => {
	parrotRequest('gothparrot', req, res)
});

app.get('/guatemalaparrot', (req, res) => {
	parrotRequest('guatemalaparrot', req, res)
});

app.get('/trinidadandtobagoparrot', (req, res) => {
	parrotRequest('trinidadandtobagoparrot', req, res)
});

app.get('/vikingparrot', (req, res) => {
	parrotRequest('vikingparrot', req, res)
});

app.get('/dominicanrepublicparrot', (req, res) => {
	parrotRequest('dominicanrepublicparrot', req, res)
});

app.get('/docparrot', (req, res) => {
	parrotRequest('docparrot', req, res)
});

app.get('/boredparrot', (req, res) => {
	parrotRequest('boredparrot', req, res)
});

app.get('/panamaparrot', (req, res) => {
	parrotRequest('panamaparrot', req, res)
});

app.get('/picassoparrot', (req, res) => {
	parrotRequest('picassoparrot', req, res)
});

app.get('/jumpingparrotjr', (req, res) => {
	parrotRequest('jumpingparrotjr', req, res)
});

app.get('/staytfhomeparrot', (req, res) => {
	parrotRequest('staytfhomeparrot', req, res)
});

app.get('/moroccoparrot', (req, res) => {
	parrotRequest('moroccoparrot', req, res)
});

app.get('/maliparrot', (req, res) => {
	parrotRequest('maliparrot', req, res)
});

app.get('/pumpkinparrot', (req, res) => {
	parrotRequest('pumpkinparrot', req, res)
});

app.get('/newzealandparrot', (req, res) => {
	parrotRequest('newzealandparrot', req, res)
});

app.get('/quadparrot', (req, res) => {
	parrotRequest('quadparrot', req, res)
});

app.get('/kindasusparrot', (req, res) => {
	parrotRequest('kindasusparrot', req, res)
});

app.get('/shuffleparrot', (req, res) => {
	parrotRequest('shuffleparrot', req, res)
});

app.get('/cookislandsparrot', (req, res) => {
	parrotRequest('cookislandsparrot', req, res)
});

app.get('/gumiparrot', (req, res) => {
	parrotRequest('gumiparrot', req, res)
});

app.get('/angryparrot', (req, res) => {
	parrotRequest('angryparrot', req, res)
});

app.get('/haitiparrot', (req, res) => {
	parrotRequest('haitiparrot', req, res)
});

app.get('/playcatchleftparrot', (req, res) => {
	parrotRequest('playcatchleftparrot', req, res)
});

app.get('/marshallislandsparrot', (req, res) => {
	parrotRequest('marshallislandsparrot', req, res)
});

app.get('/sithparrot', (req, res) => {
	parrotRequest('sithparrot', req, res)
});

app.get('/frenchparrot', (req, res) => {
	parrotRequest('frenchparrot', req, res)
});

app.get('/fastparrot', (req, res) => {
	parrotRequest('fastparrot', req, res)
});

app.get('/bootlegparrot', (req, res) => {
	parrotRequest('bootlegparrot', req, res)
});

app.get('/papuanewguineaparrot', (req, res) => {
	parrotRequest('papuanewguineaparrot', req, res)
});

app.get('/austriaparrot', (req, res) => {
	parrotRequest('austriaparrot', req, res)
});

app.get('/togoparrot', (req, res) => {
	parrotRequest('togoparrot', req, res)
});

app.get('/batparrot', (req, res) => {
	parrotRequest('batparrot', req, res)
});

app.get('/thisisfineparrot', (req, res) => {
	parrotRequest('thisisfineparrot', req, res)
});

app.get('/philippinesparrot', (req, res) => {
	parrotRequest('philippinesparrot', req, res)
});

app.get('/pokeparrot', (req, res) => {
	parrotRequest('pokeparrot', req, res)
});

app.get('/parrotpoop', (req, res) => {
	parrotRequest('parrotpoop', req, res)
});

app.get('/aussieparrot', (req, res) => {
	parrotRequest('aussieparrot', req, res)
});

app.get('/levitationparrot', (req, res) => {
	parrotRequest('levitationparrot', req, res)
});

app.get('/myanmarparrot', (req, res) => {
	parrotRequest('myanmarparrot', req, res)
});

app.get('/bosniaandherzegovinaparrot', (req, res) => {
	parrotRequest('bosniaandherzegovinaparrot', req, res)
});

app.get('/harpoparrot', (req, res) => {
	parrotRequest('harpoparrot', req, res)
});

app.get('/imposterparrot', (req, res) => {
	parrotRequest('imposterparrot', req, res)
});

app.get('/croissantparrot', (req, res) => {
	parrotRequest('croissantparrot', req, res)
});

app.get('/tajikistanparrot', (req, res) => {
	parrotRequest('tajikistanparrot', req, res)
});

app.get('/ukraineparrot', (req, res) => {
	parrotRequest('ukraineparrot', req, res)
});

app.get('/guineaparrot', (req, res) => {
	parrotRequest('guineaparrot', req, res)
});

app.get('/congaparrot', (req, res) => {
	parrotRequest('congaparrot', req, res)
});

app.get('/sahrawiarabdemocraticrepublicparrot', (req, res) => {
	parrotRequest('sahrawiarabdemocraticrepublicparrot', req, res)
});

app.get('/partygeeko', (req, res) => {
	parrotRequest('partygeeko', req, res)
});

app.get('/sadparrot', (req, res) => {
	parrotRequest('sadparrot', req, res)
});

app.get('/japanparrot', (req, res) => {
	parrotRequest('japanparrot', req, res)
});

app.get('/partyparrot', (req, res) => {
	parrotRequest('partyparrot', req, res)
});

app.get('/latviaparrot', (req, res) => {
	parrotRequest('latviaparrot', req, res)
});

app.get('/daftpunkparrot', (req, res) => {
	parrotRequest('daftpunkparrot', req, res)
});

app.get('/boomparrot', (req, res) => {
	parrotRequest('boomparrot', req, res)
});

app.get('/lebanonparrot', (req, res) => {
	parrotRequest('lebanonparrot', req, res)
});

app.get('/sanmarinoparrot', (req, res) => {
	parrotRequest('sanmarinoparrot', req, res)
});

app.get('/redenvelopeparrot', (req, res) => {
	parrotRequest('redenvelopeparrot', req, res)
});

app.get('/indonesiaparrot', (req, res) => {
	parrotRequest('indonesiaparrot', req, res)
});

app.get('/sloveniaparrot', (req, res) => {
	parrotRequest('sloveniaparrot', req, res)
});

app.get('/partyfieri', (req, res) => {
	parrotRequest('partyfieri', req, res)
});

app.get('/southkoreaparrot', (req, res) => {
	parrotRequest('southkoreaparrot', req, res)
});

app.get('/astronautparrot', (req, res) => {
	parrotRequest('astronautparrot', req, res)
});

app.get('/turkeyparrot', (req, res) => {
	parrotRequest('turkeyparrot', req, res)
});

app.get('/belarusparrot', (req, res) => {
	parrotRequest('belarusparrot', req, res)
});

app.get('/samoaparrot', (req, res) => {
	parrotRequest('samoaparrot', req, res)
});

app.get('/originalparrot', (req, res) => {
	parrotRequest('originalparrot', req, res)
});

app.get('/scienceparrot', (req, res) => {
	parrotRequest('scienceparrot', req, res)
});

app.get('/afghanistanparrot', (req, res) => {
	parrotRequest('afghanistanparrot', req, res)
});

app.get('/saintluciaparrot', (req, res) => {
	parrotRequest('saintluciaparrot', req, res)
});

app.get('/horizontalparrot', (req, res) => {
	parrotRequest('horizontalparrot', req, res)
});

app.get('/vueparrot', (req, res) => {
	parrotRequest('vueparrot', req, res)
});

app.get('/abkhaziaparrot', (req, res) => {
	parrotRequest('abkhaziaparrot', req, res)
});

app.get('/estoniaparrot', (req, res) => {
	parrotRequest('estoniaparrot', req, res)
});

app.get('/party-k8s', (req, res) => {
	parrotRequest('party-k8s', req, res)
});

app.get('/innersourceparrot', (req, res) => {
	parrotRequest('innersourceparrot', req, res)
});

app.get('/icelandparrot', (req, res) => {
	parrotRequest('icelandparrot', req, res)
});

app.get('/pakistanparrot', (req, res) => {
	parrotRequest('pakistanparrot', req, res)
});

app.get('/opensourceparrot', (req, res) => {
	parrotRequest('opensourceparrot', req, res)
});

app.get('/saudiarabiaparrot', (req, res) => {
	parrotRequest('saudiarabiaparrot', req, res)
});

app.get('/nigerparrot', (req, res) => {
	parrotRequest('nigerparrot', req, res)
});

app.get('/guyanaparrot', (req, res) => {
	parrotRequest('guyanaparrot', req, res)
});

app.get('/maskparrot', (req, res) => {
	parrotRequest('maskparrot', req, res)
});

app.get('/sintparrot', (req, res) => {
	parrotRequest('sintparrot', req, res)
});

app.get('/fijiparrot', (req, res) => {
	parrotRequest('fijiparrot', req, res)
});

app.get('/sierraleoneparrot', (req, res) => {
	parrotRequest('sierraleoneparrot', req, res)
});

app.get('/northerncyprusparrot', (req, res) => {
	parrotRequest('northerncyprusparrot', req, res)
});

app.get('/ceilingparrot', (req, res) => {
	parrotRequest('ceilingparrot', req, res)
});

app.get('/headbangingparrot', (req, res) => {
	parrotRequest('headbangingparrot', req, res)
});

app.get('/partygopher', (req, res) => {
	parrotRequest('partygopher', req, res)
});

app.get('/vanuatuparrot', (req, res) => {
	parrotRequest('vanuatuparrot', req, res)
});

app.get('/middleparrot', (req, res) => {
	parrotRequest('middleparrot', req, res)
});

app.get('/guineabissauparrot', (req, res) => {
	parrotRequest('guineabissauparrot', req, res)
});

app.get('/switzerlandparrot', (req, res) => {
	parrotRequest('switzerlandparrot', req, res)
});

app.get('/malaysiaparrot', (req, res) => {
	parrotRequest('malaysiaparrot', req, res)
});

app.get('/maltaparrot', (req, res) => {
	parrotRequest('maltaparrot', req, res)
});

app.get('/uruguayparrot', (req, res) => {
	parrotRequest('uruguayparrot', req, res)
});

app.get('/nodeparrot', (req, res) => {
	parrotRequest('nodeparrot', req, res)
});

app.get('/tuvaluparrot', (req, res) => {
	parrotRequest('tuvaluparrot', req, res)
});

app.get('/hanamiparrot', (req, res) => {
	parrotRequest('hanamiparrot', req, res)
});

app.get('/israelparrot', (req, res) => {
	parrotRequest('israelparrot', req, res)
});

app.get('/checkeredflagparrot', (req, res) => {
	parrotRequest('checkeredflagparrot', req, res)
});

app.get('/mongoliaparrot', (req, res) => {
	parrotRequest('mongoliaparrot', req, res)
});

app.get('/stayhomeparrotwindow', (req, res) => {
	parrotRequest('stayhomeparrotwindow', req, res)
});

app.get('/westernsaharaparrot', (req, res) => {
	parrotRequest('westernsaharaparrot', req, res)
});

app.get('/raceconditionparrot', (req, res) => {
	parrotRequest('raceconditionparrot', req, res)
});

app.get('/gentlemanparrot', (req, res) => {
	parrotRequest('gentlemanparrot', req, res)
});

app.get('/zambiaparrot', (req, res) => {
	parrotRequest('zambiaparrot', req, res)
});

app.get('/tanzaniaparrot', (req, res) => {
	parrotRequest('tanzaniaparrot', req, res)
});

app.get('/egyptparrot', (req, res) => {
	parrotRequest('egyptparrot', req, res)
});

app.get('/laosparrot', (req, res) => {
	parrotRequest('laosparrot', req, res)
});

app.get('/sherlockholmesparrot', (req, res) => {
	parrotRequest('sherlockholmesparrot', req, res)
});

app.get('/sushiparrot', (req, res) => {
	parrotRequest('sushiparrot', req, res)
});

app.get('/tiedyeparrot', (req, res) => {
	parrotRequest('tiedyeparrot', req, res)
});

app.get('/cryingjordanparrot', (req, res) => {
	parrotRequest('cryingjordanparrot', req, res)
});

app.get('/ecuadorparrot', (req, res) => {
	parrotRequest('ecuadorparrot', req, res)
});

app.get('/easttimorparrot', (req, res) => {
	parrotRequest('easttimorparrot', req, res)
});

app.get('/chinaparrot', (req, res) => {
	parrotRequest('chinaparrot', req, res)
});

app.get('/sleepingparrot', (req, res) => {
	parrotRequest('sleepingparrot', req, res)
});

app.get('/unitedkingdomparrot', (req, res) => {
	parrotRequest('unitedkingdomparrot', req, res)
});

app.get('/lithuaniaparrot', (req, res) => {
	parrotRequest('lithuaniaparrot', req, res)
});

app.get('/nyanparrot', (req, res) => {
	parrotRequest('nyanparrot', req, res)
});

app.get('/dealwithitparrot', (req, res) => {
	parrotRequest('dealwithitparrot', req, res)
});

app.get('/armeniaparrot', (req, res) => {
	parrotRequest('armeniaparrot', req, res)
});

app.get('/redbullparrot', (req, res) => {
	parrotRequest('redbullparrot', req, res)
});

app.get('/bruneiparrot', (req, res) => {
	parrotRequest('bruneiparrot', req, res)
});

app.get('/cambodiaparrot', (req, res) => {
	parrotRequest('cambodiaparrot', req, res)
});

app.get('/partysloth', (req, res) => {
	parrotRequest('partysloth', req, res)
});

app.get('/niueparrot', (req, res) => {
	parrotRequest('niueparrot', req, res)
});

app.get('/reverseportalblueparrot', (req, res) => {
	parrotRequest('reverseportalblueparrot', req, res)
});

app.get('/headsetparrot', (req, res) => {
	parrotRequest('headsetparrot', req, res)
});

app.get('/southafricaparrot', (req, res) => {
	parrotRequest('southafricaparrot', req, res)
});

app.get('/mergeimmediatelyparrot', (req, res) => {
	parrotRequest('mergeimmediatelyparrot', req, res)
});

app.get('/saintkittsandnevisparrot', (req, res) => {
	parrotRequest('saintkittsandnevisparrot', req, res)
});

app.get('/laptop_parrot', (req, res) => {
	parrotRequest('laptop_parrot', req, res)
});

app.get('/liechtensteinparrot', (req, res) => {
	parrotRequest('liechtensteinparrot', req, res)
});

app.get('/exceptionallyfastparrot', (req, res) => {
	parrotRequest('exceptionallyfastparrot', req, res)
});

app.get('/transnistriaparrot', (req, res) => {
	parrotRequest('transnistriaparrot', req, res)
});

app.get('/mergetrainparrot', (req, res) => {
	parrotRequest('mergetrainparrot', req, res)
});

app.get('/northern-ireland-ulster-banner', (req, res) => {
	parrotRequest('northern-ireland-ulster-banner', req, res)
});

app.get('/brazilianfanparrot', (req, res) => {
	parrotRequest('brazilianfanparrot', req, res)
});

app.get('/beerparrot', (req, res) => {
	parrotRequest('beerparrot', req, res)
});

app.get('/mauritaniaparrot', (req, res) => {
	parrotRequest('mauritaniaparrot', req, res)
});

app.get('/wendyparrot', (req, res) => {
	parrotRequest('wendyparrot', req, res)
});

app.get('/malawiparrot', (req, res) => {
	parrotRequest('malawiparrot', req, res)
});

app.get('/northkoreaparrot', (req, res) => {
	parrotRequest('northkoreaparrot', req, res)
});

app.get('/wineparrot', (req, res) => {
	parrotRequest('wineparrot', req, res)
});

app.get('/quebecparrot', (req, res) => {
	parrotRequest('quebecparrot', req, res)
});

app.get('/azerbaijanparrot', (req, res) => {
	parrotRequest('azerbaijanparrot', req, res)
});

app.get('/fasttwinsparrot', (req, res) => {
	parrotRequest('fasttwinsparrot', req, res)
});

app.get('/partyblobcat', (req, res) => {
	parrotRequest('partyblobcat', req, res)
});

app.get('/russiaparrot', (req, res) => {
	parrotRequest('russiaparrot', req, res)
});

app.get('/montenegroparrot', (req, res) => {
	parrotRequest('montenegroparrot', req, res)
});

app.get('/nepalparrot', (req, res) => {
	parrotRequest('nepalparrot', req, res)
});

app.get('/backwardsparrot', (req, res) => {
	parrotRequest('backwardsparrot', req, res)
});

app.get('/serbiaparrot', (req, res) => {
	parrotRequest('serbiaparrot', req, res)
});

app.get('/thailandparrot', (req, res) => {
	parrotRequest('thailandparrot', req, res)
});

app.get('/aussiereversecongaparrot', (req, res) => {
	parrotRequest('aussiereversecongaparrot', req, res)
});

app.get('/yosemitesamparrot', (req, res) => {
	parrotRequest('yosemitesamparrot', req, res)
});

app.get('/bugparrot', (req, res) => {
	parrotRequest('bugparrot', req, res)
});

app.get('/slowparrot', (req, res) => {
	parrotRequest('slowparrot', req, res)
});

app.get('/bobaparrot', (req, res) => {
	parrotRequest('bobaparrot', req, res)
});

app.get('/turkmenistanparrot', (req, res) => {
	parrotRequest('turkmenistanparrot', req, res)
});

app.get('/confusedparrot', (req, res) => {
	parrotRequest('confusedparrot', req, res)
});

app.get('/footballparrot', (req, res) => {
	parrotRequest('footballparrot', req, res)
});

app.get('/jamaicaparrot', (req, res) => {
	parrotRequest('jamaicaparrot', req, res)
});

app.get('/congapartyparrot', (req, res) => {
	parrotRequest('congapartyparrot', req, res)
});

app.get('/party-wizard', (req, res) => {
	parrotRequest('party-wizard', req, res)
});

app.get('/coffeeparrot', (req, res) => {
	parrotRequest('coffeeparrot', req, res)
});

app.get('/accessibleparrot', (req, res) => {
	parrotRequest('accessibleparrot', req, res)
});

app.get('/partywumpus', (req, res) => {
	parrotRequest('partywumpus', req, res)
});

app.get('/wales', (req, res) => {
	parrotRequest('wales', req, res)
});

app.get('/australiaparrot', (req, res) => {
	parrotRequest('australiaparrot', req, res)
});

app.get('/portalblueparrot', (req, res) => {
	parrotRequest('portalblueparrot', req, res)
});

app.get('/ivorycoastparrot', (req, res) => {
	parrotRequest('ivorycoastparrot', req, res)
});

app.get('/canadaparrot', (req, res) => {
	parrotRequest('canadaparrot', req, res)
});

app.get('/discoduck', (req, res) => {
	parrotRequest('discoduck', req, res)
});

app.get('/braveheartparrot', (req, res) => {
	parrotRequest('braveheartparrot', req, res)
});

app.get('/germanyparrot', (req, res) => {
	parrotRequest('germanyparrot', req, res)
});

app.get('/czechrepublicparrot', (req, res) => {
	parrotRequest('czechrepublicparrot', req, res)
});

app.get('/paraguayparrot', (req, res) => {
	parrotRequest('paraguayparrot', req, res)
});

app.get('/qatarparrot', (req, res) => {
	parrotRequest('qatarparrot', req, res)
});

app.get('/jordanparrot', (req, res) => {
	parrotRequest('jordanparrot', req, res)
});

app.get('/maracasparrot', (req, res) => {
	parrotRequest('maracasparrot', req, res)
});

app.get('/trollparrot', (req, res) => {
	parrotRequest('trollparrot', req, res)
});

app.get('/yemenparrot', (req, res) => {
	parrotRequest('yemenparrot', req, res)
});

app.get('/temporaltableparrot', (req, res) => {
	parrotRequest('temporaltableparrot', req, res)
});

app.get('/moonparrot', (req, res) => {
	parrotRequest('moonparrot', req, res)
});

app.get('/freebelarusparrot', (req, res) => {
	parrotRequest('freebelarusparrot', req, res)
});

app.get('/taiwanparrot', (req, res) => {
	parrotRequest('taiwanparrot', req, res)
});

app.get('/boliviaparrot', (req, res) => {
	parrotRequest('boliviaparrot', req, res)
});

app.get('/norwegianblueparrot', (req, res) => {
	parrotRequest('norwegianblueparrot', req, res)
});

app.get('/capsparrot', (req, res) => {
	parrotRequest('capsparrot', req, res)
});

app.get('/tinfoilhatparrot', (req, res) => {
	parrotRequest('tinfoilhatparrot', req, res)
});

app.get('/cubaparrot', (req, res) => {
	parrotRequest('cubaparrot', req, res)
});

app.get('/christmasparrot', (req, res) => {
	parrotRequest('christmasparrot', req, res)
});

app.get('/covid19parrot', (req, res) => {
	parrotRequest('covid19parrot', req, res)
});

app.get('/tpparrot', (req, res) => {
	parrotRequest('tpparrot', req, res)
});

app.get('/kosovoparrot', (req, res) => {
	parrotRequest('kosovoparrot', req, res)
});

app.get('/srilankaparrot', (req, res) => {
	parrotRequest('srilankaparrot', req, res)
});

app.get('/popcornparrot', (req, res) => {
	parrotRequest('popcornparrot', req, res)
});

app.get('/liberiaparrot', (req, res) => {
	parrotRequest('liberiaparrot', req, res)
});

app.get('/mozambiqueparrot', (req, res) => {
	parrotRequest('mozambiqueparrot', req, res)
});

app.get('/parrot', (req, res) => {
	parrotRequest('parrot', req, res)
});

app.get('/kyrgyzstanparrot', (req, res) => {
	parrotRequest('kyrgyzstanparrot', req, res)
});

app.get('/wfhparrot', (req, res) => {
	parrotRequest('wfhparrot', req, res)
});

app.get('/illuminatiparrot', (req, res) => {
	parrotRequest('illuminatiparrot', req, res)
});

app.get('/iranparrot', (req, res) => {
	parrotRequest('iranparrot', req, res)
});

app.get('/reverseportalorangeparrot', (req, res) => {
	parrotRequest('reverseportalorangeparrot', req, res)
});

app.get('/norwayparrot', (req, res) => {
	parrotRequest('norwayparrot', req, res)
});

app.get('/beretparrot', (req, res) => {
	parrotRequest('beretparrot', req, res)
});

app.get('/meldparrot', (req, res) => {
	parrotRequest('meldparrot', req, res)
});

app.get('/cakeparrot', (req, res) => {
	parrotRequest('cakeparrot', req, res)
});

app.get('/partyannoyedbird', (req, res) => {
	parrotRequest('partyannoyedbird', req, res)
});

app.get('/dadparrot', (req, res) => {
	parrotRequest('dadparrot', req, res)
});

app.get('/monacoparrot', (req, res) => {
	parrotRequest('monacoparrot', req, res)
});

app.get('/headingparrot', (req, res) => {
	parrotRequest('headingparrot', req, res)
});

app.get('/polandparrot', (req, res) => {
	parrotRequest('polandparrot', req, res)
});

app.get('/zoukparrot', (req, res) => {
	parrotRequest('zoukparrot', req, res)
});

app.get('/spyparrot', (req, res) => {
	parrotRequest('spyparrot', req, res)
});

app.get('/gambiaparrot', (req, res) => {
	parrotRequest('gambiaparrot', req, res)
});

app.get('/nicaraguaparrot', (req, res) => {
	parrotRequest('nicaraguaparrot', req, res)
});

app.get('/dominicaparrot', (req, res) => {
	parrotRequest('dominicaparrot', req, res)
});

app.get('/sneezyparrot', (req, res) => {
	parrotRequest('sneezyparrot', req, res)
});

app.get('/birthdaypartyparrot', (req, res) => {
	parrotRequest('birthdaypartyparrot', req, res)
});

app.get('/lesothoparrot', (req, res) => {
	parrotRequest('lesothoparrot', req, res)
});

app.get('/stayhomeparrotcloser', (req, res) => {
	parrotRequest('stayhomeparrotcloser', req, res)
});

app.get('/partygfm', (req, res) => {
	parrotRequest('partygfm', req, res)
});

app.get('/albaniaparrot', (req, res) => {
	parrotRequest('albaniaparrot', req, res)
});

app.get('/everythingsfineparrot', (req, res) => {
	parrotRequest('everythingsfineparrot', req, res)
});

app.get('/reactparrot', (req, res) => {
	parrotRequest('reactparrot', req, res)
});

app.get('/revolutionparrot', (req, res) => {
	parrotRequest('revolutionparrot', req, res)
});

app.get('/dailyparrot', (req, res) => {
	parrotRequest('dailyparrot', req, res)
});

app.get('/ultrafastparrot', (req, res) => {
	parrotRequest('ultrafastparrot', req, res)
});

app.get('/somalilandparrot', (req, res) => {
	parrotRequest('somalilandparrot', req, res)
});

app.get('/antiguaandbarbudaparrot', (req, res) => {
	parrotRequest('antiguaandbarbudaparrot', req, res)
});

app.get('/partyblob', (req, res) => {
	parrotRequest('partyblob', req, res)
});

app.get('/zimbabweparrot', (req, res) => {
	parrotRequest('zimbabweparrot', req, res)
});

app.get('/djiboutiparrot', (req, res) => {
	parrotRequest('djiboutiparrot', req, res)
});

app.get('/soccerparrot', (req, res) => {
	parrotRequest('soccerparrot', req, res)
});

app.get('/dealwithitnowparrot', (req, res) => {
	parrotRequest('dealwithitnowparrot', req, res)
});

app.get('/southsudanparrot', (req, res) => {
	parrotRequest('southsudanparrot', req, res)
});

app.get('/mergeconflictparrot', (req, res) => {
	parrotRequest('mergeconflictparrot', req, res)
});

app.get('/burkinafasoparrot', (req, res) => {
	parrotRequest('burkinafasoparrot', req, res)
});

app.get('/mateparrot', (req, res) => {
	parrotRequest('mateparrot', req, res)
});

app.get('/chicoparrot', (req, res) => {
	parrotRequest('chicoparrot', req, res)
});

app.get('/kazakhstanparrot', (req, res) => {
	parrotRequest('kazakhstanparrot', req, res)
});

app.get('/calvinist_parrot', (req, res) => {
	parrotRequest('calvinist_parrot', req, res)
});

app.get('/aussiecongaparrot', (req, res) => {
	parrotRequest('aussiecongaparrot', req, res)
});

app.get('/brazilparrot', (req, res) => {
	parrotRequest('brazilparrot', req, res)
});

app.get('/greekmacedoniaparrot', (req, res) => {
	parrotRequest('greekmacedoniaparrot', req, res)
});

app.get('/angelparrot', (req, res) => {
	parrotRequest('angelparrot', req, res)
});

app.get('/partypicard', (req, res) => {
	parrotRequest('partypicard', req, res)
});

app.get('/deletedparrot', (req, res) => {
	parrotRequest('deletedparrot', req, res)
});

app.get('/costaricaparrot', (req, res) => {
	parrotRequest('costaricaparrot', req, res)
});

app.get('/glimpseparrot', (req, res) => {
	parrotRequest('glimpseparrot', req, res)
});

app.get('/reverseparrot', (req, res) => {
	parrotRequest('reverseparrot', req, res)
});

app.get('/scotland', (req, res) => {
	parrotRequest('scotland', req, res)
});

app.get('/zombieparrot', (req, res) => {
	parrotRequest('zombieparrot', req, res)
});

app.get('/chefparrot', (req, res) => {
	parrotRequest('chefparrot', req, res)
});

app.get('/uzbekistanparrot', (req, res) => {
	parrotRequest('uzbekistanparrot', req, res)
});

app.get('/unitedstatesofamericaparrot', (req, res) => {
	parrotRequest('unitedstatesofamericaparrot', req, res)
});

app.get('/hackerparrot', (req, res) => {
	parrotRequest('hackerparrot', req, res)
});

app.get('/belizeparrot', (req, res) => {
	parrotRequest('belizeparrot', req, res)
});

app.get('/hmmparrot', (req, res) => {
	parrotRequest('hmmparrot', req, res)
});

app.get('/irelandparrot', (req, res) => {
	parrotRequest('irelandparrot', req, res)
});

app.get('/omanparrot', (req, res) => {
	parrotRequest('omanparrot', req, res)
});

app.get('/barbadosparrot', (req, res) => {
	parrotRequest('barbadosparrot', req, res)
});

app.get('/pingpongparrot', (req, res) => {
	parrotRequest('pingpongparrot', req, res)
});

app.get('/invisibleparrot', (req, res) => {
	parrotRequest('invisibleparrot', req, res)
});

app.get('/stableparrot', (req, res) => {
	parrotRequest('stableparrot', req, res)
});

app.get('/prideparrot', (req, res) => {
	parrotRequest('prideparrot', req, res)
});

app.get('/bunnyparrot', (req, res) => {
	parrotRequest('bunnyparrot', req, res)
});

app.get('/old-man-yells-at-parrot', (req, res) => {
	parrotRequest('old-man-yells-at-parrot', req, res)
});

app.get('/transparrot', (req, res) => {
	parrotRequest('transparrot', req, res)
});

app.get('/hungaryparrot', (req, res) => {
	parrotRequest('hungaryparrot', req, res)
});

app.get('/somaliaparrot', (req, res) => {
	parrotRequest('somaliaparrot', req, res)
});

app.get('/eritreaparrot', (req, res) => {
	parrotRequest('eritreaparrot', req, res)
});

app.get('/transparront', (req, res) => {
	parrotRequest('transparront', req, res)
});

app.get('/kuwaitparrot', (req, res) => {
	parrotRequest('kuwaitparrot', req, res)
});

app.get('/donutparrot', (req, res) => {
	parrotRequest('donutparrot', req, res)
});

app.get('/marshmallowparrot', (req, res) => {
	parrotRequest('marshmallowparrot', req, res)
});

app.get('/thankyouparrot', (req, res) => {
	parrotRequest('thankyouparrot', req, res)
});

app.get('/shortparrot', (req, res) => {
	parrotRequest('shortparrot', req, res)
});

app.get('/falklandislandsparrot', (req, res) => {
	parrotRequest('falklandislandsparrot', req, res)
});

app.get('/belgiumparrot', (req, res) => {
	parrotRequest('belgiumparrot', req, res)
});

app.get('/nigeriaparrot', (req, res) => {
	parrotRequest('nigeriaparrot', req, res)
});

app.get('/inverseparrot', (req, res) => {
	parrotRequest('inverseparrot', req, res)
});

app.get('/swedenparrot', (req, res) => {
	parrotRequest('swedenparrot', req, res)
});

app.get('/denmarkparrot', (req, res) => {
	parrotRequest('denmarkparrot', req, res)
});

app.get('/partykeanu', (req, res) => {
	parrotRequest('partykeanu', req, res)
});

app.get('/botswanaparrot', (req, res) => {
	parrotRequest('botswanaparrot', req, res)
});

app.get('/croatiaparrot', (req, res) => {
	parrotRequest('croatiaparrot', req, res)
});

app.get('/maldivesparrot', (req, res) => {
	parrotRequest('maldivesparrot', req, res)
});

app.get('/reversecongaparrot', (req, res) => {
	parrotRequest('reversecongaparrot', req, res)
});

app.get('/madagascarparrot', (req, res) => {
	parrotRequest('madagascarparrot', req, res)
});

app.get('/equatorialguineaparrot', (req, res) => {
	parrotRequest('equatorialguineaparrot', req, res)
});

app.get('/bahrainparrot', (req, res) => {
	parrotRequest('bahrainparrot', req, res)
});

app.get('/jediparrot', (req, res) => {
	parrotRequest('jediparrot', req, res)
});

app.get('/discoparrot', (req, res) => {
	parrotRequest('discoparrot', req, res)
});

app.get('/partygritty', (req, res) => {
	parrotRequest('partygritty', req, res)
});

app.get('/grenadaparrot', (req, res) => {
	parrotRequest('grenadaparrot', req, res)
});

app.get('/michaeljacksonparrot', (req, res) => {
	parrotRequest('michaeljacksonparrot', req, res)
});

app.get('/netherlandsparrot', (req, res) => {
	parrotRequest('netherlandsparrot', req, res)
});

app.get('/redhatparrot', (req, res) => {
	parrotRequest('redhatparrot', req, res)
});

app.get('/micronesiaparrot', (req, res) => {
	parrotRequest('micronesiaparrot', req, res)
});

app.get('/chileparrot', (req, res) => {
	parrotRequest('chileparrot', req, res)
});

app.get('/libyaparrot', (req, res) => {
	parrotRequest('libyaparrot', req, res)
});

app.get('/chadparrot', (req, res) => {
	parrotRequest('chadparrot', req, res)
});

app.get('/pirateparrot', (req, res) => {
	parrotRequest('pirateparrot', req, res)
});

app.get('/resonatingredparrot', (req, res) => {
	parrotRequest('resonatingredparrot', req, res)
});

app.get('/stayhomeparrot', (req, res) => {
	parrotRequest('stayhomeparrot', req, res)
});

app.get('/chefkissparrot', (req, res) => {
	parrotRequest('chefkissparrot', req, res)
});

app.get('/republicofthecongoparrot', (req, res) => {
	parrotRequest('republicofthecongoparrot', req, res)
});

app.get('/grouchoparrot', (req, res) => {
	parrotRequest('grouchoparrot', req, res)
});

app.get('/mustacheparrot', (req, res) => {
	parrotRequest('mustacheparrot', req, res)
});

app.get('/northern-ireland-st-patricks-saltire', (req, res) => {
	parrotRequest('northern-ireland-st-patricks-saltire', req, res)
});

app.get('/bikerparrot', (req, res) => {
	parrotRequest('bikerparrot', req, res)
});

app.get('/finlandparrot', (req, res) => {
	parrotRequest('finlandparrot', req, res)
});

app.get('/hypnoparrotlight', (req, res) => {
	parrotRequest('hypnoparrotlight', req, res)
});

app.get('/darkmodeparrot', (req, res) => {
	parrotRequest('darkmodeparrot', req, res)
});

app.get('/franceparrot', (req, res) => {
	parrotRequest('franceparrot', req, res)
});

app.get('/copparrot', (req, res) => {
	parrotRequest('copparrot', req, res)
});

app.get('/rubyparrot', (req, res) => {
	parrotRequest('rubyparrot', req, res)
});

app.get('/euparrot', (req, res) => {
	parrotRequest('euparrot', req, res)
});

app.get('/blurryparrot', (req, res) => {
	parrotRequest('blurryparrot', req, res)
});

app.get('/whitewalkerparrot', (req, res) => {
	parrotRequest('whitewalkerparrot', req, res)
});

app.get('/senegalparrot', (req, res) => {
	parrotRequest('senegalparrot', req, res)
});

app.get('/kiribatiparrot', (req, res) => {
	parrotRequest('kiribatiparrot', req, res)
});

app.get('/thumbsupparrot', (req, res) => {
	parrotRequest('thumbsupparrot', req, res)
});

app.get('/turndownforwatchparrot', (req, res) => {
	parrotRequest('turndownforwatchparrot', req, res)
});

app.get('/puertoricoparrot', (req, res) => {
	parrotRequest('puertoricoparrot', req, res)
});

app.get('/badparrot', (req, res) => {
	parrotRequest('badparrot', req, res)
});

app.get('/bangladeshparrot', (req, res) => {
	parrotRequest('bangladeshparrot', req, res)
});

app.get('/england', (req, res) => {
	parrotRequest('england', req, res)
});

app.get('/partyfsjal', (req, res) => {
	parrotRequest('partyfsjal', req, res)
});

app.get('/capeverdeparrot', (req, res) => {
	parrotRequest('capeverdeparrot', req, res)
});

app.get('/venezuelaparrot', (req, res) => {
	parrotRequest('venezuelaparrot', req, res)
});

app.get('/vibepartycat', (req, res) => {
	parrotRequest('vibepartycat', req, res)
});

app.get('/peruparrot', (req, res) => {
	parrotRequest('peruparrot', req, res)
});

app.get('/parrotnotfound', (req, res) => {
	parrotRequest('parrotnotfound', req, res)
});

app.get('/beninparrot', (req, res) => {
	parrotRequest('beninparrot', req, res)
});

app.get('/ethiopiaparrot', (req, res) => {
	parrotRequest('ethiopiaparrot', req, res)
});

app.get('/algeriaparrot', (req, res) => {
	parrotRequest('algeriaparrot', req, res)
});

app.get('/witnessprotectionparrot', (req, res) => {
	parrotRequest('witnessprotectionparrot', req, res)
});

app.get('/andorraparrot', (req, res) => {
	parrotRequest('andorraparrot', req, res)
});

app.get('/unitedarabemiratesparrot', (req, res) => {
	parrotRequest('unitedarabemiratesparrot', req, res)
});

app.get('/dogeparrot', (req, res) => {
	parrotRequest('dogeparrot', req, res)
});

app.get('/slovakiaparrot', (req, res) => {
	parrotRequest('slovakiaparrot', req, res)
});

app.get('/nauruparrot', (req, res) => {
	parrotRequest('nauruparrot', req, res)
});

app.get('/saotomeandprincipeparrot', (req, res) => {
	parrotRequest('saotomeandprincipeparrot', req, res)
});

app.get('/hongkongparrot', (req, res) => {
	parrotRequest('hongkongparrot', req, res)
});

app.get('/namibiaparrot', (req, res) => {
	parrotRequest('namibiaparrot', req, res)
});

app.get('/solomonislandsparrot', (req, res) => {
	parrotRequest('solomonislandsparrot', req, res)
});

app.get('/60fpsparrot', (req, res) => {
	parrotRequest('60fpsparrot', req, res)
});

app.get('/sassyparrot', (req, res) => {
	parrotRequest('sassyparrot', req, res)
});

app.get('/thefastestparrot', (req, res) => {
	parrotRequest('thefastestparrot', req, res)
});

app.get('/hardhatparrot', (req, res) => {
	parrotRequest('hardhatparrot', req, res)
});

app.get('/preetjusticeparrot', (req, res) => {
	parrotRequest('preetjusticeparrot', req, res)
});

app.get('/partymoogle', (req, res) => {
	parrotRequest('partymoogle', req, res)
});

app.get('/saintvincentandthegrenadinesparrot', (req, res) => {
	parrotRequest('saintvincentandthegrenadinesparrot', req, res)
});

app.get('/burundiparrot', (req, res) => {
	parrotRequest('burundiparrot', req, res)
});

app.get('/portugalparrot', (req, res) => {
	parrotRequest('portugalparrot', req, res)
});

app.get('/indiaparrot', (req, res) => {
	parrotRequest('indiaparrot', req, res)
});

app.get('/tongaparrot', (req, res) => {
	parrotRequest('tongaparrot', req, res)
});

app.get('/artsakhparrot', (req, res) => {
	parrotRequest('artsakhparrot', req, res)
});

app.get('/greeceparrot', (req, res) => {
	parrotRequest('greeceparrot', req, res)
});

app.get('/flowerparrot', (req, res) => {
	parrotRequest('flowerparrot', req, res)
});

app.get('/twinsparrot', (req, res) => {
	parrotRequest('twinsparrot', req, res)
});

app.get('/spinningparrot', (req, res) => {
	parrotRequest('spinningparrot', req, res)
});

app.get('/tunisiaparrot', (req, res) => {
	parrotRequest('tunisiaparrot', req, res)
});

app.get('/ugandaparrot', (req, res) => {
	parrotRequest('ugandaparrot', req, res)
});

app.get('/eswatiniparrot', (req, res) => {
	parrotRequest('eswatiniparrot', req, res)
});

app.get('/seychellesparrot', (req, res) => {
	parrotRequest('seychellesparrot', req, res)
});

app.get('/macauparrot', (req, res) => {
	parrotRequest('macauparrot', req, res)
});

app.get('/comorosparrot', (req, res) => {
	parrotRequest('comorosparrot', req, res)
});

app.get('/tennisparrot', (req, res) => {
	parrotRequest('tennisparrot', req, res)
});

app.get('/mauritiusparrot', (req, res) => {
	parrotRequest('mauritiusparrot', req, res)
});

app.get('/angolaparrot', (req, res) => {
	parrotRequest('angolaparrot', req, res)
});

app.get('/greenlandparrot', (req, res) => {
	parrotRequest('greenlandparrot', req, res)
});

app.get('/brazilianplayerparrot', (req, res) => {
	parrotRequest('brazilianplayerparrot', req, res)
});

app.get('/democraticrepublicofthecongoparrot', (req, res) => {
	parrotRequest('democraticrepublicofthecongoparrot', req, res)
});

app.get('/sidewaysparrot', (req, res) => {
	parrotRequest('sidewaysparrot', req, res)
});

app.get('/moldovaparrot', (req, res) => {
	parrotRequest('moldovaparrot', req, res)
});

app.get('/bouncingparrot', (req, res) => {
	parrotRequest('bouncingparrot', req, res)
});

app.get('/ghanaparrot', (req, res) => {
	parrotRequest('ghanaparrot', req, res)
});

app.get('/ripparrot', (req, res) => {
	parrotRequest('ripparrot', req, res)
});

app.get('/antarcticaparrot', (req, res) => {
	parrotRequest('antarcticaparrot', req, res)
});

app.get('/mardigrasparrot', (req, res) => {
	parrotRequest('mardigrasparrot', req, res)
});

app.get('/mexicoparrot', (req, res) => {
	parrotRequest('mexicoparrot', req, res)
});

app.get('/centralafricanrepublicparrot', (req, res) => {
	parrotRequest('centralafricanrepublicparrot', req, res)
});

app.get('/syriaparrot', (req, res) => {
	parrotRequest('syriaparrot', req, res)
});

app.get('/southossetiaparrot', (req, res) => {
	parrotRequest('southossetiaparrot', req, res)
});

app.get('/iraqparrot', (req, res) => {
	parrotRequest('iraqparrot', req, res)
});

app.get('/evilparrot', (req, res) => {
	parrotRequest('evilparrot', req, res)
});

app.get('/georgiaparrot', (req, res) => {
	parrotRequest('georgiaparrot', req, res)
});

app.get('/phparrot', (req, res) => {
	parrotRequest('phparrot', req, res)
});

app.get('/vaticancityparrot', (req, res) => {
	parrotRequest('vaticancityparrot', req, res)
});

app.get('/spainparrot', (req, res) => {
	parrotRequest('spainparrot', req, res)
});

app.get('/githubparrot', (req, res) => {
	parrotRequest('githubparrot', req, res)
});

app.get('/kenyaparrot', (req, res) => {
	parrotRequest('kenyaparrot', req, res)
});

app.get('/unicornparrot', (req, res) => {
	parrotRequest('unicornparrot', req, res)
});

app.get('/playcatchrightparrot', (req, res) => {
	parrotRequest('playcatchrightparrot', req, res)
});

app.get('/hypnoparrot', (req, res) => {
	parrotRequest('hypnoparrot', req, res)
});

app.get('/palestineparrot', (req, res) => {
	parrotRequest('palestineparrot', req, res)
});

app.get('/verticalparrot', (req, res) => {
	parrotRequest('verticalparrot', req, res)
});

app.get('/colombiaparrot', (req, res) => {
	parrotRequest('colombiaparrot', req, res)
});

app.get('/moonwalkingparrot', (req, res) => {
	parrotRequest('moonwalkingparrot', req, res)
});

app.get('/autonomousparrot', (req, res) => {
	parrotRequest('autonomousparrot', req, res)
});app.listen(port, () => {
	console.log(`Server started at http://localhost:${port}`);
});