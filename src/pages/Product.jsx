import React from "react";
import AcrylicBoxs from "../Components/Products/AcrylicBoxs";
import AcrylicMementos from "../Components/Products/AcrylicMementos";
import AcrylicRods from "../Components/Products/AcrylicRods";
import Acrylicsheets from "../Components/Products/Acrylicsheets";
import MachineCovers from "../Components/Products/MachineCovers";

function Product() {
  return (
    <div>
      Product
      <Acrylicsheets />
      <AcrylicBoxs />
      <AcrylicMementos />
      <AcrylicRods />
      <MachineCovers />
    </div>
  );
}

export default Product;
