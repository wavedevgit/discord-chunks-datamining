/** Chunk was on 41753 **/
/** chunk id: 120818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk44315 = require("./44315.js"),
  Chunk563534 = require("./563534.js"),
  Chunk846121 = require("./846121.js"),
  Chunk703656 = require("./703656.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk592315 = require("./592315.js");

function b(e, t) {
  return (0, r.jsx)(s.Text, {
    variant: "text-xs/bold",
    color: "text-default",
    children: e
  }, t)
}
let O = Chunk73800.memo(function(e) {
  var t, n;
  let {
    guild: O
  } = e, _ = (0, o.e7)([c.Z], () => c.Z.getNewMemberActions(O.id), [O.id]), y = (0, o.e7)([u.Z], () => u.Z.getCompletedActions(O.id)), C = i.useMemo(() => {
    if (null == _ || null == y) return 0;
    let e = 0;
    return _.forEach(t => {
      null != y[t.channelId] && e++
    }), e
  }, [y, _]), v = null == _ ? 0 : _.length, j = (0, l.JA)("progress-bar-".concat(O.id));
  return (0, r.jsxs)("li", {
    children: [(0, r.jsxs)(s.P3F, (t = function(e) {
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
    }({}, j), n = n = {
      role: "button",
      focusProps: {
        offset: {
          right: 4
        }
      },
      className: m.progressBarContainer,
      onClick: function() {
        (0, d.uL)(p.Z5c.CHANNEL(O.id, f.oC.GUILD_HOME))
      },
      children: [(0, r.jsxs)("div", {
        className: m.progressBarText,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-sm/bold",
          children: g.intl.string(g.t.SnrR39)
        }), (0, r.jsxs)("div", {
          className: m.rightContainer,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: m.rightText,
            children: g.intl.format(g.t.eqZ1lZ, {
              numberHook: b,
              total: v.toString(),
              completed: C.toString()
            })
          }), (0, r.jsx)(h.Z, {
            className: m.arrow,
            width: 16,
            height: 16,
            direction: h.Z.Directions.RIGHT
          })]
        })]
      }), (0, r.jsx)(s.Exd, {
        className: m.progressBar,
        foregroundGradientColor: [(0, a.Lq)(p.Ilk.GREEN_300), (0, a.Lq)(p.Ilk.GREEN_230)],
        percent: C / v * 100 + 3,
        animate: true
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), (0, r.jsx)("div", {
      role: "separator",
      className: m.divider
    })]
  })
})