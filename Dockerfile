FROM nodered/node-red:2.2.2
LABEL AUTHOR="Shantanoo <Shan> Desai <sdes.softdev@gmail.com>"

# Copy all node-red related files
COPY custom-subflows .
COPY package.json .

RUN npm install --unsafe-perm --no-update-notifier --no-audit --only=production
