import React from 'react';
import './App.css';
import './components/Product'
import './components/Button'
import './components/Tile'
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"
import Product from "./components/Product";


function App() {
  return (
<>
          <h1>Handbags & Purses</h1>
      <nav>
        <button  type='button'
                isDisabled={true}
                 handleClick={() =>
                    console.log ('to the collection')}>to the collection</button>
                 <button type='button'
                  isDisabled={false}
                         handleClick={() => console.log ('shop all bags')}>shops all bags</button>
                                <button  type='button'
                                    isDisabled={false}
                                         handleClick={() => console.log ('to the collection')}>pre order</button>
      </nav>
    <main>
        <Product label="Best seller"
                 img={bag1}
                    title ="The handy bag"
                    price={400}/>
        <Product label="Best seller"
                 img={bag2}
                 title="The stylish bag"
                 price={250}/>
        <Product label="New collection"
                 img={bag3}
                 title="The simple bag"
                 price={300}/>
       <Product label="New collection"
                img={bag4}
                title="The simple bag"
                price={150}/>
    </main>
    <footer>
        <section>
    <h2>The Brand</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
</section>
        <section>
                <img src={brand} alt="{brandName}"/>
                                                </section>
        <section>
            <img src={ourStory} alt="{ourStory}"/>


        </section>
        <section>
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
        </section>

    </footer>
</>
);
}

export default App;



