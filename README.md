morgan-logger
===

Installation
---
```bash
npm install davidbayo10/morgan-logger --save
```

Getting started
===
```javascript
'use strict';

const app = require('express')();
require('morgan-logger')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Listening in port: ${port}`);});
```
Or
---
```javascript
'use strict';

const app = require('express')();
const morganLogger = require('morgan-logger');

const port = process.env.PORT || 3000;
app.use(morganLogger());
app.listen(port, () => {console.log(`Listening in port: ${port}`);});
```

Example result (without colors)
---
```
[2016-12-10 23:06:38.009] [INFO] API - GET / 404 13 Bytes 10.365 ms - ::ffff:127.0.0.1
[2016-12-10 23:06:38.009] [INFO] API - GET / 404 13 Bytes 10.365 ms - ::ffff:127.0.0.1
```

LICENSE
===

`morgan-logger` is available under the following licenses:

  * ISC

Copyright 2016 - David Bayo Alcaide
