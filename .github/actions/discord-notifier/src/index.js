const core = require("@actions/core");
// const github = require("@actions/github");
const fetch = require("node-fetch").default;

const main = async() => {
    try {
        const webhookID = core.getInput("webhook-id");
        const webhookToken = core.getInput("webhook-token");
        const status = core.getInput("status");
        //success
        //failure
        
        await fetch(`https://discord.com/api/webhooks/${webhookID}/${webhookToken}`, {
            method: "POST",
            headers: {"Application-Type": "application/json"},
            body: {
                embeds: [
                    {
                        title: "Title",
                        description: status,
                    }
                ]
            },
        });
        console.log("done?")
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
    } catch (error) {
        core.setFailed(error.message);
    }
};
main();