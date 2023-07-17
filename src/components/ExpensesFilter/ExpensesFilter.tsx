import './ExpensesFilter.css';
import Card from '../UI/Card';

const ExpensesFilter = ({onFilterExpensesByYear, filteredYear, setFilteredYear}:{onFilterExpensesByYear:Function, filteredYear:string, setFilteredYear:Function}) => {

    function filterYearHandler(event:React.ChangeEvent<HTMLSelectElement>){
        setFilteredYear(event.target.value)
        onFilterExpensesByYear(event.target.value)

    }
  return (
    <Card className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={filteredYear} onChange={filterYearHandler}>
        <option value='All'>All</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
          <option value='2017'>2017</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpensesFilter;