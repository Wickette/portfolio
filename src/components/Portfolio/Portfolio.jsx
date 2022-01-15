import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.css";
import {
    featuredPortfolio,
    frontendPortfolio,
    backendPortfolio,
    fullstackPortfolio,
} from '../../helpers/portfolioData';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
        id: "featured",
        title: "featured",
    },
    {
      id: "frontend",
      title: "frontend",
    },
    {
      id: "backend",
      title: "backend",
    },
    {
      id: "fullstack",
      title: "fullstack",
    }
  ];

  useEffect(() => {
    switch (selected) {
    case "featured":
        setData(featuredPortfolio);
        break;
      case "frontend":
        setData(frontendPortfolio);
        break;
      case "backend":
        setData(backendPortfolio);
        break;
      case "fullstack":
        setData(fullstackPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio_main" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

   
    

    {data.map((d, index) => (

<div className="blog_card_container">
<div class="blog-card">
    <div class="meta">
      <div class="photo"><img src={d.image} alt="" /></div>
      <ul class="details">
        <li class="author"><a href={d.deployedLink}>Deployed URL</a></li>
        <li class="date"><a href={d.codeLink}>Code Link</a></li>
      </ul>
    </div>
    <div class="description">
      <h1>{d.title}</h1>
      <h2>Opening a door to the future</h2>
      <p> {d.summary}</p>
      <p class="read-more">
        <a href="#">Read More</a>
      </p>
    </div>
  </div>
</div>     
    ))}



    
   
 


      {/* <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.gif}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
}