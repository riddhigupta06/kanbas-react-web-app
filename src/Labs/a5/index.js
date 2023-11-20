import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const BASE_URL = process.env.REACT_APP_BASE
  const A5_URL = `${BASE_URL}/a5`

  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${A5_URL}/welcome`}
            className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs />
      <hr />
      <WorkingWithObjects />
      <hr />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;