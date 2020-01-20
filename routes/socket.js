let nextId = 5;
let sockets = [
    { id: 1, status: 'on', location: 'US' },
    { id: 2, status: 'on', location: 'Canada' },
    { id: 3, status: 'off', location: 'Puerto Rico' },
    { id: 4, status: 'on', location: 'Canada' },
];

exports.getSocketList = () => {
    return sockets;
}

exports.getSocket = ({ id }) => {
    const filtered = sockets.filter(v => v.id == id);
    return filtered.length === 1 ? filtered[0] : {};
}

exports.postSocket =  ({ status, location }) => {
    const newSocket = {
        id: nextId++,
        status: status === "on" ? "on" : "off",
        location
    };
    sockets.push(newSocket);
    return newSocket;
};

exports.putSocket = ({ id, status, location }) => {
    const i = sockets.reduce(
        (reqIndex, val, currIndex) =>
        { 
            if(id == val.id)
                reqIndex = currIndex;
            
            return reqIndex;
        },
    -1);
    if(i < 0) return {};
    
    sockets[i] = {
        id,
        status,
        location
    };
    return sockets[i];
};