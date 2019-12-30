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
    </div>

  )
}

ReactDOM.render(
  <GroceryList />,
  document.getElementById('app')
)