let img = 0;
$(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
$(`.a1`).css({"display": "block"});

$(`.left`).click(() => {
    if (img > -1) {
        img = img - 1;
    };
    if (img === -1) {
        img = 7
    };
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }
    
});
$(`.right`).click(() => {
    if (img < 8) {
        img = img + 1;
    };
    if (img === 8) {
        img = 0
    };
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }
    
});
$(`.one`).click(() => {
    img = 0;
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }

});
$(`.two`).click(() => {
    img = 1;
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }
});
$(`.three`).click(() => {
    img = 2;
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }
});
$(`.four`).click(() => {
    img = 3;
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }
});
$(`.five`).click(() => {
    img = 4;
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }
});
$(`.six`).click(() => {
    img = 5;
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }
});
$(`.seven`).click(() => {
    img = 6;
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }
});
$(`.eight`).click(() => {
    img = 7;
    if (img === 0) {
        $(`#mid`).css({"background-image": "url(https://www.ecopetit.cat/wpic/mpic/90-904732_league-of-legends-thresh-splash-art.png)"});
        $(`h1`).text(`Thresh, The Chain Warden`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#191A17,#1F482A,#191A17)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a1`).css({"display": "block"});
    }
    if (img === 1) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/Deep-Terror-Thresh-1.jpg)"});
        $(`h1`).text(`Deep Terror Thresh`);
        $(`p`).text(`Released on 23rd of January 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#042D49,#8D3F35,#042D49)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a2`).css({"display": "block"});
    }
    if (img === 2) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/01/Blood-Moon-Thresh.jpg)"});
        $(`h1`).text(`Blood Moon Thresh`);
        $(`p`).text(`Released on 8th of January 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#540824,#ED0F38,#540824)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a3`).css({"display": "block"});
    }
    if (img === 3) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2012/08/Samsung-White-Skins.jpg)"});
        $(`h1`).text(`SSW Thresh`);
        $(`p`).text(`Released on 13th of May 2015.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#63D2F9,#FEFEFE,#63D2F9)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a4`).css({"display": "block"});
    }
    if (img === 4) {
        $(`#mid`).css({"background-image": "url(https://cdnb.artstation.com/p/assets/images/images/002/956/463/large/victor-maury-darkstarthreshforweb.jpg?1484080799)"});
        $(`h1`).text(`Dark Star Thresh`);
        $(`p`).text(`Released on 15th of June 2016.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#10141F,#652D85,#10141F)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a5`).css({"display": "block"});
    }
    if (img === 5) {
        $(`#mid`).css({"background-image": "url(http://lolwp.com/wp-content/uploads/2013/09/Championship-Thresh.jpg)"});
        $(`h1`).text(`Championship Thresh`);
        $(`p`).text(`Released on 3rd of October 2013.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1C1A59,#25C1E8,#1C1A59)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a6`).css({"display": "block"});
    }
    if (img === 6) {
        $(`#mid`).css({"background-image": "url(https://lol-stats.net/uploads/ob55P7R9v9pcLBVtulotdCtxhZSBz4gJlCbCNkJI.jpeg)"});
        $(`h1`).text(`High Noon Thresh`);
        $(`p`).text(`Released on 30th of August 2018.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#42271C,#FD8F28,#42271C)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a7`).css({"display": "block"});
    }
    if (img === 7) {
        $(`#mid`).css({"background-image": "url(https://l2pbomb.com/wp-content/uploads/2019/11/pulsefire-thresh-skin-splash-art-lol-1024x604.jpeg)"});
        $(`h1`).text(`Pulsefire Thresh`);
        $(`p`).text(`Released on 21st of November 2019.`);
        $(`main`).css({"background-image": "linear-gradient(to right,#1134AC,#C1E1FD,#1134AC)"});
        $(`.arrow`).css({"display": "none"});
        $(`.a8`).css({"display": "block"});
    }
});