const Sets = (redis) => {

    redis.sadd('tags', 'react', 'react native', 'graphql', 'js');
    redis.smembers('tags', (err, res) => {
        console.log('Member of tags:');
        console.log(res);
    })

    redis.sadd('tags', 'framer', 'sketch');
    redis.smembers('tags', (err, res) => {
        console.log('Member of tags 2:');
        console.log(res);
    })

    redis.sismember('tags', 'javascript');

    redis.sadd('tags:react', 'react router', 'redux');
    redis.smembers('tags:react', (err, res) => {
        console.log('Member of tags:react :');
        console.log(res);
    })

    redis.sunionstore('tags:react native', 'tags', 'tags:react');

    redis.smembers('tags:react native', (err, res) => console.log(res));
}; 

export default Sets;