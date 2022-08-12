import React from 'react'
import aboutimage from "../img/features.jpg"


const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container">

          <div className="section-title">
            <h2>About Us</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                <li> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

            </div>
          </div>

        </div>
      </section>
      <section id="features" className="features">
        <div className="container">

          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="icon-box mt-5 mt-lg-0">
                <h4>Est labore ad</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="icon-box mt-5">
                <h4>Harum esse qui</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
              <div className="icon-box mt-5">
                <h4>Aut occaecati</h4>
                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
              </div>
              <div className="icon-box mt-5">
                <h4>Beatae veritatis</h4>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>
            </div>
            <div className="image col-lg-6 order-1 order-lg-2 " >
              <img src={aboutimage} alt="about" height={500} width={500} />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About