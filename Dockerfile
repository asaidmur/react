# use NGINX base image
FROM 125950476760.dkr.ecr.us-east-1.amazonaws.com/docker-base-images/base-nginx:latestC7nginx

# Inject Version file for tracking
# COPY version.txt /root/HealthDashFrontend-version.txt

# maintainer
LABEL maintainer="Calabrio"

RUN rm /usr/share/nginx/html/en-US && \
    rm /usr/share/nginx/html/img && \
    rm /usr/share/nginx/html/index.html

COPY ./build /usr/share/nginx/html/healthdash-fe

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf


#RUN sed -ri 's|([[:space:]]*root[[:space:]]*/usr/share/nginx/html);|\1/healthdash-fe;|' /etc/nginx/nginx.conf
