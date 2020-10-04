import faker from 'faker'

const NUMBER_OF_TASKS = 6;
const tasks =[];

const expiry = new Date();
expiry.setDate(expiry.getDate() + 7)

for(let i = 0; i < NUMBER_OF_TASKS; i++) {
    tasks.push({ 
        'key': i,
        'requesterId': '5f765a458f54040004e70a61',
        'title': faker.lorem.words(),
        'description': faker.lorem.sentence(),
        'type': 'CHOICE',
        'responses': {
            i: 'test'
        },
        'master': false,
        'numberWorkers': 1,
        'reward': 100,
        'expiry': expiry,
        createdAt: Date.now()
    });
}

export default tasks;