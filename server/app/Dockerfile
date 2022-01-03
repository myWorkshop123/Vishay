FROM python:3.7-slim-buster

ENV APP_HOME /application

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    # this is needed for requirements packages
    python3-opencv \
    build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Creating base folder for all project related files
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

# Install requirements
ADD ./requirements.txt $APP_HOME/requirements.txt
RUN pip install -r $APP_HOME/requirements.txt
RUN rm -f requirements.txt

COPY . $APP_HOME/
