let generateMessage = (from, text) => {
    return {
        from: from,
        text: text,
        createdAt: new Date().valueOf()
    }
};

module.exports = { generateMessage:generateMessage }