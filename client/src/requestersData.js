import faker from 'faker'

const NUMBER_OF_REQUESTERS = 6;
const requestersData =[];

for(let i = 0; i < NUMBER_OF_REQUESTERS; i++) {
    requestersData.push({ 
        'key': i,
        'avatar' : faker.image.avatar(),
        'name' : faker.name.firstName(),
        'description' : faker.lorem.sentence(),
    });
}

export default requestersData;