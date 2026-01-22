/** Chunk was on 99583 **/
/** chunk id: 671576, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk554113 = require("./554113.js"),
  Chunk974103 = require("./974103.js"),
  Chunk903093 = require("./903093.js"),
  Chunk610136 = require("./610136.js"),
  Chunk336496 = require("./336496.jsx"),
  Chunk218113 = require("./218113.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk651846 = require("./651846.js");

function A(e) {
  let {
    guildId: t,
    transitionState: l,
    onClose: A,
    analyticsData: p
  } = e, E = (0, s.bG)([d.A], () => d.A.getGuild(t), [t]), S = !!(null == E ? true : E.features.has(h.GuildFeatures.INVITES_DISABLED)), [T] = r.useState(false), [y, _] = r.useState(f.f7), O = (0, s.bG)([j.A], () => j.A.getGuildIncident(t)), N = (0, x.w)(E), I = (0, m.r2)(O) || S, R = (0, m.di)(O), [D, P] = r.useState(I), [C, M] = r.useState(R), [w, G] = r.useState(false), L = D !== I || C !== R || w, U = S && !N;
  return null == E ? (A(), null) : (0, n.jsx)(i.Modal, {
    transitionState: l,
    title: g.intl.string(g.t.oCYAc7),
    actions: [{
      text: g.intl.string(g.t["ETE/oC"]),
      onClick: A,
      variant: "secondary",
      disabled: T
    }, {
      text: g.intl.string(g.t["pwm/z0"]),
      onClick: () => {
        (I || R) && !D && !C ? ((0, u.tr)(E.id, false, false), (0, c.mMO)(() => Promise.resolve(e => {
          var l, r;
          return (0, n.jsx)(b.default, (l = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(l);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = l[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, e), r = r = {
            guildId: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              l.push.apply(l, n)
            }
            return l
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
          }), l))
        }))) : (0, u.tr)(E.id, D, C, y);
        let {
          source: e,
          alertType: l,
          messageId: r
        } = p;
        o.default.track(h.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
          guild_id: t,
          source: e,
          raid_alert_id: r,
          raid_alert_type: l,
          intervention_type_enabled: (0, m.mR)(D, C),
          intervention_type_disabled: (0, m.fi)(D, C),
          duration: 60 * y
        }), A()
      },
      loading: T,
      disabled: !L
    }],
    onClose: A,
    children: (0, n.jsxs)("div", {
      className: v.rs,
      children: [(0, n.jsx)(c.l6P, {
        label: g.intl.string(g.t.vKYZzc),
        hideLabel: true,
        placeholder: g.intl.string(g.t.vKYZzc),
        options: (0, f.aE)(),
        onSelectionChange: function(e) {
          _(e), G(true)
        },
        value: y,
        selectionMode: "single",
        fullWidth: true
      }), (0, n.jsxs)("div", {
        className: v.Qb,
        children: [(0, n.jsxs)("div", {
          className: v.Iy,
          children: [(0, n.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: g.intl.string(g.t.Uwsjn6)
          }), (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.intl.string(g.t.qPJkZh)
          })]
        }), (0, n.jsx)(a.un, {
          body: g.intl.string(g.t["9GPbsV"]),
          shouldShow: S,
          asContainer: true,
          element: "div",
          children: (0, n.jsx)("div", {
            className: v.L$,
            children: (0, n.jsx)(c.dOG, {
              onChange: function() {
                P(e => !e)
              },
              checked: D,
              disabled: U
            })
          })
        })]
      }), (0, n.jsxs)("div", {
        className: v.Qb,
        children: [(0, n.jsxs)("div", {
          className: v.Iy,
          children: [(0, n.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: g.intl.string(g.t["wrDmA/"])
          }), (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.intl.string(g.t.UQbJW7)
          })]
        }), (0, n.jsx)("div", {
          className: v.L$,
          children: (0, n.jsx)(c.dOG, {
            onChange: function() {
              M(e => !e)
            },
            checked: C
          })
        })]
      })]
    })
  })
}