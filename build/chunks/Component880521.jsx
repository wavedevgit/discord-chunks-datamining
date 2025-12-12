/** Chunk was on web.js **/
/** chunk id: 880521, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk117995 = require("./117995.jsx"),
  Chunk325380 = require("./325380.js");

function s(e) {
  let {
    message: t,
    type: n
  } = e, s = null == t || 0 === t.length || null == n, [l, c] = i.useState(null != n ? n : "info"), [u, d] = i.useState(null != t ? t : "");
  return i.useEffect(() => {
    null != n && c(n), null != t && d(t)
  }, [n, t]), (0, r.jsx)("div", {
    className: s ? a.sectionHidden : a.section,
    children: (0, r.jsx)(o.M, {
      type: l,
      hidden: s,
      children: u
    })
  })
}