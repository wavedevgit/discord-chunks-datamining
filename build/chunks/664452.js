/** Chunk was on 61536 **/
n.d(t, {
  default: () => f
}), n(388685);
var i = n(200651),
  r = n(192379),
  s = n(831209),
  o = n(442837),
  a = n(481060),
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
    analyticsData: k
  } = e, N = (0, o.e7)([c.Z], () => c.Z.getGuild(t), [t]), T = !!(null == N ? void 0 : N.hasFeature(_.oNc.INVITES_DISABLED)), [O] = r.useState(!1), [y, E] = r.useState(m.Fl), S = (0, o.e7)([p.Z], () => p.Z.getGuildIncident(t)), I = (0, u.BT)(N), w = (0, h.SG)(S) || T, A = (0, h.sN)(S), [P, z] = r.useState(w), [D, R] = r.useState(A), [M, L] = r.useState(!1), Z = P !== w || D !== A || M, G = T && !I;
  if (null == N) return f(), null;

  function B() {
    z(e => !e)
  }
  return (0, i.jsxs)(a.Y0X, {
    transitionState: n,
    size: a.CgR.MEDIUM,
    children: [(0, i.jsx)(a.xBx, {
      separator: !0,
      children: (0, i.jsxs)("div", {
        className: g.headerContainer,
        children: [(0, i.jsx)(a.mBM, {
          size: "xs",
          color: s.Z.INTERACTIVE_NORMAL
        }), (0, i.jsx)(a.X6q, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: C.intl.string(C.t.oCYAc3)
        }), (0, i.jsx)(l.Z, {})]
      })
    }), (0, i.jsx)(a.hzk, {
      children: (0, i.jsxs)("div", {
        className: g.mainContainer,
        children: [(0, i.jsx)(a.PhF, {
          placeholder: C.intl.string(C.t.vKYZzc),
          options: (0, m.c1)(),
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
              children: C.intl.string(C.t.Uwsjn5)
            }), (0, i.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: C.intl.string(C.t.qPJkZm)
            })]
          }), (0, i.jsx)(a.ua7, {
            text: C.intl.string(C.t["9GPbsb"]),
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
              children: C.intl.string(C.t.wrDmAw)
            }), (0, i.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: C.intl.string(C.t.UQbJW1)
            })]
          }), (0, i.jsx)(a.rsf, {
            className: g.toggle,
            onChange: function() {
              R(e => !e)
            },
            checked: D
          })]
        })]
      })
    }), (0, i.jsxs)(a.mzw, {
      children: [(0, i.jsx)(a.zxk, {
        onClick: () => {
          (w || A) && !P && !D ? ((0, x.n)(N.id, !1, !1), (0, a.ZDy)(() => Promise.resolve(e => (0, i.jsx)(j.Z, b(v({}, e), {
            guildId: t
          }))))) : (0, x.n)(N.id, P, D, y);
          let {
            source: e,
            alertType: n,
            messageId: r
          } = k;
          d.default.track(_.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: r,
            raid_alert_type: n,
            intervention_type_enabled: (0, h.sO)(P, D),
            intervention_type_disabled: (0, h.lk)(P, D),
            duration: 60 * y
          }), f()
        },
        color: a.zxk.Colors.BRAND,
        look: a.zxk.Looks.FILLED,
        submitting: O,
        disabled: !Z,
        children: C.intl.string(C.t["pwm/z8"])
      }), (0, i.jsx)(a.zxk, {
        onClick: f,
        color: a.zxk.Colors.PRIMARY,
        look: a.zxk.Looks.LINK,
        disabled: O,
        children: C.intl.string(C.t["ETE/oK"])
      })]
    })]
  })
}