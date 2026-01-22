/** Chunk was on web.js **/
/** chunk id: 360560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk580630 = require("./580630.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (!e.available) return i.intl.string(i.t.RWouSQ);
  if (e.premium && !n) return i.intl.string(i.t["QGUSz/"]);
  let a = e.getPrice(null, t);
  if (null != a)
    if (a.amount > 0) return (0, r.$g)(a.amount, a.currency);
    else return i.intl.string(i.t.QQsaCc);
  return i.intl.string(i.t.RWouSQ)
}