import React from 'react';
import Product from './Product'; // Corrected import
import './ProductList.css';

function ProductList() {
  const products = [
    {
      imageUrl: 'https://i.pinimg.com/474x/0a/0c/2f/0a0c2f2a462460ac75159217476cf117.jpg',
      name: 'Teddy Bear',
      description: 'A small, stuffed toy that looks like a bear, usually a cub or baby bear.',
      price: '29.99',
      rating: '4.5'
    },
    {
      imageUrl: 'https://i.pinimg.com/474x/22/4a/da/224ada5826612f6a8166f3aa307b2e6b.jpg',
      name: "Rubik's cube",
      description: 'A 3x3 puzzle toy that consists of 26 small cubes (cubies) that rotate on a central axis.',
      price: '7.99',
      rating: '4.2'
    },
    {
      imageUrl: 'https://i.pinimg.com/474x/f8/58/be/f858be09e15980e6ac2236d3cbbec34c.jpg',
      name: 'Naruto',
      description: 'This toy allow you to recreate iconic scenes from the anime and perfect for displaying on a shelf.',
      price: '24.99',
      rating: '4.8'
    },
    {
      imageUrl: 'https://i.pinimg.com/474x/9a/7d/a1/9a7da195fe38f0b9b90d784eca3a6cae.jpg',
      name: 'Monkey.D.Luffy',
      description: "Luffy action figures often feature intricate details, capturing his iconic straw hat and rubbery physique. Gear 5",
      price: '25.99',
      rating: '4.7'
    },
    {
      imageUrl: 'https://i.pinimg.com/474x/70/b7/30/70b730c77153e51e34c12719273ccc4a.jpg',
      name: 'Roronoa Zoro',
      description: "Zoro action figures often feature intricate details, capturing his distinctive three-sword style. Zoro typically comes with his three swords,Enma,Sandai Kitetsu,andShusui.",
      price: '25.99',
      rating: '4.9'
    },
    {
      imageUrl: 'https://i.pinimg.com/474x/9f/d3/38/9fd338417f0ec4d43d0de52b4613a905.jpg',
      name: 'Barbie',
      description: 'The Barbie doll is a plastic doll that is 11 inches tall and is modeled after an adult woman.',
      price: '14.99',
      rating: '4.3'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/86/bb/e5/86bbe5b07ac6f5d46de6768d07320f69.jpg',
        name: "Transformer's",
        description: 'Toy car Transformers are designed to look like real cars or other vehicles when in their alternate mode. They feature intricate details and can be transformed into robot forms with a variety of features, such as weapons,limbs,and accessories.',
        price: '39.99',
        rating: '4.5'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/11/45/f1/1145f1e5758b6fda67fce4ab5d263498.jpg',
        name: 'Tri Cycle',
        description: 'A tricycle is a three-wheeled vehicle.',
        price: '49.99',
        rating: '4.0'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/fc/6c/f1/fc6cf1d32759996316377d28bac48f81.jpg',
        name: 'Police Car',
        description: 'Police toy cars are miniature replicas of real police vehicles, often featuring lights, sounds, and realistic details.',
        price: '11.99',
        rating: '4.2'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/f9/a2/d8/f9a2d8de6815b1581eb43453e0c0ff53.jpg',
        name: 'Helicopter',
        description: 'A remote-controlled helicopter is a miniature aircraft that is controlled by a remote control.',
        price: '119.99',
        rating: '4.5'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/fa/82/6e/fa826eb1aac20df823c0eef6d0d06276.jpg',
        name: 'Motor Cycle',
        description: 'Motorcycle toys are miniature replicas of real motorcycles, often featuring detailed features and realistic designs.',
        price: '14.99',
        rating: '4.4'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/07/ee/17/07ee17f9327e844af584e87992a4757e.jpg',
        name: 'Flash',
        description: 'The Flash toys are action figures and collectibles based on the popular DC Comics superhero.',
        price: '24.99',
        rating: '4.2'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/6a/49/78/6a4978eef0f019a37f3970bca97abdaf.jpg',
        name: 'Iron Man',
        description: "Iron Man toys are action figures and collectibles based on the popular Marvel Comics superhero. They often feature the character's iconic armored suit, which is equipped with various weapons and abilities.",
        price: '29.99',
        rating: '4.7'
    },
    {
        imageUrl: 'https://i.pinimg.com/564x/a8/ba/d6/a8bad68852df401a2029f8deee1be3b4.jpg',
        name: 'Tom & Jerry',
        description: 'Tom & Jerry the iconic cat and mouse duo engaged in their classic chase scenes.',
        price: '24.99',
        rating: '4.4'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/eb/27/b4/eb27b4811b85a6b01905661d1062ecc0.jpg',
        name: 'Satoru Gojo',
        description: 'They are designed to look like the character from the anime series, with accurate features such as his white hair, blindfold, and Six Eyes.',
        price: '14.99',
        rating: '4.7'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/12/50/52/12505245796506ae4133355f82429cae.jpg',
        name: 'Kitchen Set',
        description: 'A kitchen set is a collection of toys designed to simulate cooking and kitchen activities.',
        price: '24.99',
        rating: '4.4'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/a0/e7/45/a0e745be6f705f791c0ebd863c6dd2bf.jpg',
        name: 'Doctor Set',
        description: "A doctor set is a collection of toys designed to simulate medical procedures and healthcare activities. They often include miniature versions of medical equipment, such as stethoscopes, thermometers, and syringes.",
        price: '19.99',
        rating: '4.5'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/51/27/fc/5127fc0a48f1cd406b73907b4c1a6266.jpg',
        name: 'Military Set',
        description: 'Military set toys are collections of toys designed to simulate military activities and warfare. They often include miniature versions of military vehicles, weapons, and soldiers.',
        price: '34.99',
        rating: '4.4'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/cf/db/95/cfdb959fe1f653b2cdb6aebac690e7de.jpg',
        name: 'Ben 10',
        description: 'Ben 10 are action figures, plush toys, and playsets based on the popular animated series. They feature the character Ben Tennyson and his Omnitrix, a watch-like device that allows him to transform into different alien creatures.',
        price: '9.99',
        rating: '4.2'
    },
    {
        imageUrl: 'https://i.pinimg.com/474x/ca/b8/8c/cab88c97e3b731f2bbe88192a237c1bf.jpg',
        name: 'Cinderella',
        description: 'They are designed to look like the character from the fairy tale, with accurate features such as her long blonde hair, blue dress, and glass slippers.',
        price: '14.99',
        rating: '4.3'
    },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          imageUrl={product.imageUrl}
          name={product.name}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ProductList;