/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => z,
  Z: () => W
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
  H = 30,
  Y = 3;
var W = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function K(e) {
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

function z(e) {
  var t, n, a, s, c, b, w, W, z, q, Q, X, J, $, ee, et;
  let {
    positionInSection: en,
    applicationId: er,
    skuId: ei,
    variant: ea = 0,
    guildId: eo,
    onClick: es,
    className: el,
    analyticsLocations: ec
  } = e, eu = i.useRef(null), ed = (0, f.e7)([v.Z], () => v.Z.get(ei)), ef = (0, f.e7)([O.Z], () => (0, d.wjy)(O.Z.theme)), ep = (0, f.e7)([m.Z], () => m.Z.useReducedMotion), {
    isHoveringOrFocusing: e_
  } = (0, y.Z)(eu), em = (0, N.oR)(), {
    analyticsLocations: eh
  } = (0, g.ZP)(null != ec ? ec : []), eg = i.useRef({
    positionInSection: en,
    analyticsLocations: eh
  }), {
    handleCardHover: eE,
    handleCardUnhover: eb
  } = (0, j.A)(ei, em, en, eh), {
    handleCardVisibilityChange: ey
  } = (0, M.X)(ei, em, en, eh), eO = i.useCallback(e => {
    let {
      analyticsLocations: t,
      positionInSection: n
    } = eg.current, {
      sessionId: r,
      guildId: i,
      pageIndex: a,
      pageTitle: o,
      pageSection: s,
      pageSectionTitle: l,
      isUserGuildMember: c,
      pageHasLeaderboard: u
    } = em;
    S.default.track(U.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
      slayer_storefront_session_id: r,
      sku_id: ei,
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
  }, [ei, em]), {
    primaryIconAsset: ev,
    primaryIconLabel: eS
  } = i.useMemo(() => (0, C.FE)(ed, er), [ed, er]), eI = (0, f.e7)([P.Z], () => {
    var e, t;
    return null != eo && null != (t = null == (e = P.Z.getStorefrontState(eo)) ? true : e.activePage) ? t : 0
  }), eT = i.useMemo(() => {
    var e, t;
    if ((null == ed || null == (t = ed.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      r = Math.max(u()(ed.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
    return r <= Y ? Z.intl.format(Z.t.PWw4Vp, {
      days: r
    }) : null
  }, [null == ed || null == (n = ed.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), eA = (null == ed || null == (s = ed.tenantMetadata) || null == (a = s.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (Q = A.Z.toURLSafe((0, T._W)(er, null == ed ? true : ed.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? Q : true, [eC, eN] = (0, E.Cf)(null == eA ? true : eA.toString(), "#000000"), eP = i.useMemo(() => {
    let e = o()(eC).darken(1.5).alpha(.9).hex(),
      t = o()(eC).alpha(0).hex(),
      [n, r] = V[ea];
    return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat(H + n, "%, ").concat(t, " ").concat(H + r, "%)")
  }, [eC, ea]), eR = i.useCallback(() => {
    eO(k.rZ.WISHLIST_BUTTON)
  }, [eO]), ew = i.useCallback(e => {
    if (eO(k.rZ.CARD), null != es) return void es(e);
    null != eo && (0, R.Z)({
      guildId: eo,
      pageIndex: eI,
      skuId: ei,
      slug: null == ed ? true : ed.slug
    })
  }, [eO, eo, eI, ei, null == ed ? true : ed.slug, es]);
  if (null == ed) return null;
  let eD = (null == (b = ed.tenantMetadata) || null == (c = b.socialLayer) ? true : c.cardImageAssetId) != null && null != (X = A.Z.toURLSafe((0, T._W)(er, ed.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? X : true;
  return (0, r.jsx)(p.$, {
    innerRef: eu,
    onChange: ey,
    threshold: 0,
    children: (0, r.jsx)(d.tEY, {
      children: (0, r.jsxs)(_.kL8, {
        onClick: ew,
        onMouseEnter: eE,
        onMouseLeave: eb,
        className: l()(B.card, {
          [B.cardAnimation]: !ep && 2 !== ea,
          [B.cardDark]: ef,
          [ef ? B.cardDarkHighlighted : B.cardHighlighted]: e_,
          [B.cardSmall]: 0 === ea,
          [B.cardMedium]: 1 === ea,
          [B.cardEmbedded]: 2 === ea
        }, el),
        ref: eu,
        "aria-label": ed.name,
        children: [null != eT && (0, r.jsx)(_.IGR, {
          text: eT,
          disableColor: true,
          className: B.badge
        }), (0, r.jsx)(K, {
          sku: ed,
          isCardHovered: e_,
          onClick: eR
        }), null != eD ? (0, r.jsx)(x.p, {
          containerClassName: B.cardImageContainer,
          foregroundImageClassName: B.cardImage,
          cardImage: eD,
          altText: ed.name,
          shape: "custom",
          backgroundImageClassName: B.cardBackgroundImage,
          cardBackgroundImage: eA
        }) : (0, r.jsx)("div", {
          className: B.ticketIconContainer,
          children: (0, r.jsx)(d.Prq, {
            color: "white",
            size: "custom",
            height: F,
            width: F,
            className: B.ticketIcon
          })
        }), 2 !== ea ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: B.bottomGradient,
            style: {
              background: eP
            }
          }), (0, r.jsxs)("div", {
            className: B.details,
            children: [(0, r.jsx)("div", {
              className: B.titleContainer,
              children: (0, r.jsx)(_.Text, {
                color: "always-white",
                variant: "text-md/medium",
                lineClamp: 1,
                children: ed.name
              })
            }), (0, r.jsxs)("div", {
              className: B.descriptionContainer,
              children: [null != ev && (0, r.jsx)("img", {
                src: ev.toString(),
                alt: eS,
                className: B.iconAsset
              }), (0, r.jsx)(_.Text, {
                variant: "text-md/bold",
                color: "always-white",
                lineClamp: 1,
                children: (0, I.T4)(null != (J = null == (w = ed.price) ? true : w.amount) ? J : 0, null != ($ = null == (W = ed.price) ? true : W.currency) ? $ : G.pK.USD)
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
                  e.stopPropagation(), eO(k.rZ.BUY_BUTTON), (0, D.P)(ed, {
                    isGift: false
                  }, {
                    analyticsLocations: [h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON]
                  })
                },
                text: Z.intl.format(Z.t.Xp5WTn, {
                  price: (0, I.T4)(null != (ee = null == (z = ed.price) ? true : z.amount) ? ee : 0, null != (et = null == (q = ed.price) ? true : q.currency) ? et : G.pK.USD)
                }),
                fullWidth: true
              }), (0, r.jsx)(L.Z, {
                onGift: e => {
                  e.stopPropagation(), eO(k.rZ.GIFT_BUTTON), (0, D.P)(ed, {
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
  })
}