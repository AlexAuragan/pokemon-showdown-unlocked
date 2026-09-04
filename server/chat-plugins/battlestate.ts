export const commands: Chat.ChatCommands = {
    async requeststate(target, room, user) {
        room = this.requireRoom();

        const battle = room.battle;
        if (!battle) {
            throw new Chat.ErrorMessage(`This command only works in battle rooms.`);
        }

        const state = await battle.getState();
        if (!state) {
            throw new Chat.ErrorMessage(`Could not retrieve battle state.`);
        }

        user.sendTo(room, `|battlestate|${JSON.stringify(state)}`);
    },
};
