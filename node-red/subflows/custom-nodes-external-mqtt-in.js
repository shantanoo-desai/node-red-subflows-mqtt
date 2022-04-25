const fs = require("fs");
const path = require("path");

module.exports = function(RED) {
    const subflow_External_Mqtt_InNode = path.join(__dirname,"custom-nodes-external-mqtt-in.json");
    const subflowContents = fs.readFileSync(subflow_External_Mqtt_InNode);
    const subflowJSON_ExternalMqtt_InNode = JSON.parse(subflowContents);
    RED.nodes.registerSubflow(subflowJSON_ExternalMqtt_InNode);
}