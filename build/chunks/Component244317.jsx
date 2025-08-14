/** Chunk was on 1272 **/
/** chunk id: 244317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk358085 = require("./358085.js"),
  Chunk289341 = require("./289341.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk87805 = require("./87805.js");

function h(e) {
  let {
    applicationId: t
  } = e.match.params, [h, g] = i.useState(false), m = i.useRef(false), [b, _] = i.useState(null), O = !s.isPlatformEmbedded && !l.tq && !h;
  return (i.useEffect(() => {
    O && true !== m.current && (Promise.resolve().then(n.bind(n, 536285)).then(e => {
      let {
        default: n
      } = e;
      n.request(u.Etm.DEEP_LINK, {
        type: d.jE.ACTIVITIES,
        params: {
          applicationId: t,
          url: location.href
        }
      }).then(e => {
        _(null != e && e)
      }).catch(() => _(false)).then(() => n.disconnect())
    }), m.current = true)
  }, [t, O]), O && false !== b) ? true === b ? (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-xxl/bold",
      children: p.intl.string(p.t.csrAMD)
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/semibold",
      children: p.intl.string(p.t["m1+IBg"])
    }), (0, r.jsx)(a.z, {
      variant: "primary",
      text: p.intl.string(p.t.fIv16O),
      onClick: () => g(true)
    })]
  }) : (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-xxl/bold",
      children: p.intl.string(p.t["Z+hCVV"])
    }), (0, r.jsx)(o.$jN, {})]
  }) : (0, r.jsx)(c.Z, function(e) {
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