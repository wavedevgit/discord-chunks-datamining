/** Chunk was on 58175 **/
/** chunk id: 664452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk369994 = require("./369994.js"),
  Chunk162157 = require("./162157.js"),
  Chunk533244 = require("./533244.js"),
  Chunk487419 = require("./487419.js"),
  Chunk821312 = require("./821312.jsx"),
  Chunk676770 = require("./676770.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk192928 = require("./192928.js");

function x(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: x,
    analyticsData: v
  } = e, C = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]), S = !!(null == C ? true : C.features.has(y.GuildFeatures.INVITES_DISABLED)), [E] = i.useState(false), [N, m] = i.useState(O.Fl), I = (0, a.e7)([f.Z], () => f.Z.getGuildIncident(t)), A = (0, p.BT)(C), D = (0, g.SG)(I) || S, T = (0, g.sN)(I), [P, w] = i.useState(D), [G, R] = i.useState(T), [k, M] = i.useState(false), L = P !== D || G !== T || k, U = S && !A;
  return null == C ? (x(), null) : (0, r.jsx)(l.Modal, {
    transitionState: n,
    title: h.intl.string(h.t.oCYAc7),
    actions: [{
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: x,
      variant: "secondary",
      disabled: E
    }, {
      text: h.intl.string(h.t["pwm/z0"]),
      onClick: () => {
        (D || T) && !P && !G ? ((0, b.n)(C.id, false, false), (0, c.ZDy)(() => Promise.resolve(e => {
          var n, i;
          return (0, r.jsx)(_.default, (n = function(e) {
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
          }({}, e), i = i = {
            guildId: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }))) : (0, b.n)(C.id, P, G, N);
        let {
          source: e,
          alertType: n,
          messageId: i
        } = v;
        d.default.track(y.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
          guild_id: t,
          source: e,
          raid_alert_id: i,
          raid_alert_type: n,
          intervention_type_enabled: (0, g.sO)(P, G),
          intervention_type_disabled: (0, g.lk)(P, G),
          duration: 60 * N
        }), x()
      },
      loading: E,
      disabled: !L
    }],
    onClose: x,
    children: (0, r.jsxs)("div", {
      className: j.mainContainer,
      children: [(0, r.jsx)(s.B6, {
        placeholder: h.intl.string(h.t.vKYZzc),
        options: (0, O.c1)(),
        select: e => {
          m(e), M(true)
        },
        isSelected: e => e === N,
        serialize: e => String(e)
      }), (0, r.jsxs)("div", {
        className: j.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: j.pauseText,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: h.intl.string(h.t.Uwsjn6)
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.qPJkZh)
          })]
        }), (0, r.jsx)(o.i_, {
          body: h.intl.string(h.t["9GPbsV"]),
          shouldShow: S,
          asContainer: true,
          element: "div",
          children: (0, r.jsx)("div", {
            className: j.toggle,
            children: (0, r.jsx)(c.rsf, {
              onChange: function() {
                w(e => !e)
              },
              checked: P,
              disabled: U
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: j.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: j.pauseText,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: h.intl.string(h.t["wrDmA/"])
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.UQbJW7)
          })]
        }), (0, r.jsx)("div", {
          className: j.toggle,
          children: (0, r.jsx)(c.rsf, {
            onChange: function() {
              R(e => !e)
            },
            checked: G
          })
        })]
      })]
    })
  })
}