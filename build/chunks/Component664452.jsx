/** Chunk was on 86736 **/
/** chunk id: 664452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function j(e) {
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

function v(e, t) {
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

function O(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: O,
    analyticsData: y
  } = e, _ = (0, a.e7)([s.Z], () => s.Z.getGuild(t), [t]), C = !!(null == _ ? true : _.features.has(f.GuildFeatures.INVITES_DISABLED)), [N] = r.useState(false), [S, E] = r.useState(g.Fl), I = (0, a.e7)([m.Z], () => m.Z.getGuildIncident(t)), P = (0, u.BT)(_), w = (0, p.SG)(I) || C, T = (0, p.sN)(I), [Z, k] = r.useState(w), [A, D] = r.useState(T), [R, L] = r.useState(false), M = Z !== w || A !== T || R, U = C && !P;
  if (null == _) return O(), null;

  function B() {
    k(e => !e)
  }
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    title: h.intl.string(h.t.oCYAc7),
    actions: [{
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: O,
      variant: "secondary",
      disabled: N
    }, {
      text: h.intl.string(h.t["pwm/z0"]),
      onClick: () => {
        (w || T) && !Z && !A ? ((0, d.n)(_.id, false, false), (0, o.ZDy)(() => Promise.resolve(e => (0, i.jsx)(b.default, v(j({}, e), {
          guildId: t
        }))))) : (0, d.n)(_.id, Z, A, S);
        let {
          source: e,
          alertType: n,
          messageId: r
        } = y;
        c.default.track(f.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
          guild_id: t,
          source: e,
          raid_alert_id: r,
          raid_alert_type: n,
          intervention_type_enabled: (0, p.sO)(Z, A),
          intervention_type_disabled: (0, p.lk)(Z, A),
          duration: 60 * S
        }), O()
      },
      loading: N,
      disabled: !M
    }],
    onClose: O,
    children: (0, i.jsxs)("div", {
      className: x.mainContainer,
      children: [(0, i.jsx)(o.PhF, {
        placeholder: h.intl.string(h.t.vKYZzc),
        options: (0, g.c1)(),
        select: e => {
          E(e), L(true)
        },
        isSelected: e => e === S,
        serialize: e => String(e)
      }), (0, i.jsxs)("div", {
        className: x.pauseContainer,
        children: [(0, i.jsxs)("div", {
          className: x.pauseText,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: h.intl.string(h.t.Uwsjn6)
          }), (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.qPJkZh)
          })]
        }), (0, i.jsx)(o.aML, {
          "data-migration-pending": true,
          text: h.intl.string(h.t["9GPbsV"]),
          shouldShow: C,
          children: e => (0, i.jsx)("div", v(j({}, e), {
            className: x.toggle,
            children: (0, i.jsx)(o.rsf, {
              onChange: B,
              checked: Z,
              disabled: U
            })
          }))
        })]
      }), (0, i.jsxs)("div", {
        className: x.pauseContainer,
        children: [(0, i.jsxs)("div", {
          className: x.pauseText,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: h.intl.string(h.t["wrDmA/"])
          }), (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: h.intl.string(h.t.UQbJW7)
          })]
        }), (0, i.jsx)("div", {
          className: x.toggle,
          children: (0, i.jsx)(o.rsf, {
            onChange: function() {
              D(e => !e)
            },
            checked: A
          })
        })]
      })]
    })
  })
}