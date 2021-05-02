import "../styles/App.scss";
import { TextField, Button, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
function Signin() {
  const useStyles = makeStyles({
    main: {
      position: "absolute",
      width: "350px",
      height: "467px",
      left: "calc(50% - 350px/2)",
      top: "calc(50% - 467px/2 - 0.5px)",
      textAlign: "center",
    },

    card: {
      height: "300px",
      left: "0px",
      right: "0px",
      top: "110px",
    },

    heading: {
      position: "absolute",
      height: "80px",
      left: "0px",
      right: "0px",
      top: "0px",
    },
    
    title: {
      height: "56px",
      top: "0px",

      /* Headline 3 */

      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "48px",
      lineHeight: "56px",

      /* identical to box height, or 117% */
    },

    subheading: {
      height: "24px",
      bottom: "0px",
      /* Headline 6 */

      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "24px",
      /* identical to box height, or 120% */

      textAlign: "center",
      letterSpacing: "0.15px",
    },

    username: {
      height: "72px",
      left: "20px",
      right: "20px",
      top: "40px",
    },

    password: {
      top: "132px",
    },

    signin: {
      position: "absolute",
      height: "36px",
      left: "20px",
      right: "20px",
      bottom: "40px",
    },

    signup: {
      position: "absolute",
      height: "44px",
      left: "0px",
      right: "0px",
      bottom: "0px",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.main}>
      <form>
        <div>
          <h1 className={classes.title}>ValcunX</h1>
          <h5 className={classes.subheading}>Sign In to Dashboard</h5>
        </div>
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <div className={classes.username}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </div>
            <div className={classes.password}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <div className={classes.signin}>
              <Button variant="contained">Sign In</Button>
            </div>
          </CardContent>
        </Card>
        <div>
          <Button variant="outlined" className={classes.signup}>
            New to ValcunX? Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
