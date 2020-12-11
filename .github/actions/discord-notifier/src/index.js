const core = require("@actions/core");
const github = require("@actions/github");
const fetch = require("node-fetch").default;

const main = async() => {
    try {
        // const response = await fetch("https://discord.com/api/webhooks/779046008684412979/UaQqJmOHg7nwqNAupSc04_hiE-Hmrk61VwTwtgMEnuLcXFe95S29omkXHE-ikOzNk5bZ")
        // const data = await response.json();
        // console.log(data);
        // console.log("action:", github.context.action);
        // console.log("actor: ", github.context.actor);
        // console.log("eventName:", github.context.eventName);
        // console.log("issue:", github.context.issue);
        // console.log("job:", github.context.job);
        // console.log("payload:", github.context.payload);
        // console.log("ref:", github.context.ref);
        // console.log("repo:", github.context.repo);
        // console.log("runId:", github.context.runId);
        // console.log("runNumber:", github.context.runNumber);
        // console.log("sha:", github.context.sha);
        // console.log("workflow:", github.context.workflow);

        console.log(core.getInput("status"));
        console.log(core.getInput("webhook-id"));
        console.log(core.getInput("webhook-token"));
        
    } catch (error) {
        core.setFailed(error.message);
    }
};
main();