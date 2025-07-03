/** Chunk was on 61536 **/
n.d(t, {
  default: () => f
}), n(388685);
var i = n(255367),
  r = n(73800),
  o = n(831209),
  s = n(442837),
  a = n(481060),
  l = n(688465),
  c = n(430824),
  d = n(626135),
  x = n(369994),
  u = n(162157),
  h = n(533244),
  p = n(487419),
  m = n(821312),
  j = n(676770),
  C = n(981631),
  _ = n(388032),
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
    analyticsData: k
  } = e, N = (0, s.e7)([c.Z], () => c.Z.getGuild(t), [t]), T = !!(null == N ? void 0 : N.features.has(C.oNc.INVITES_DISABLED)), [O] = r.useState(!1), [y, E] = r.useState(j.Fl), S = (0, s.e7)([p.Z], () => p.Z.getGuildIncident(t)), I = (0, u.BT)(N), w = (0, h.SG)(S) || T, A = (0, h.sN)(S), [P, R] = r.useState(w), [z, D] = r.useState(A), [M, L] = r.useState(!1), Z = P !== w || z !== A || M, G = T && !I;
  if (null == N) return f(), null;

  function B() {
    R(e => !e)
  }
  return (0, i.jsxs)(a.Y0X, {
    transitionState: n,
    size: a.CgR.MEDIUM,
    parentComponent: "GuildRaidServerLockdownModal",
    children: [(0, i.jsx)(a.xBx, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: g.headerContainer,
        children: [(0, i.jsx)(a.mBM, {
          size: "xs",
          color: o.Z.INTERACTIVE_NORMAL
        }), (0, i.jsx)(a.X6q, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: _.intl.string(_.t.oCYAc3)
        }), (0, i.jsx)(l.Z, {})]
      })
    }), (0, i.jsx)(a.hzk, {
      children: (0, i.jsxs)("div", {
        className: g.mainContainer,
        children: [(0, i.jsx)(a.PhF, {
          placeholder: _.intl.string(_.t.vKYZzc),
          options: (0, j.c1)(),
          select: e => {
            E(e), L(!0)
          },
          isSelected: e => e === y,
          serialize: e => String(e)
        }), (0, i.jsxs)("div", {
          className: g.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: g.pauseText,
            children: [(0, i.jsx)(a.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: _.intl.string(_.t.Uwsjn5)
            }), (0, i.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: _.intl.string(_.t.qPJkZm)
            })]
          }), (0, i.jsx)(a.ua7, {
            text: _.intl.string(_.t["9GPbsb"]),
            shouldShow: T,
            children: e => (0, i.jsx)("div", b(v({}, e), {
              children: (0, i.jsx)(a.rsf, {
                className: g.toggle,
                onChange: B,
                checked: P,
                disabled: G
              })
            }))
          })]
        }), (0, i.jsxs)("div", {
          className: g.pauseContainer,
          children: [(0, i.jsxs)("div", {
            className: g.pauseText,
            children: [(0, i.jsx)(a.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: _.intl.string(_.t.wrDmAw)
            }), (0, i.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: _.intl.string(_.t.UQbJW1)
            })]
          }), (0, i.jsx)(a.rsf, {
            className: g.toggle,
            onChange: function() {
              D(e => !e)
            },
            checked: z
          })]
        })]
      })
    }), (0, i.jsxs)(a.mzw, {
      children: [(0, i.jsx)(a.zxk, {
        onClick: () => {
          (w || A) && !P && !z ? ((0, x.n)(N.id, !1, !1), (0, a.ZDy)(() => Promise.resolve(e => (0, i.jsx)(m.Z, b(v({}, e), {
            guildId: t
          }))))) : (0, x.n)(N.id, P, z, y);
          let {
            source: e,
            alertType: n,
            messageId: r
          } = k;
          d.default.track(C.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: r,
            raid_alert_type: n,
            intervention_type_enabled: (0, h.sO)(P, z),
            intervention_type_disabled: (0, h.lk)(P, z),
            duration: 60 * y
          }), f()
        },
        color: a.zxk.Colors.BRAND,
        look: a.zxk.Looks.FILLED,
        submitting: O,
        disabled: !Z,
        children: _.intl.string(_.t["pwm/z8"])
      }), (0, i.jsx)(a.zxk, {
        onClick: f,
        color: a.zxk.Colors.PRIMARY,
        look: a.zxk.Looks.LINK,
        disabled: O,
        children: _.intl.string(_.t["ETE/oK"])
      })]
    })]
  })
}