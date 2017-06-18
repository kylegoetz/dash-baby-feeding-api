# Dash Baby Feeding API

This API is designed (but does not have) to run in a Docker container and receive
POST actions from the related Dash Capture app. It can also be queried
by a UI to present information.

Right now the only HTTP actions are to

## POST /clicks/:dashMacAddress

This will create a new row in the DB that holds the MAC address of the
Dash that was clicked. It will also store the time with a +0 timezone offset.

## GET /clicks

This will fetch all clicks and return as a JSON object representing DB rows.
Each row contains the following data:

* INTEGER *id*
* VARCHAR(255) *dashMacAddress*
* DATETIME *createdAt*
* DATETIME *updatedAt*

Both DATETIMEs are +0.
