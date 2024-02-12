const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport")
const LCSYear =document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const championCards = document.getElementById("champion-cards");
const championDropDownList = document.getElementById("champion");

const myFavoriteLeagueChampions = {

    team : "GamingSokolac",
    sport : "League of Legends",
    year : 2024,
    isLCSYear : true,
    headCoach : {
        coachName : "Ivan Cajic",
        matches : 7,
    },
    champions : [
        
            {
              "name": "Jax",
              "roll": "Top Lane",
              "number": 1,
              "isCarry": false,
              "nickname": null,
              "id" : "jax"
            },
            {
              "name": "Kalista",
              "roll": "Bot Lane",
              "number": 2,
              "isCarry": true,
              "nickname": "Useless",
              id : "kalista"
            },
            {
              "name": "Miss Fortune",
              "roll": "Bot Lane",
              "number": 3,
              "isCarry": true,
              "nickname": "TeamFight God",
              id : "missfortune"
            },
            {
              "name": "Kayne",
              "roll": "Jungler",
              "number": 4,
              "isCarry": false,
              "nickname": "Assassin",
              id : "kayne"
            },
            {
              "name": "Blitzcranck",
              "roll": "Bot Lane",
              "number": 5,
              "isCarry": false,
              "nickname": "Hook",
              id : "blitz"
            },
            {
              "name": "Zed",
              "roll": "Mid",
              "number": 6,
              "isCarry": false,
              "nickname": "Shadowmaster",
              id: "zed"
            },
            {
              "name": "Thresh",
              "roll": "Bot Lane",
              "number": 7,
              "isCarry": false,
              "nickname": "ChainWarden",
              id : "tresh"
            },
            {
              "name": "Darius",
              "roll": "Top Lane",
              "number": 8,
              "isCarry": false,
              "nickname": "NoxianExecutioner",
              id : "darius"
            },
            {
              "name": "Ezreal",
              "roll": "Bot Lane",
              "number": 9,
              "isCarry": false,
              "nickname": "ProdigyExplorer",
              id : "ezreal"
            },
            {
              "name": "Akali",
              "roll": "Top Lane",
              "number": 10,
              "isCarry": false,
              "nickname": "RogueNinja" , 
              id : "akali"
            },
            {
              "name": "Lee Sin",
              "roll": "Jungler",
              "number": 11,
              "isCarry": false,
              "nickname": "BlindMonk",
              id : "leesin"
            },
            {
              "name": "Jinx",
              "roll": "Bot Lane",
              "number": 12,
              "isCarry": false,
              "nickname": "PowPowPrincess",
              id : "jinx"
            },
            {
              "name": "Lucian",
              "roll": "Bot Lane",
              "number": 13,
              "isCarry": false,
              "nickname": "Purifier",
              id : "lucian"
            },
            {
              "name": "Vayne",
              "roll": "Bot Lane",
              "number": 14,
              "isCarry": false,
              "nickname": "NightHunter",
              id : "vayne"
            },
            {
              "name": "Malzahar",
              "roll": "Mid Lane",
              "number": 15,
              "isCarry": false,
              "nickname": "VoidProphet",
              id : "malzahar"
            },
            {
              "name": "Irelia",
              "roll": "Top Lane",
              "number": 16,
              "isCarry": false,
              "nickname": "BladeDancer",
              id : "irelia"
            },
            {
              "name": "Garen",
              "roll": "Top Lane",
              "number": 17,
              "isCarry": false,
              "nickname": "MightofDemacia",
              id : "garen"
            },
            {
              "name": "Nami",
              "roll": "Bot Lane",
              "number": 18,
              "isCarry": false,
              "nickname": "Tidecaller",
              id : "nami"
            },
            {
              "name": "Aatrox",
              "roll": "Top Lane",
              "number": 19,
              "isCarry": false,
              "nickname": "DarkinBlade",
              id : "aatrox"
            },
            {
              "name": "Caitlyn",
              "roll": "Bot Lane",
              "number": 20,
              "isCarry": false,
              "nickname": "SniperAce",
              id :  "cait"
            },
            {
              "name": "Katarina",
              "roll": "Mid Lane",
              "number": 21,
              "isCarry": false,
              "nickname": "SinisterBlades",
              id : "katarina"
            },
            {
              "name": "Riven",
              "roll": "Top Lane",
              "number": 22,
              "isCarry": false,
              "nickname": "ExileBlade",
              id : "riven"
            }
          
          
    ]
    


};

Object.freeze(myFavoriteLeagueChampions);

const { sport , team, year, champions}= myFavoriteLeagueChampions;

const { coachName } =myFavoriteLeagueChampions.headCoach;

typeOfSport.textContent = sport;        
teamName.textContent = team;
LCSYear.textContent = year;
headCoach.textContent = coachName;


const setChampionCards = (arr = champions) =>{

    championCards.innerHTML += arr.map(({roll, number , isCarry , nickname  , name ,id })=>{
    
        `<div class="champion-card" id=${id}>

            <h2> ${name} ${isCarry ? "(Carry)" : "" } </h2>
            <p>Roll: ${roll}  </p>
            <p>Number: ${number}} </p>
            <p>Nickname : ${ nickname ? nickname : "N/A"}</p>
        
        
        <div>`

    }).join("");



};


championDropDownList.addEventListener("change" , (e)=>{



})


