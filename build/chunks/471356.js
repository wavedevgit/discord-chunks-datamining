/** Chunk was on web.js **/
/** chunk id: 471356, original params: e,t,n (module,exports,re quire) **/
"use strict";
let Chunk423906 = require("./423906.js");
class i extends Error {
  constructor(e) {
    super(e), this.name = "TimeoutError"
  }
}
let o = (e, t, n) => new Promise((o, a) => {
  if ("number" != typeof t || t < 0) throw TypeError("Expected `milliseconds` to be a positive number");
  if (t === 1 / 0) return void o(e);
  let s = setTimeout(() => {
    if ("function" == typeof n) {
      try {
        o(n())
      } catch (e) {
        a(e)
      }
      return
    }
    let r = "string" == typeof n ? n : `Promise timed out after ${t} milliseconds`,
      s = n instanceof Error ? n : new i(r);
    "function" == typeof e.cancel && e.cancel(), a(s)
  }, t);
  r(e.then(o, a), () => {
    clearTimeout(s)
  })
});
module.exports = o, module.exports.default = o, module.exports.TimeoutError = i