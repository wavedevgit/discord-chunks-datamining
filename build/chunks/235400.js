/** Chunk was on web.js **/
"use strict";
n.d(t, {
  default: () => P
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(979554),
  a = n(442837),
  s = n(481060),
  l = n(100527),
  c = n(906732),
  u = n(335131),
  d = n(884697),
  f = n(449217),
  _ = n(223143),
  p = n(311395),
  h = n(222062),
  m = n(269982),
  g = n(197115),
  E = n(369111),
  v = n(594174),
  b = n(626135),
  y = n(74538),
  O = n(864106),
  I = n(240781),
  S = n(818611),
  T = n(981631),
  N = n(474936),
  A = n(388032),
  C = n(136168);

function R(e) {
  let {
    user: t,
    categories: n,
    purchases: o,
    analyticsLocations: a,
    onClose: c,
    initialSelectedDecoration: _,
    initialSelectedDecorationId: v,
    isTryItOutFlow: b,
    guild: T
  } = e, {
    pendingAvatarDecoration: R,
    setPendingAvatarDecoration: P,
    savedAvatarDecoration: w
  } = (0, E.Z)({
    analyticsLocations: a,
    isTryItOut: b,
    guildId: null == T ? void 0 : T.id
  }), [D, L] = i.useState(() => {
    var e, t;
    if (null != _) return _;
    let r = (0, d.iC)(o, n);
    return null != v ? null !== (e = r.find(e => e.id === v)) && void 0 !== e ? e : null : void 0 !== R ? R : null == w ? null : null !== (t = r.find(e => (0, O.sr)(e, w))) && void 0 !== t ? t : null
  }), {
    product: x,
    purchase: M
  } = (0, f.Z)(null == D ? void 0 : D.skuId), k = y.ZP.canUseCollectibles(t), j = i.useRef(null), U = (0, p.Z)(a), G = (0, O.sr)(D, void 0 === R ? w : R), B = e => {
    L(e), null != e && U(e)
  }, V = () => {
    P(D), c()
  }, F = i.useCallback(e => {
    c(), (0, u.mK)({
      analyticsLocations: a,
      analyticsSource: l.Z.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: e
    })
  }, [a, c]), Z = (0, h.M)(), H = () => null != M && (!(0, d.qS)(M) || k) || null === D ? (0, r.jsx)(s.zxk, {
    onClick: V,
    disabled: G,
    children: A.NW.string(A.t.d6sv6u)
  }) : null == M && (k || !(0, d.G1)(x)) ? (0, r.jsx)(s.zxk, {
    className: C.modalFooterShopButton,
    onClick: () => F(null == x ? void 0 : x.skuId),
    children: A.NW.string(A.t.fYfGgI)
  }) : (0, r.jsx)(g.Z, {
    subscriptionTier: N.Si.TIER_2,
    showGradient: Z,
    buttonText: y.ZP.isPremium(t) ? A.NW.string(A.t.KXLX7u) : Z ? A.NW.string(A.t.pj0XBA) : A.NW.string(A.t.mr4K7O)
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.xBx, {
      separator: !1,
      className: C.modalHeader,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: A.NW.string(A.t["Tna/TU"])
      }), (0, r.jsx)(s.olH, {
        className: C.modalCloseButton,
        onClick: c
      })]
    }), (0, r.jsxs)(s.hzk, {
      className: C.modalContent,
      scrollbarType: "none",
      children: [(0, r.jsx)(S.Z, {
        user: t,
        guild: T,
        pendingAvatarDecoration: D,
        selectedAvatarDecorationRef: j,
        onSelect: B,
        onOpenShop: F
      }), (0, r.jsx)(I.Z, {
        className: C.modalPreview,
        user: t,
        guildId: null == T ? void 0 : T.id,
        avatarDecorationOverride: D
      })]
    }), (0, r.jsxs)(s.mzw, {
      children: [(0, r.jsx)("div", {
        children: H()
      }), !Z && (0, r.jsx)(s.zxk, {
        look: s.zxk.Looks.LINK,
        color: s.zxk.Colors.PRIMARY,
        onClick: c,
        children: A.NW.string(A.t["ETE/oK"])
      }), Z && (0, d.G1)(x) && (0, r.jsx)(m.Z, {
        product: x,
        onSecondaryClick: c
      })]
    })]
  })
}

function P(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    onClose: d,
    onCloseModal: f,
    initialSelectedDecoration: p,
    initialSelectedDecorationId: h,
    isTryItOutFlow: m,
    guild: g
  } = e, E = (0, a.e7)([v.default], () => v.default.getCurrentUser()), {
    analyticsLocations: y
  } = (0, c.ZP)(n, l.Z.EDIT_AVATAR_DECORATION_MODAL), {
    categories: O,
    purchases: I,
    isFetchingCategories: S,
    isFetchingPurchases: N
  } = (0, _.ZP)({
    location: "AvatarDecorationModal"
  }), A = S || N && 0 === I.size, P = () => {
    f(), null == d || d()
  };
  return i.useEffect(() => {
    b.default.track(T.rMx.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: y
    })
  }, [y]), i.useEffect(() => () => {
    (0, u.K$)({
      categories: [...O.values()],
      itemTypes: [o.Z.AVATAR_DECORATION]
    })
  }, [O]), null == E ? null : (0, r.jsx)(c.Gt, {
    value: y,
    children: (0, r.jsx)(s.Y0X, {
      transitionState: t,
      className: C.modal,
      size: A ? s.CgR.DYNAMIC : s.CgR.MEDIUM,
      children: A ? (0, r.jsx)(s.$jN, {
        className: C.spinner,
        type: s.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(R, {
        user: E,
        guild: g,
        categories: O,
        purchases: I,
        analyticsLocations: y,
        initialSelectedDecoration: p,
        initialSelectedDecorationId: h,
        onClose: P,
        isTryItOutFlow: m
      })
    })
  })
}