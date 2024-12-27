import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT,
  NEXT_PUBLIC_PROJECT_ID, // Changed from PROJECT_ID to match environment variable
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID,
} = process.env;

// Then create the shortened aliases after destructuring
export const ENDPOINT = NEXT_PUBLIC_ENDPOINT;
export const PROJECT_ID = NEXT_PUBLIC_PROJECT_ID;
export const BUCKET_ID = NEXT_PUBLIC_BUCKET_ID;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
