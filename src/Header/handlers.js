import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { styles } from "./styles";

const HeaderHandlers = compose(withStyles(styles));

export default HeaderHandlers;
