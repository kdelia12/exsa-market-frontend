function Card(props) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{props.name}</h2>
          <p className="text-gray-600 text-sm">Item: {props.item}</p>
          <p className="text-gray-600 text-sm">Price: {props.price}</p>
          <p className="text-gray-600 text-sm">Payment: {props.payment}</p>
          <p className="text-gray-600 text-sm">Specific: {props.specific}</p>
          <p className="text-gray-600 text-sm">Type: {props.type}</p>
          <p className="text-gray-600 text-sm">Quantity: {props.quantity}</p>
          <p className="text-gray-600 text-sm">Collateral: {props.collateral}</p>
          <p className="text-gray-600 text-sm"><a href={props.link}>Jump to message</a></p>
        </div>
      </div>
    );
  }
  
  export default Card;