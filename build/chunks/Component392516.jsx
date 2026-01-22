/** Chunk was on 50437 **/
/** chunk id: 392516, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk181658 = require("./181658.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk220906 = require("./220906.js");

function f(e) {
  var t;
  let {
    transitionState: r,
    guild: f,
    user: g,
    ban: j,
    onClose: m
  } = e, [x, h] = i.useState(false), [v, w] = i.useState(null), {
    analyticsLocations: P
  } = (0, u.Ay)(), k = null != (t = null == P ? true : P[0]) ? t : null, A = i.useCallback(async () => {
    if (null != f) {
      w(null), h(true);
      try {
        var e, t;
        await c.A.unbanUser(f.id, g.id), m(), d.default.track(p.HAw.GUILD_BAN_REMOVED, (e = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, (0, o.H$)(f.id)), t = {
          target_user_id: g.id,
          reason: j.reason,
          location: k
        }, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(t)).forEach(function(r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e))
      } catch (e) {
        w(new s.A(e)), h(false)
      }
    }
  }, [j.reason, f, k, m, g.id]);
  return (0, n.jsx)(a.aFV, {
    title: b.Ay.getUserTag(g, {
      mode: "username"
    }),
    actions: [{
      text: y.intl.string(y.t.UPcIa5),
      onClick: A,
      variant: "critical-secondary",
      loading: x
    }, {
      text: y.intl.string(y.t.i4jeWR),
      onClick: m
    }],
    onClose: m,
    transitionState: r,
    children: (0, n.jsxs)("div", {
      className: O.Qs,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        children: y.intl.string(y.t["9Ki66N"])
      }), (0, n.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: null != j.reason && "" !== j.reason ? j.reason : y.intl.string(y.t["t+2Zci"])
      }), null != v ? (0, n.jsx)(l.Text, {
        className: O.z3,
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        children: v.getAnyErrorMessage()
      }) : null]
    })
  })
}