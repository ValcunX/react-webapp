import openSocket from 'socket.io-client';

const io = openSocket(process.env.REACT_APP_CNTL_URL);

io.on('connect', () => {
  console.log("Connected to Controller Sever");
})

io.on('server_response', console.log)

export const createVolume = (callback) => {
  console.log("createVolume");
  io.emit('create_volume', callback)
}

export const openProject = (project, callback) => {
  console.log("openProject");
  io.emit('open_project', project, callback)
}

export const closeProject = (project, callback = () => {}) => {
  console.log("openProject");
  io.emit('close_project', project, callback)
}
