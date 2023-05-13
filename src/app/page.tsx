import Button from "./Button";
import Tiles from "./Tiles";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

export default function Home() {
  return (
    <div>
      <h1>Home Hub</h1>
      <Button on={true}>Turn on</Button>
      <Button on={false}>Turn off</Button>
      <Tiles />
    </div>
  );
}
