FROM alpine:latest

RUN apk add --update git nginx curl nano
ADD default.conf /etc/nginx/conf.d/default.conf
WORKDIR /run/nginx
WORKDIR /data
RUN git clone https://github.com/nvkuznetsova/portfolio.git .

EXPOSE 1234

CMD nginx -g 'daemon off;'
