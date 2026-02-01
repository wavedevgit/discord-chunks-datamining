/** Chunk was on 12970 **/
/** chunk id: 488703, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => function e(t) {
    return null == t ? t : Object.keys(t).reduce((n, l) => {
      let i = (0, r.snakeCase)(l);
      return "object" != typeof t[l] || Array.isArray(t[l]) ? n[i] = t[l] : n[i] = e(t[l]), n[i] = t[l], n
    }, {})
  },
  W: () => function e(t) {
    return null == t ? t : Object.keys(t).reduce((n, l) => {
      let i = (0, r.camelCase)(l);
      return "object" != typeof t[l] || Array.isArray(t[l]) ? n[i] = t[l] : n[i] = e(t[l]), n
    }, {})
  }
});
var Chunk735438 = require("./735438.js")