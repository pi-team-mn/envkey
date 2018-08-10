# @pi-team-mn/envkey
Read an environment key or throw an error if it's not set

```javascript
import { envkey } from '@pi-team-mn/envkey';

console.log(process.env.MY_ENV_KEY); // 'thevalue'
const MY_ENV_KEY_VALUE = envkey(MY_ENV_KEY);
console.log(MY_ENV_KEY_VALUE);  // 'thevalue'

console.log(process.env.NOT_SET); // undefined
const NOT_SET_VALUE = envkey(NOT_SET); // throws an error
```
