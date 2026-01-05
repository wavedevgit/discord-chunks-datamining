/** Chunk was on 1272 **/
/** chunk id: 149788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk322665 = require("./322665.jsx"),
  Chunk17845 = require("./17845.jsx"),
  Chunk374939 = require("./374939.jsx"),
  Chunk283293 = require("./283293.jsx"),
  Chunk469988 = require("./469988.jsx"),
  Chunk526383 = require("./526383.js"),
  Chunk294330 = require("./294330.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk423337 = require("./423337.js"),
  Chunk568566 = require("./568566.js");
let b = function(e) {
  let {
    onScroll: t
  } = e, n = (0, p.Z)(), b = i.useMemo(() => n.map(e => {
    var t, n;
    return t = function(e) {
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
    }({}, e), n = n = {
      presenceCount: true,
      memberCount: true,
      premiumSubscriptionCount: true,
      emojis: true
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
  }), [n]);
  return (0, r.jsxs)(u.Z, {
    onScroll: t,
    children: [(0, r.jsx)(s.Z, {
      title: g.intl.string(g.t.X5xPlb),
      description: g.intl.string(g.t["F/IQCI"]),
      children: (0, r.jsx)(o.Z, {})
    }), (0, r.jsxs)(c.Z, {
      children: [n.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Heading, {
          className: m.sectionTitle,
          variant: "heading-lg/semibold",
          color: "text-strong",
          children: g.intl.string(g.t["2DfZIQ"])
        }), (0, r.jsxs)("div", {
          className: m.content,
          children: [b.map(e => (0, r.jsx)(f.VD, {
            guild: e,
            onClick: () => a.Z.transitionToGuildSync(e.id)
          }, e.id)), (0, r.jsx)(d.Z, {
            hasHub: true
          })]
        })]
      }) : (0, r.jsx)("div", {
        className: m.content,
        children: (0, r.jsx)(d.Z, {
          hasHub: false
        })
      }), (0, r.jsx)("div", {
        className: h.divider
      }), (0, r.jsxs)("div", {
        className: h.disclaimer,
        children: [(0, r.jsxs)(l.Text, {
          className: h.text,
          variant: "text-sm/medium",
          color: "text-default",
          children: [g.intl.string(g.t.O1k9XX), " "]
        }), (0, r.jsx)(l.Text, {
          className: h.text,
          variant: "text-sm/medium",
          color: "text-default",
          children: g.intl.string(g.t.FV5dvh)
        })]
      })]
    })]
  })
}