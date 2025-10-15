/** Chunk was on 61536 **/
/** chunk id: 664452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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
  Chunk796668 = require("./796668.js");

function y(e) {
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
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function x(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: x,
    analyticsData: C
  } = e, v = (0, a.e7)([s.Z], () => s.Z.getGuild(t), [t]), N = !!(null == v ? true : v.features.has(_.oNc.INVITES_DISABLED)), [S] = i.useState(false), [E, m] = i.useState(g.Fl), I = (0, a.e7)([b.Z], () => b.Z.getGuildIncident(t)), A = (0, d.BT)(v), D = (0, p.SG)(I) || N, T = (0, p.sN)(I), [P, w] = i.useState(D), [M, R] = i.useState(T), [k, L] = i.useState(false), G = P !== D || M !== T || k, U = N && !A;
  if (null == v) return x(), null;

  function Z() {
    w(e => !e)
  }
  return (0, r.jsx)(l.Modal, {
    transitionState: n,
    title: O.intl.string(O.t.oCYAc7),
    actions: [{
      text: O.intl.string(O.t["ETE/oC"]),
      onClick: x,
      variant: "secondary",
      disabled: S
    }, {
      text: O.intl.string(O.t["pwm/z0"]),
      onClick: () => {
        (D || T) && !P && !M ? ((0, u.n)(v.id, false, false), (0, o.ZDy)(() => Promise.resolve(e => (0, r.jsx)(f.default, j(y({}, e), {
          guildId: t
        }))))) : (0, u.n)(v.id, P, M, E);
        let {
          source: e,
          alertType: n,
          messageId: i
        } = C;
        c.default.track(_.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
          guild_id: t,
          source: e,
          raid_alert_id: i,
          raid_alert_type: n,
          intervention_type_enabled: (0, p.sO)(P, M),
          intervention_type_disabled: (0, p.lk)(P, M),
          duration: 60 * E
        }), x()
      },
      loading: S,
      disabled: !G
    }],
    onClose: x,
    children: (0, r.jsxs)("div", {
      className: h.mainContainer,
      children: [(0, r.jsx)(o.PhF, {
        placeholder: O.intl.string(O.t.vKYZzc),
        options: (0, g.c1)(),
        select: e => {
          m(e), L(true)
        },
        isSelected: e => e === E,
        serialize: e => String(e)
      }), (0, r.jsxs)("div", {
        className: h.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: h.pauseText,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: O.intl.string(O.t.Uwsjn6)
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: O.intl.string(O.t.qPJkZh)
          })]
        }), (0, r.jsx)(o.aML, {
          "data-migration-pending": true,
          text: O.intl.string(O.t["9GPbsV"]),
          shouldShow: N,
          children: e => (0, r.jsx)("div", j(y({}, e), {
            className: h.toggle,
            children: (0, r.jsx)(o.rsf, {
              onChange: Z,
              checked: P,
              disabled: U
            })
          }))
        })]
      }), (0, r.jsxs)("div", {
        className: h.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: h.pauseText,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: O.intl.string(O.t["wrDmA/"])
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: O.intl.string(O.t.UQbJW7)
          })]
        }), (0, r.jsx)("div", {
          className: h.toggle,
          children: (0, r.jsx)(o.rsf, {
            onChange: function() {
              R(e => !e)
            },
            checked: M
          })
        })]
      })]
    })
  })
}