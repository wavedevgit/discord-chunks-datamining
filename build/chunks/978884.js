/** Chunk was on web.js **/
/** chunk id: 978884, original params: e,t,n (module,exports,re quire) **/
"use strict";
let Chunk221180 = require("./221180.js");
class i extends Error {
  constructor(e) {
    super(e), this.name = "TimeoutError"
  }
}
let a = (e, t, n) => new Promise((a, o) => {
  if ("number" != typeof t || t < 0) throw TypeError("Expected `milliseconds` to be a positive number");
  if (t === 1 / 0) return void a(e);
  let s = setTimeout(() => {
    if ("function" == typeof n) {
      try {
        a(n())
      } catch (e) {
        o(e)
      }
      return
    }
    let r = "string" == typeof n ? n : `Promise timed out after ${t} milliseconds`,
      s = n instanceof Error ? n : new i(r);
    "function" == typeof e.cancel && e.cancel(), o(s)
  }, t);
  r(e.then(a, o), () => {
    clearTimeout(s)
  })
});
module.exports = a, module.exports.default = a, module.exports.TimeoutError = i