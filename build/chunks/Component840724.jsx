/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => ei,
  Zp: () => et
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk688619 = require("./688619.js"),
  o = require.n(Chunk688619),
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
  Chunk245216 = require("./245216.jsx"),
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
  Chunk813687 = require("./813687.jsx"),
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
  Chunk171532 = require("./171532.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function q(e, t) {
  if (null == e) return {};
  var n, r, i = Q(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Q(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let X = 80,
  J = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  $ = 30,
  ee = 3;
var et = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function en(e) {
  let {
    guildId: t,
    sku: n,
    isCardHovered: a,
    trackCardClick: o,
    variant: s
  } = e, c = i.useCallback(e => {
    e.stopPropagation(), null != n && null != t && (o(Z.rZ.FORWARD_BUTTON), (0, x.b)({
      sku: n,
      guildId: t,
      source: "social-layer-storefront-embed"
    }))
  }, [n, t, o]), u = i.useCallback(() => {
    o(Z.rZ.WISHLIST_BUTTON)
  }, [o]), f = i.useMemo(() => l()(H.cardButtonContainer, {
    [H.cardButtonContainerHovered]: a
  }), [a]);
  return (0, r.jsxs)("div", {
    className: H.cardButtonsContainer,
    children: [2 === s && (0, r.jsx)(d.P3F, {
      className: l()(f, H.forwardButton),
      onClick: c,
      children: (0, r.jsx)(O.Z, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }), (0, r.jsx)(b.s, {
      skuId: n.id,
      isCardHovered: a,
      nuxGraphic: (0, D.c)(n),
      onClick: u,
      className: l()(f, H.wishlistButton)
    })]
  })
}

function er(e) {
  var t, n, a, s, c, p, b, O, R, D;
  let {
    isVisible: x,
    positionInSection: k,
    applicationId: Y,
    skuId: W,
    variant: K = 0,
    guildId: z,
    onClick: q,
    className: Q,
    analyticsLocations: et
  } = e, er = i.useRef(null), ei = (0, f.e7)([S.Z], () => S.Z.get(W)), ea = (0, f.e7)([v.Z], () => (0, d.wjy)(v.Z.theme)), eo = (0, f.e7)([m.Z], () => m.Z.useReducedMotion), {
    isHoveringOrFocusing: es
  } = (0, y.Z)(er), el = (0, A.oR)(), {
    analyticsLocations: ec
  } = (0, g.ZP)(null != et ? et : []), eu = i.useRef({
    positionInSection: k,
    analyticsLocations: ec
  }), {
    handleCardHover: ed,
    handleCardUnhover: ef
  } = (0, U.A)(W, el, k, ec), {
    handleCardVisibilityChange: ep
  } = (0, G.X)(W, el, k, ec);
  i.useEffect(() => {
    ep(x)
  }, [x]);
  let e_ = i.useCallback(e => {
      let {
        analyticsLocations: t,
        positionInSection: n
      } = eu.current, {
        sessionId: r,
        guildId: i,
        pageIndex: a,
        pageTitle: o,
        pageSection: s,
        pageSectionTitle: l,
        isUserGuildMember: c,
        pageHasLeaderboard: u
      } = el;
      I.default.track(F.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
        slayer_storefront_session_id: r,
        sku_id: W,
        guild_id: i,
        page_index: a,
        page_title: o,
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
    } = i.useMemo(() => (0, C.FE)(ei, Y), [ei, Y]),
    eg = (0, f.e7)([N.Z], () => {
      var e, t;
      return null != z && null != (t = null == (e = N.Z.getStorefrontState(z)) ? true : e.activePage) ? t : 0
    }),
    eE = i.useMemo(() => {
      var e, t;
      if ((null == ei || null == (t = ei.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
      let n = u()(),
        r = Math.max(u()(ei.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
      return r <= ee ? V.intl.format(V.t.PWw4Vp, {
        days: r
      }) : null
    }, [null == ei || null == (n = ei.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]),
    eb = (0, C.a7)(ei),
    [ey, eO] = (0, E.Cf)(null == eb ? true : eb.toString(), "#000000"),
    ev = i.useMemo(() => {
      let e = o()(ey).darken(1.5).alpha(.9).hex(),
        t = o()(ey).alpha(0).hex(),
        [n, r] = J[K];
      return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat($ + n, "%, ").concat(t, " ").concat($ + r, "%)")
    }, [ey, K]),
    eS = i.useCallback(() => {
      (0, w.eagerNavigateToSocialLayerStorefront)({
        guildId: z
      })
    }, [z]),
    eI = i.useCallback(e => {
      if (e_(Z.rZ.CARD), null != q) return void q(e);
      null != z && (0, P.Z)({
        guildId: z,
        pageIndex: eg,
        skuId: W,
        slug: null == ei ? true : ei.slug
      })
    }, [e_, z, W, q, eg, null == ei ? true : ei.slug]);
  if (null == ei) return null;
  let eT = (0, C.Do)(ei);
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(_.kL8, {
      onClick: eI,
      onMouseDown: eS,
      onMouseEnter: ed,
      onMouseLeave: ef,
      className: l()({
        [H.cardAnimation]: !eo && 2 !== K,
        [H.cardDark]: ea,
        [ea ? H.cardDarkHighlighted : H.cardHighlighted]: es
      }, Q),
      ref: er,
      "aria-label": ei.name,
      children: [null != eE && (0, r.jsx)(_.IGR, {
        text: eE,
        disableColor: true,
        className: H.badge
      }), (0, r.jsx)(en, {
        guildId: z,
        sku: ei,
        isCardHovered: es,
        variant: K,
        trackCardClick: e_
      }), null != eT ? (0, r.jsx)(j.p, {
        containerClassName: H.cardImageContainer,
        foregroundImageClassName: H.cardImage,
        cardImage: eT,
        altText: ei.name,
        shape: "custom",
        backgroundImageClassName: H.cardBackgroundImage,
        cardBackgroundImage: eb
      }) : (0, r.jsx)("div", {
        className: H.ticketIconContainer,
        children: (0, r.jsx)(d.Prq, {
          color: "white",
          size: "custom",
          height: X,
          width: X,
          className: H.ticketIcon
        })
      }), 2 !== K ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: H.bottomGradient,
          style: {
            background: ev
          }
        }), (0, r.jsxs)("div", {
          className: H.details,
          children: [(0, r.jsx)("div", {
            className: H.titleContainer,
            children: (0, r.jsx)(_.Text, {
              color: "always-white",
              variant: "text-md/medium",
              lineClamp: 1,
              children: ei.name
            })
          }), (0, r.jsxs)("div", {
            className: H.descriptionContainer,
            children: [null != em && (0, r.jsx)("img", {
              src: em.toString(),
              alt: eh,
              className: H.iconAsset
            }), (0, r.jsx)(_.Text, {
              variant: "text-md/bold",
              color: "always-white",
              lineClamp: 1,
              children: (0, T.T4)(null != (b = null == (a = ei.price) ? true : a.amount) ? b : 0, null != (O = null == (s = ei.price) ? true : s.currency) ? O : B.pK.USD)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: H.buttonHover,
          children: (0, r.jsxs)(d.hE2, {
            wrap: false,
            fullWidth: true,
            children: [(0, r.jsx)(d.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), e_(Z.rZ.BUY_BUTTON), (0, L.P)(ei, {
                  isGift: false
                }, {
                  analyticsLocations: [h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON]
                })
              },
              text: V.intl.format(V.t.Xp5WTn, {
                price: (0, T.T4)(null != (R = null == (c = ei.price) ? true : c.amount) ? R : 0, null != (D = null == (p = ei.price) ? true : p.currency) ? D : B.pK.USD)
              }),
              fullWidth: true
            }), (0, r.jsx)(M.Z, {
              onGift: e => {
                e.stopPropagation(), e_(Z.rZ.GIFT_BUTTON), (0, L.P)(ei, {
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

function ei(e) {
  var {
    variant: t = 0
  } = e, n = q(e, ["variant"]);
  let [a, o] = i.useState(false), s = (0, R.Z)(n.skuId, a), c = i.useRef(null), u = i.useCallback(e => {
    o(e)
  }, []), d = i.useMemo(() => l()(H.card, {
    [H.cardSmall]: 0 === t,
    [H.cardMedium]: 1 === t,
    [H.cardEmbedded]: 2 === t
  }, n.className), [t, n.className]);
  return (0, r.jsx)(p.$, {
    innerRef: c,
    onChange: u,
    threshold: 0,
    children: (0, r.jsx)("div", {
      ref: c,
      className: l()({
        [H.cardContainer]: 2 === t
      }),
      children: s ? (0, r.jsx)(er, z(W({}, n), {
        variant: t,
        className: d,
        isVisible: a
      })) : (0, r.jsx)(k.Z, {
        className: d
      })
    })
  })
}