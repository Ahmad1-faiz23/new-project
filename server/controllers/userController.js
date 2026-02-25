import { Webhook } from "svix";
import User from "../models/userModel.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const evt = whook.verify(req.body, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = evt;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };

        await User.create(userData);
        console.log("User Created ✅");
        break;
      }

      case "user.deleted": {
        await User.findOneAndDelete({ clerkId: data.id });
        console.log("User Deleted ✅");
        break;
      }

      default:
        break;
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Webhook Error ❌", error.message);
    return res.status(400).json({ success: false });
  }
};