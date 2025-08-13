/** Chunk was on 1272 **/
/** chunk id: 244317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk289341 = require("./289341.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903312 = require("./903312.js");

function f(e) {
  let {
    applicationId: t
  } = e.match.params, [f, h] = i.useState(false), g = i.useRef(false), [m, b] = i.useState(null), _ = !o.isPlatformEmbedded && !l.tq && !f;
  return (i.useEffect(() => {
    _ && true !== g.current && (Promise.resolve().then(n.bind(n, 536285)).then(e => {
      let {
        default: n
      } = e;
      n.request(c.Etm.DEEP_LINK, {
        type: u.jE.ACTIVITIES,
        params: {
          applicationId: t,
          url: location.href
        }
      }).then(e => {
        b(null != e && e)
      }).catch(() => b(false)).then(() => n.disconnect())
    }), g.current = true)
  }, [t, _]), _ && false !== m) ? true === m ? (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xxl/bold",
      children: d.intl.string(d.t.csrAMD)
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/semibold",
      children: d.intl.string(d.t["m1+IBg"])
    }), (0, r.jsx)(a.zxk, {
      variant: "primary",
      text: d.intl.string(d.t.fIv16O),
      onClick: () => h(true)
    })]
  }) : (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-xxl/bold",
      children: d.intl.string(d.t["Z+hCVV"])
    }), (0, r.jsx)(a.$jN, {})]
  }) : (0, r.jsx)(s.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, e))
}