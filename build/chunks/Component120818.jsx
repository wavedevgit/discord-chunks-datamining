/** Chunk was on 64722 **/
/** chunk id: 120818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => _
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
  Chunk46674 = require("./46674.js");

function b(e, t) {
  return (0, r.jsx)(s.Text, {
    variant: "text-xs/bold",
    color: "text-default",
    children: e
  }, t)
}
let _ = Chunk473749.memo(function(e) {
  var t, n;
  let {
    guild: _
  } = e, y = (0, o.e7)([c.Z], () => c.Z.getNewMemberActions(_.id), [_.id]), O = (0, o.e7)([u.Z], () => u.Z.getCompletedActions(_.id)), v = i.useMemo(() => {
    if (null == y || null == O) return 0;
    let e = 0;
    return y.forEach(t => {
      null != O[t.channelId] && e++
    }), e
  }, [O, y]), j = null == y ? 0 : y.length, C = (0, l.JA)("progress-bar-".concat(_.id));
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
    }({}, C), n = n = {
      role: "button",
      focusProps: {
        offset: {
          right: 4
        }
      },
      className: m.progressBarContainer,
      onClick: function() {
        (0, d.uL)(h.Z5c.CHANNEL(_.id, p.oC.GUILD_HOME))
      },
      children: [(0, r.jsxs)("div", {
        className: m.progressBarText,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-sm/bold",
          children: g.intl.string(g.t.SnrR3x)
        }), (0, r.jsxs)("div", {
          className: m.rightContainer,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: m.rightText,
            children: g.intl.format(g.t.eqZ1lW, {
              numberHook: b,
              total: j.toString(),
              completed: v.toString()
            })
          }), (0, r.jsx)(f.Z, {
            className: m.arrow,
            width: 16,
            height: 16,
            direction: f.Z.Directions.RIGHT
          })]
        })]
      }), (0, r.jsx)(s.Exd, {
        className: m.progressBar,
        foregroundGradientColor: [a.Z.unsafe_rawColors.GREEN_300.css, a.Z.unsafe_rawColors.GREEN_230.css],
        percent: v / j * 100 + 3,
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