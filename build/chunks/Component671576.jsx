/** Chunk was on 99583 **/
/** chunk id: 671576, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => _
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

function _(e) {
  let {
    guildId: t,
    transitionState: l,
    onClose: _,
    analyticsData: A
  } = e, p = (0, s.bG)([c.A], () => c.A.getGuild(t), [t]), S = !!(null == p ? true : p.features.has(f.GuildFeatures.INVITES_DISABLED)), [T] = r.useState(false), [E, y] = r.useState(h.f7), O = (0, s.bG)([j.A], () => j.A.getGuildIncident(t)), N = (0, x.w)(p), I = (0, m.r2)(O) || S, R = (0, m.di)(O), [C, D] = r.useState(I), [P, M] = r.useState(R), [w, G] = r.useState(false), L = C !== I || P !== R || w, U = S && !N;
  return null == p ? (_(), null) : (0, n.jsx)(i.Modal, {
    transitionState: l,
    title: g.intl.string(g.t.oCYAc7),
    actions: [{
      text: g.intl.string(g.t["ETE/oC"]),
      onClick: _,
      variant: "secondary",
      disabled: T
    }, {
      text: g.intl.string(g.t["pwm/z0"]),
      onClick: () => {
        (I || R) && !C && !P ? ((0, u.tr)(p.id, false, false), (0, o.mMO)(() => Promise.resolve(e => {
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
        }))) : (0, u.tr)(p.id, C, P, E);
        let {
          source: e,
          alertType: l,
          messageId: r
        } = A;
        d.default.track(f.HAw.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
          guild_id: t,
          source: e,
          raid_alert_id: r,
          raid_alert_type: l,
          intervention_type_enabled: (0, m.mR)(C, P),
          intervention_type_disabled: (0, m.fi)(C, P),
          duration: 60 * E
        }), _()
      },
      loading: T,
      disabled: !L
    }],
    onClose: _,
    children: (0, n.jsxs)("div", {
      className: v.rs,
      children: [(0, n.jsx)(o.l6P, {
        label: g.intl.string(g.t.vKYZzc),
        hideLabel: true,
        placeholder: g.intl.string(g.t.vKYZzc),
        options: (0, h.aE)(),
        onSelectionChange: function(e) {
          y(e), G(true)
        },
        value: E,
        selectionMode: "single",
        fullWidth: true
      }), (0, n.jsxs)("div", {
        className: v.Qb,
        children: [(0, n.jsxs)("div", {
          className: v.Iy,
          children: [(0, n.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: g.intl.string(g.t.Uwsjn6)
          }), (0, n.jsx)(o.Text, {
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
            children: (0, n.jsx)(o.dOG, {
              onChange: function() {
                D(e => !e)
              },
              checked: C,
              disabled: U
            })
          })
        })]
      }), (0, n.jsxs)("div", {
        className: v.Qb,
        children: [(0, n.jsxs)("div", {
          className: v.Iy,
          children: [(0, n.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: g.intl.string(g.t["wrDmA/"])
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: g.intl.string(g.t.UQbJW7)
          })]
        }), (0, n.jsx)("div", {
          className: v.L$,
          children: (0, n.jsx)(o.dOG, {
            onChange: function() {
              M(e => !e)
            },
            checked: P
          })
        })]
      })]
    })
  })
}