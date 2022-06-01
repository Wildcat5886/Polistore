FROM php:7.3-fpm-alpine

RUN docker-php-ext-instal pdo pdo_mysql
