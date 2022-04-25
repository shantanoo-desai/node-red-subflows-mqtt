const fs = require("fs");
const path = require("path");

module.exports = function(RED) {
    const subflow_Internal_Mqtt_InNode = path.join(__dirname,"custom-nodes-internal-mqtt-in.json");
    const subflowContents = fs.readFileSync(subflow_Internal_Mqtt_InNode);
    const subflowJSON_InternalMqtt_InNode = JSON.parse(subflowContents);
    RED.nodes.registerSubflow(subflowJSON_InternalMqtt_InNode);
}