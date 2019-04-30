const String = (redis) => {
    redis.set("foo", "bar");
    redis.get("foo", (err, res) => {
        console.log(res);
    });

    redis.get("name", (err, res) => {
        if (res == null) {
            redis.set("name", "Mr.X")
                .then(result => console.log(result));
        }
        console.log(res);
    });

    redis.mset("name", "Mrs.X", "city", "jakarta", "gender", "female");
    redis.mget("name", "city", "gender", (err, res) => {
        console.log(res);
    });
};

export default String;