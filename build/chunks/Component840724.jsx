/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => G,
  Z: () => k
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
  Chunk220082 = require("./220082.js"),
  Chunk143941 = require("./143941.jsx"),
  Chunk104505 = require("./104505.js"),
  Chunk703656 = require("./703656.js"),
  Chunk210887 = require("./210887.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk164670 = require("./164670.js"),
  Chunk210218 = require("./210218.js"),
  Chunk882508 = require("./882508.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk433386 = require("./433386.jsx"),
  Chunk981631 = require("./981631.js"),
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
  j = 30;
var k = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function U(e) {
  let {
    sku: t,
    isCardHovered: n
  } = e;
  return (0, r.jsx)("div", {
    className: x.wishlistButtonContainer,
    children: (0, r.jsx)(m.s, {
      skuId: t.id,
      isCardHovered: n,
      nuxGraphic: (0, A.c)(t)
    })
  })
}

function G(e) {
  var t, n, a, s, c, m, A, k, G, B, Z, F, V, H, Y, W;
  let {
    applicationId: K,
    skuId: z,
    variant: q = 0,
    guildId: X,
    onClick: Q
  } = e, J = i.useRef(null), $ = (0, f.e7)([y.Z], () => y.Z.get(z)), ee = (0, f.e7)([b.Z], () => (0, d.wjy)(b.Z.theme)), et = (0, f.e7)([p.Z], () => p.Z.useReducedMotion), {
    isHoveringOrFocusing: en
  } = (0, g.Z)(J), {
    primaryIconAsset: er,
    primaryIconLabel: ei
  } = i.useMemo(() => (0, T.FE)($, K), [$, K]), ea = (0, f.e7)([S.Z], () => {
    var e, t;
    return null != X && null != (t = null == (e = S.Z.getStorefrontState(X)) ? true : e.activePage) ? t : 0
  }), eo = i.useMemo(() => {
    var e, t;
    if ((null == $ || null == (t = $.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      r = u()($.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return r <= 1 ? D.intl.string(D.t.Bc13HF) : D.intl.format(D.t.Io7ozn, {
      days: r
    })
  }, [null == $ || null == (n = $.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), es = (null == $ || null == (s = $.tenantMetadata) || null == (a = s.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (Z = I.Z.toURLSafe((0, v._W)(K, null == $ ? true : $.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? Z : true, [el, ec] = (0, h.Cf)(null == es ? true : es.toString(), "#000000"), eu = i.useMemo(() => {
    let e = o()(el).darken(1.5).alpha(.9).hex(),
      t = o()(el).alpha(0).hex(),
      [n, r] = M[q];
    return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat(j + n, "%, ").concat(t, " ").concat(j + r, "%)")
  }, [el, q]);
  if (null == $) return null;
  let ed = (null == (m = $.tenantMetadata) || null == (c = m.socialLayer) ? true : c.cardImageAssetId) != null && null != (F = I.Z.toURLSafe((0, v._W)(K, $.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? F : true;
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(_.kL8, {
      onClick: null != Q ? Q : () => {
        null != X && (0, E.uL)(P.Z5c.CHANNELS_GAME_SHOP(X, ea, z, $.slug))
      },
      className: l()(x.card, {
        [x.cardAnimation]: !et && 2 !== q,
        [x.cardDark]: ee,
        [ee ? x.cardDarkHighlighted : x.cardHighlighted]: en,
        [x.cardSmall]: 0 === q,
        [x.cardMedium]: 1 === q,
        [x.cardEmbedded]: 2 === q
      }),
      ref: J,
      "aria-label": $.name,
      children: [null != eo && (0, r.jsx)(_.IGR, {
        text: eo,
        disableColor: true,
        className: x.badge
      }), (0, r.jsx)(U, {
        sku: $,
        isCardHovered: en
      }), null != ed ? (0, r.jsx)(N.p, {
        containerClassName: x.cardImageContainer,
        foregroundImageClassName: x.cardImage,
        cardImage: ed,
        altText: $.name,
        shape: "custom",
        backgroundImageClassName: x.cardBackgroundImage,
        cardBackgroundImage: es
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
            background: eu
          }
        }), (0, r.jsxs)("div", {
          className: x.details,
          children: [(0, r.jsx)("div", {
            className: x.titleContainer,
            children: (0, r.jsx)(_.Text, {
              color: "always-white",
              variant: "text-md/bold",
              lineClamp: 1,
              children: $.name
            })
          }), (0, r.jsxs)("div", {
            className: x.descriptionContainer,
            children: [null != er && (0, r.jsx)("img", {
              src: er.toString(),
              alt: ei,
              className: x.iconAsset
            }), (0, r.jsx)(_.Text, {
              variant: "text-md/semibold",
              color: "always-white",
              lineClamp: 1,
              children: (0, O.T4)(null != (V = null == (A = $.price) ? true : A.amount) ? V : 0, null != (H = null == (k = $.price) ? true : k.currency) ? H : w.pK.USD)
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
                e.stopPropagation(), (0, C.P)($, {
                  isGift: false
                })
              },
              text: D.intl.format(D.t.Xp5WTn, {
                price: (0, O.T4)(null != (Y = null == (G = $.price) ? true : G.amount) ? Y : 0, null != (W = null == (B = $.price) ? true : B.currency) ? W : w.pK.USD)
              }),
              fullWidth: true
            }), (0, r.jsx)(R.Z, {
              onGift: e => {
                e.stopPropagation(), (0, C.P)($, {
                  isGift: true
                })
              }
            })]
          })
        })]
      }) : null]
    })
  })
}