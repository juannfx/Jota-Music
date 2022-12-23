module.exports = {
    app: {
        token: 'MTA1MzAzNjUyODEwNTk1OTQ1NA.GagB4v.9IFCbrdQR19ylE2cmGIKkF6eCr4mGbxEPwKyyM',
        playing: 'by Jota❤️',
        global: true
    },
    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
