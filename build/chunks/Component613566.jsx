/** Chunk was on web.js **/
/** chunk id: 613566, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => d,
  fh: () => u,
  qP: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698);
require("./284009.js");
var Chunk736653 = require("./736653.js"),
  Chunk599556 = require("./599556.js"),
  c = function(e) {
    return e.UNSET = "unset", e.BLUE = "blue", e.ORANGE = "orange", e
  }({}),
  u = function(e) {
    return e.LIGHT = "light", e.MEDIUM = "medium", e
  }({});
let d = e => {
  var t;
  let {
    progress: n,
    minimum: a = 0,
    maximum: c = 100,
    weight: u = "light",
    variant: d,
    override: f,
    labelledBy: p
  } = e, _ = null != f && "unset" === d, h = (0, s.Ay)(), m = null != (t = null == f ? true : f[h]) ? t : null == f ? true : f.default, g = i.useMemo(() => (n - a) / (c - a) * 100, [n, a, c]), E = n === a, y = _ ? {
    "--custom-background": null == m ? true : m.background,
    "--custom-gradient-start": null == m ? true : m.gradientStart,
    "--custom-gradient-end": null == m ? true : m.gradientEnd,
    "--custom-gradient-glow": null == m ? true : m.gradientEnd
  } : {};
  return (0, r.jsx)("div", {
    className: o()(l.progressContainer, l[u], l[d]),
    style: y,
    children: (0, r.jsxs)("div", {
      className: o()(l.progress, {
        [l.empty]: E
      }),
      style: {
        width: "".concat(g, "%")
      },
      role: "meter",
      "aria-valuenow": n,
      "aria-valuemin": a,
      "aria-valuemax": c,
      "aria-labelledby": p,
      children: [(0, r.jsx)("div", {
        className: o()(l.glow, {
          [l.empty]: E
        })
      }), (0, r.jsx)("div", {
        className: o()(l.bar, l[d], {
          [l.empty]: E
        })
      })]
    })
  })
}