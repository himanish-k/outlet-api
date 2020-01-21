const { getSocket, getSocketList, postSocket, putSocket } = require('../routes/socket');
const assert = require('chai').assert;

describe('testing socket api', function() {
    context('GET sockets/', function() {
        it('should return array with length 4', function() {
            const sockets = getSocketList();
            assert.isArray(sockets);
            assert.lengthOf(sockets, 4);
        });
    });

    context('GET socket/:id - valid id passed in', function() {
        it('should return valid socket object', function() {
            const socket = getSocket({ id: 1 });
            assert.isObject(socket);
            assert.equal(socket.id, 1);
            assert.equal(socket.status, "on");
            assert.equal(socket.location, "US");
        });
    });

    context('GET socket/:id - invalid id passed in', function() {
        it('should return empty object', function() {
            const socket = getSocket({ id: 5 });
            assert.isObject(socket);
            assert.notProperty(socket, 'id');
            assert.notProperty(socket, 'status');
            assert.notProperty(socket, 'location');
        });
    });

    context('GET socket/:id - no object passed in', function() {
        it('should return empty object', function() {
            const socket = getSocket();
            assert.isObject(socket);
            assert.notProperty(socket, 'id');
            assert.notProperty(socket, 'status');
            assert.notProperty(socket, 'location');
        });
    });

    context('POST sockets - valid status and location passed in', function() {
        it('should return object with given status and location', function() {
            const socket = postSocket({ status: 'on', location: 'US' });
            assert.isObject(socket);
            assert.equal(socket.id, 5);
            assert.equal(socket.status, 'on');
            assert.equal(socket.location, 'US');
        });
    });

    context('POST sockets - invalid status and location passed in', function() {
        it('should return object with status "on" and no location', function() {
            const socket = postSocket({ status: '' });
            assert.isObject(socket);
            assert.equal(socket.id, 6);
            assert.equal(socket.status, 'off');
            assert.equal(socket.location, '');
        });
    });

    context('POST sockets - no object passed in', function() {
        it('should return object with status "on" and no location', function() {
            const socket = postSocket();
            assert.isObject(socket);
            assert.notProperty(socket, 'id');
            assert.notProperty(socket, 'status');
            assert.notProperty(socket, 'location');
        });
    });

    context('PUT sockets - valid id, status and location passed in', function() {
        it('should return object with given id, status and location', function() {
            const socket = putSocket({ id: 5, status: 'on', location: 'US' });
            assert.isObject(socket);
            assert.equal(socket.id, 5);
            assert.equal(socket.status, 'on');
            assert.equal(socket.location, 'US');
        });
    });

    context('PUT sockets - valid id, invalid status and location passed in', function() {
        it('should return object with given id, status and location', function() {
            const socket = putSocket({ id: 5, status: '', location: '' });
            assert.isObject(socket);
            assert.equal(socket.id, 5);
            assert.equal(socket.status, 'off');
            assert.equal(socket.location, '');
        });
    });

    context('PUT sockets - invalid id passed in', function() {
        it('should return empty object', function() {
            const socket = putSocket({ id: 10, status: 'on', location: 'US' });
            assert.isObject(socket);
            assert.notProperty(socket, 'id');
            assert.notProperty(socket, 'status');
            assert.notProperty(socket, 'location');
        });
    });

    context('PUT sockets - no object passed in', function() {
        it('should return empty object', function() {
            const socket = putSocket();
            assert.isObject(socket);
            assert.notProperty(socket, 'id');
            assert.notProperty(socket, 'status');
            assert.notProperty(socket, 'location');
        });
    });
});