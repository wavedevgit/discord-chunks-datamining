/** Chunk was on web.js **/
/** chunk id: 708676, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  J: () => s
});
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk985018 = require("./985018.jsx");

function s(e) {
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
  let s = e.diff(t, "minutes");
  return a.intl.formatToPlainString(a.t["3SLXAz"], {
    minutes: s
  })
}

function o(e) {
  if (null != e) return s(e)
}