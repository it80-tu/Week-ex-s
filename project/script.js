const jsonQuery = {
    "query": [
      {
        "code": "Vuosi",
        "selection": {
          "filter": "item",
          "values": [
            "1990",
            "1991",
            "1992",
            "1993",
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021"
          ]
        }
      },
      {
        "code": "Sukupuoli",
        "selection": {
          "filter": "item",
          "values": [
            "SSS",
            "1",
            "2"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat2"
    }
  }

let totalBirth = [];
let maleBirth = [];
let femaleBirth = [];

let totalDeath = [];
let maleDeath = [];
let femaleDeath = [];

let yearsBirth = [];
let yearsDeath = [];

const getBirth = async () => {
    const url = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dj.px"

    const res = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery)
    })
    if(!res.ok) {
        return;
    }
    const data = await res.json();

    console.log(data);

    for (let i = 0; i<data.value.length;i+=3){
        totalBirth.push(data.value[i]);
        maleBirth.push(data.value[i+1]);
        femaleBirth.push(data.value[i+2])
    }
    Object.values(data.dimension.Vuosi.category.label).map(year => yearsBirth.push(year));
    
    DrawTotalBirth();
    DrawCompareBirth();

    return data;
}

const getDeath = async () => {
    const url = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/kuol/statfin_kuol_pxt_12af.px"

    const res = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery)
    })
    if(!res.ok) {
        return;
    }
    const data = await res.json();
    console.log(data);

    for (let i = 0; i<data.value.length;i+=3){
        totalDeath.push(data.value[i]);
        maleDeath.push(data.value[i+1]);
        femaleDeath.push(data.value[i+2])
    }
    Object.values(data.dimension.Vuosi.category.label).map(year => yearsDeath.push(year));
    DrawTotalDeath();
    DrawCompareDeath();
    
    return data;
}

getBirth();
getDeath();