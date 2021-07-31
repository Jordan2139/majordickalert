# MajorDickAlert
A simple insult module with no other purpose then to degrade people.

---

## Support
* [Discord](https://jordan2139.me/discord)

---

## Installation
`npm i majordickalert@latest`

---

## Constructor 
Options for the module
| Entry        | Type | Definition | 
|----------------|---------------|---------------|
| #1   | CLIENT  | Your client variable
| #2   | BOOLEAN  | Whether or not to toggle debug mode and error logs
| #3   | STRING  | The Sub Reddit you'd like to pull the insults from (OPTIONAL)

---

## Code Example
```js
const Discord = require('discord.js');
const insults = require('majordickalert');
const insultmofo = new insults(client, true, 'insults')

client.on('message', async message => {
    insultmofo.insultSkid(message)
})
```