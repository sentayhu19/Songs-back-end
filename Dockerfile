FROM node:18-slim
WORKDIR /app
COPY package.json ./

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs npm && \
    npm install

COPY . /app
CMD ["npm", "start"]
