```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This effect will only run once on mount
    // Or only when the value of some external data changes
    // Add appropriate dependencies here
  }, []); //Empty array means it only runs after initial render

  return <div>Count: {count}</div>;
}
```