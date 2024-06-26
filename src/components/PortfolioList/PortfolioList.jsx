import './PortfolioList.css';

function PortfolioList({ title, active, setSelected }) {
  return (
    <li 
      className={active ? "portfolioList active h3" : "portfolioList h3"} 
      onClick={() => setSelected(title)} 
    >
      {title}
    </li>
  );
}

export default PortfolioList;
