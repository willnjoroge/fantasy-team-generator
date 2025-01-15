import app from "./app";
import { connectRedis } from "./config/redisConfig";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // await connectRedis();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server", error);
  }
};

startServer();
