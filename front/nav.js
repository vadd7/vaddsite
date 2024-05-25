var discordclicked = 0;
function discord() {
    discordclicked++
    console.log(discordclicked);
    if (discordclicked > 100) {
        window.open("./VADDS-DISCORD.HTML").focus();
        discordclicked = 0;
    }
}