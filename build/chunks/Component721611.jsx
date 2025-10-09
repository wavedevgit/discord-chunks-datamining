/** Chunk was on 75685 **/
/** chunk id: 721611, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk599273 = require("./599273.js"),
  Chunk481060 = require("./481060.js"),
  Chunk59662 = require("./59662.js"),
  Chunk910557 = require("./910557.js");

function d(e) {
  var t;
  let {
    category: n,
    onClick: l,
    active: o
  } = e, {
    useTitle: a,
    useNavigationTitle: c,
    key: d
  } = n, f = null == a ? true : a(), b = null != (t = null == c ? true : c()) ? t : f;
  return null == b ? null : (0, r.jsx)(s.P3F, {
    onClick: l,
    tag: "li",
    className: i()({
      [u.active]: o
    }),
    children: b
  }, d)
}

function f(e) {
  let {
    categories: t
  } = e, [n, o] = l.useState(t[0].key), {
    setShowNavigationMobile: i,
    navigateTo: f
  } = (0, c.t)(), [b, m] = (0, s.q_F)(() => ({
    y: 0,
    config: {
      mass: .1,
      friction: 20,
      tension: 300
    }
  }));
  return l.useEffect(() => {
    m({
      y: 36 * Math.max(t.findIndex(e => e.key === n), 0)
    })
  }, [t, n, m]), (0, r.jsxs)("div", {
    className: u.subnav,
    children: [(0, r.jsx)("div", {
      className: u.track,
      children: (0, r.jsx)(a.animated.div, {
        className: u.thumb,
        style: b
      })
    }), (0, r.jsx)("ul", {
      children: t.map(e => (0, r.jsx)(d, {
        onClick: () => {
          var t;
          o(t = e.key), i(false), f(t)
        },
        active: e.key === n,
        category: e
      }, e.key))
    })]
  })
}