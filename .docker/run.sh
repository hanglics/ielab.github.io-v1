#! /bin/bash

# name of image
IMAGE=lab-website-renderer:latest

# name of running container
CONTAINER=lab-website-renderer

# choose platform flag
PLATFORM=""

# default vars
DOCKER_RUN="docker run"
WORKING_DIR=$(pwd)

# fix windows faux linux shells/tools
if [[ $OSTYPE == msys* ]] || [[ $OSTYPE == cygwin* ]]; then
    DOCKER_RUN="winpty docker run"
    WORKING_DIR=$(cmd //c cd)
fi

# build docker image
docker build ${PLATFORM} \
    --tag ${IMAGE} \
    --file ./.docker/Dockerfile . && \

# run built docker image
${DOCKER_RUN} ${PLATFORM} \
    --name ${CONTAINER} \
    --init \
    --rm \
    --interactive \
    --tty \
    --publish 4000:4000 \
    --publish 35729:35729 \
    --volume "${WORKING_DIR}:/usr/src/app" \
    -e GOOGLE_SCHOLAR_API_KEY=4ab81d113aa8071cd50a46065d6b560e1704913dc39fdee3f66d488bce4f5199 \
    ${IMAGE} "$@"
