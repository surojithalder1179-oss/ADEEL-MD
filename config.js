const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVzcDJ4NzRPSndtMEtEczZOeUxWOXB6b3lxMkdhWmZHWVZ1TlBzYm0xWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnZ6NzFubm5VK0NraDdvNGFlSGR3MGhlbUYrZ2hEMG1uRWJYdDlqbElsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SHNtL0R6QXhGTWxTWXZDNmtoNXBiYVpKcHhpRTh2bmR1dkt3cW5zWjBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RkE3aDROSis5d2xtVlZrYlBGeSsvU2U2K1JQeUZ3cVdmcWtvM21kQ1VZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCZDd1Zk44TC9EdU5tdWZKVlZsYzhXQ3VJb0RVWSs5cE03bEUrcUpqMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjQvcXhLMXhSWGxWdXlEb3oyUnNBR3lDQVozc2MxU2FSa1FBRHQ4U2Q4M1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZPaVY1UlRpNzRvL2h1WDhNbGdFMUhsRHk3ekFPbW1oMG9GL2FqVHVrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1FSSmliWDhNZkFuS2lVWW1zTmcwcDcwVTVnRW9GTmptcFZNNU9lZ3ZpYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtvQVAxak1QbklKa3BmR3A0UzloWk1nN0JaSnNaN2M1SVZZYm9hcmVLdmFSNE94bWt1L0NET0UwcXY2eGYwekNLY0l6bEx1dEJJT3BVc2d5VFIyNGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU1LCJhZHZTZWNyZXRLZXkiOiJsUzdPSFM5eC9PVFk4aUNCTzliRFV2NEVab2FCZm01Y2pyeUtjUjBUQzJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxODc5NjM5MDk1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTBCMzcxRjE3MkZCNDkxRkM5ODFENTJDREQ2QzEwOCIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgzMDY2Njc2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg3OTYzOTA5NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUxQjJGMzlDNDM5RDk5OEE5MTg4RTFCRkE0NDQyOUYiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc4MzA2NjY3Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE4Nzk2MzkwOTU3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1NTM2RDk2NDQ4OUEyNURDRTk5QUMwREZEODcwM0VDIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3ODMwNjY2Nzd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxODc5NjM5MDk1N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUI4ODAwQzI4RDlFNEEzQzc5Q0I3NzAxRTRCOTM2MiIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzgzMDY2Njc3fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkFERUVMNU1EIiwibWUiOnsiaWQiOiI5MTg3OTYzOTA5NTc6NTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiZnRyLWJ1ZyIsImxpZCI6IjcxNDE3NDU0NDA3ODk1OjU0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlBiN3FJRkVLemduZElHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQjJJTDN6U3E1Z1prWkJEUVVCN0xWdWQ1QytucUZKaGVwTXVsZklhTWREQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVHJpdzJUU1NOOWE1MXdoMSs5L2lFdVJHRkpwL09XNVlyV3NFOUFJM0hqZjJHV0tZOVRRdUFlOFAvQmxBSmFxWmFDd3E5K3RWaWFBNU1ZUG1oU2dDRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImlFTUNnNWtRYVd6TVJaN05tdXljNlZNeXpVZUt0ZHh5aXJQeEppYTd3VjRrVnJUZnpaRWZVU0NjM1hOREN3MXZjallTUENOL1VTdXc3ZThIOUtyUmlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNzE0MTc0NTQ0MDc4OTU6NTRAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFkaUM5ODBxdVlHWkdRUTBGQWV5MWJuZVF2cDZoU1lYcVRMcFh5R2pIUXcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZ2dOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MzA2NjY3NCwibGFzdFByb3BIYXNoIjoiMUk3TkFSIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIZVMifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ARO-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true or false for auto voice reply
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/sx07qa.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ARO-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "918796390957",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ARO-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x2qij1.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
