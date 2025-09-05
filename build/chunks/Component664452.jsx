/** Chunk was on 58175 **/
/** chunk id: 664452, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
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

function v(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: v,
    analyticsData: N
  } = t, m = (0, l.e7)([c.Z], () => c.Z.getGuild(e), [e]), E = !!(null == m ? true : m.features.has(_.oNc.INVITES_DISABLED)), [S] = i.useState(false), [C, T] = i.useState(f.Fl), I = (0, l.e7)([O.Z], () => O.Z.getGuildIncident(e)), D = (0, p.BT)(m), A = (0, b.SG)(I) || E, P = (0, b.sN)(I), [w, R] = i.useState(A), [M, k] = i.useState(P), [G, L] = i.useState(false), Z = w !== A || M !== P || G, U = E && !D;
  if (null == m) return v(), null;

  function K() {
    R(t => !t)
  }
  return (0, r.jsx)(a.Modal, {
    transitionState: n,
    title: h.intl.string(h.t.oCYAc3),
    actions: [{
      text: h.intl.string(h.t["ETE/oK"]),
      onClick: v,
      variant: "secondary",
      disabled: S
    }, {
      text: h.intl.string(h.t["pwm/z8"]),
      onClick: () => {
        (A || P) && !w && !M ? ((0, u.n)(m.id, false, false), (0, o.ZDy)(() => Promise.resolve(t => (0, r.jsx)(g.Z, x(j({}, t), {
          guildId: e
        }))))) : (0, u.n)(m.id, w, M, C);
        let {
          source: t,
          alertType: n,
          messageId: i
        } = N;
        d.default.track(_.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
          guild_id: e,
          source: t,
          raid_alert_id: i,
          raid_alert_type: n,
          intervention_type_enabled: (0, b.sO)(w, M),
          intervention_type_disabled: (0, b.lk)(w, M),
          duration: 60 * C
        }), v()
      },
      loading: S,
      disabled: !Z
    }],
    onClose: v,
    children: (0, r.jsxs)("div", {
      className: y.mainContainer,
      children: [(0, r.jsx)(o.PhF, {
        placeholder: h.intl.string(h.t.vKYZzc),
        options: (0, f.c1)(),
        select: t => {
          T(t), L(true)
        },
        isSelected: t => t === C,
        serialize: t => String(t)
      }), (0, r.jsxs)("div", {
        className: y.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: y.pauseText,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: h.intl.string(h.t.Uwsjn5)
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.qPJkZm)
          })]
        }), (0, r.jsx)(o.ua7, {
          text: h.intl.string(h.t["9GPbsb"]),
          shouldShow: E,
          children: t => (0, r.jsx)("div", x(j({}, t), {
            children: (0, r.jsx)(s.T2, {
              className: y.toggle,
              onChange: K,
              checked: w,
              disabled: U
            })
          }))
        })]
      }), (0, r.jsxs)("div", {
        className: y.pauseContainer,
        children: [(0, r.jsxs)("div", {
          className: y.pauseText,
          children: [(0, r.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: h.intl.string(h.t.wrDmAw)
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.UQbJW1)
          })]
        }), (0, r.jsx)(s.T2, {
          className: y.toggle,
          onChange: function() {
            k(t => !t)
          },
          checked: M
        })]
      })]
    })
  })
}