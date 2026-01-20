/** Chunk was on 58175 **/
/** chunk id: 664452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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

function j(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: j,
    analyticsData: x
  } = e, v = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]), C = !!(null == v ? true : v.features.has(O.GuildFeatures.INVITES_DISABLED)), [S] = i.useState(false), [E, N] = i.useState(_.Fl), m = (0, a.e7)([g.Z], () => g.Z.getGuildIncident(t)), I = (0, b.BT)(v), A = (0, p.SG)(m) || C, D = (0, p.sN)(m), [T, P] = i.useState(A), [w, G] = i.useState(D), [M, R] = i.useState(false), k = T !== A || w !== D || M, L = C && !I;
  return null == v ? (j(), null) : (0, r.jsx)(l.Modal, {
    transitionState: n,
    title: h.intl.string(h.t.oCYAc7),
    actions: [{
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: j,
      variant: "secondary",
      disabled: S
    }, {
      text: h.intl.string(h.t["pwm/z0"]),
      onClick: () => {
        (A || D) && !T && !w ? ((0, d.n)(v.id, false, false), (0, o.ZDy)(() => Promise.resolve(e => {
          var n, i;
          return (0, r.jsx)(f.default, (n = function(e) {
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
        }))) : (0, d.n)(v.id, T, w, E);
        let {
          source: e,
          alertType: n,
          messageId: i
        } = x;
        u.default.track(O.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
          guild_id: t,
          source: e,
          raid_alert_id: i,
          raid_alert_type: n,
          intervention_type_enabled: (0, p.sO)(T, w),
          intervention_type_disabled: (0, p.lk)(T, w),
          duration: 60 * E
        }), j()
      },
      loading: S,
      disabled: !k
    }],
    onClose: j,
    children: (0, r.jsxs)("div", {
      className: y.mainContainer,
      children: [(0, r.jsx)(o.PhF, {
        label: h.intl.string(h.t.vKYZzc),
        hideLabel: true,
        placeholder: h.intl.string(h.t.vKYZzc),
        options: (0, _.c1)(),
        onSelectionChange: function(e) {
          N(e), R(true)
        },
        value: E,
        selectionMode: "single",
        fullWidth: true
      }), (0, r.jsxs)("div", {
        className: y.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: y.pauseText,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: h.intl.string(h.t.Uwsjn6)
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.qPJkZh)
          })]
        }), (0, r.jsx)(s.i_, {
          body: h.intl.string(h.t["9GPbsV"]),
          shouldShow: C,
          asContainer: true,
          element: "div",
          children: (0, r.jsx)("div", {
            className: y.toggle,
            children: (0, r.jsx)(o.rsf, {
              onChange: function() {
                P(e => !e)
              },
              checked: T,
              disabled: L
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: y.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: y.pauseText,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: h.intl.string(h.t["wrDmA/"])
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.UQbJW7)
          })]
        }), (0, r.jsx)("div", {
          className: y.toggle,
          children: (0, r.jsx)(o.rsf, {
            onChange: function() {
              G(e => !e)
            },
            checked: w
          })
        })]
      })]
    })
  })
}