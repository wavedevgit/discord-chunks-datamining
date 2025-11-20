/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => H,
  Z: () => F
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
  Chunk181268 = require("./181268.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450433 = require("./450433.js");
let G = 80,
  B = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  Z = 30;
var F = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function V(e) {
  let {
    sku: t,
    isCardHovered: n,
    onClick: i
  } = e;
  return (0, r.jsx)("div", {
    className: U.wishlistButtonContainer,
    children: (0, r.jsx)(E.s, {
      skuId: t.id,
      isCardHovered: n,
      nuxGraphic: (0, P.c)(t),
      onClick: i
    })
  })
}

function H(e) {
  var t, n, a, s, c, E, P, F, H, Y, W, K, z, q, X, Q;
  let {
    positionInSection: J,
    applicationId: $,
    skuId: ee,
    variant: et = 0,
    guildId: en,
    onClick: er,
    className: ei,
    analyticsLocations: ea
  } = e, eo = i.useRef(null), es = (0, f.e7)([O.Z], () => O.Z.get(ee)), el = (0, f.e7)([y.Z], () => (0, d.wjy)(y.Z.theme)), ec = (0, f.e7)([p.Z], () => p.Z.useReducedMotion), {
    isHoveringOrFocusing: eu
  } = (0, b.Z)(eo), ed = (0, C.oR)(), {
    analyticsLocations: ef
  } = (0, m.ZP)(null != ea ? ea : []), e_ = i.useRef({
    positionInSection: J,
    analyticsLocations: ef
  }), ep = i.useCallback(e => {
    let {
      analyticsLocations: t,
      positionInSection: n
    } = e_.current, {
      sessionId: r,
      guildId: i,
      pageIndex: a,
      pageTitle: o,
      section: s,
      sectionTitle: l
    } = ed;
    v.default.track(M.rMx.SLAYER_SHOP_CARD_ELEMENT_CLICKED, {
      slayer_shop_session_id: r,
      sku_id: ee,
      guild_id: i,
      page_index: a,
      page_title: o,
      section: s,
      section_title: l,
      position_in_section: n,
      cta_type: e,
      location_stack: t
    })
  }, [ee, ed]), {
    primaryIconAsset: eh,
    primaryIconLabel: em
  } = i.useMemo(() => (0, A.FE)(es, $), [es, $]), eg = (0, f.e7)([N.Z], () => {
    var e, t;
    return null != en && null != (t = null == (e = N.Z.getStorefrontState(en)) ? true : e.activePage) ? t : 0
  }), eE = i.useMemo(() => {
    var e, t;
    if ((null == es || null == (t = es.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      r = u()(es.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return r <= 1 ? j.intl.string(j.t.Bc13HF) : j.intl.format(j.t.Io7ozn, {
      days: r
    })
  }, [null == es || null == (n = es.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), eb = (null == es || null == (s = es.tenantMetadata) || null == (a = s.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (W = S.Z.toURLSafe((0, T._W)($, null == es ? true : es.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? W : true, [ey, eO] = (0, g.Cf)(null == eb ? true : eb.toString(), "#000000"), ev = i.useMemo(() => {
    let e = o()(ey).darken(1.5).alpha(.9).hex(),
      t = o()(ey).alpha(0).hex(),
      [n, r] = B[et];
    return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat(Z + n, "%, ").concat(t, " ").concat(Z + r, "%)")
  }, [ey, et]), eI = i.useCallback(() => {
    ep(x.rZ.WISHLIST_BUTTON)
  }, [ep]), eT = i.useCallback(e => {
    if (ep(x.rZ.CARD), null != er) return void er(e);
    null != en && (0, R.Z)({
      guildId: en,
      pageIndex: eg,
      skuId: ee,
      slug: null == es ? true : es.slug
    })
  }, [ep, en, eg, ee, null == es ? true : es.slug, er]);
  if (null == es) return null;
  let eS = (null == (E = es.tenantMetadata) || null == (c = E.socialLayer) ? true : c.cardImageAssetId) != null && null != (K = S.Z.toURLSafe((0, T._W)($, es.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? K : true;
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(_.kL8, {
      onClick: eT,
      className: l()(U.card, {
        [U.cardAnimation]: !ec && 2 !== et,
        [U.cardDark]: el,
        [el ? U.cardDarkHighlighted : U.cardHighlighted]: eu,
        [U.cardSmall]: 0 === et,
        [U.cardMedium]: 1 === et,
        [U.cardEmbedded]: 2 === et
      }, ei),
      ref: eo,
      "aria-label": es.name,
      children: [null != eE && (0, r.jsx)(_.IGR, {
        text: eE,
        disableColor: true,
        className: U.badge
      }), (0, r.jsx)(V, {
        sku: es,
        isCardHovered: eu,
        onClick: eI
      }), null != eS ? (0, r.jsx)(w.p, {
        containerClassName: U.cardImageContainer,
        foregroundImageClassName: U.cardImage,
        cardImage: eS,
        altText: es.name,
        shape: "custom",
        backgroundImageClassName: U.cardBackgroundImage,
        cardBackgroundImage: eb
      }) : (0, r.jsx)("div", {
        className: U.ticketIconContainer,
        children: (0, r.jsx)(d.Prq, {
          color: "white",
          size: "custom",
          height: G,
          width: G,
          className: U.ticketIcon
        })
      }), 2 !== et ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: U.bottomGradient,
          style: {
            background: ev
          }
        }), (0, r.jsxs)("div", {
          className: U.details,
          children: [(0, r.jsx)("div", {
            className: U.titleContainer,
            children: (0, r.jsx)(_.Text, {
              color: "always-white",
              variant: "text-md/medium",
              lineClamp: 1,
              children: es.name
            })
          }), (0, r.jsxs)("div", {
            className: U.descriptionContainer,
            children: [null != eh && (0, r.jsx)("img", {
              src: eh.toString(),
              alt: em,
              className: U.iconAsset
            }), (0, r.jsx)(_.Text, {
              variant: "text-md/bold",
              color: "always-white",
              lineClamp: 1,
              children: (0, I.T4)(null != (z = null == (P = es.price) ? true : P.amount) ? z : 0, null != (q = null == (F = es.price) ? true : F.currency) ? q : k.pK.USD)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: U.buttonHover,
          children: (0, r.jsxs)(d.hE2, {
            wrap: false,
            fullWidth: true,
            children: [(0, r.jsx)(d.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), ep(x.rZ.BUY_BUTTON), (0, D.P)(es, {
                  isGift: false
                }, {
                  analyticsLocations: [h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON]
                })
              },
              text: j.intl.format(j.t.Xp5WTn, {
                price: (0, I.T4)(null != (X = null == (H = es.price) ? true : H.amount) ? X : 0, null != (Q = null == (Y = es.price) ? true : Y.currency) ? Q : k.pK.USD)
              }),
              fullWidth: true
            }), (0, r.jsx)(L.Z, {
              onGift: e => {
                e.stopPropagation(), ep(x.rZ.GIFT_BUTTON), (0, D.P)(es, {
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