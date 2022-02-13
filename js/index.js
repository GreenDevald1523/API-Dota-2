document.body.onload = function() {
    setTimeout((function() {
        let o = document.getElementById("page-preloader");
        o.classList.contains("done") || o.classList.add("done")
    }))
};
// document.querySelector(".avatar-img #img").src = 'https://i.pinimg.com/originals/78/05/5e/78055efed1459050e8fe49893ddc52e2.jpg';

const form = document.querySelector(".form-control"),
    button = document.querySelector(".steamInput"),
    errorW = document.getElementById('showError'),
    supForm = document.querySelector("#superForm"),
    av = document.querySelector(".avatar-img #img"),
    reboot = document.querySelector('.reboot'),
    reslt = document.querySelector('.main2');


document.addEventListener('DOMContentLoaded', function() {
    button.addEventListener('click', function(s) {
        s.preventDefault();
        console.clear();
        let o = form.value;
        let e = +(o.substr(-16, 16)) - 6561197960265728;
        if (e < 0) {
            errorW.classList.remove('hide');
        } else {
            if (!(errorW.classList.contains('hide'))) {
                errorW.classList.add('hide');
            }
            console.log(e);
            let acc = document.getElementById('accid'),
                pname = document.getElementById('personname'),
                mmr = document.getElementById('mmr'),
                competitive_rank = document.getElementById('competitive_rank'),
                solo_competitive_rank = document.getElementById('solo_competitive_rank'),
                rank_tier = document.getElementById('rank_tier'),
                basic = document.querySelector('.main__input');
            fetch(`https://api.opendota.com/api/players/${e}`)
                .then(response => response.json())
                .then((json => {
                    basic.classList.add('hide');
                    reslt.classList.remove('hide');
                    reboot.classList.remove('hide');
                    pname.innerHTML = `Nickname: ${json.profile.personaname}`;
                    acc.innerHTML = `Steam ID: ${json.profile.steamid}`;
                    mmr.innerHTML = `MMR: ${json.mmr_estimate.estimate}`;
                    competitive_rank.innerHTML = `Competitive Rank: ${json.competitive_rank}`;
                    solo_competitive_rank.innerHTML = `Solo Competitive Rank: ${json.solo_competitive_rank}`;
                    rank_tier.innerHTML = `Rank Tier: ${json.rank_tier}`;
                    av.src = `${json.profile.avatarfull}`;
                }))
                .catch((a => console.error(a)));
        }
    });
});

supForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        button.click();
    }
});
// 76561198129782488 - Dvalisa