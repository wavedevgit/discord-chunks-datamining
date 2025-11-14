/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => G,
  Z: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk220082 = require("./220082.js"),
  Chunk143941 = require("./143941.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk210887 = require("./210887.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk164670 = require("./164670.js"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk882508 = require("./882508.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk433386 = require("./433386.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450433 = require("./450433.js");
let L = 80,
  M = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  k = 30;
var j = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function U(e) {
  let {
    sku: t,
    isCardHovered: n
  } = e;
  return (0, r.jsx)("div", {
    className: x.wishlistButtonContainer,
    children: (0, r.jsx)(g.s, {
      skuId: t.id,
      isCardHovered: n,
      nuxGraphic: (0, C.c)(t)
    })
  })
}

function G(e) {
  var t, n, a, s, c, g, C, j, G, B, Z, F, V, H, Y, W;
  let {
    applicationId: K,
    skuId: z,
    variant: q = 0,
    guildId: X,
    onClick: Q,
    className: J
  } = e, $ = i.useRef(null), ee = (0, f.e7)([y.Z], () => y.Z.get(z)), et = (0, f.e7)([b.Z], () => (0, d.wjy)(b.Z.theme)), en = (0, f.e7)([p.Z], () => p.Z.useReducedMotion), {
    isHoveringOrFocusing: er
  } = (0, E.Z)($), {
    primaryIconAsset: ei,
    primaryIconLabel: ea
  } = i.useMemo(() => (0, T.FE)(ee, K), [ee, K]), eo = (0, f.e7)([S.Z], () => {
    var e, t;
    return null != X && null != (t = null == (e = S.Z.getStorefrontState(X)) ? true : e.activePage) ? t : 0
  }), es = i.useMemo(() => {
    var e, t;
    if ((null == ee || null == (t = ee.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      r = u()(ee.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return r <= 1 ? w.intl.string(w.t.Bc13HF) : w.intl.format(w.t.Io7ozn, {
      days: r
    })
  }, [null == ee || null == (n = ee.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), el = (null == ee || null == (s = ee.tenantMetadata) || null == (a = s.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (Z = I.Z.toURLSafe((0, v._W)(K, null == ee ? true : ee.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? Z : true, [ec, eu] = (0, m.Cf)(null == el ? true : el.toString(), "#000000"), ed = i.useMemo(() => {
    let e = o()(ec).darken(1.5).alpha(.9).hex(),
      t = o()(ec).alpha(0).hex(),
      [n, r] = M[q];
    return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat(k + n, "%, ").concat(t, " ").concat(k + r, "%)")
  }, [ec, q]);
  if (null == ee) return null;
  let ef = (null == (g = ee.tenantMetadata) || null == (c = g.socialLayer) ? true : c.cardImageAssetId) != null && null != (F = I.Z.toURLSafe((0, v._W)(K, ee.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? F : true;
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(_.kL8, {
      onClick: null != Q ? Q : () => {
        null != X && (0, A.Z)({
          guildId: X,
          pageIndex: eo,
          skuId: z,
          slug: ee.slug
        })
      },
      className: l()(x.card, {
        [x.cardAnimation]: !en && 2 !== q,
        [x.cardDark]: et,
        [et ? x.cardDarkHighlighted : x.cardHighlighted]: er,
        [x.cardSmall]: 0 === q,
        [x.cardMedium]: 1 === q,
        [x.cardEmbedded]: 2 === q
      }, J),
      ref: $,
      "aria-label": ee.name,
      children: [null != es && (0, r.jsx)(_.IGR, {
        text: es,
        disableColor: true,
        className: x.badge
      }), (0, r.jsx)(U, {
        sku: ee,
        isCardHovered: er
      }), null != ef ? (0, r.jsx)(R.p, {
        containerClassName: x.cardImageContainer,
        foregroundImageClassName: x.cardImage,
        cardImage: ef,
        altText: ee.name,
        shape: "custom",
        backgroundImageClassName: x.cardBackgroundImage,
        cardBackgroundImage: el
      }) : (0, r.jsx)("div", {
        className: x.ticketIconContainer,
        children: (0, r.jsx)(d.Prq, {
          color: "white",
          size: "custom",
          height: L,
          width: L,
          className: x.ticketIcon
        })
      }), 2 !== q ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: x.bottomGradient,
          style: {
            background: ed
          }
        }), (0, r.jsxs)("div", {
          className: x.details,
          children: [(0, r.jsx)("div", {
            className: x.titleContainer,
            children: (0, r.jsx)(_.Text, {
              color: "always-white",
              variant: "text-md/bold",
              lineClamp: 1,
              children: ee.name
            })
          }), (0, r.jsxs)("div", {
            className: x.descriptionContainer,
            children: [null != ei && (0, r.jsx)("img", {
              src: ei.toString(),
              alt: ea,
              className: x.iconAsset
            }), (0, r.jsx)(_.Text, {
              variant: "text-md/semibold",
              color: "always-white",
              lineClamp: 1,
              children: (0, O.T4)(null != (V = null == (C = ee.price) ? true : C.amount) ? V : 0, null != (H = null == (j = ee.price) ? true : j.currency) ? H : D.pK.USD)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: x.buttonHover,
          children: (0, r.jsxs)(d.hE2, {
            wrap: false,
            fullWidth: true,
            children: [(0, r.jsx)(d.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), (0, N.P)(ee, {
                  isGift: false
                }, {
                  analyticsLocations: [h.Z.SLAYER_STOREFRONT_CARD_PURCHASE_BUTTON]
                })
              },
              text: w.intl.format(w.t.Xp5WTn, {
                price: (0, O.T4)(null != (Y = null == (G = ee.price) ? true : G.amount) ? Y : 0, null != (W = null == (B = ee.price) ? true : B.currency) ? W : D.pK.USD)
              }),
              fullWidth: true
            }), (0, r.jsx)(P.Z, {
              onGift: e => {
                e.stopPropagation(), (0, N.P)(ee, {
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