let nextId = 5;
let sockets = [
    { id: 1, status: 'on', location: 'US' },
    { id: 2, status: 'on', location: 'Canada' },
    { id: 3, status: 'off', location: 'Puerto Rico' },
    { id: 4, status: 'on', location: 'Canada' },
];

exports.getSocketList = () => {
    return sockets;
};

exports.getSocket = (params) => {
    if(params === undefined || params === null)
        return {};
    
    const { id } = params;
    if(id === undefined)
        return {};

    const filtered = sockets.filter(v => v.id == id);
    return filtered.length === 1 ? filtered[0] : {};
};

exports.postSocket =  (params) => {
    if(params === undefined || params === null)
        return {};
    
    const { status = '', location = '' } = params;
    const newSocket = {
        id: nextId++,
        status: status === "on" ? "on" : "off",
        location
    };
    sockets.push(newSocket);
    return newSocket;
};

exports.putSocket = (params) => {
    if(params === undefined || params === null)
        return {};

    const { id = null, status = '', location = '' } = params;

    // if no id provided, return empty object
    if(id === null)
        return {};

    // check if socket with passed in id exists
    // in the system (is tracked in the array)
    // if not, return empty object
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
        status: status === "on" ? "on" : "off",
        location
    };
    return sockets[i];
};