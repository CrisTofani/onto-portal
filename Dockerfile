# Imports
FROM node:9.4.0

# Install apt-transport-https
RUN wget http://http.us.debian.org/debian/pool/main/a/apt/apt-transport-https_1.0.9.8.4_amd64.deb
RUN dpkg -i apt-transport-https_1.0.9.8.4_amd64.deb

# Install git
RUN apt update && apt install -y git-core

# Install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt update && apt install -y yarn

# Clone updated repo
RUN git clone https://github.com/and0111/onto-portal.git

# Create app directory #refactor
WORKDIR /onto-portal

# switch to 'develop' branch
RUN git fetch
RUN git checkout develop

# Install application dependecies
RUN yarn

# Build
RUN yarn build

# Exposing port
EXPOSE 5000

# Exec commands
CMD [ "yarn", "serve" ]
