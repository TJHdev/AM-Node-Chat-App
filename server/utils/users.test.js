const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Tom',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Dave',
            room: 'Node Course'
        }];
    });


    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Thomas',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([user]);
    });
   

    it('should remove a user', () => {
        var removedUser = users.removeUser('1');
        expect(users.users.length).toBe(2);
        expect(removedUser).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        })
    });

    it('should not remove a user', () => {
        var invalidRemoval = users.removeUser('55');
        expect(users.users.length).toBe(3);
        expect(invalidRemoval).toBeFalsy();
    });

    it('should find user by id', () => {
        var foundUser = users.getUser('1');
        expect(foundUser).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        })
    });

    it('should not find user by id', () => {
        var invalidUser = users.getUser('Dave');
        expect(invalidUser).toBeFalsy();
    })

    it('should find user by name', () => {
        var foundUser = users.getUserByName('Mike')
        expect(foundUser).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        })
    })

    it('should not find user by name', () => {
        var notFoundUser = users.getUserByName('Mikee')
        expect(notFoundUser).toBeFalsy();
    })


    it('should return names for Node Course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Dave'])
    });

    it('should return names for React Course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Tom'])
    });

    it('should return an array with 2 rooms in it', () => {
        var uniqueRoomsArray = users.getUniqueRoomArray();

        expect(uniqueRoomsArray.length).toBe(2);
        expect(uniqueRoomsArray).toEqual(['Node Course', 'React Course'])

    })
});