import { Inngest } from "inngest";
import prisma from "./prisma.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "collab-hub",
    signingKey: process.env.INTGEST_SIGNING_KEY
});

const syncUser = inngest.createFunction(
    {id: "sync-user"},
    {event: "clerk/user.created" },
    async ({event})=>{
        try {
            //! Extract user data from the event
            const {id, email_addresses, first_name, last_name, profile_image_url} = event.data;

            //! create or update user in the database
            const userData = {
                clerkId: id,
                email: email_addresses[0]?.email_address,
                name: `${first_name} ${last_name}`.trim() || null,
                image: profile_image_url || null,
            }

            const user = await prisma.user.upsert({
                where: {clerkId: id},
                update: userData,
                create: userData,
            });

            console.log("User synced:", user);

            return res.status(200).json({
                message: "User synced",
                data: user,
            })

        } catch (error) {
            return res.status(500).json({
                message: "Error syncing user",
                error: error.message,
            })
        }
    }
)

const deleteUserFromDB = inngest.createFunction(
    {id: "delete-user"},
    {event: "clerk/user.deleted" },
    async ({event})=>{
        try {
            //! Extract user data from the event
            const {id} = event.data;

            //! delete user from the database
            const user = await prisma.user.delete({
                where: {clerkId: id},
            });
            // await deleteStreamUser(id.toString()) // delete user from stream too

            console.log("User deleted:", user);

            return res.status(200).json({
                message: "User deleted",
                data: user,
            })

        } catch (error) {
            return res.status(500).json({
                message: "Error deleting user",
                error: error.message,
            })
        }
    }
)


// Create an empty array where we'll export future Inngest functions
export const functions = [syncUser,deleteUserFromDB];