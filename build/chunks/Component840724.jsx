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
  Chunk164670 = require("./164670.js"),
  Chunk590961 = require("./590961.jsx"),
  Chunk210218 = require("./210218.js"),
  Chunk980728 = require("./980728.js"),
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
let B = 80,
  F = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  V = 30,
  H = 3;
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
      nuxGraphic: (0, R.c)(t),
      onClick: i
    })
  })
}

function K(e) {
  var t, n, a, s, c, b, R, Y, K, z;
  let {
    positionInSection: q,
    applicationId: Q,
    skuId: X,
    variant: J = 0,
    guildId: $,
    onClick: ee,
    className: et,
    analyticsLocations: en
  } = e, er = i.useRef(null), ei = (0, f.e7)([v.Z], () => v.Z.get(X)), ea = (0, f.e7)([O.Z], () => (0, d.wjy)(O.Z.theme)), eo = (0, f.e7)([m.Z], () => m.Z.useReducedMotion), {
    isHoveringOrFocusing: es
  } = (0, y.Z)(er), el = (0, A.oR)(), {
    analyticsLocations: ec
  } = (0, g.ZP)(null != en ? en : []), eu = i.useRef({
    positionInSection: q,
    analyticsLocations: ec
  }), {
    handleCardHover: ed,
    handleCardUnhover: ef
  } = (0, L.A)(X, el, q, ec), {
    handleCardVisibilityChange: ep
  } = (0, j.X)(X, el, q, ec), e_ = i.useCallback(e => {
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
    S.default.track(k.rMx.SLAYER_STOREFRONT_CARD_ELEMENT_CLICKED, {
      slayer_storefront_session_id: r,
      sku_id: X,
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
  }, [X, el]), {
    primaryIconAsset: em,
    primaryIconLabel: eh
  } = i.useMemo(() => (0, T.FE)(ei, Q), [ei, Q]), eg = (0, f.e7)([C.Z], () => {
    var e, t;
    return null != $ && null != (t = null == (e = C.Z.getStorefrontState($)) ? true : e.activePage) ? t : 0
  }), eE = i.useMemo(() => {
    var e, t;
    if ((null == ei || null == (t = ei.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      r = Math.max(u()(ei.tenantMetadata.socialLayer.expiresAt).diff(n, "days"), 1);
    return r <= H ? G.intl.format(G.t.PWw4Vp, {
      days: r
    }) : null
  }, [null == ei || null == (n = ei.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), eb = (0, T.a7)(ei), [ey, eO] = (0, E.Cf)(null == eb ? true : eb.toString(), "#000000"), ev = i.useMemo(() => {
    let e = o()(ey).darken(1.5).alpha(.9).hex(),
      t = o()(ey).alpha(0).hex(),
      [n, r] = F[J];
    return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat(V + n, "%, ").concat(t, " ").concat(V + r, "%)")
  }, [ey, J]), eS = i.useCallback(() => {
    e_(M.rZ.WISHLIST_BUTTON)
  }, [e_]), eI = i.useCallback(() => {
    (0, P.eagerNavigateToSocialLayerStorefront)({
      guildId: $
    })
  }, [$]), eT = i.useCallback(e => {
    if (e_(M.rZ.CARD), null != ee) return void ee(e);
    null != $ && (0, N.Z)({
      guildId: $,
      pageIndex: eg,
      skuId: X,
      slug: null == ei ? true : ei.slug
    })
  }, [e_, $, X, ee, eg, null == ei ? true : ei.slug]);
  if (null == ei) return null;
  let eA = (0, T.Do)(ei);
  return (0, r.jsx)(p.$, {
    innerRef: er,
    onChange: ep,
    threshold: 0,
    children: (0, r.jsx)(d.tEY, {
      children: (0, r.jsxs)(_.kL8, {
        onClick: eT,
        onMouseDown: eI,
        onMouseEnter: ed,
        onMouseLeave: ef,
        className: l()(Z.card, {
          [Z.cardAnimation]: !eo && 2 !== J,
          [Z.cardDark]: ea,
          [ea ? Z.cardDarkHighlighted : Z.cardHighlighted]: es,
          [Z.cardSmall]: 0 === J,
          [Z.cardMedium]: 1 === J,
          [Z.cardEmbedded]: 2 === J
        }, et),
        ref: er,
        "aria-label": ei.name,
        children: [null != eE && (0, r.jsx)(_.IGR, {
          text: eE,
          disableColor: true,
          className: Z.badge
        }), (0, r.jsx)(W, {
          sku: ei,
          isCardHovered: es,
          onClick: eS
        }), null != eA ? (0, r.jsx)(D.p, {
          containerClassName: Z.cardImageContainer,
          foregroundImageClassName: Z.cardImage,
          cardImage: eA,
          altText: ei.name,
          shape: "custom",
          backgroundImageClassName: Z.cardBackgroundImage,
          cardBackgroundImage: eb
        }) : (0, r.jsx)("div", {
          className: Z.ticketIconContainer,
          children: (0, r.jsx)(d.Prq, {
            color: "white",
            size: "custom",
            height: B,
            width: B,
            className: Z.ticketIcon
          })
        }), 2 !== J ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: Z.bottomGradient,
            style: {
              background: ev
            }
          }), (0, r.jsxs)("div", {
            className: Z.details,
            children: [(0, r.jsx)("div", {
              className: Z.titleContainer,
              children: (0, r.jsx)(_.Text, {
                color: "always-white",
                variant: "text-md/medium",
                lineClamp: 1,
                children: ei.name
              })
            }), (0, r.jsxs)("div", {
              className: Z.descriptionContainer,
              children: [null != em && (0, r.jsx)("img", {
                src: em.toString(),
                alt: eh,
                className: Z.iconAsset
              }), (0, r.jsx)(_.Text, {
                variant: "text-md/bold",
                color: "always-white",
                lineClamp: 1,
                children: (0, I.T4)(null != (R = null == (a = ei.price) ? true : a.amount) ? R : 0, null != (Y = null == (s = ei.price) ? true : s.currency) ? Y : U.pK.USD)
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
                  e.stopPropagation(), e_(M.rZ.BUY_BUTTON), (0, w.P)(ei, {
                    isGift: false
                  }, {
                    analyticsLocations: [h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON]
                  })
                },
                text: G.intl.format(G.t.Xp5WTn, {
                  price: (0, I.T4)(null != (K = null == (c = ei.price) ? true : c.amount) ? K : 0, null != (z = null == (b = ei.price) ? true : b.currency) ? z : U.pK.USD)
                }),
                fullWidth: true
              }), (0, r.jsx)(x.Z, {
                onGift: e => {
                  e.stopPropagation(), e_(M.rZ.GIFT_BUTTON), (0, w.P)(ei, {
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