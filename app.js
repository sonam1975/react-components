// const Cucumber = () => {
//   return <li>cucumber</li>
// }
// const Tomatoes = () => {
//   return <li>tomato</li>
// }

const GroceryList = () => {
  return (
    <div>
      <GroceryListItems items = {['apple', 'banana', 'chocolate']} />
    </div>
  )
}

class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };

  }

  onListItemsHover() {
    this.setState({

      done: !this.state.done
    });



  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <ul>
        <li style = {style} onMouseEnter={this.onListItemsHover.bind(this)} onMouseLeave={this.onListItemsHover.bind(this)}> {this.props.items[0]}</li>
        <li>{this.props.items[1]}</li>
        <li>{this.props.items[2]}</li>
      </ul>
    )
  }
}


ReactDOM.render(
  <GroceryList/>,
  document.getElementById('app')
)

// const GroceryListItems = (props) => {
//   var onListItemsHover = (event) => {

//   }

//   return (
//     <ul>
//       <li onClick={onListItemsClick}> {props.items[0]}</li>
//       <li>{props.items[1]}</li>
//       <li>{props.items[2]}</li>
//     </ul>
//   )
// }