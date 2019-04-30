const Hashes = (redis) => {
    redis.hmset("user:123", "firstName", "Mister", "lastName", "Lie", "age", 10);
    redis.hincrby("user:123", "age", 10);

    redis.hgetall("user:123", (err, res) => {
        console.log(res);
    })
};

export default Hashes;
