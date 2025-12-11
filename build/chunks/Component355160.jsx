/** Chunk was on 61697 **/
/** chunk id: 355160, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk479531 = require("./479531.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk678286 = require("./678286.js");

function y(e) {
  var t;
  let {
    transitionState: r,
    guild: y,
    user: g,
    ban: j,
    onClose: m
  } = e, [x, h] = i.useState(false), [v, P] = i.useState(null), {
    analyticsLocations: w
  } = (0, u.ZP)(), k = null != (t = null == w ? true : w[0]) ? t : null, S = i.useCallback(async () => {
    if (null != y) {
      P(null), h(true);
      try {
        var e, t;
        await l.Z.unbanUser(y.id, g.id), m(), d.default.track(p.rMx.GUILD_BAN_REMOVED, (e = function(e) {
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
        }({}, (0, s.hH)(y.id)), t = {
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
        P(new o.Z(e)), h(false)
      }
    }
  }, [j.reason, y, k, m, g.id]);
  return (0, n.jsx)(a.u_l, {
    title: b.ZP.getUserTag(g, {
      mode: "username"
    }),
    actions: [{
      text: O.intl.string(O.t.UPcIa5),
      onClick: S,
      variant: "critical-secondary",
      loading: x
    }, {
      text: O.intl.string(O.t.i4jeWR),
      onClick: m
    }],
    onClose: m,
    transitionState: r,
    children: (0, n.jsxs)("div", {
      className: f.content,
      children: [(0, n.jsx)(c.Text, {
        variant: "text-md/medium",
        children: O.intl.string(O.t["9Ki66N"])
      }), (0, n.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-subtle",
        children: null != j.reason && "" !== j.reason ? j.reason : O.intl.string(O.t["t+2Zci"])
      }), null != v ? (0, n.jsx)(c.Text, {
        className: f.error,
        color: "text-feedback-critical",
        variant: "text-sm/normal",
        children: v.getAnyErrorMessage()
      }) : null]
    })
  })
}