interface UserWithGadget {
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: string | undefined;
    };
}

interface UserWithGadgets {
    id: string;
    name: string;
    gadgets: {
        id: string;
        name: string;
        price: string | undefined;
    }[];
}


const input: UserWithGadget[] = [
    {
        id: "1",
        name: "Leonardo DiCaprio",
        gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
        id: "2",
        name: "Joseph Gordon-Levitt",
        gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
        id: "1",
        name: "Leonardo DiCaprio",
        gadget: { id: "103", name: "Laptop", price: "1500" },
    },
    {
        id: "3",
        name: "Elliot Page",
        gadget: { id: "104", name: "Smartwatch", price: "500" },
    },
    {
        id: "2",
        name: "Joseph Gordon-Levitt",
        gadget: { id: "105", name: "Headphones", price: "300" },
    },
    {
        id: "3",
        name: "Elliot Page",
        gadget: { id: "106", name: "Camera", price: "1200" },
    }
];


function aggregateUsers(input: UserWithGadget[]): UserWithGadgets[] {
    const userArray: UserWithGadgets[] = [];

    for (const { id, name, gadget } of input) {
        let userFound = false;

        for (const user of userArray) {
            if (user.id === id) {
                user.gadgets.push(gadget);
                userFound = true;
                break;
            }
        }

        if (!userFound) {
            userArray.push({ id, name, gadgets: [gadget] });
        }
    }

    return userArray;
}

const output: UserWithGadgets[] = aggregateUsers(input);
console.log(output);
