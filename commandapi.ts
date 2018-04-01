//% color=190 weight=100 icon="\f209" block="SadAPI Commands"
namespace SadApiCommands {

    /**
     * Function for creating new commands by name
     */
    //% block
    export function createCommand(name: string, args: Array<string>, permission: string, todo: () => any): void {
        //TODO
    }

    /**
     * Function for registering commands by executor
     */
    //% block
    export function registerCommand(executor: CommandExecutor): void {
        //TODO
    }

}

interface CommandExecutor {

    (name: string, args: Array<string>, permission: string): void;

}

class Permission {

    permissionName: string

    public Permission(permissionName: string, forCommand: Command) {
        this.permissionName = permissionName;
    }
}

class Command {

    name: string
    args: Array<String>
    permission: Permission

    public Command(name: string) {
        this.name = name;
        new CommandUtils().commands.push(this)
    }

}

class CommandUtils {

    commands: Array<Command>

}