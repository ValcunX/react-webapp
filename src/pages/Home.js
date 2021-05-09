import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/home/NavBar';

import '../styles/Home.scss';

function Home() {
  return (
    <div className="home-root">
      <div className="navbar-root"><NavBar /></div>
      <div className="home-hero">
        <Grid container spacing={2} className="home-hero-grid">
          <Grid item xs={12} md={6} lg={7} xl={8}>
            <div className="home-hero-image">
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={5} xl={4}>
            <div className="home-hero-content">
              <div className="home-hero-content-vscode">
                <div className="home-hero-content-vscode-icon"></div>
                <div className="home-hero-content-vscode-content">
                  <div className="home-hero-content-vscode-headline">
                    <Typography variant="h6">
                      Visual Studio Code, in your browser, full stop.
                    </Typography>
                  </div>
                  <div className="home-hero-content-vscode-caption">
                    <Typography variant="caption1">
                      ValcunX brings the world’s most popular desktop editor to the browser. Code, build, test, use the terminal, and open pull requests from anywhere.
                  </Typography>
                  </div>
                  <div className="home-hero-content-vscode-caption">
                    <Typography variant="caption1">
                      <span>Customize to your heart’s desire.</span> Add your favorite VS Code extensions, create a settings config file, install new themes, and tweak your settings.
                  </Typography>
                  </div>
                </div>
              </div>
              <div className="home-hero-content-docker">
                <div className="home-hero-content-docker-content">
                  <div className="home-hero-content-docker-headline">
                    <Typography variant="h6">
                      Powered By Docker, it just works, like Magic.
                    </Typography>
                  </div>
                  <div className="home-hero-content-docker-caption">
                    <Typography variant="caption1">
                      Docker makes development efficient and predictable. Take away repetitive, mundane configuration tasks for fast, easy and portable application development.
                  </Typography>
                  </div>
                  <div className="home-hero-content-docker-caption">
                    <Typography variant="caption1">
                      <span>Want your own Runtime?</span> Create your own Dockerfile, add your tools, install new debuggers, use custom runtimes. Engineered for your needs.
                  </Typography>
                  </div>
                </div>
                <div className="home-hero-content-docker-icon"></div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
