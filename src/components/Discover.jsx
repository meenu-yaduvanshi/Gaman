import React from "react";
// import Nav from './components/Nav';
import DatamapsIndia from "react-datamaps-india";
import '../style/discover.css'
//import SlideShow from './SlideShow';



const Discover = () => {
  return (
    <div>
        <DatamapsIndia
          regionData={{
            "Andhra Pradesh": { food: "Pulihora" },
            "Arunachal Pradesh": { food: "Thukpa" },
            Assam: { food: "Assam Laksa" },
            Bihar: { food: "Litti Chokha" },
            Chhattisgarh: { food: "Chila" },
            Goa: { food: "Fish Curry" },
            Gujarat: { food: "Dhokla" },
            Haryana: { food: "Bajra Khichdi" },
            "Himachal Pradesh": { food: "Dham" },
            Jharkhand: { food: "Thekua" },
            Karnataka: { food: "Bisi Bele Bath" },
            "Jammu & Kashmir": { food: "Rogan Josh, Modur Pulao" },
            Kerala: { food: "Appam" },
            "Madhya Pradesh": { food: "Poha" },
            Maharashtra: { food: "Puran Poli" },
            Manipur: { food: "Eromba" },
            Meghalaya: { food: "Jadoh" },
            Mizoram: { food: "Bai" },
            Nagaland: { food: "Smoked Pork" },
            Odisha: { food: "Pakhala Bhata" },
            Punjab: { food: "Makki di Roti & Sarson da Saag" },
            Rajasthan: { food: "Dal Baati Churma" },
            Sikkim: { food: "Momos" },
            "Tamil Nadu": { food: "Sambar" },
            Telangana: { food: "Hyderabadi Biryani" },
            Tripura: { food: "Mui Borok" },
            "Uttar Pradesh": { food: "Tunde Kababi" },
            Uttarakhand: { food: "Kafuli" },
            "West Bengal": { food: "Fish Curry" },
            "Andaman and Nicobar Islands": { food: "Fish Curry" },
            Chandigarh: { food: "Chole Bhature" },
            "Dadra and Nagar Haveli and Daman and Diu": { food: "Chakli" },
            Lakshadweep: { food: "Tuna Fish Curry" },
            Delhi: { food: "Chole Bhature" },
            Puducherry: { food: "Seafood" },
            Ladakh: { food: "Thukpa" },
          }}
          hoverComponent={({ value }) => {
            return (
              <div>
                <p>{value.name}</p>
                <p>{value.food}</p>
              </div>
            );
          }}
          mapLayout={{
            startColor: "#FFDAB9",
            endColor: "#FF6347",
            hoverTitle: "Count",
            noDataColor: "#f5f5f5",
            borderColor: "#8D8D8D",
            hoverBorderColor: "#8D8D8D",
            hoverColor: "green",
            height: 70,
            weight: 30
          }}
        />
      <SlideShow />
    </div>
  )
}

export default Discover;