const fs = require("fs");
const path = require("path");

module.exports = function(RED) {
    const subflow_External_Mqtt_OutNode = path.join(__dirname,"custom-nodes-external-mqtt-out.json");
    const subflowContents = fs.readFileSync(subflow_External_Mqtt_OutNode);
    const subflowJSON_ExternalMqtt_OutNode = JSON.parse(subflowContents);
    RED.nodes.registerSubflow(subflowJSON_ExternalMqtt_OutNode);
}