const api = 'https://jsonplaceholder.typicode.com/users/1'

const timeOut = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
};

const err = 'Ошибка при загрузке данных'

async function korn() {
    try {
        await timeOut(2000)
        const response = await fetch(api)
        const data = await response.json()
        //jo;;//псевдо ошибка
        console.log('Данные об пользователе:', data)

    } catch {
        console.error('Ошибка при загрузке данных');
    }

}

korn()