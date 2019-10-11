const redis = require('redis');

const redisClient = redis.createClient();

redisClient.on('error', err => {
  console.log('🤬 ', err);
  throw Error(err);
});

redisClient.set('testKey', 'my value', redis.print);
redisClient.set('keyExpireIn10Sec', 'other value', 'EX', 10, redis.print);

redisClient.get('keyExpireIn10Sec', (err, reply)  => {
  console.log('🤓 keyExpireIn10Sec value:', reply);
});

setTimeout(() => {
  console.log('⏱ after 10 secondes');
  redisClient.get('keyExpireIn10Sec', (err, reply)  => {
    console.log('🤓 keyExpireIn10Sec value:', reply);
  });
}, 10000);

redisClient.get('testKey', (err, reply)  => {
  console.log('🤓 testKey get value:', reply);
});

redisClient.get('missingKey', (err, reply) => {
  console.log('🤓 missingKey value:', reply);
});

redisClient.quit();
