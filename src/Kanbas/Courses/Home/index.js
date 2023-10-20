import ModuleList from "../Modules/ModuleList";
import Status from "./Status";

function Home() {
  return (
    <div className="row">
      <div className="col">
        <ModuleList />
      </div>
      <div className="col-md-auto">
        <Status />
      </div>
    </div>
  );
}
export default Home;
