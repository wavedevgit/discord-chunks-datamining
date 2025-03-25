/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => S
}), n(627341);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(278074),
  l = n(442837),
  c = n(481060),
  u = n(884697),
  d = n(449217),
  f = n(905357),
  _ = n(95422),
  p = n(222062),
  h = n(706454),
  m = n(158776),
  g = n(55935),
  E = n(74538),
  b = n(204418),
  v = n(388032),
  y = n(970033);
let O = [{
    avatarSize: c.EFr.SIZE_40,
    showStatus: !1
  }, {
    avatarSize: c.EFr.SIZE_32,
    showStatus: !1
  }, {
    avatarSize: c.EFr.SIZE_40,
    showStatus: !0
  }, {
    avatarSize: c.EFr.SIZE_32,
    showStatus: !0
  }],
  I = e => {
    let {
      purchase: t
    } = e, n = (0, l.e7)([h.default], () => h.default.locale), i = (0, u.qS)(t), o = null != t.expiresAt ? (0, g.TD)(Date.now(), t.expiresAt) : null, a = (0, _.a)(t), s = t.purchasedAt.toLocaleDateString(n, {
      month: "long",
      year: "numeric"
    });
    return (0, r.jsxs)("div", {
      className: y.purchaseInfo,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: a
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: t.summary
      }), null != o && (0, r.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: v.NW.format(v.t.Io7ozs, {
          days: o.days.toString()
        })
      }), (0, r.jsxs)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: [i ? v.NW.format(v.t.LFVi6O, {
          dateAcquired: s
        }) : v.NW.format(v.t.gW9R4O, {
          date: s
        }), null != t.expiresAt && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("br", {}), v.NW.format(v.t.eZSTa2, {
            date: t.expiresAt.toLocaleDateString(n, {
              minute: "numeric",
              hour: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric"
            })
          })]
        })]
      }), i && (0, r.jsx)(c.Text, {
        variant: "text-xxs/normal",
        color: "text-muted",
        children: v.NW.string(v.t.UewH9P)
      })]
    })
  },
  S = e => {
    let {
      user: t,
      guildId: n,
      avatarDecorationOverride: o,
      className: _
    } = e, h = (0, l.e7)([m.Z], () => m.Z.getStatus(t.id)), {
      product: g,
      purchase: S
    } = (0, d.Z)(null == o ? void 0 : o.skuId), T = E.ZP.canUseCollectibles(t), A = (0, u.qS)(S), N = (0, u.G1)(g), C = !T && A, R = (0, p.M)(!N || T), P = (0, f.k)(g), w = i.useMemo(() => C ? v.NW.string(v.t.zrBmQE) : (0, s.EQ)([N, T, R]).with([!0, !0, !1], () => v.NW.string(v.t.L5hyz8)).with([!0, !1, !0], () => v.NW.string(v.t.q0PlFh)).with([!0, !1, !1], () => v.NW.string(v.t.ucqOV1)).otherwise(() => v.NW.string(v.t.UROtt7)), [C, N, T, R]);
    return null != g && (null == S || C) ? (0, r.jsxs)("div", {
      className: a()(y.modalPreview, y.shopPreviewContainer, _),
      children: [(0, r.jsx)("div", {
        className: y.shopPreviewBanner,
        children: (0, r.jsx)(b.Z, {
          user: t,
          guildId: n,
          avatarDecorationOverride: o
        })
      }), (0, r.jsxs)("div", {
        className: y.shopPreviewTextContainer,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: P
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: w
        })]
      })]
    }) : (0, r.jsxs)("div", {
      className: a()(y.modalPreview, _),
      children: [(0, r.jsxs)("div", {
        className: y.previewSections,
        children: [(0, r.jsx)("div", {
          className: y.decorationPreview,
          children: (0, r.jsx)(b.Z, {
            user: t,
            guildId: n,
            avatarDecorationOverride: o
          })
        }), (0, r.jsx)("div", {
          className: y.smallDecorationPreviewsContainer,
          children: O.map(e => {
            let {
              avatarSize: i,
              showStatus: a
            } = e;
            return (0, r.jsx)("div", {
              className: y.smallDecorationPreview,
              children: (0, r.jsx)(b.Z, {
                user: t,
                guildId: n,
                avatarSize: i,
                avatarDecorationOverride: o,
                status: a ? h : void 0,
                "aria-hidden": !0
              })
            }, "".concat(i).concat(a))
          })
        })]
      }), null != S && (0, r.jsx)(I, {
        purchase: S
      })]
    })
  }