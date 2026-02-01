/** Chunk was on 21738 **/
/** chunk id: 166641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk292455 = require("./292455.jsx"),
  Chunk701508 = require("./701508.jsx"),
  Chunk979590 = require("./979590.jsx"),
  Chunk783531 = require("./783531.jsx"),
  Chunk506999 = require("./506999.jsx"),
  Chunk212165 = require("./212165.js"),
  Chunk599907 = require("./599907.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk27740 = require("./27740.js"),
  Chunk541318 = require("./541318.js");
let A = function(e) {
  let {
    onScroll: t
  } = e, n = (0, p.A)(), A = i.useMemo(() => n.map(e => {
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
  return (0, r.jsxs)(u.A, {
    onScroll: t,
    children: [(0, r.jsx)(o.A, {
      title: g.intl.string(g.t.X5xPlb),
      description: g.intl.string(g.t["F/IQCI"]),
      children: (0, r.jsx)(s.A, {})
    }), (0, r.jsxs)(c.A, {
      children: [n.length > 0 ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Heading, {
          className: m.G,
          variant: "heading-lg/semibold",
          color: "text-strong",
          children: g.intl.string(g.t["2DfZIQ"])
        }), (0, r.jsxs)("div", {
          className: m.Q,
          children: [A.map(e => (0, r.jsx)(h.nO, {
            guild: e,
            onClick: () => a.A.transitionToGuildSync(e.id)
          }, e.id)), (0, r.jsx)(d.A, {
            hasHub: true
          })]
        })]
      }) : (0, r.jsx)("div", {
        className: m.Q,
        children: (0, r.jsx)(d.A, {
          hasHub: false
        })
      }), (0, r.jsx)("div", {
        className: f.yF
      }), (0, r.jsxs)("div", {
        className: f.ed,
        children: [(0, r.jsxs)(l.Text, {
          className: f.Qq,
          variant: "text-sm/medium",
          color: "text-default",
          children: [g.intl.string(g.t.O1k9XX), " "]
        }), (0, r.jsx)(l.Text, {
          className: f.Qq,
          variant: "text-sm/medium",
          color: "text-default",
          children: g.intl.string(g.t.FV5dvh)
        })]
      })]
    })]
  })
}