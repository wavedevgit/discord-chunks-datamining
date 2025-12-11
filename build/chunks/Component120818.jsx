/** Chunk was on 51235 **/
/** chunk id: 120818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk563534 = require("./563534.js"),
  Chunk846121 = require("./846121.js"),
  Chunk703656 = require("./703656.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk215218 = require("./215218.js");

function m(e, t) {
  return (0, r.jsx)(s.Text, {
    variant: "text-xs/bold",
    color: "text-default",
    children: e
  }, t)
}
let y = Chunk473749.memo(function(e) {
  var t, n;
  let {
    guild: y
  } = e, O = (0, a.e7)([c.Z], () => c.Z.getNewMemberActions(y.id), [y.id]), v = (0, a.e7)([u.Z], () => u.Z.getCompletedActions(y.id)), j = i.useMemo(() => {
    if (null == O || null == v) return 0;
    let e = 0;
    return O.forEach(t => {
      null != v[t.channelId] && e++
    }), e
  }, [v, O]), C = null == O ? 0 : O.length, x = (0, l.JA)("progress-bar-".concat(y.id));
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
    }({}, x), n = n = {
      role: "button",
      focusProps: {
        offset: {
          right: 4
        }
      },
      className: b.progressBarContainer,
      onClick: function() {
        (0, d.uL)(h.Z5c.CHANNEL(y.id, p.oC.GUILD_HOME))
      },
      children: [(0, r.jsxs)("div", {
        className: b.progressBarText,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-sm/bold",
          children: g.intl.string(g.t.SnrR3x)
        }), (0, r.jsxs)("div", {
          className: b.rightContainer,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: b.rightText,
            children: g.intl.format(g.t.eqZ1lW, {
              numberHook: m,
              total: C.toString(),
              completed: j.toString()
            })
          }), (0, r.jsx)(f.Z, {
            className: b.arrow,
            width: 16,
            height: 16,
            direction: f.Z.Directions.RIGHT
          })]
        })]
      }), (0, r.jsx)(s.Exd, {
        className: b.progressBar,
        foregroundGradientColor: [o.Z.unsafe_rawColors.GREEN_300.css, o.Z.unsafe_rawColors.GREEN_230.css],
        percent: j / C * 100 + 3,
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
      className: b.divider
    })]
  })
})