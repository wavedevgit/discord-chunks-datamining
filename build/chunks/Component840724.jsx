/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => en,
  Zp: () => $
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  a = require.n(Chunk688619),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk220082 = require("./220082.js"),
  Chunk143941 = require("./143941.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk210887 = require("./210887.js"),
  Chunk55563 = require("./55563.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk164670 = require("./164670.js"),
  Chunk590961 = require("./590961.jsx"),
  Chunk210218 = require("./210218.js"),
  Chunk980728 = require("./980728.js"),
  Chunk805355 = require("./805355.js"),
  Chunk705338 = require("./705338.js"),
  Chunk882508 = require("./882508.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk433386 = require("./433386.jsx"),
  Chunk926294 = require("./926294.jsx"),
  Chunk655409 = require("./655409.js"),
  Chunk785873 = require("./785873.js"),
  Chunk181268 = require("./181268.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450433 = require("./450433.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e, t) {
  if (null == e) return {};
  var n, r, i = z(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function z(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let q = 80,
  Q = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  X = 30,
  J = 3;
var $ = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function ee(e) {
  let {
    sku: t,
    isCardHovered: n,
    onClick: i
  } = e;
  return (0, r.jsx)("div", {
    className: B.wishlistButtonContainer,
    children: (0, r.jsx)(b.s, {
      skuId: t.id,
      isCardHovered: n,
      nuxGraphic: (0, w.c)(t),
      onClick: i
    })
  })
}

function et(e) {
  var t, n, o, s, c, p, b, P, w, j;
  let {
    isVisible: V,
    positionInSection: H,
    applicationId: Y,
    skuId: W,
    variant: K = 0,
    guildId: z,
    onClick: $,
    className: et,
    analyticsLocations: en
  } = e, er = i.useRef(null), ei = (0, f.e7)([v.Z], () => v.Z.get(W)), eo = (0, f.e7)([O.Z], () => (0, d.wjy)(O.Z.theme)), ea = (0, f.e7)([m.Z], () => m.Z.useReducedMotion), {
    isHoveringOrFocusing: es
  } = (0, y.Z)(er), el = (0, C.oR)(), {
    analyticsLocations: ec
  } = (0, g.ZP)(null != en ? en : []), eu = i.useRef({
    positionInSection: H,
    analyticsLocations: ec
  }), {
    handleCardHover: ed,
    handleCardUnhover: ef
  } = (0, M.A)(W, el, H, ec), {
    handleCardVisibilityChange: ep
  } = (0, k.X)(W, el, H, ec);
  i.useEffect(() => {
    ep(V)
  }, [V]);
  let e_ = i.useCallback(e => {
      let {
        analyticsLocations: t,
        positionInSection: n
      } = eu.current, {
        sessionId: r,
        guildId: i,
        pageIndex: o,
        pageTitle: a,
        pageSection: s,
        pageSectionTitle: l,
        isUserGuildMember: c,
        pageHasLeaderboard: u
      } = el;
      S.default.track(G.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
        slayer_storefront_session_id: r,
        sku_id: W,
        guild_id: i,
        page_index: o,
        page_title: a,
        page_section: s,
        page_section_title: l,
        position_in_section: n,
        is_user_guild_member: c,
        page_has_leaderboard: u,
        cta_type: e,
        location_stack: t
      })
    }, [W, el]),
    {
      primaryIconAsset: em,
      primaryIconLabel: eh
    } = i.useMemo(() => (0, T.FE)(ei, Y), [ei, Y]),
    eg = (0, f.e7)([A.Z], () => {
      var e, t;
      return null != z && null != (t = null == (e = A.Z.getStorefrontState(z)) ? true : e.activePage) ? t : 0
    }),
    eE = i.useMemo(() => {
      var e, t;
      if ((null == ei || null == (t = ei.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
      let n = u()(),
        r = Math.max(u()(ei.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
      return r <= J ? F.intl.format(F.t.PWw4Vp, {
        days: r
      }) : null
    }, [null == ei || null == (n = ei.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]),
    eb = (0, T.a7)(ei),
    [ey, eO] = (0, E.Cf)(null == eb ? true : eb.toString(), "#000000"),
    ev = i.useMemo(() => {
      let e = a()(ey).darken(1.5).alpha(.9).hex(),
        t = a()(ey).alpha(0).hex(),
        [n, r] = Q[K];
      return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat(X + n, "%, ").concat(t, " ").concat(X + r, "%)")
    }, [ey, K]),
    eS = i.useCallback(() => {
      e_(U.rZ.WISHLIST_BUTTON)
    }, [e_]),
    eI = i.useCallback(() => {
      (0, R.eagerNavigateToSocialLayerStorefront)({
        guildId: z
      })
    }, [z]),
    eT = i.useCallback(e => {
      if (e_(U.rZ.CARD), null != $) return void $(e);
      null != z && (0, N.Z)({
        guildId: z,
        pageIndex: eg,
        skuId: W,
        slug: null == ei ? true : ei.slug
      })
    }, [e_, z, W, $, eg, null == ei ? true : ei.slug]);
  if (null == ei) return null;
  let eC = (0, T.Do)(ei);
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(_.kL8, {
      onClick: eT,
      onMouseDown: eI,
      onMouseEnter: ed,
      onMouseLeave: ef,
      className: l()({
        [B.cardAnimation]: !ea && 2 !== K,
        [B.cardDark]: eo,
        [eo ? B.cardDarkHighlighted : B.cardHighlighted]: es
      }, et),
      ref: er,
      "aria-label": ei.name,
      children: [null != eE && (0, r.jsx)(_.IGR, {
        text: eE,
        disableColor: true,
        className: B.badge
      }), (0, r.jsx)(ee, {
        sku: ei,
        isCardHovered: es,
        onClick: eS
      }), null != eC ? (0, r.jsx)(x.p, {
        containerClassName: B.cardImageContainer,
        foregroundImageClassName: B.cardImage,
        cardImage: eC,
        altText: ei.name,
        shape: "custom",
        backgroundImageClassName: B.cardBackgroundImage,
        cardBackgroundImage: eb
      }) : (0, r.jsx)("div", {
        className: B.ticketIconContainer,
        children: (0, r.jsx)(d.Prq, {
          color: "white",
          size: "custom",
          height: q,
          width: q,
          className: B.ticketIcon
        })
      }), 2 !== K ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: B.bottomGradient,
          style: {
            background: ev
          }
        }), (0, r.jsxs)("div", {
          className: B.details,
          children: [(0, r.jsx)("div", {
            className: B.titleContainer,
            children: (0, r.jsx)(_.Text, {
              color: "always-white",
              variant: "text-md/medium",
              lineClamp: 1,
              children: ei.name
            })
          }), (0, r.jsxs)("div", {
            className: B.descriptionContainer,
            children: [null != em && (0, r.jsx)("img", {
              src: em.toString(),
              alt: eh,
              className: B.iconAsset
            }), (0, r.jsx)(_.Text, {
              variant: "text-md/bold",
              color: "always-white",
              lineClamp: 1,
              children: (0, I.T4)(null != (b = null == (o = ei.price) ? true : o.amount) ? b : 0, null != (P = null == (s = ei.price) ? true : s.currency) ? P : Z.pK.USD)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: B.buttonHover,
          children: (0, r.jsxs)(d.hE2, {
            wrap: false,
            fullWidth: true,
            children: [(0, r.jsx)(d.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), e_(U.rZ.BUY_BUTTON), (0, D.P)(ei, {
                  isGift: false
                }, {
                  analyticsLocations: [h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON]
                })
              },
              text: F.intl.format(F.t.Xp5WTn, {
                price: (0, I.T4)(null != (w = null == (c = ei.price) ? true : c.amount) ? w : 0, null != (j = null == (p = ei.price) ? true : p.currency) ? j : Z.pK.USD)
              }),
              fullWidth: true
            }), (0, r.jsx)(L.Z, {
              onGift: e => {
                e.stopPropagation(), e_(U.rZ.GIFT_BUTTON), (0, D.P)(ei, {
                  isGift: true
                }, {
                  analyticsLocations: [h.Z.SLAYER_STOREFRONT_CARD_GIFT_BUTTON]
                })
              }
            })]
          })
        })]
      }) : null]
    })
  })
}

function en(e) {
  var {
    variant: t = 0
  } = e, n = K(e, ["variant"]);
  let [o, a] = i.useState(false), s = (0, P.Z)(n.skuId, o), c = i.useRef(null), u = i.useCallback(e => {
    a(e)
  }, []), d = i.useMemo(() => l()(B.card, {
    [B.cardSmall]: 0 === t,
    [B.cardMedium]: 1 === t,
    [B.cardEmbedded]: 2 === t
  }, n.className), [t, n.className]);
  return (0, r.jsx)(p.$, {
    innerRef: c,
    onChange: u,
    threshold: 0,
    children: (0, r.jsx)("div", {
      ref: c,
      children: s ? (0, r.jsx)(et, W(H({}, n), {
        variant: t,
        className: d,
        isVisible: o
      })) : (0, r.jsx)(j.Z, {
        className: d
      })
    })
  })
}