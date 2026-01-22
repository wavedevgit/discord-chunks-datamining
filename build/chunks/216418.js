/** Chunk was on web.js **/
/** chunk id: 216418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  q: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk587895 = require("./587895.js"),
  Chunk360469 = require("./360469.js");

function s(e) {
  return r.useMemo(() => o(e), [e])
}

function o(e) {
  var t, n;
  return !(null != e && a.xW.includes(null != e ? e : "")) || (null == (n = i.A.getApplication(e)) || null == (t = n.embeddedActivityConfig) ? true : t.legacy_responsive_aspect_ratio)
}