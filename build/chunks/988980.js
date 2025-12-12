/** Chunk was on web.js **/
/** chunk id: 988980, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a,
  q: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk812206 = require("./812206.js"),
  Chunk701488 = require("./701488.js");

function a(e) {
  return r.useMemo(() => s(e), [e])
}

function s(e) {
  var t, n;
  return !(null != e && o.P9.includes(null != e ? e : "")) || (null == (n = i.Z.getApplication(e)) || null == (t = n.embeddedActivityConfig) ? true : t.legacy_responsive_aspect_ratio)
}