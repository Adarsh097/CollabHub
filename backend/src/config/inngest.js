import { Inngest } from "inngest";
import prisma from "./prisma.js";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "collab-hub",
  eventKey: process.env.INNGEST_EVENT_KEY,
  signingKey: process.env.INTGEST_SIGNING_KEY,
});

const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    //! Extract user data from the event
    const { id, email_addresses, first_name, last_name, profile_image_url } =
      event.data;

    //! create or update user in the database
    const userData = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name} ${last_name}`.trim() || null,
      image: profile_image_url || null,
    };

    const user = await prisma.user.upsert({
      where: { clerkId: id },
      update: userData,
      create: userData,
    });

    console.log("User synced:", user);
  }
);

const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    //! Extract user data from the event
    const { id } = event.data;

    //! delete user from the database
    const user = await prisma.user.delete({
      where: { clerkId: id },
    });
    // await deleteStreamUser(id.toString()) // delete user from stream too

    console.log("User deleted:", user);
  }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser, deleteUserFromDB];
