const skils = document.querySelectorAll("#skils path");
for (let i = 0; i < skils.length; i++) {
    console.log(`Letter ${i} is ${skils[i].getTotalLength()}`);
}