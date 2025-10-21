/** Chunk was on web.js **/
/** chunk id: 646288, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (!e.available) return i.intl.string(i.t.RWouSQ);
  if (e.premium && !n) return i.intl.string(i.t["QGUSz/"]);
  let a = e.getPrice(null, t);
  if (null != a)
    if (a.amount > 0) return (0, r.T4)(a.amount, a.currency);
    else return i.intl.string(i.t.QQsaCc);
  return i.intl.string(i.t.RWouSQ)
}