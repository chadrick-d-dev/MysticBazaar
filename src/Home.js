import React from "react";
import './Home.css';
import Product from "./Product.js";
import "./assets/bazaar_lamps.png";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img src={require("./assets/bazaar_lamps.png")} alt="" className="home_image" />
          <div className="home_row">
            <Product
              id="7778889"
              title="Levitation Cube: If you like floating above the ground this item is for you!"
              price={677.00}
              rating={5}
              image={require("./assets/levitation_cube.png")}
            />
            <Product 
              id="5656559"
              title="Teleport Orb: For advanced users only. When used correctly this orb will assist you in teleporting wherever you need to go within a 50 mile radius of your current location."
              price={880.00}
              rating={4}
              image={require("./assets/teleport_orb.png")}
            />
          </div>

          <div className="home_row">
            <Product 
              id="3339997"
              title="Enchanting Bracelet: Wear this and people you find attractive will find you irresistable forever after they see you wearing it."
              price={575.00}
              rating={3}
              image={require("./assets/enchanted_bracelet.png")}
            />
            <Product 
              id="1212125"
              title="Shrink and Grow Potions: One makes you shrink, One makes you grow. Sorry, you'll have to figure out which one does what yourself! Discounted."
              price={125.00}
              rating={2}
              image={require("./assets/shrink_grow_potion.png")}
            />
            <Product 
              id="1111119"
              title="Morality Potion: Give this to a person with who makes unhealthy decisions and they'll never make a bad decision again!"
              price={75.00}
              rating={4}
              image={require("./assets/morality_potion.png")}
            />
          </div>

          <div className="home_row">
            <Product
              id="1313139"
              title="Magic Portal Door: Visualize the destination, open the door and you will be where you want to be."
              price={998.00}
              rating={5}
              image={require("./assets/paradise_gate.png")} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;