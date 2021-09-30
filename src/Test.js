import React, { useEffect, useState } from 'react'
import {Select} from 'antd'

const {  Option } = Select
const Test = () => {
  const [data, setData] = useState([])
  const [city, setCity] = useState([])
  const [state, setState] = useState([])
  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries')
      .then(results => results.json())
      .then((data) => {
        setData(data)
      });
  }, []);

  // useEffect(() => {
  //   fetch('https://api.openbrewerydb.org/breweries?by_city=san_diego')
  //     .then(results => results.json())
  //     .then((data) => {
  //       setData(data)
  //     });
  // }, []);


  const byCity = (val) => {
    fetch('https://api.openbrewerydb.org/breweries?by_city=' + val)
      .then(results => results.json())
      .then((city) => {
        setCity(city)
      });
  }

  const byState = (val) => {
    fetch('https://api.openbrewerydb.org/breweries?by_state=' + val)
      .then(results => results.json())
      .then((data) => {
        setState(data)
      });
  }

  return (
    <>
     <div style={{ color: "black" ,textAlign:"left"}} > <h2>By City</h2>
    <Select style={{width:"250px"}} placeholder="Filter Beweries by City" onChange={(value) => byCity(value)}>
    {
        data?.map((d) => (
      <Option value={d?.city} >{d?.city}</Option>
        ))}
    </Select>
   
   
      {
        city?.map((d) => (
          <div style={{marginBottom:"20px"}}>
            id: {d?.id},
            obdb_id : {d?.obdb_id}
            name: {d?.name},
            brewery_type: {d?.brewery_type},
            street: {d?.street},
            address_2: {d?.address_2},
            address_3: {d?.address_3},
            city: {d?.city},
            state: {d?.state},
            county_province: {d?.county_province},
            postal_code: {d?.postal_code},
            country: {d?.country},
            longitude:{d?.logitude},
            latitude: {d?.latitude},
            phone: {d?.phone},
            website_url: {d?.website_url},
            updated_at: {d?.updated_at},
            created_at: {d?.created_at}
          </div>
        ))
      }
    </div><br /><br />

    <br />
    <div style={{ color: "black" ,textAlign:"left"}} > <h2>By State</h2>
    <Select style={{width:"250px"}} placeholder="Filter Beweries by State" onChange={(value) => byState(value)}>
    {
        data?.map((d) => (
      <Option value={d?.state} >{d?.state}</Option>
        ))}
    </Select>
    
   
      {
        state?.map((d) => (
          <div style={{marginBottom:"20px"}}>
            id: {d?.id},
            obdb_id : {d?.obdb_id},
            name: {d?.name},
            brewery_type: {d?.brewery_type},
            street: {d?.street},
            address_2: {d?.address_2},
            address_3: {d?.address_3},
            city: {d?.city},
            state: {d?.state},
            county_province: {d?.county_province},
            postal_code: {d?.postal_code},
            country: {d?.country},
            longitude:{d?.logitude},
            latitude: {d?.latitude},
            phone: {d?.phone},
            website_url: {d?.website_url},
            updated_at: {d?.updated_at},
            created_at: {d?.created_at}
          </div>
        ))
      }
    </div><br /><br />
    </>
  )
}

export default Test
