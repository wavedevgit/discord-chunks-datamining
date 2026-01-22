/** Chunk was on web.js **/
/** chunk id: 55691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk5661 = require("./5661.jsx"),
  Chunk161319 = require("./161319.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk74019 = require("./74019.js");
let d = e => {
  let {
    percentage: t
  } = e, n = new Date, d = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate(), f = (0, a.bG)([s.default], () => s.default.getCurrentUser()), p = null == f ? true : f.isFractionalPremiumWithNoStandardSub();
  return (0, r.jsxs)("div", {
    className: u.k,
    children: [(0, r.jsx)(i.EYj, {
      variant: "text-sm/normal",
      color: "text-strong",
      children: p ? c.intl.string(c.t.E1ONHQ) : c.intl.format(c.t["43kZKL"], {
        days: d - n.getDate()
      })
    }), false === p && (0, r.jsx)(l.PR, {
      percentage: t
    }), (0, r.jsx)(o.G, {})]
  })
}