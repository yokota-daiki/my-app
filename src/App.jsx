export const App = () => {
  const onClick = () => {
      alert('test');
  }
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p>お元気ですか？</p>
      <button onClick={ onClick }>ボタン</button>
    </>
  );
}
