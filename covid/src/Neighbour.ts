import axios from "axios"

interface Nproperty{
    cases : number,
    deaths : number,
    recoveries : number,
    active : number
} 

export const getNeighbour = async(country:string):Promise<Nproperty>=>{
    const result = await axios.get(`https://disease.sh/v3/covid-19/countries/${country}`)
    console.log(result)
    return{
        cases : result.data.cases,
        deaths : result.data.deaths,
        recoveries : result.data.recovered,
        active : result.data.active
    }

} 