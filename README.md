# US_Census_Visualisation

Technical test Kamet Ventures

Goal of this exercise is to create a small web application that visualizes database data.
Application should allow to select a column (amongst demographic data), then display, for each different value in this column, number of lines with this value, and "age" value average. Values must be sorted by decreasing order. One can display only 100 first values.

For simplicity sake, all columns (except "age") are considered as "string".
Application must be a SPA (Single-Page Application), i.e. user must be able to change variable without reloading page.


Extras:
- if more than 100 different values, one can indicate number of non-displayed values.
- indicate number of non-displayed lines (i.e. lines corresponding to non-displayed
values)
- extensibility: allow a simple way to change database and variables

## Installation

1) With docker-compose

If docker compose is installed on your machine, simply run:
```
git clone https://github.com/CarbonC/US_Census_Visualisation.git
cd US_Census_Visualisation/docker
docker-compose up
```
And go see the site on localhost:5000!

NB: the docker-compose is aimed to provide the simplest possible install, at the cost of performance.
It might take 5 minutes for dockers to start.



2) Manually

This assume you have node and npm installed with latest versions
```
git clone https://github.com/CarbonC/US_Census_Visualisation.git`
cd US_Census_Visualisation/backend
npm i
npm start
cd ../frontend
npm i
npm run build
serve -s build
```
And go see the site on localhost:5000!