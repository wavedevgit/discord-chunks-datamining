/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => K,
  Z: () => Y
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
  Chunk210887 = require("./210887.js"),
  Chunk55563 = require("./55563.js"),
  Chunk626135 = require("./626135.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk164670 = require("./164670.js"),
  Chunk590961 = require("./590961.jsx"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk882508 = require("./882508.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk433386 = require("./433386.jsx"),
  Chunk655409 = require("./655409.js"),
  Chunk785873 = require("./785873.js"),
  Chunk181268 = require("./181268.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450433 = require("./450433.js");
let F = 80,
  V = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  H = 30;
var Y = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function W(e) {
  let {
    sku: t,
    isCardHovered: n,
    onClick: i
  } = e;
  return (0, r.jsx)("div", {
    className: Z.wishlistButtonContainer,
    children: (0, r.jsx)(b.s, {
      skuId: t.id,
      isCardHovered: n,
      nuxGraphic: (0, D.c)(t),
      onClick: i
    })
  })
}

function K(e) {
  var t, n, a, s, c, b, D, Y, K, z, q, X, Q, J, $, ee;
  let {
    positionInSection: et,
    applicationId: en,
    skuId: er,
    variant: ei = 0,
    guildId: ea,
    onClick: eo,
    className: es,
    analyticsLocations: el
  } = e, ec = i.useRef(null), eu = (0, f.e7)([v.Z], () => v.Z.get(er)), ed = (0, f.e7)([O.Z], () => (0, d.wjy)(O.Z.theme)), ef = (0, f.e7)([h.Z], () => h.Z.useReducedMotion), {
    isHoveringOrFocusing: e_
  } = (0, y.Z)(ec), ep = (0, N.oR)(), {
    analyticsLocations: eh
  } = (0, g.ZP)(null != el ? el : []), em = i.useRef({
    positionInSection: et,
    analyticsLocations: eh
  }), {
    handleCardHover: eg,
    handleCardUnhover: eE
  } = (0, M.A)(er, ep, et, eh), {
    handleCardVisibilityChange: eb
  } = (0, j.X)(er, ep, et, eh), ey = i.useCallback(e => {
    let {
      analyticsLocations: t,
      positionInSection: n
    } = em.current, {
      sessionId: r,
      guildId: i,
      pageIndex: a,
      pageTitle: o,
      section: s,
      sectionTitle: l
    } = ep;
    I.default.track(U.rMx.SLAYER_SHOP_CARD_ELEMENT_CLICKED, {
      slayer_shop_session_id: r,
      sku_id: er,
      guild_id: i,
      page_index: a,
      page_title: o,
      section: s,
      section_title: l,
      position_in_section: n,
      cta_type: e,
      location_stack: t
    })
  }, [er, ep]), {
    primaryIconAsset: eO,
    primaryIconLabel: ev
  } = i.useMemo(() => (0, C.FE)(eu, en), [eu, en]), eI = (0, f.e7)([R.Z], () => {
    var e, t;
    return null != ea && null != (t = null == (e = R.Z.getStorefrontState(ea)) ? true : e.activePage) ? t : 0
  }), eT = i.useMemo(() => {
    var e, t;
    if ((null == eu || null == (t = eu.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      r = u()(eu.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return r <= 1 ? B.intl.string(B.t.Bc13HF) : B.intl.format(B.t.Io7ozn, {
      days: r
    })
  }, [null == eu || null == (n = eu.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), eS = (null == eu || null == (s = eu.tenantMetadata) || null == (a = s.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (q = A.Z.toURLSafe((0, S._W)(en, null == eu ? true : eu.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? q : true, [eA, eC] = (0, E.Cf)(null == eS ? true : eS.toString(), "#000000"), eN = i.useMemo(() => {
    let e = o()(eA).darken(1.5).alpha(.9).hex(),
      t = o()(eA).alpha(0).hex(),
      [n, r] = V[ei];
    return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat(H + n, "%, ").concat(t, " ").concat(H + r, "%)")
  }, [eA, ei]), eR = i.useCallback(() => {
    ey(k.r.WISHLIST_BUTTON)
  }, [ey]), eP = i.useCallback(e => {
    if (ey(k.r.CARD), null != eo) return void eo(e);
    null != ea && (0, P.Z)({
      guildId: ea,
      pageIndex: eI,
      skuId: er,
      slug: null == eu ? true : eu.slug
    })
  }, [ey, ea, eI, er, null == eu ? true : eu.slug, eo]);
  if (null == eu) return null;
  let eD = (null == (b = eu.tenantMetadata) || null == (c = b.socialLayer) ? true : c.cardImageAssetId) != null && null != (X = A.Z.toURLSafe((0, S._W)(en, eu.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? X : true;
  return (0, r.jsx)(_.$, {
    innerRef: ec,
    onChange: eb,
    threshold: 0,
    children: (0, r.jsx)(d.tEY, {
      children: (0, r.jsxs)(p.kL8, {
        onClick: eP,
        onMouseEnter: eg,
        onMouseLeave: eE,
        className: l()(Z.card, {
          [Z.cardAnimation]: !ef && 2 !== ei,
          [Z.cardDark]: ed,
          [ed ? Z.cardDarkHighlighted : Z.cardHighlighted]: e_,
          [Z.cardSmall]: 0 === ei,
          [Z.cardMedium]: 1 === ei,
          [Z.cardEmbedded]: 2 === ei
        }, es),
        ref: ec,
        "aria-label": eu.name,
        children: [null != eT && (0, r.jsx)(p.IGR, {
          text: eT,
          disableColor: true,
          className: Z.badge
        }), (0, r.jsx)(W, {
          sku: eu,
          isCardHovered: e_,
          onClick: eR
        }), null != eD ? (0, r.jsx)(L.p, {
          containerClassName: Z.cardImageContainer,
          foregroundImageClassName: Z.cardImage,
          cardImage: eD,
          altText: eu.name,
          shape: "custom",
          backgroundImageClassName: Z.cardBackgroundImage,
          cardBackgroundImage: eS
        }) : (0, r.jsx)("div", {
          className: Z.ticketIconContainer,
          children: (0, r.jsx)(d.Prq, {
            color: "white",
            size: "custom",
            height: F,
            width: F,
            className: Z.ticketIcon
          })
        }), 2 !== ei ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: Z.bottomGradient,
            style: {
              background: eN
            }
          }), (0, r.jsxs)("div", {
            className: Z.details,
            children: [(0, r.jsx)("div", {
              className: Z.titleContainer,
              children: (0, r.jsx)(p.Text, {
                color: "always-white",
                variant: "text-md/medium",
                lineClamp: 1,
                children: eu.name
              })
            }), (0, r.jsxs)("div", {
              className: Z.descriptionContainer,
              children: [null != eO && (0, r.jsx)("img", {
                src: eO.toString(),
                alt: ev,
                className: Z.iconAsset
              }), (0, r.jsx)(p.Text, {
                variant: "text-md/bold",
                color: "always-white",
                lineClamp: 1,
                children: (0, T.T4)(null != (Q = null == (D = eu.price) ? true : D.amount) ? Q : 0, null != (J = null == (Y = eu.price) ? true : Y.currency) ? J : G.pK.USD)
              })]
            })]
          }), (0, r.jsx)("div", {
            className: Z.buttonHover,
            children: (0, r.jsxs)(d.hE2, {
              wrap: false,
              fullWidth: true,
              children: [(0, r.jsx)(d.zxk, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation(), ey(k.r.BUY_BUTTON), (0, w.P)(eu, {
                    isGift: false
                  }, {
                    analyticsLocations: [m.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON]
                  })
                },
                text: B.intl.format(B.t.Xp5WTn, {
                  price: (0, T.T4)(null != ($ = null == (K = eu.price) ? true : K.amount) ? $ : 0, null != (ee = null == (z = eu.price) ? true : z.currency) ? ee : G.pK.USD)
                }),
                fullWidth: true
              }), (0, r.jsx)(x.Z, {
                onGift: e => {
                  e.stopPropagation(), ey(k.r.GIFT_BUTTON), (0, w.P)(eu, {
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