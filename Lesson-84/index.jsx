// Цикл

// для классового компонента
// class MyComponent extends React.Component {
//   constructor() { super(); this.state = {}; }
//   componentDidMount() { // Монтаждалат }
//   componentDidUpdate() { // Жаңыртат }
//   componentWillUnmount() { // Аяктайт, тазалайт }
//   render() { return (..); }
// }

// для функицонального компонента
// function MyComponent() {
//   useState для state;
//   useEffect(() => { // Монтаждалат & Жаңыртат
//     // Код...
//     return () => { // Аяктайт, тазалайт (Cleanup)
//     }, []);
//   return (..);
// }