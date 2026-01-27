/** Chunk was on web.js **/
/** chunk id: 697675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk155718 = require("./155718.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk530255 = require("./530255.js");

function c(e) {
  let {
    labelType: t,
    collapsed: n = false
  } = e, c = t === o.Hr.NEW ? s.intl.string(s.t.y2b7CA) : s.intl.string(s.t["/qdhkk"]), u = t === o.Hr.NEW ? l.Ph : l.O5, [d, f] = i.useState(n ? "" : c);
  return (i.useEffect(() => {
    n ? f("") : t === o.Hr.NEW ? f(s.intl.string(s.t.y2b7CA)) : t === o.Hr.UPDATED && f(s.intl.string(s.t["/qdhkk"]))
  }, [n, t]), t === o.Hr.NONE) ? null : (0, r.jsx)(a.LpS, {
    className: u,
    disableColor: true,
    text: (0, r.jsx)("span", {
      children: d
    })
  })
}