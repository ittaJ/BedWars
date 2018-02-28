enum Team {

    RED, GREEN, YELLOW, BLUE

}

class User {

    name: string
    isInGame: boolean
    team: Team
    isAlive: boolean

    constructor(name: string) {
        this.name = name;
    }


}

class Arena {

    name: string
    isGame: boolean
    maxPlayers: number
    playersNow: number
    players: Array<string>
    lobby: Position
    spawns: Array<Position>

    constructor(name: string) {
        this.name = name;

    }
}

//TODO make good command system somehow in this fuckin' shit