/** Chunk was on 92917 **/
/** chunk id: 488703, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => function e(t) {
    return null == t ? t : Object.keys(t).reduce((n, i) => {
      let l = (0, r.snakeCase)(i);
      return "object" != typeof t[i] || Array.isArray(t[i]) ? n[l] = t[i] : n[l] = e(t[i]), n[l] = t[i], n
    }, {})
  },
  W: () => function e(t) {
    return null == t ? t : Object.keys(t).reduce((n, i) => {
      let l = (0, r.camelCase)(i);
      return "object" != typeof t[i] || Array.isArray(t[i]) ? n[l] = t[i] : n[l] = e(t[i]), n
    }, {})
  }
});
var Chunk735438 = require("./735438.js")