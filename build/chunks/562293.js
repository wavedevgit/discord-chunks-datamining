/** Chunk was on 91173 **/
/** chunk id: 562293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => a,
  Z: () => o
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk388032 = require("./388032.jsx");

function a(e) {
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
  let a = e.diff(t, "minutes");
  return l.intl.formatToPlainString(l.t["3SLXAw"], {
    minutes: a
  })
}

function o(e) {
  if (null != e) return a(e)
}