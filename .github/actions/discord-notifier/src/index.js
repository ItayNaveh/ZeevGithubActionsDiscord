const core = require("@actions/core");
const github = require("@actions/github");
const fetch = require("node-fetch").default;

const main = async() => {
    try {
        const response = await fetch("https://discord.com/api/webhooks/779046008684412979/UaQqJmOHg7nwqNAupSc04_hiE-Hmrk61VwTwtgMEnuLcXFe95S29omkXHE-ikOzNk5bZ")
        const data = await response.json();
        console.log(data);
    } catch (error) {
        core.setFailed(error.message);
    }
};
main();