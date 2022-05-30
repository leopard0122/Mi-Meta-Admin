import * as React from 'react';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

const fruits = require('./fruits.json');

interface Item {
  id: number;
  title: string;
  icon: string;
}

interface State {
  items: Item[];
}

export default class HorizontalExample extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { items: fruits.fruits };
  }

  render() {
    const items = this.state.items;
    return (
      <div className="example horizontal">
    
        <RLDD
          cssClasses="example-list-container"
          layout="horizontal"
          items={items}
          itemRenderer={this.itemRenderer}
          onChange={this.handleRLDDChange}
        />
      </div>
    );
  }

  private itemRenderer = (item: Item, index: number): JSX.Element => {
    return (
      <div className="item" style={{background:"white", marginRight:"10px", cursor:"pointer"}}>
        <div className="icon">{item.icon}</div>
        <div className="title">{item.title}</div>
        
      </div>
    );
  };

  private handleRLDDChange = (reorderedItems: Array<Item>) => {
    // console.log('Example.handleRLDDChange');
    this.setState({ items: reorderedItems });
  };
}
