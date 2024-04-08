const root = document.getElementById('root');
const twoList = React.createElement(React.Fragment, {},
  [
    React.createElement('ul', { id: 'list1'}, 
      [
        React.createElement('li', {}, 'First item'),
        React.createElement('li', {}, 'Second item')
      ]
    ),
    React.createElement('ul', { id: 'list2'}, 
      [
        React.createElement('li', {}, 'Third item'),
        React.createElement('li', {}, 'Fourth item')
      ]
    )
  ]);

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(twoList);