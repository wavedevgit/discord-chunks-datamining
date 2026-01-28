/** Chunk was on 5606 **/
/** chunk id: 55691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk5661 = require("./5661.jsx"),
  Chunk161319 = require("./161319.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk74019 = require("./74019.js");
let u = e => {
  let {
    percentage: t
  } = e, n = new Date, u = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate(), p = (0, l.bG)([s.default], () => s.default.getCurrentUser()), _ = null == p ? true : p.isFractionalPremiumWithNoStandardSub();
  return (0, r.jsxs)("div", {
    className: d.k,
    children: [(0, r.jsx)(i.EYj, {
      variant: "text-sm/normal",
      color: "text-strong",
      children: _ ? c.intl.string(c.t.E1ONHQ) : c.intl.format(c.t["43kZKL"], {
        days: u - n.getDate()
      })
    }), false === _ && (0, r.jsx)(o.PR, {
      percentage: t
    }), (0, r.jsx)("div", {
      className: d.Z,
      children: (0, r.jsx)(a.G, {})
    })]
  })
}