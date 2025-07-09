/** Chunk was on 61536 **/
n.d(t, {
  default: () => f
}), n(388685);
var i = n(255367),
  r = n(73800),
  s = n(831209),
  a = n(442837),
  o = n(481060),
  l = n(688465),
  c = n(430824),
  d = n(626135),
  x = n(369994),
  u = n(162157),
  h = n(533244),
  p = n(487419),
  j = n(821312),
  m = n(676770),
  _ = n(981631),
  C = n(388032),
  g = n(613915);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i
    })
  }
  return e
}

function b(e, t) {
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

function f(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: f,
    analyticsData: T
  } = e, N = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]), O = !!(null == N ? void 0 : N.features.has(_.oNc.INVITES_DISABLED)), [y] = r.useState(!1), [S, k] = r.useState(m.Fl), E = (0, a.e7)([p.Z], () => p.Z.getGuildIncident(t)), w = (0, u.BT)(N), I = (0, h.SG)(E) || O, P = (0, h.sN)(E), [A, M] = r.useState(I), [R, D] = r.useState(P), [z, Z] = r.useState(!1), G = A !== I || R !== P || z, L = O && !w;
  if (null == N) return f(), null;

  function B() {
    M(e => !e)
  }
  return (0, i.jsxs)(o.Y0X, {
    transitionState: n,
    size: o.CgR.MEDIUM,
    parentComponent: "GuildRaidServerLockdownModal",
    children: [(0, i.jsx)(o.xBx, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: g.headerContainer,
        children: [(0, i.jsx)(o.mBM, {
          size: "xs",
          color: s.Z.INTERACTIVE_NORMAL
        }), (0, i.jsx)(o.X6q, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: C.intl.string(C.t.oCYAc3)
        }), (0, i.jsx)(l.Z, {})]
      })
    }), (0, i.jsx)(o.hzk, {
      children: (0, i.jsxs)("div", {
        className: g.mainContainer,
        children: [(0, i.jsx)(o.PhF, {
          placeholder: C.intl.string(C.t.vKYZzc),
          options: (0, m.c1)(),
          select: e => {
            k(e), Z(!0)
          },
          isSelected: e => e === S,
          serialize: e => String(e)
        }), (0, i.jsxs)("div", {
          className: g.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: g.pauseText,
            children: [(0, i.jsx)(o.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: C.intl.string(C.t.Uwsjn5)
            }), (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: C.intl.string(C.t.qPJkZm)
            })]
          }), (0, i.jsx)(o.ua7, {
            text: C.intl.string(C.t["9GPbsb"]),
            shouldShow: O,
            children: e => (0, i.jsx)("div", b(v({}, e), {
              children: (0, i.jsx)(o.rsf, {
                className: g.toggle,
                onChange: B,
                checked: A,
                disabled: L
              })
            }))
          })]
        }), (0, i.jsxs)("div", {
          className: g.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: g.pauseText,
            children: [(0, i.jsx)(o.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: C.intl.string(C.t.wrDmAw)
            }), (0, i.jsx)(o.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: C.intl.string(C.t.UQbJW1)
            })]
          }), (0, i.jsx)(o.rsf, {
            className: g.toggle,
            onChange: function() {
              D(e => !e)
            },
            checked: R
          })]
        })]
      })
    }), (0, i.jsx)(o.mzw, {
      children: (0, i.jsxs)(o.hE2, {
        direction: "horizontal-reverse",
        children: [(0, i.jsx)(o.zxk, {
          variant: "primary",
          text: C.intl.string(C.t["pwm/z8"]),
          onClick: () => {
            (I || P) && !A && !R ? ((0, x.n)(N.id, !1, !1), (0, o.ZDy)(() => Promise.resolve(e => (0, i.jsx)(j.Z, b(v({}, e), {
              guildId: t
            }))))) : (0, x.n)(N.id, A, R, S);
            let {
              source: e,
              alertType: n,
              messageId: r
            } = T;
            d.default.track(_.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
              guild_id: t,
              source: e,
              raid_alert_id: r,
              raid_alert_type: n,
              intervention_type_enabled: (0, h.sO)(A, R),
              intervention_type_disabled: (0, h.lk)(A, R),
              duration: 60 * S
            }), f()
          },
          loading: y,
          disabled: !G
        }), (0, i.jsx)(o.zxk, {
          variant: "secondary",
          text: C.intl.string(C.t["ETE/oK"]),
          onClick: f,
          disabled: y
        })]
      })
    })]
  })
}