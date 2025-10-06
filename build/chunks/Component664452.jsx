/** Chunk was on 58175 **/
/** chunk id: 664452, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk655330 = require("./655330.js");

function j(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function x(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function y(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: y,
    analyticsData: v
  } = t, N = (0, a.e7)([o.Z], () => o.Z.getGuild(e), [e]), m = !!(null == N ? true : N.features.has(g.oNc.INVITES_DISABLED)), [E] = i.useState(false), [S, C] = i.useState(O.Fl), I = (0, a.e7)([b.Z], () => b.Z.getGuildIncident(e)), T = (0, u.BT)(N), D = (0, p.SG)(I) || m, A = (0, p.sN)(I), [P, w] = i.useState(D), [R, M] = i.useState(A), [k, G] = i.useState(false), L = P !== D || R !== A || k, Z = m && !T;
  if (null == N) return y(), null;

  function U() {
    w(t => !t)
  }
  return (0, r.jsx)(l.Modal, {
    transitionState: n,
    title: h.intl.string(h.t.oCYAc3),
    actions: [{
      text: h.intl.string(h.t["ETE/oK"]),
      onClick: y,
      variant: "secondary",
      disabled: E
    }, {
      text: h.intl.string(h.t["pwm/z8"]),
      onClick: () => {
        (D || A) && !P && !R ? ((0, d.n)(N.id, false, false), (0, s.ZDy)(() => Promise.resolve(t => (0, r.jsx)(f.Z, x(j({}, t), {
          guildId: e
        }))))) : (0, d.n)(N.id, P, R, S);
        let {
          source: t,
          alertType: n,
          messageId: i
        } = v;
        c.default.track(g.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
          guild_id: e,
          source: t,
          raid_alert_id: i,
          raid_alert_type: n,
          intervention_type_enabled: (0, p.sO)(P, R),
          intervention_type_disabled: (0, p.lk)(P, R),
          duration: 60 * S
        }), y()
      },
      loading: E,
      disabled: !L
    }],
    onClose: y,
    children: (0, r.jsxs)("div", {
      className: _.mainContainer,
      children: [(0, r.jsx)(s.PhF, {
        placeholder: h.intl.string(h.t.vKYZzc),
        options: (0, O.c1)(),
        select: t => {
          C(t), G(true)
        },
        isSelected: t => t === S,
        serialize: t => String(t)
      }), (0, r.jsxs)("div", {
        className: _.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: _.pauseText,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: h.intl.string(h.t.Uwsjn5)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.qPJkZm)
          })]
        }), (0, r.jsx)(s.ua7, {
          text: h.intl.string(h.t["9GPbsb"]),
          shouldShow: m,
          children: t => (0, r.jsx)("div", x(j({}, t), {
            className: _.toggle,
            children: (0, r.jsx)(s.rsf, {
              onChange: U,
              checked: P,
              disabled: Z
            })
          }))
        })]
      }), (0, r.jsxs)("div", {
        className: _.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: _.pauseText,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: h.intl.string(h.t.wrDmAw)
          }), (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.UQbJW1)
          })]
        }), (0, r.jsx)("div", {
          className: _.toggle,
          children: (0, r.jsx)(s.rsf, {
            onChange: function() {
              M(t => !t)
            },
            checked: R
          })
        })]
      })]
    })
  })
}