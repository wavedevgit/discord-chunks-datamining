/** Chunk was on 66866 **/
/** chunk id: 646288, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  if (!e.available) return i.intl.string(i.t.RWouSU);
  if (e.premium && !n) return i.intl.string(i.t.QGUSz8);
  let l = e.getPrice(null, t);
  if (null != l)
    if (l.amount > 0) return (0, r.T4)(l.amount, l.currency);
    else return i.intl.string(i.t.QQsaCQ);
  return i.intl.string(i.t.RWouSU)
}