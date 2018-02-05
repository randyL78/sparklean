// React libraries
import React from 'react';

// Import image urls
import president from '../../images/sparklean-president.jpg';
import floors from '../../images/Finished floor web.jpg';

const Home = () =>
  <div>
    <h2>Home</h2>
    <section className="section grid">
      <h3 className="grid__col--12" >About Us</h3>
      <p  className="grid__col--7">Sparklean began  cleaning in 2006 under the name Hill City Cleaning Angels with an initial focus on home cleaning and 
        construction clean-ups.  Over the next several years business steadily grew until in 2009 the angels hired its first employees. 
        By 2014, there were several cleaning teams, and we were doing a lot more than just home cleaning.  With that in mind, we decided
        to change our name to Sparklean to better represent all that our business encompasses.  Now we are growing again, with 
        an increased focus on Commercial Cleaning, while continuing to refine our brand, training, and procedures, so that we can deliver
        the best possible service to you: Our Customers. </p>
      <figure className="grid__col--4 image" >
        <img className="image--responsive" src={president} alt="" />
        <figcaption className="image--caption">Sparklean President and founder, Randy Layne</figcaption>
      </figure>
    </section>
    <section className="section grid">
      <h3 className="grid__col--12">Our Mission</h3>
      <p className="grid__col--7 toEnd">The goal of Sparklean is to first provide an extraordinary cleaning experience that, if successful, will open the doors to provide 
        many other services as well.  We hope to accomplish this by combining the consistency, organization, and accountability of a “Big” 
        business with the personal feel and individual attention of a smaller “Mom &amp; Pop” business.</p>
      <figure className="grid__col--4 image" >
        <img className="image--responsive" src={floors} alt="" />
        <figcaption className="image--caption">Sparklean floor care finished product</figcaption>
      </figure>
    </section>
  </div>
export default Home;
