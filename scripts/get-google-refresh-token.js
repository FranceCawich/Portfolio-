const http = require("http");
const { google } = require("googleapis");

const clientId = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectUri = "http://localhost:3000/oauth2callback";

if (!clientId || !clientSecret) {
    console.error(
        "Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET. Set them in your environment before running this script."
    );
    process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri
);

const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["https://www.googleapis.com/auth/calendar.events"],
});

console.log("\nGoogle Calendar refresh token generator\n");
console.log("1. Open the URL below in your browser and sign in with the Google account you want to use:");
console.log(authUrl);
console.log(
    "\n2. After granting access, Google will redirect to http://localhost:3000/oauth2callback."
);
console.log(
    "   If your browser does not open automatically, copy the URL above into your browser."
);
console.log("\nWaiting for the authorization response...\n");

const server = http.createServer(async (req, res) => {
    if (!req.url.startsWith("/oauth2callback")) {
        res.writeHead(404);
        res.end("Not found");
        return;
    }

    const url = new URL(req.url, `http://localhost:3000`);
    const code = url.searchParams.get("code");

    if (!code) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Authorization code not found.");
        return;
    }

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(
            "Success! You can close this window. The refresh token has been printed to the terminal."
        );

        console.log("\nReceived tokens:\n");
        console.log(JSON.stringify(tokens, null, 2));
        console.log(
            "\nCopy the value of refresh_token into your .env.local file as GOOGLE_REFRESH_TOKEN."
        );
    } catch (error) {
        console.error("Error exchanging authorization code:", error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Failed to exchange authorization code.");
    } finally {
        server.close();
    }
});

server.listen(3000, () => {
    console.log("Listening for OAuth callback on http://localhost:3000/oauth2callback");
    console.log("If your browser does not open automatically, open the URL above manually.");
});

