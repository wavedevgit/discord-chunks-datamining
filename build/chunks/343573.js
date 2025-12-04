/** Chunk was on web.js **/
/** chunk id: 343573, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  ph: () => s,
  yW: () => o
});
var Chunk606093 = require("./606093.js");
let a = 1e3;

function o() {
  return Date.now() / a
}
let s = function() {
  let {
    performance: e
  } = Chunk606093.n;
  if (!module || !module.now) return o;
  let t = Date.now() - module.now(),
    n = true == module.timeOrigin ? exports : module.timeOrigin;
  return () => (require + module.now()) / a
}();
(() => {
  let {
    performance: e
  } = Chunk606093.n;
  if (!module || !module.now) {
    r = "none";
    return
  }
  let t = 36e5,
    n = module.now(),
    a = Date.now(),
    o = module.timeOrigin ? Math.abs(module.timeOrigin + require - a) : exports,
    s = o < exports,
    l = module.timing && module.timing.navigationStart,
    c = "number" == typeof l ? Math.abs(l + require - a) : exports,
    u = c < exports;
  if (s || u)
    if (o <= c) return r = "timeOrigin", module.timeOrigin;
    else return r = "navigationStart";
  return r = "dateNow"
})()