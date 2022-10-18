const jsonQuery = {
    "query": [
      {
        "code": "Vuosi",
        "selection": {
          "filter": "item",
          "values": [
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
        "code": "Alue",
        "selection": {
          "filter": "item",
          "values": [
            "SSS"
          ]
        }
      },
      {
        "code": "Tiedot",
        "selection": {
          "filter": "item",
          "values": [
            "vaesto"
          ]
        }
      }
    ],
    "response": {
      "format": "json-stat2"
    }
  }

const getData = async () => {
    const url = "https://statfin.stat.fi/PxWeb/api/v1/en/StatFin/synt/statfin_synt_pxt_12dy.px"

    const res = await fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(jsonQuery)
    })
    if(!res.ok) {
        return;
    }
    const data = await res.json()

    return data
}
const buildChart = async () => {
    const data = await getData()
    console.log(data.dimension)

    const labels = Object.values(data.dimension.Vuosi.category.label);
    const country = Object.values(data.dimension.Alue.category.label);
    const values = Object.values(data.dimension.Tiedot.category.label);
    
    console.log(labels)
    console.log(country)
    console.log(values)

    country.forEach((party, index) => {
        let partySupport = []
        for(let i = 0; i < 10; i++) {
            partySupport.push(values[i * 8 + index])
        }
        country[index] = {
            name: party,
            values: partySupport.reverse()
        }
    })

    //console.log(country)

    const chartData = {
        labels: labels,
        datasets: country
    }

    const chart = new frappe.Chart("#chart", {
        title: "Finnish parliamentary elections",
        data: chartData,
        type: "line",
        height: 450,
        colors: "#eb5146",
        /*barOptions: {
            stacked: 1
        },*/
        lineOptions: {
            hideDots: 1,
            regionFill: 0
        }

    })



}

buildChart()
