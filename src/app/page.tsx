import Button from "./Button";

export default function Home() {
  return (
    <>
      <h1>Home Hub</h1>
      <Button on={true}>Turn on</Button>
      <Button on={false}>Turn off</Button>
    </>
  );
}
