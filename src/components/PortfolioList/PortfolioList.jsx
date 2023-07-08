import './PortfolioList.css'

function PortfolioList({ id, title, active, setSelected }) {
    return (
      <li 
        className= {active ? "portfolioList active h3" : "portfolioList h3"} 
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    );
  }
  
export default PortfolioList;