/** Chunk was on 79783 (b93f927a079fdfee.js) **/
n.d(t, {
  default: () => O
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(831209),
  o = n(442837),
  a = n(481060),
  s = n(688465),
  c = n(430824),
  d = n(626135),
  u = n(369994),
  p = n(162157),
  m = n(533244),
  b = n(487419),
  g = n(821312),
  f = n(676770),
  h = n(981631),
  x = n(388032),
  j = n(27586);

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function N(e, t) {
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

function O(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: O,
    analyticsData: y
  } = e, _ = (0, o.e7)([c.Z], () => c.Z.getGuild(t), [t]), C = !!(null == _ ? void 0 : _.hasFeature(h.oNc.INVITES_DISABLED)), [I] = i.useState(!1), [E, S] = i.useState(f.Fl), P = (0, o.e7)([b.Z], () => b.Z.getGuildIncident(t)), w = (0, p.BT)(_), Z = (0, m.SG)(P) || C, T = (0, m.sN)(P), [W, k] = i.useState(Z), [A, D] = i.useState(T), [R, L] = i.useState(!1), M = W !== Z || A !== T || R, B = C && !w;
  if (null == _) return O(), null;

  function U() {
    k(e => !e)
  }
  return (0, r.jsxs)(a.Y0X, {
    transitionState: n,
    size: a.CgR.MEDIUM,
    children: [(0, r.jsx)(a.xBx, {
      separator: !0,
      children: (0, r.jsxs)("div", {
        className: j.headerContainer,
        children: [(0, r.jsx)(a.mBM, {
          size: "xs",
          color: l.Z.INTERACTIVE_NORMAL
        }), (0, r.jsx)(a.X6q, {
          color: "header-primary",
          variant: "heading-md/semibold",
          children: x.NW.string(x.t.oCYAc3)
        }), (0, r.jsx)(s.Z, {})]
      })
    }), (0, r.jsx)(a.hzk, {
      children: (0, r.jsxs)("div", {
        className: j.mainContainer,
        children: [(0, r.jsx)(a.PhF, {
          placeholder: x.NW.string(x.t.vKYZzc),
          options: (0, f.c1)(),
          select: e => {
            S(e), L(!0)
          },
          isSelected: e => e === E,
          serialize: e => String(e)
        }), (0, r.jsxs)("div", {
          className: j.pauseContainer,
          children: [(0, r.jsxs)("div", {
            className: j.pauseText,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: x.NW.string(x.t.Uwsjn5)
            }), (0, r.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: x.NW.string(x.t.qPJkZm)
            })]
          }), (0, r.jsx)(a.ua7, {
            text: x.NW.string(x.t["9GPbsb"]),
            shouldShow: C,
            children: e => (0, r.jsx)("div", N(v({}, e), {
              children: (0, r.jsx)(a.rsf, {
                className: j.toggle,
                onChange: U,
                checked: W,
                disabled: B
              })
            }))
          })]
        }), (0, r.jsxs)("div", {
          className: j.pauseContainer,
          children: [(0, r.jsxs)("div", {
            className: j.pauseText,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/semibold",
              color: "header-primary",
              children: x.NW.string(x.t.wrDmAw)
            }), (0, r.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: x.NW.string(x.t.UQbJW1)
            })]
          }), (0, r.jsx)(a.rsf, {
            className: j.toggle,
            onChange: function() {
              D(e => !e)
            },
            checked: A
          })]
        })]
      })
    }), (0, r.jsxs)(a.mzw, {
      children: [(0, r.jsx)(a.zxk, {
        onClick: () => {
          (Z || T) && !W && !A ? ((0, u.n)(_.id, !1, !1), (0, a.ZDy)(() => Promise.resolve(e => (0, r.jsx)(g.Z, N(v({}, e), {
            guildId: t
          }))))) : (0, u.n)(_.id, W, A, E);
          let {
            source: e,
            alertType: n,
            messageId: i
          } = y;
          d.default.track(h.rMx.GUILD_RAID_INTERVENTION_STATE_CHANGE, {
            guild_id: t,
            source: e,
            raid_alert_id: i,
            raid_alert_type: n,
            intervention_type_enabled: (0, m.sO)(W, A),
            intervention_type_disabled: (0, m.lk)(W, A),
            duration: 60 * E
          }), O()
        },
        color: a.zxk.Colors.BRAND,
        look: a.zxk.Looks.FILLED,
        submitting: I,
        disabled: !M,
        children: x.NW.string(x.t["pwm/z8"])
      }), (0, r.jsx)(a.zxk, {
        onClick: O,
        color: a.zxk.Colors.PRIMARY,
        look: a.zxk.Looks.LINK,
        disabled: I,
        children: x.NW.string(x.t["ETE/oK"])
      })]
    })]
  })
}