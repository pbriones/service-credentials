
#service-credentials
Usage
-----------
For Bluemix:
```
var creds = require('service-credentials');
creds.getCredentials('service-name');

```
For hardcoded Credentials:

```
var creds = require('service-credentials');
creds.getCredentials({
  username: <username>,
  password: <password>,
  <other dialog params>: <param value>
});
```

Note that the function will, by default, add a property version: 'v1' to all objects for my convenience.
It can be overwritten.

