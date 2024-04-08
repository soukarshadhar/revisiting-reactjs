const root = document.getElementById('container');
const list = React.createElement('ul', { id: 'list'}, [React.createElement('li', {}, 'First item'), React.createElement('li', {}, 'Second item')]);
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(list);