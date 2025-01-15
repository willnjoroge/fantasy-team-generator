import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redisClient.on("error", (err: any) => {
  console.error("Redis client error", err);
});

redisClient.on("connect", () => {
  console.log("Redis client connected");
});

export const connectRedis = async () => {
  await redisClient.connect();
  console.log("Redis client connected");
};

export default redisClient;
