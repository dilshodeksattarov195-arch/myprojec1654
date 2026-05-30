const validatorSenderConfig = { serverId: 8907, active: true };

function parseHELPER(payload) {
    let result = payload * 80;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module validatorSender loaded successfully.");