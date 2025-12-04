/** Chunk was on 86736 **/
/** chunk id: 664452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: y,
    analyticsData: _
  } = e, C = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]), N = !!(null == C ? true : C.features.has(h.GuildFeatures.INVITES_DISABLED)), [S] = r.useState(false), [I, E] = r.useState(f.Fl), w = (0, a.e7)([b.Z], () => b.Z.getGuildIncident(t)), P = (0, p.BT)(C), T = (0, m.SG)(w) || N, Z = (0, m.sN)(w), [k, A] = r.useState(T), [D, R] = r.useState(Z), [L, M] = r.useState(false), U = k !== T || D !== Z || L, B = N && !P;
  if (null == C) return y(), null;

  function W() {
    A(e => !e)
  }
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    title: x.intl.string(x.t.oCYAc7),
    actions: [{
      text: x.intl.string(x.t["ETE/oC"]),
      onClick: y,
      variant: "secondary",
      disabled: S
    }, {
      text: x.intl.string(x.t["pwm/z0"]),
      onClick: () => {
        (T || Z) && !k && !D ? ((0, u.n)(C.id, false, false), (0, s.ZDy)(() => Promise.resolve(e => (0, i.jsx)(g.default, O(v({}, e), {
          guildId: t
        }))))) : (0, u.n)(C.id, k, D, I);
        let {
          source: e,
          alertType: n,
          messageId: r
        } = _;
        d.default.track(h.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
          guild_id: t,
          source: e,
          raid_alert_id: r,
          raid_alert_type: n,
          intervention_type_enabled: (0, m.sO)(k, D),
          intervention_type_disabled: (0, m.lk)(k, D),
          duration: 60 * I
        }), y()
      },
      loading: S,
      disabled: !U
    }],
    onClose: y,
    children: (0, i.jsxs)("div", {
      className: j.mainContainer,
      children: [(0, i.jsx)(o.B6, {
        placeholder: x.intl.string(x.t.vKYZzc),
        options: (0, f.c1)(),
        select: e => {
          E(e), M(true)
        },
        isSelected: e => e === I,
        serialize: e => String(e)
      }), (0, i.jsxs)("div", {
        className: j.pauseContainer,
        children: [(0, i.jsxs)("div", {
          className: j.pauseText,
          children: [(0, i.jsx)(s.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: x.intl.string(x.t.Uwsjn6)
          }), (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: x.intl.string(x.t.qPJkZh)
          })]
        }), (0, i.jsx)(s.aML, {
          "data-migration-pending": true,
          text: x.intl.string(x.t["9GPbsV"]),
          shouldShow: N,
          children: e => (0, i.jsx)("div", O(v({}, e), {
            className: j.toggle,
            children: (0, i.jsx)(s.rsf, {
              onChange: W,
              checked: k,
              disabled: B
            })
          }))
        })]
      }), (0, i.jsxs)("div", {
        className: j.pauseContainer,
        children: [(0, i.jsxs)("div", {
          className: j.pauseText,
          children: [(0, i.jsx)(s.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: x.intl.string(x.t["wrDmA/"])
          }), (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: x.intl.string(x.t.UQbJW7)
          })]
        }), (0, i.jsx)("div", {
          className: j.toggle,
          children: (0, i.jsx)(s.rsf, {
            onChange: function() {
              R(e => !e)
            },
            checked: D
          })
        })]
      })]
    })
  })
}