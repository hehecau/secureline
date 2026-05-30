const rewardLabel = document.getElementById("rewardLabel");

const zelezoLabel = document.getElementById("zelezoInput");
zelezoLabel.addEventListener("input", updateReward);

const zlatoLabel = document.getElementById("zlatoInput");
zlatoLabel.addEventListener("input", updateReward);

const cinLabel = document.getElementById("cinInput");
cinLabel.addEventListener("input", updateReward);

const hlinikLabel = document.getElementById("hlinikInput");
hlinikLabel.addEventListener("input", updateReward);

const medLabel = document.getElementById("medInput");
medLabel.addEventListener("input", updateReward);

const zinokLabel = document.getElementById("zinokInput");
zinokLabel.addEventListener("input", updateReward);

const ceny = {zelezo: 4500, zlato: 37000, cin: 11000, hlinik: 3000, med: 3000, zinok: 3000};

function updateReward() {
    const reward =
        (Number(zelezoInput.value) || 0) * ceny.zelezo +
        (Number(zlatoInput.value) || 0) * ceny.zlato +
        (Number(cinInput.value) || 0) * ceny.cin +
        (Number(hlinikInput.value) || 0) * ceny.hlinik +
        (Number(medInput.value) || 0) * ceny.med +
        (Number(zinokInput.value) || 0) * ceny.zinok;

    const formatted = new Intl.NumberFormat('sk-SK').format(reward);

    rewardLabel.textContent = `${formatted} Kč`;
}

updateReward();
