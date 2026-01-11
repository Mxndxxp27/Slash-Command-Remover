# Discord Slash Commands Cleaner 🧹

A simple utility script to clear all global slash commands from your Discord bot.

## ✨ Features

- Clear all global slash commands with a single command
- Simple and lightweight
- Error handling included
- Uses environment variables for security

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.9.0 or higher)
- npm (comes with Node.js)
- A Discord Bot with proper permissions

## 🚀 Installation

1. **Clone or download this repository**

```bash
git clone <your-repo-url>
cd <project-folder>
```

2. **Install dependencies**

```bash
npm install
```

This will install the required packages:
- `discord.js` - Discord API wrapper
- `dotenv` - Environment variable management

## ⚙️ Configuration

1. **Create a `.env` file** in the root directory of the project

2. **Add your bot credentials** to the `.env` file:

```env
TOKEN=your_bot_token_here
CLIENT_ID=your_application_client_id_here
```

### How to get your credentials:

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Select your application/bot
3. **TOKEN**: Go to "Bot" section → Click "Reset Token" → Copy the token
4. **CLIENT_ID**: Go to "OAuth2" section → Copy "Client ID"

⚠️ **Important**: Never share your bot token publicly!

## 💻 Usage

Run the script using Node.js:

```bash
node clearCommands.js
```

### Expected Output

**Success:**
```
🧹 Clearing global slash commands...
✅ All global slash commands cleared successfully!
```

**Error (Missing credentials):**
```
❌ TOKEN or CLIENT_ID missing in .env file
```

**Error (Invalid credentials):**
```
❌ Failed to clear commands: [error details]
```

## 🔧 Troubleshooting

### Common Issues

**1. "TOKEN or CLIENT_ID missing in .env file"**
- Make sure your `.env` file exists in the root directory
- Verify that `TOKEN` and `CLIENT_ID` are correctly spelled
- Ensure there are no spaces around the `=` sign

**2. "401 Unauthorized"**
- Your bot token is invalid or expired
- Reset your token in the Discord Developer Portal

**3. "Module not found"**
- Run `npm install` to install all dependencies

**4. Commands still showing in Discord**
- Discord may cache commands for up to 1 hour
- Try restarting your Discord client
- Guild-specific commands are not affected by this script (only global commands)


## 📁 Project Structure

```
.
├── clearCommands.js    # Main script
├── .env               # Environment variables (create this)
├── package.json       # Project dependencies
└── README.md          # Documentation
```

## 🛠️ Additional Scripts

You can add these scripts to your `package.json`:

```json
{
  "scripts": {
    "clear": "node clearCommands.js"
  }
}
```

Then run:
```bash
npm run clear
```

## 📞 Support

- **Discord**: [mandeep.ly](https://discord.com/users/mandeep.ly)
- **Support Server**: [https://dsc.gg/fynex](https://dsc.gg/fynex)
- **Team Steroid**: [Join for free code and paid codes](https://discord.gg/g4ZTneX9x8)

## 📝 License

© 2025 Mandeep. All rights reserved.

---

## ⚠️ Important Notes

1. **Backup**: This script will DELETE all your global slash commands. Make sure you have a backup of your command registration code.

2. **Global vs Guild**: This script only clears GLOBAL commands. Guild-specific commands require modification.

3. **Rate Limits**: Discord has rate limits. If you run this script multiple times quickly, you may be temporarily rate-limited.

4. **Permissions**: Ensure your bot token has the necessary permissions to manage application commands.

## 🔄 Re-registering Commands

After clearing commands, you'll need to re-register them using your bot's command registration script. This is typically done in your main bot file or a separate deploy script.

---

**Made with ❤️ by Mandeep**
