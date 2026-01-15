/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => X,
  Z: () => q
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
let Y = 80,
  W = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  K = 30,
  z = 3;
var q = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function Q(e) {
  let {
    guildId: t,
    sku: n,
    isCardHovered: a,
    trackCardClick: o,
    variant: s,
    analyticsLocations: c,
    analyticsContext: u
  } = e, f = i.useCallback(e => {
    e.stopPropagation(), null != n && null != t && (o(Z.rZ.FORWARD_BUTTON), (0, x.b)({
      sku: n,
      guildId: t,
      analyticsContext: u,
      analyticsLocations: c,
      source: "social-layer-storefront-embed"
    }))
  }, [n, t, o, u, c]), p = i.useCallback(() => {
    o(Z.rZ.WISHLIST_BUTTON)
  }, [o]), _ = i.useMemo(() => l()(H.cardButtonContainer, {
    [H.cardButtonContainerHovered]: a
  }), [a]);
  return (0, r.jsxs)("div", {
    className: H.cardButtonsContainer,
    children: [2 === s && (0, r.jsx)(d.P3F, {
      className: l()(_, H.forwardButton),
      onClick: f,
      children: (0, r.jsx)(O.Z, {
        size: "refresh_sm",
        color: "currentColor"
      })
    }), (0, r.jsx)(b.s, {
      skuId: n.id,
      isCardHovered: a,
      nuxGraphic: (0, D.c)(n),
      onClick: p,
      className: l()(_, H.wishlistButton)
    })]
  })
}

function X(e) {
  var t, n, a, s, c, b, O, D, x, q;
  let {
    positionInSection: X,
    applicationId: J,
    skuId: $,
    variant: ee = 0,
    guildId: et,
    onClick: en,
    className: er,
    analyticsLocations: ei
  } = e, ea = i.useRef(null), eo = (0, f.e7)([S.Z], () => S.Z.get($)), es = (0, f.e7)([v.Z], () => (0, d.wjy)(v.Z.theme)), el = (0, f.e7)([h.Z], () => h.Z.useReducedMotion), {
    isHoveringOrFocusing: ec
  } = (0, y.Z)(ea), eu = (0, A.oR)(), {
    analyticsLocations: ed
  } = (0, g.ZP)(null != ei ? ei : []), ef = i.useRef({
    positionInSection: X,
    analyticsLocations: ed
  }), [ep, e_] = i.useState(false), eh = (0, w.Z)($, ep), em = i.useCallback(e => {
    e_(e)
  }, []), eg = i.useMemo(() => l()(H.card, {
    [H.cardSmall]: 0 === ee,
    [H.cardMedium]: 1 === ee,
    [H.cardEmbedded]: 2 === ee
  }), [ee]), {
    handleCardHover: eE,
    handleCardUnhover: eb
  } = (0, U.A)($, eu, X, ed), {
    handleCardVisibilityChange: ey
  } = (0, G.X)($, eu, X, ed);
  i.useEffect(() => {
    ey(ep)
  }, [ep]);
  let eO = i.useCallback(e => {
      let {
        analyticsLocations: t,
        positionInSection: n
      } = ef.current, {
        sessionId: r,
        guildId: i,
        pageIndex: a,
        pageTitle: o,
        pageSection: s,
        pageSectionTitle: l,
        isUserGuildMember: c,
        pageHasLeaderboard: u
      } = eu;
      I.default.track(F.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
        slayer_storefront_session_id: r,
        sku_id: $,
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
    }, [$, eu]),
    {
      primaryIconAsset: ev,
      primaryIconLabel: eS
    } = i.useMemo(() => (0, C.FE)(eo, J), [eo, J]),
    eI = (0, f.e7)([N.Z], () => {
      var e, t;
      return null != et && null != (t = null == (e = N.Z.getStorefrontState(et)) ? true : e.activePage) ? t : 0
    }),
    eT = i.useMemo(() => {
      var e, t;
      if ((null == eo || null == (t = eo.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
      let n = u()(),
        r = Math.max(u()(eo.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
      return r <= z ? V.intl.format(V.t.PWw4Vp, {
        days: r
      }) : null
    }, [null == eo || null == (n = eo.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]),
    eC = (0, C.a7)(eo),
    [eA, eN] = (0, E.Cf)(null == eC ? true : eC.toString(), "#000000"),
    eP = i.useMemo(() => {
      let e = o()(eA).darken(1.5).alpha(.9).hex(),
        t = o()(eA).alpha(0).hex(),
        [n, r] = W[ee];
      return (0 !== n || 0 !== r) && eh ? "linear-gradient(to top, ".concat(e, " ").concat(K + n, "%, ").concat(t, " ").concat(K + r, "%)") : "none"
    }, [eA, ee, eh]),
    ew = i.useCallback(() => {
      (0, R.eagerNavigateToSocialLayerStorefront)({
        guildId: et
      })
    }, [et]),
    eR = i.useCallback(e => {
      if (eO(Z.rZ.CARD), null != en) return void en(e);
      null != et && (0, P.Z)({
        guildId: et,
        pageIndex: eI,
        skuId: $,
        slug: null == eo ? true : eo.slug
      })
    }, [eO, et, $, en, eI, null == eo ? true : eo.slug]);
  if (null == eo) return null;
  let eD = (0, C.Do)(eo);
  return (0, r.jsx)(p.$, {
    innerRef: ea,
    onChange: em,
    threshold: 0,
    children: (0, r.jsx)(d.tEY, {
      children: (0, r.jsxs)(_.kL8, {
        onClick: eR,
        onMouseDown: ew,
        onMouseEnter: eE,
        onMouseLeave: eb,
        className: l()(eg, {
          [H.cardAnimation]: !el && 2 !== ee,
          [H.cardDark]: es,
          [es ? H.cardDarkHighlighted : H.cardHighlighted]: ec,
          [H.cardNotLoaded]: !eh
        }, er),
        ref: ea,
        "aria-label": eo.name,
        children: [null != eT && (0, r.jsx)(_.IGR, {
          text: eT,
          disableColor: true,
          className: H.badge
        }), (0, r.jsx)(Q, {
          guildId: et,
          sku: eo,
          isCardHovered: ec,
          variant: ee,
          trackCardClick: eO,
          analyticsLocations: ed,
          analyticsContext: eu
        }), null != eD ? eh ? (0, r.jsx)(j.p, {
          containerClassName: H.cardImageContainer,
          foregroundImageClassName: H.cardImage,
          cardImage: eD,
          altText: eo.name,
          shape: "custom",
          backgroundImageClassName: H.cardBackgroundImage,
          cardBackgroundImage: eC
        }) : (0, r.jsx)(k.$, {}) : (0, r.jsx)("div", {
          className: H.ticketIconContainer,
          children: (0, r.jsx)(d.Prq, {
            color: "white",
            size: "custom",
            height: Y,
            width: Y,
            className: H.ticketIcon
          })
        }), 2 !== ee ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: H.bottomGradient,
            style: {
              background: eP
            }
          }), (0, r.jsxs)("div", {
            className: H.details,
            children: [(0, r.jsx)("div", {
              className: H.titleContainer,
              children: eh ? (0, r.jsx)(_.Text, {
                color: "always-white",
                variant: "text-md/medium",
                lineClamp: 1,
                children: eo.name
              }) : (0, r.jsx)(k.G, {})
            }), (0, r.jsx)("div", {
              className: H.descriptionContainer,
              children: eh ? (0, r.jsxs)(r.Fragment, {
                children: [null != ev && (0, r.jsx)("img", {
                  src: ev.toString(),
                  alt: eS,
                  className: H.iconAsset
                }), (0, r.jsx)(_.Text, {
                  variant: "text-md/bold",
                  color: "always-white",
                  lineClamp: 1,
                  children: (0, T.T4)(null != (O = null == (a = eo.price) ? true : a.amount) ? O : 0, null != (D = null == (s = eo.price) ? true : s.currency) ? D : B.pK.USD)
                })]
              }) : (0, r.jsx)(k.G, {})
            })]
          }), (0, r.jsx)("div", {
            className: H.buttonHover,
            children: (0, r.jsxs)(d.hE2, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(d.zxk, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation(), eO(Z.rZ.BUY_BUTTON), (0, L.P)(eo, {
                    isGift: false
                  }, {
                    analyticsLocations: [m.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON]
                  })
                },
                text: V.intl.format(V.t.Xp5WTn, {
                  price: (0, T.T4)(null != (x = null == (c = eo.price) ? true : c.amount) ? x : 0, null != (q = null == (b = eo.price) ? true : b.currency) ? q : B.pK.USD)
                }),
                fullWidth: true
              }), (0, r.jsx)(M.Z, {
                onGift: e => {
                  e.stopPropagation(), eO(Z.rZ.GIFT_BUTTON), (0, L.P)(eo, {
                    isGift: true
                  }, {
                    analyticsLocations: [m.Z.SLAYER_STOREFRONT_CARD_GIFT_BUTTON]
                  })
                }
              })]
            })
          })]
        }) : null]
      })
    })
  })
}