FROM node

RUN mkdir home/node-app

VOLUME ./app ./home/node-app

ENTRYPOINT [ "node", "./home/node-app/index.js" ]

EXPOSE 3000