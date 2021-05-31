import fetch from "node-fetch";

//
// 自前でPromiseを実装してみる
//
const isSuccess = true
const promise = new Promise((resolve, reject) => {
    if (isSuccess) {
        resolve('Success');
    } else {
        reject(new Error('Failed'));
    }
});

promise.then((response) => {
    console.log(response);
    return 'Success again'
}).then((response) => {
    console.log(response)
}).catch((e) => {
    console.log(e)
}).finally(() => {
   console.log('Finally')
});

//
// node-fetchで外部HTTPアクセス
// fetch()はPromiseオブジェクトを返す。
//
const getUser = (user) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`${response}`)
            } else {
                // json()もPromiseオブジェクトを返す。
                return response.json()
            }
    })
}

const getUser2 = (userId) => fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`${ response.status} Error`);
        } else {
            // json()もPromiseオブジェクトを返す。
            return response.json();
        }
    });

console.log('Start *********************')

getUser(2)
    .then((response) => {
        console.log(response)
    })
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        console.log('Finally.')
    })

getUser2(3)
    .then((response) => {
        console.log(response)
    })
    .catch((e) => {
        console.log(e)
    })
    .finally(() => {
        console.log('Finally.')
    })

//
// async - awaitで今風に書き換える
//
const getAsyncUser = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error(`${ response.status} Error`);
    } else {
        // json()もPromiseオブジェクトを返す。
        return await response.json();
    }
}

const main = async () => {
    try {
        const response = await getAsyncUser(4)
        console.log('---- Async Complete ----')
        console.log(response)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Try-Catch-Finally.')
    }
}

main().catch((e) => console.log(e))
