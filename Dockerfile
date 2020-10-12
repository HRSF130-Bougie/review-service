# What image do you want to start building on?
FROM node:10.5.0

# Make a folder in your image where your app's source code can live
RUN mkdir -p /src/app


# Tell your container where your app's source code will live
WORKDIR /src/app


COPY package.json /src/app
COPY package-lock.json /src/app
COPY . /src/app

RUN npm install



# What source code do you want to copy, and where to put it?
# COPY package.json ./ 


# Does your app have any dependencies that should be installed?



# What port will the container talk to the outside world with once created?
EXPOSE 3003

RUN npm run seed

# How do you start your app?
 CMD ["npm","start" ]

