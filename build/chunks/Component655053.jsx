/** Chunk was on web.js **/
/** chunk id: 655053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk683071 = require("./683071.jsx"),
  Chunk22789 = require("./22789.js");

function s(e) {
  let {
    message: t,
    type: n
  } = e, s = null == t || 0 === t.length || null == n, [l, c] = i.useState(null != n ? n : "info"), [u, d] = i.useState(null != t ? t : "");
  return i.useEffect(() => {
    null != n && c(n), null != t && d(t)
  }, [n, t]), (0, r.jsx)("div", {
    className: s ? o.sectionHidden : o.section,
    children: (0, r.jsx)(a.w, {
      type: l,
      hidden: s,
      children: u
    })
  })
}