## Subflow Creation

- Select __Subflows / Create Subflow __ from Node-Red Editor Menu (Upper Right Most Icon)

- Double-Click __Subflow 1__ to edit Subflow

- Add snaps of configuration HERE

- CTRL + e to export subflow node and copy to clipboard

- call file `custom-nodes-internal-mqtt-in.json`

- Remove array `[]` 

- Cut the last two object elements, remove the trailing `,`

- Create `"flow: []` in the object element (should have `"type": "subflow"`)

- Paste the object elements into the `flow` array

Repeat for Internal MQTT Out node

Repeat Subflow Creation for MQTT External Nodes


## Add JS Files

Add the JS files for the dedicate subflows, adapt the variable names

## add `package.json`

```json
    "node-red"     : {
        "version": ">=2.0.0",
        "nodes": {
            "custom-nodes-external-mqtt-in": "node-red/subflows/custom-nodes-external-mqtt-in.js",
            "custom-nodes-external-mqtt-out": "node-red/subflows/custom-nodes-external-mqtt-out.js",
            "custom-nodes-internal-mqtt-in": "node-red/subflows/custom-nodes-internal-mqtt-in.js",
            "custom-nodes-internal-mqtt-out": "node-red/subflows/custom-nodes-internal-mqtt-out.js"
        }
    }
```