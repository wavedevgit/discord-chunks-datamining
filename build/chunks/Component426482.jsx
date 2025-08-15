/** Chunk was on 89311 **/
/** chunk id: 426482, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => m,
  Z: () => d
}), require("./388685.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451697 = require("./451697.js"),
  d = ((n = {})[n.SMALL = 0] = "SMALL", n[n.LARGE = 1] = "LARGE", n);

function m(e) {
  var t;
  let {
    game: r,
    application: n,
    size: l,
    className: d
  } = e, [m, f] = i.useState(false), g = null != (t = null == n ? true : n.name) ? t : r.name, p = null != r.firstReleaseDate ? new Date(r.firstReleaseDate) : null;
  return null == r.coverImageUrl || m ? (0, a.jsxs)("div", {
    className: o()(u.fallback, d),
    children: [(0, a.jsx)("div", {
      className: u.spacer
    }), (0, a.jsx)(s.xv, {
      variant: 1 === l ? "text-md/medium" : "text-xs/medium",
      color: "always-white",
      lineClamp: 1 === l ? 4 : 3,
      children: g
    }), (0, a.jsx)("div", {
      className: u.spacer
    }), (0, a.jsx)(s.xv, {
      variant: 1 === l ? "text-sm/normal" : "text-xxs/normal",
      color: "always-white",
      children: null != p ? "(".concat(null == p ? true : p.getFullYear(), ")") : null
    })]
  }) : (0, a.jsx)("img", {
    className: d,
    src: r.coverImageUrl,
    alt: c.intl.formatToPlainString(c.t["3ev90d"], {
      game: g
    }),
    onError: () => {
      f(true)
    },
    onLoad: () => {
      f(false)
    }
  })
}