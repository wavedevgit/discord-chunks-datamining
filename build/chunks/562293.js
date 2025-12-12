/** Chunk was on web.js **/
/** chunk id: 562293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => o,
  Z: () => s
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let t = i()();
  if (e <= t) return;
  let n = e.diff(t, "days");
  if (n > 1) return a.intl.formatToPlainString(a.t.dex68a, {
    days: n
  });
  let r = e.diff(t, "hours");
  if (r > 1) return a.intl.formatToPlainString(a.t.BWqf0c, {
    hours: r
  });
  let o = e.diff(t, "minutes");
  return a.intl.formatToPlainString(a.t["3SLXAz"], {
    minutes: o
  })
}

function s(e) {
  if (null != e) return o(e)
}