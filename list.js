const List = (redis) => {
    redis.del('planets');
    redis.rpush('planets', 'venus', 'earth', 'mars', 'jupiter');
    redis.rpush('planets', 'saturn');
    
    redis.lpush('planets', 'mercury');

    redis.lpop('planets');

    redis.lrange('planets', 0, -1, (err, res) => {
        console.log(res);
    });
};

export default List;