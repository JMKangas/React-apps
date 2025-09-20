const ErrorExample = () => {

  let count = 0;

  const handleClick = () => {
    count++;
    console.log(count);
  }

  return <>
    <h2>Count is {count}</h2>
    <button type="button" onClick={handleClick}>
      increase count
    </button>
  </>

};

export default ErrorExample;
