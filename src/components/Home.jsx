import React from 'react'
import vg from "../assessts/pxfuel.jpg"
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";

const Home = () => {
  return (

    <>
    <div className='home' id="home">

        <main>
            <h1>
                Webxp
            </h1>
            <p>One Stop Solution</p>
        </main>
    </div>

  <div className='home2'>
    <img src={vg} alt='Graphics'/>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quasi inventore molestiae.
        </p>
      </div>
    </div>

    <div className="home3" id="about">
      <div>
      <h1>Who we are?</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam veritatis laboriosam repellendus voluptatibus aperiam voluptate optio, rem modi? Tenetur, commodi neque!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nisi. Voluptatem nisi quae, eos rem eum corporis modi quis maiores perspiciatis facilis doloremque quasi saepe sunt. Tenetur explicabo architecto sequi, non suscipit impedit cumque, repellat distinctio repudiandae harum dolor quasi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorum sit assumenda id, atque culpa quasi cumque! Provident facere omnis tempora laborum adipisci architecto reprehenderit eveniet quos nam unde molestias consectetur dicta amet libero porro illum culpa quisquam blanditiis voluptates voluptatum vitae nisi, repellendus modi ea. Iusto ipsa cupiditate alias aut nostrum, neque, laudantium quam sit praesentium esse deleniti! Aliquid natus in est odit dignissimos aperiam consequuntur quos at facere officia blanditiis ipsum cumque culpa temporibus saepe optio libero nisi, quae cum explicabo rem nostrum. Assumenda reiciendis facere sint recusandae distinctio obcaecati modi voluptatem, sit tempore eos hic, quisquam amet aperiam molestiae ipsa non velit excepturi est! Hic iste, voluptatum saepe ab doloremque atque obcaecati vero ex laboriosam nam tenetur!

      </p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        
        <h1>Brands</h1>

          <article>
            
            <div style={{
              animationDelay: "0.3s"
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div style={{
              animationDelay: "0.5s"
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay: "0.7s"
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>

            <div style={{
              animationDelay: "1s"
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            
          </article>
        
      </div>


    </div>

    </>
  )
}

export default Home