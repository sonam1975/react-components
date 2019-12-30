const Cucumber = () => {
  return <li>cucumber</li>
}
const Tomatoes = () => {
  return <li>tomato</li>
}

const GroceryList = () => {
  return (
    <div>
      <Cucumber />
      <Tomatoes />
      <GroceryListItems items = {['apple', 'banana', 'chocolate']} />

    </div>

  )
}


const GroceryListItems = (props) => {
  return (
    <ul>
      <li>{props.items[0]}</li>
      <li>{props.items[1]}</li>
      <li>{props.items[2]}</li>
    </ul>
  )
}

ReactDOM.render(
  <GroceryList/>,
  document.getElementById('app')
)