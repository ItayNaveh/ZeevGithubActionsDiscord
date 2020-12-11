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

        // console.log("status::");
        // console.log(await (await fetch(`https://post-test.herokuapp.com/single/${status}`)).json());

        // console.log("webhook id::");
        // console.log(await (await fetch(`https://post-test.herokuapp.com/single/${webhookID}`)).json());

        // console.log("webhook token::");
        // console.log(await (await fetch(`https://post-test.herokuapp.com/single/${webhookToken}`)).json());

        // console.log("id and token::");
        // console.log(await (await fetch(`https://post-test.herokuapp.com/double/${webhookID}/${webhookToken}`)).json());

        // console.log("id and token::");
        // console.log(await (await fetch(`https://post-test.herokuapp.com/body`, {method: "POST", headers: {"Content-Type": "application/json"}, body: {status: status, id: webhookID, token: webhookToken}})).json());

        
        const response = await fetch(`https://discord.com/api/webhooks/${webhookID}/UaQqJmOHg7nwqNAupSc04_hiE-Hmrk61VwTwtgMEnuLcXFe95S29omkXHE-ikOzNk5bZ`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: {
                embeds: [
                    {
                        title: "Title",
                        description: status
                    }
                ]
            },
        });
        const data = await response.json();
        console.log("status -", response.status);
        console.log(data);
        console.log("done");
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