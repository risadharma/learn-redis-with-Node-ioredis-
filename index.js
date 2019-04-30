import Redis from "ioredis";

import String from './strings';
import Hashes from './hashes';
import List from './list';
import Sets from './sets';

const redis = new Redis();

String(redis);
Hashes(redis);
List(redis);
Sets(redis);