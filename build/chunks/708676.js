/** Chunk was on 92917 **/
/** chunk id: 708676, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s,
  J: () => a
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  let t = i()();
  if (e <= t) return;
  let n = e.diff(t, "days");
  if (n > 1) return l.intl.formatToPlainString(l.t.dex68a, {
    days: n
  });
  let r = e.diff(t, "hours");
  if (r > 1) return l.intl.formatToPlainString(l.t.BWqf0c, {
    hours: r
  });
  let a = e.diff(t, "minutes");
  return l.intl.formatToPlainString(l.t["3SLXAz"], {
    minutes: a
  })
}

function s(e) {
  if (null != e) return a(e)
}