/** Chunk was on 89311 **/
/** chunk id: 426482, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => m,
  Z: () => d
}), require("./388685.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk922258 = require("./922258.js"),
  d = ((n = {})[n.SMALL = 0] = "SMALL", n[n.LARGE = 1] = "LARGE", n);

function m(e) {
  var t;
  let {
    game: r,
    application: n,
    size: a,
    className: d
  } = e, [m, p] = l.useState(false), f = null != (t = null == n ? true : n.name) ? t : r.name, g = null != r.firstReleaseDate ? new Date(r.firstReleaseDate) : null;
  return null == r.coverImageUrl || m ? (0, i.jsxs)("div", {
    className: s()(u.fallback, d),
    children: [(0, i.jsx)("div", {
      className: u.spacer
    }), (0, i.jsx)(o.xv, {
      variant: 1 === a ? "text-md/medium" : "text-xs/medium",
      color: "always-white",
      lineClamp: 1 === a ? 4 : 3,
      children: f
    }), (0, i.jsx)("div", {
      className: u.spacer
    }), (0, i.jsx)(o.xv, {
      variant: 1 === a ? "text-sm/normal" : "text-xxs/normal",
      color: "always-white",
      children: null != g ? "(".concat(null == g ? true : g.getFullYear(), ")") : null
    })]
  }) : (0, i.jsx)("img", {
    className: d,
    src: r.coverImageUrl,
    alt: c.intl.formatToPlainString(c.t["3ev90d"], {
      game: f
    }),
    onError: () => {
      p(true)
    },
    onLoad: () => {
      p(false)
    }
  })
}