
export const dynamic = 'auto',
            revalidate = 0,
            fetchCache = 'auto',
            runtime = 'nodejs',
            preferredRegion = 'auto'



import PocketBase from 'pocketbase';

export async function fetchPosts(){
    const pb = new PocketBase('http://127.0.0.1:8090');

try {
    // you can also fetch all records at once via getFullList
    const data = await pb.collection('posts').getFullList({sort: '-created'});
    //const records = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1')
    //const data = await records.json()
    return data
} catch (error) {
    console.error('Database Error:', error);
}

    
}

// fetch a paginated records list
//const resultList = await pb.collection('posts').getList(1, 50, {
//    filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
//});

// or fetch only the first record that matches the specified filter
//const record = await pb.collection('posts').getFirstListItem('someField="test"', {
//    expand: 'relField1,relField2.subRelField',
//});