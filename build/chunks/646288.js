/** Chunk was on web.js **/
/** chunk id: 646288, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (!e.available) return i.intl.string(i.t.RWouSQ);
  if (e.premium && !n) return i.intl.string(i.t["QGUSz/"]);
  let o = e.getPrice(null, t);
  if (null != o)
    if (o.amount > 0) return (0, r.T4)(o.amount, o.currency);
    else return i.intl.string(i.t.QQsaCc);
  return i.intl.string(i.t.RWouSQ)
}