function User() {
useEffect(() => {
  const controller = AbortController();
  const signal = controller.signal;
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {signal})
  .then(res => res.json())
  .then(data => setUser(data))
  .catch(err => {
    if(err.name === "AbortError") {
      console.log('canceled');
    }
  });

  return () => {
    controller.abort();
  }
}, [id])

  return <>User:</>
}
