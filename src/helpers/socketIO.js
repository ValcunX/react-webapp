import openSocket from 'socket.io-client';

const io = openSocket(process.env.REACT_APP_CNTL_URL);

io.on('connect', () => {
  console.log("Connected to Controller Sever");
})

export const createVolume = (callback) => {
  console.log("createVolume");
  io.emit('create_volume', callback)
}
