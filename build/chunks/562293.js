/** Chunk was on 26434 **/
/** chunk id: 562293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => o,
  Z: () => a
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let t = i()();
  if (e <= t) return;
  let n = e.diff(t, "days");
  if (n > 1) return l.intl.formatToPlainString(l.t.dex68f, {
    days: n
  });
  let r = e.diff(t, "hours");
  if (r > 1) return l.intl.formatToPlainString(l.t.BWqf0d, {
    hours: r
  });
  let o = e.diff(t, "minutes");
  return l.intl.formatToPlainString(l.t["3SLXAw"], {
    minutes: o
  })
}

function a(e) {
  if (null != e) return o(e)
}