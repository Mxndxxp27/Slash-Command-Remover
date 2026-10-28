/**
 * Clear All Slash Commands from Discord
 * Run: node clearCommands.js
 * This will DELETE all global slash commands
 *
 * © 2025 Mandeep. All rights reserved.
 * discord: mandeep.lyq_
 * support server: https://dsc.gg/coredevs
 */

require("dotenv").config();

const { REST, Routes } = require("discord.js");


const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

if (!TOKEN || !CLIENT_ID) {
    console.error("❌ TOKEN or CLIENT_ID missing in .env file");
    process.exit(1);
}

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
    try {
        console.log("🧹 Clearing global slash commands...");


        await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            { body: [] }
        );

        console.log("✅ All global slash commands cleared successfully!");
    } catch (error) {
        console.error("❌ Failed to clear commands:", error);
        process.exit(1);
    }
})();
