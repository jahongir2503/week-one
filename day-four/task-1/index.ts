interface baseUsers {
    id: string;
    name: string;
    email: string;
    isActive: boolean;
}

const users = [
    { id: "1", name: "AlEx ", email: "alex@example.com", isActive: true },
    { id: "2", name: "  cHRis", email: "chris@example.com", isActive: false },
    { id: "3", name: " JoRdaN ", email: "jordan@example.com", isActive: true },
    { id: "4", name: " tAYLor ", email: "taylor@example.com", isActive: false },
    { id: "5", name: " MoRGan   ", email: "morgan@example.com", isActive: true }
];

function cleanUserData(users: baseUsers[]): Promise<baseUsers[]> {
    try {
        const randomErr = Math.floor(Math.random() * 100);

        if (randomErr <= 10) {
            return Promise.reject(new Error("Ой, у нас что-то пошло не так..."));
        }

        const cleanedUsers = users
            .filter(user => user.isActive)
            .map(user => ({
                id: user.id,
                name: user.name.trim().toLowerCase(),
                email: user.email.toLowerCase(),
                isActive: user.isActive
            }));

        return Promise.resolve(cleanedUsers);
    } catch (err) {
        return Promise.reject(err);
    }
}

cleanUserData(users)
    .then(cleanedUsers => console.log(cleanedUsers))
    .catch(err => console.error(err.message));
