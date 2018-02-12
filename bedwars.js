let arena = {
    name: "Arena",
    isGame: false,
    maxPlayers: 4,
    playersNow: 0,
    players: [""],
    lobby: player.position(),
    spawns: [player.position()]
}
arena.players.removeAt(0)
arena.spawns.removeAt(0)

player.onChat("bw.help", function () {
    player.say("§7----------")
    player.say("§6bw.help - shows help")
    player.say("§6bw.join - joins arena")
    player.say("§6bw.leave - leaves arena")
    player.say("§6bw.info - shows info about arena")
    player.say("§6bw.setlobby - sets lobby")
    player.say("§6bw.addspawn - adds spawn")
    player.say("§7----------")
})

player.onChat("bw.setlobby", function () {
    arena.lobby = player.position()
    player.say("§aYou set lobby's position!")
})

player.onChat("bw.addspawn", function () {
    if (arena.spawns.length == arena.maxPlayers) {
        player.say("§cYou set all possible spawns!")
        return
    }

    arena.spawns.insertAt(arena.spawns.length + 1, player.position())
    player.say("§aYou set new spawn!")
})

player.onChat("bw.info", function () {
    player.say("§7----------")
    player.say("§6Arena name: " + "§a" + arena.name)
    player.say("§6Is game: " + "§a" + arena.isGame)
    player.say("§6Max players: " + "§a" + arena.maxPlayers)
    player.say("§6Players now: " + "§a" + arena.playersNow)
    player.say("§6Players: ")
    for (let i = 0; i <= arena.players.length - 1; i++) {
        player.say("§a- " + arena.players[i])
    }
    player.say("§6Lobby posision: " + "§a" + arena.lobby.toString())
    player.say("§6Player spawns: ")
    for (let i = 0; i < arena.spawns.length - 1; i++) {
        player.say("§a- " + arena.spawns[i])
    }
    player.say("§7----------")
})
player.onChat("bw.join", function () {
    if (arena.playersNow == arena.maxPlayers) {
        player.say("§cArena is full!")
        return
    }
    if (arena.isGame) {
        player.say("§cGame already started!")
        return
    }
    arena.playersNow = arena.playersNow + 1
    let name = player.name()

    arena.players
        .insertAt(arena.players.length + 1, name)
    player.say("§aJoined the arena " + "§b" + arena.name + " §a!")

    if(arena.playersNow == arena.maxPlayers) {
        
        //TODO finish game joining

    }
})
player.onChat("bw.leave", function () {
    for (let j = 0; j <= arena.players.length - 1; j++) {
        let playerName = player.name()
        if (arena.players[j] == playerName) {
            arena.players.removeElement(playerName)
            arena.playersNow = arena.playersNow - 1
            player.say("§aYou left arena!")
            return
        }
    }
    player.say("§cYou are not on arena!")
})