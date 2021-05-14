import openSocket from 'socket.io-client';

const io = openSocket(process.env.REACT_APP_CNTL_URL);

const serverResponse = {
  print_status: ({ message }) => console.log(message),
  redirect: ({ url }) => {}
}

io.on('connect', () => {
  console.log("Connected to Controller Sever");
})

io.on('server_response', (res) => {serverResponse[res['function']](res['args'])})

export const createVolume = (callback) => {
  console.log("createVolume");
  io.emit('create_volume', callback)
}

export const deleteVolume = (volume_id, callback) => {
  console.log("deleteVolume");
  io.emit('delete_volume', volume_id, callback)
}

export const openProject = (project, callback) => {
  console.log("openProject");
  io.emit('open_project', project, callback)
}

export const closeProject = (project, callback = () => {}) => {
  console.log("openProject");
  io.emit('close_project', project, callback)
}
