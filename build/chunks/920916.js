/** Chunk was on web.js **/
"use strict";
n.d(t, {
  default: () => H,
  m: () => W
}), n(773603), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(119617),
  l = n(979554),
  c = n(442837),
  u = n(481060),
  d = n(809206),
  f = n(607070),
  _ = n(235400),
  p = n(204418),
  h = n(583434),
  g = n(530618),
  m = n(70097),
  E = n(454585),
  v = n(164946),
  b = n(369111),
  y = n(25990),
  O = n(594174),
  S = n(960048),
  I = n(272008),
  T = n(113434),
  N = n(497505),
  A = n(918701),
  C = n(475595),
  R = n(566078),
  P = n(114732),
  D = n(46140),
  w = n(675654),
  L = n(388032),
  x = n(955617);

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G() {
  let e = y.Z.getAllPending(),
    t = (0, v.ED)(e);
  return (0, d.Mn)(t).finally(d.si)
}

function B(e) {
  let {
    product: t,
    isFetching: n
  } = (0, h.T)(e), {} = (0, b.Z)({}), r = i.useMemo(() => {
    if (null == t || n) return null;
    let e = t.items.find(e => e.type === l.Z.AVATAR_DECORATION);
    return null == e ? null : e
  }, [t, n]), o = () => null == r ? (S.Z.addBreadcrumb({
    message: "Error saving avatar decoration; it is null"
  }), Promise.reject()) : ((0, d.cV)(r), G());
  return [r, o]
}

function V(e) {
  var t;
  let {
    transitionState: n,
    onClose: o,
    quest: l,
    location: d,
    reward: _,
    decoration: p,
    onUseNow: h,
    preview: m
  } = e, E = i.useRef(null), [v, b] = i.useState(null), y = i.useRef(new s.qA), S = (0, c.e7)([f.Z], () => f.Z.useReducedMotion), T = (0, c.e7)([O.default], () => O.default.getCurrentUser()), A = i.useMemo(() => (0, C.fh)(l, C.eC.HERO), [l]), R = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, [D, L] = i.useState(!0 === m || R ? "claimed" : "loading");
  i.useEffect(() => {
    R || !0 === m || (0, I.QB)(l.id, N.y$.CROSS_PLATFORM, d).then(() => L("claimed")).catch(() => L("error"))
  }, [l, d, R, m]);
  let M = () => {
      L("applying"), h().finally(o)
    },
    k = !0 === m && null === p && (null == _ ? void 0 : _.skuId) !== "",
    j = null == p && !0 !== m,
    U = null == T || j || k || "loading" === D,
    G = !S && !R && "claimed" === D;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.O_, {
      ref: b,
      className: x.confettiCanvas,
      environment: y.current
    }), (0, r.jsx)("div", {
      ref: E,
      children: (0, r.jsx)(u.Y0X, {
        transitionState: n,
        size: u.CgR.DYNAMIC,
        className: a()(x.rootContainer, {
          [x.rootContainerLoading]: U
        }),
        hideShadow: !0,
        children: "error" === D ? (0, r.jsx)(P.Z, {
          onClose: o
        }) : U ? (0, r.jsx)("div", {
          className: x.loadingIndicatorWrapper,
          children: (0, r.jsx)(u.$jN, {
            type: u.$jN.Type.SPINNING_CIRCLE
          })
        }) : (0, r.jsx)(Z, {
          quest: l,
          user: T,
          decoration: p,
          backgroundUrl: A.url,
          isSaving: "applying" === D,
          onClose: o,
          onConfirm: M
        })
      })
    }), G && (0, r.jsx)(g.Z, {
      confettiTarget: E.current,
      confettiCanvas: v,
      sprites: w.CA,
      colors: w.Br
    })]
  })
}

function F(e) {
  let {
    quest: t
  } = e, n = i.useMemo(() => (0, C.fh)(t, C.eC.LOGO_TYPE, "dark"), [t]), o = R.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[N.y$.CROSS_PLATFORM];
  return (0, r.jsxs)("div", {
    className: x.additionalRedemptionInstructions,
    children: [(0, r.jsx)("img", {
      src: n.url,
      alt: "",
      className: x.sponsorLogo
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      color: "always-white",
      children: E.Z.parse(o, !1, {
        allowLinks: !0
      })
    })]
  })
}

function Z(e) {
  let {
    quest: t,
    user: n,
    decoration: i,
    backgroundUrl: o,
    isSaving: a,
    onClose: s,
    onConfirm: l
  } = e, c = (0, C.fh)(t, C.eC.REWARD).url, d = (0, T.Qy)(t.config);
  return (0, r.jsxs)("div", {
    className: x.claimedRootContainer,
    children: [(0, r.jsxs)("div", {
      className: x.headerContainer,
      children: [(0, r.jsx)(m.Z, {
        className: x.headerBackground,
        autoPlay: !1,
        loop: !1,
        muted: !0,
        playsInline: !0,
        controls: !1,
        poster: o
      }), (0, r.jsx)("div", {
        className: x.headerForeground,
        children: (0, r.jsx)(u.olH, {
          className: x.close,
          withCircleBackground: !0,
          onClick: s
        })
      })]
    }), (0, r.jsx)(u.mzw, {
      separator: !1,
      children: (0, r.jsxs)("div", {
        className: x.footerBody,
        children: [(0, r.jsx)("div", {
          className: x.previewContainer,
          children: (0, r.jsx)(p.Z, {
            user: n,
            guildId: null,
            avatarDecorationOverride: i,
            avatarSize: u.EFr.SIZE_152,
            questPreviewRewardAssetUrl: c
          })
        }), (0, r.jsx)(u.X6q, {
          variant: "heading-lg/bold",
          color: "header-primary",
          className: x.heading,
          children: L.NW.string(L.t["0/Yz+f"])
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/normal",
          color: "text-normal",
          className: x.text,
          children: d
        }), (0, r.jsx)(u.zxk, {
          submitting: a,
          onClick: l,
          children: L.NW.string(L.t.MAS7uL)
        }), (0, A.zK)(t, D.S7.ADDITIONAL_REDEMPTION_INSTRUCTIONS) && (0, r.jsx)(F, {
          quest: t
        })]
      })
    })]
  })
}

function H(e) {
  var t, n;
  let {
    quest: o,
    location: a,
    onClose: s,
    transitionState: l,
    preview: c
  } = e, u = i.useMemo(() => (0, A.xn)(o.config), [o]), [d, f] = B(null !== (n = null == u ? void 0 : u.skuId) && void 0 !== n ? n : null);
  return null == u ? null : (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null ? (0, r.jsx)(_.default, {
    transitionState: l,
    onCloseModal: G,
    onClose: s,
    analyticsLocations: [],
    initialSelectedDecoration: d
  }) : (0, r.jsx)(V, {
    onClose: s,
    transitionState: l,
    quest: o,
    location: a,
    reward: u,
    decoration: d,
    onUseNow: f,
    preview: c
  })
}

function W(e, t, i) {
  (0, u.ZDy)(async () => {
    let {
      default: o
    } = await Promise.resolve().then(n.bind(n, 920916));
    return n => (0, r.jsx)(o, U(k({}, n), {
      quest: e,
      location: t,
      preview: i
    }))
  })
}