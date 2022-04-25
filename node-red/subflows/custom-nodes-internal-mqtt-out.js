const fs = require("fs");
const path = require("path");

module.exports = function(RED) {
    const subflow_Internal_Mqtt_OutNode = path.join(__dirname,"custom-nodes-internal-mqtt-out.json");
    const subflowContents = fs.readFileSync(subflow_Internal_Mqtt_OutNode);
    const subflowJSON_InternalMqtt_OutNode = JSON.parse(subflowContents);
    RED.nodes.registerSubflow(subflowJSON_InternalMqtt_OutNode);
}