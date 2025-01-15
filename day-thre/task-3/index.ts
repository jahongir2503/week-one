const fakeUsers=[
    {
        id: "123e4567-e89b-12d3-a456-426614174000",
        name: "John Doe",
        phone: "+123456789",
        email: "john.doe@example.com",
        location: "New York",
        status: "active",
    },
    {
        id: "123e4567-e89b-12d3-a456-426614174001",
        name: "Jane Smith",
        phone: "+987654321",
        email: "jane.smith@example.com",
        location: "Los Angeles",
        status: "delete",
    }
]


const timeOut = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
};

async function fakeApi(){
    try {
        await timeOut(2000);
        return fakeUsers;

    } catch {
        console.error('Упс произошла ошибка...');
    }
    return 0
}

fakeApi().then(users => console.log(users))
