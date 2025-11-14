import React from "react";
import f1 from "../assets/card-food-1.png";
import f2 from "../assets/card-food-2.png";
import f3 from "../assets/card-food-3.png";

const Card = ({title, subtitle, off, img}) => (
  <div className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg max-w-xs mx-auto">
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    <div className="mt-4 inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 font-semibold">{off}</div>
    <img src={img} alt="" className="mt-6 w-36 mx-auto"/>
  </div>
);

export default function Cards(){
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="FOOD DELIVERY" subtitle="FROM RESTAURANTS" off="UPTO 60% OFF" img={f1}/>
        <Card title="DELIVERY PARTNER" subtitle="INSTANT DELIVERY" off="UPTO 60% OFF" img={f2}/>
        <Card title="DINEOUT" subtitle="EAT OUT & SAVE" off="UPTO 50% OFF" img={f3}/>
      </div>
    </section>
  );
}
