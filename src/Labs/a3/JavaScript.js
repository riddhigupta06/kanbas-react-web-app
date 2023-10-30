import BooleanVariables from "./BooleanVariables";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import Spread from "./Spread";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithFunctions from "./WorkingWithFunctions";

function JavaScript() {
    console.log('Hello World!');
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            <IfElse/>
            <TernaryOperator/>
            <WorkingWithFunctions/>
            <WorkingWithArrays/>
            <TemplateLiterals/>
            <House/>
            <Spread/>
            <Destructing/>
            <FunctionDestructing/>
        </div>
    );
}

export default JavaScript