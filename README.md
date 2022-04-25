# Create custom Node-Red Nodes using Subflows

Create pre-configured MQTT Nodes using Subflows.

## Scenario

There are two MQTT brokers, one for internal stack communication, other for external
communication.

Node-Red and the two brokers belong to the same network

### Components

| Container Image | Version | Port |
|:----------------|:--------|:----- |
| `eclipse-mosquitto` | `2.0.14` | `1883` |
| `node-red` | `2.2.2` | `1880` |

### Ports for MQTT

We will use `1883` port for both the `internal-mqtt-broker` container as well as 
`external-mqtt-broker` container.

`internal-mqtt-broker` port is only exposed to be available within the docker network

`external-mqtt-broker` port is exposed for external communication


## Usage

```bash
make up
```
to build the `docker-compose.yml` configuration file using multiple compose files

```bash
make down
```

to bring the stack down