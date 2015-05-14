Node Template
=============

A template for node services.

This forms part of a build tool which takes 'node application code' and builds a docker container.

Node application code needs to provide two 'router' modules, one to handle incoming events or facts from a queue and one to handle web requests.

The big idea is to reduce the amount of boiler plate code by providing the wiring for a node application in this repo.
