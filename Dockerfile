FROM node:14.17

WORKDIR /src
ADD . /src

EXPOSE 1337

ENTRYPOINT ["npm","start"]
