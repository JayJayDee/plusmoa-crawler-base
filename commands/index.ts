
export type CommandParam = { [key: string]: string };
export type Command = (param: CommandParam) => Promise<any>;