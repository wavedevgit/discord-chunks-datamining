/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => w
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(230711),
  u = n(351773),
  d = n(607070),
  f = n(100527),
  _ = n(906732),
  p = n(639119),
  h = n(197115),
  m = n(587446),
  g = n(594174),
  E = n(626135),
  b = n(74538),
  v = n(94795),
  y = n(327943),
  O = n(539873),
  I = n(981631),
  S = n(921944),
  T = n(474936),
  A = n(388032),
  N = n(131538);
let C = () => {
    var e, t, n;
    let i = (0, s.e7)([g.default], () => b.ZP.isPremium(g.default.getCurrentUser())),
      o = (0, p.N)(),
      a = (null == o ? void 0 : null === (e = o.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === T.Si.TIER_2;
    return (0, r.jsx)(h.Z, {
      size: l.zxk.Sizes.MEDIUM,
      buttonText: i ? A.NW.string(A.t.IJI7ys) : a ? (0, b.Rt)({
        intervalType: null == o ? void 0 : null === (t = o.subscription_trial) || void 0 === t ? void 0 : t.interval,
        intervalCount: null == o ? void 0 : null === (n = o.subscription_trial) || void 0 === n ? void 0 : n.interval_count
      }) : A.NW.string(A.t.mr4K7O),
      subscriptionTier: T.Si.TIER_2
    })
  },
  R = e => {
    let {
      markAsDismissed: t
    } = e, n = () => {
      null == t || t(S.L.DISMISS), (0, v.G8)()
    };
    return (0, r.jsxs)("div", {
      className: N.editorHeader,
      children: [(0, r.jsx)(l.P3F, {
        className: N.closeCircleButton,
        onClick: () => n(),
        children: (0, r.jsx)(l.k$p, {
          size: "md",
          color: "currentColor",
          className: N.closeCircle
        })
      }), (0, r.jsxs)("div", {
        className: N.title,
        children: [(0, r.jsx)(l.X6q, {
          variant: "heading-lg/extrabold",
          children: A.NW.string(A.t["hb/wEx"])
        }), (0, r.jsx)(m.Z, {
          className: N.premiumIcon
        })]
      })]
    })
  },
  P = e => {
    let {
      isCoachmark: t,
      markAsDismissed: n
    } = e, i = (0, s.e7)([y.Z], () => y.Z.isUpsellPreview), o = () => {
      null == n || n(S.L.DISMISS), (0, v.G8)(), t || c.Z.open()
    };
    return (0, r.jsxs)("div", {
      className: N.editorFooter,
      children: [i && (0, r.jsx)(C, {}), (0, r.jsx)(l.zxk, {
        className: N.footerButton,
        onClick: o,
        color: l.zxk.Colors.PRIMARY,
        size: l.zxk.Sizes.MEDIUM,
        children: i || t ? A.NW.string(A.t["dqH+qq"]) : A.NW.string(A.t.Olc2Ky)
      })]
    })
  };

function w(e) {
  let {
    isCoachmark: t,
    markAsDismissed: n
  } = e, {
    analyticsLocations: o
  } = (0, _.ZP)(f.Z.APP_ICON_EDITOR), c = (0, s.e7)([g.default], () => g.default.getCurrentUser()), {
    isUpsellPreview: p,
    isEditorOpen: h,
    shouldEditorAnimate: m
  } = (0, s.cj)([y.Z, d.Z], () => ({
    isUpsellPreview: y.Z.isUpsellPreview,
    isEditorOpen: y.Z.isEditorOpen,
    shouldEditorAnimate: t && !d.Z.useReducedMotion
  }));
  i.useEffect(() => {
    p && E.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
      type: T.cd.APP_ICON_UPSELL,
      location_stack: o
    })
  }, [p, o]);
  let b = (0, u.Z)(null, p ? v.O7 : I.dG4);
  return (i.useEffect(() => {
    if (p && !h) return v.O7
  }, [p, h]), null == c) ? null : (0, r.jsx)(_.Gt, {
    value: o,
    children: (0, r.jsx)("div", {
      ref: b,
      className: a()(N.editor, m ? N.editorAnimate : null),
      "data-app-right-panel": !0,
      children: (0, r.jsxs)(l.y5t, {
        children: [(0, r.jsx)(R, {
          markAsDismissed: n
        }), (0, r.jsx)(l.Ttm, {
          className: N.editorBody,
          children: (0, r.jsx)(O.Z, {
            className: N.selectionGroup,
            isEditor: !0
          })
        }), (0, r.jsx)(P, {
          markAsDismissed: n,
          isCoachmark: t
        })]
      })
    })
  })
}