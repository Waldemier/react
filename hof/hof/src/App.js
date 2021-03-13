import logo from './logo.svg';
import './App.css';


function App({list}) {
  console.log(list)
  return (
    <ul>
      { list.map((heroe, index) => (
        <li key={index}>
          <strong>{heroe.name}</strong> - &nbsp;
          {heroe.side}
        </li>
      ))}
    </ul>
  );
}

const FilteredList = Component => ({list, side}) => {
  const filtered = list.filter(heroe => heroe.side === side)
  return <Component list={filtered} />
}

export default FilteredList(App);
