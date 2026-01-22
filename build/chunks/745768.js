/** Chunk was on web.js **/
/** chunk id: 745768, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  lu: () => s,
  zf: () => o
});
var Chunk588522 = require("./588522.js");
let a = 1e3;

function s() {
  return Date.now() / a
}
let o = function() {
  let {
    performance: e
  } = i.O;
  if (!e || !e.now) return s;
  let t = Date.now() - e.now(),
    n = true == e.timeOrigin ? t : e.timeOrigin;
  return () => (n + e.now()) / a
}();
(() => {
  let {
    performance: e
  } = i.O;
  if (!e || !e.now) {
    r = "none";
    return
  }
  let t = 36e5,
    n = e.now(),
    a = Date.now(),
    s = e.timeOrigin ? Math.abs(e.timeOrigin + n - a) : t,
    o = s < t,
    l = e.timing && e.timing.navigationStart,
    c = "number" == typeof l ? Math.abs(l + n - a) : t,
    u = c < t;
  if (o || u)
    if (s <= c) return r = "timeOrigin", e.timeOrigin;
    else return r = "navigationStart";
  return r = "dateNow"
})()