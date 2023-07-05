We are huge fans of Ready or Not game! However the game uses Mod.Io for mod support. We didn't find any way to easily subsribe to all your friends mods, so we did this ugly thing.

This uses your own Oauth token and your friends Oauth token. Your friends Oauth is used for fetching all the mods they have subscribed and your own Oauth is used to subscribe it to your own account.

After clicking the button, you can double check from mod.io that all your friends subscribed mods have been subscribed to you also.

Browsers console (F12) also gives you more information, in case of any errors!

You and your friend both need to create your own Oauth Token in the Mod.Io.

More info about Mod.io API https://docs.mod.io/#getting-started

😐 <b>DO NOT SHARE YOUR OAUTH TOKEN TO ANYONE YOU CAN'T TRUST</b> 😐


This is a work in progress...


Prerequisite

- You and your friend need to have a created Oauth token from Mod.Io user settings
- Extract both getMods.js and index.html in a same folder

How to use
- Open index.html with your browser
- Insert your own Oauth token to the input field "Your own token"
- Insert your friends token (which subscribed you will be subscribing) to the input field "Your friends token"
- Insert gameId in the input field "Game Id" Ready or not gameid is 3791. You can use other game ids if you know the games gameid in mod.io!
- Click the button
After clicking the button your mod.io account has subscribed to all the mods your friend has subscribed in that particular game.


