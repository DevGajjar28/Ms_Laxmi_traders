import machineimg1 from "../assets/item5/machine1.jpg";
import machineimg2 from "../assets/item5/machine2.jpg";
import machineimg3 from "../assets/item5/meter3.jpg";
import machineimg4 from "../assets/item5/widow4.jpg";


const MachineCover = [
    {
        category: "MachineCover",
        items: [
            {
                id: 1,
                name: "Machine Safety Guard",
                price: "₹ 5,000/ Piece",
                material: "Mild Steel",
                color: "Yellow",
                finish: "Polished",
                description: "Price varies based on selected size.",
                images: [machineimg1]
            },
            {
                id: 2,
                name: "Acrylic Machine Guard",
                price: "₹ 5,400/ Piece",
                material: "Acrylic",
                color: "Silver",
                finish: "Polished",
                description: "Price varies based on selected size.",
                images: [machineimg2]

            },
            {
                id: 3,
                name: "Gauge Meter Glass",
                price: "₹ 15/ Piece",
                material: "Acrylic",
                color: "Transparent",
                thickness: "2mm",
                description: "Price varies based on selected size.",
                images: [machineimg3]

            },
            {
                id: 4,
                name: "Meter Window Glass",
                price: "₹ 110/ Piece",
                color: "Transparent",
                thickness: "4mm",
                shape: "Rectangle",
                description: "Price varies based on selected size",
                images: [machineimg4]

            },

        ],
    },
];

export default MachineCover;
