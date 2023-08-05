import { connect, connection, ConnectionStates } from "mongoose";

const { NEXT_PUBLIC_MONGODB_URI } = process.env;

if (!NEXT_PUBLIC_MONGODB_URI) {
  throw new Error(
    "Please define the NEXT_PUBLIC_MONGODB_URI environment variable inside .env"
  );
}

const isConnected: { connectionState: ConnectionStates } = {
  connectionState: ConnectionStates.disconnected,
};

export const connectDatabase = async () => {
  if (isConnected.connectionState === ConnectionStates.connected) {
    console.log("Using existing database connection");
    return Promise.resolve();
  }
  try {
    const { connection } = await connect(NEXT_PUBLIC_MONGODB_URI);
    if (connection.readyState === 1) {
      console.log("Connected to MongoDB");
      return Promise.resolve();
    }
  } catch (error) {
    console.log("Error connecting to MongoDB");
    return Promise.reject();
  }
};
