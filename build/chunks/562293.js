/** Chunk was on web.js **/
/** chunk id: 562293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => a,
  Z: () => s
});
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t = i()();
  if (e <= t) return;
  let n = e.diff(t, "days");
  if (n > 1) return o.intl.formatToPlainString(o.t.dex68a, {
    days: n
  });
  let r = e.diff(t, "hours");
  if (r > 1) return o.intl.formatToPlainString(o.t.BWqf0c, {
    hours: r
  });
  let a = e.diff(t, "minutes");
  return o.intl.formatToPlainString(o.t["3SLXAz"], {
    minutes: a
  })
}

function s(e) {
  if (null != e) return a(e)
}