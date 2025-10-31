/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => k,
  Z: () => M
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
  Chunk594914 = require("./594914.jsx"),
  Chunk433386 = require("./433386.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450433 = require("./450433.js");
let D = 80,
  x = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  L = 30;
var M = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.LARGE = 2] = "LARGE", e[e.EMBEDDED = 3] = "EMBEDDED", e
}({});

function j(e) {
  let {
    sku: t,
    isCardHovered: n
  } = e;
  return (0, r.jsx)("div", {
    className: w.wishlistButtonContainer,
    children: (0, r.jsx)(m.s, {
      skuId: t.id,
      isCardHovered: n
    })
  })
}

function k(e) {
  var t, n, a, s, c, m, M, k, U, G, B, Z, F, V, H, Y;
  let {
    applicationId: W,
    skuId: K,
    variant: z = 0,
    guildId: q,
    onClick: X
  } = e, Q = i.useRef(null), J = (0, f.e7)([y.Z], () => y.Z.get(K)), $ = (0, f.e7)([b.Z], () => (0, d.wjy)(b.Z.theme)), ee = (0, f.e7)([p.Z], () => p.Z.useReducedMotion), {
    isHoveringOrFocusing: et
  } = (0, g.Z)(Q), {
    primaryIconAsset: en,
    primaryIconLabel: er
  } = i.useMemo(() => (0, T.FE)(J, W), [J, W]), ei = (0, f.e7)([S.Z], () => {
    var e, t;
    return null != q && null != (t = null == (e = S.Z.getStorefrontState(q)) ? true : e.activePage) ? t : 0
  }), ea = i.useMemo(() => {
    var e, t;
    if ((null == J || null == (t = J.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      r = u()(J.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return r <= 1 ? P.intl.string(P.t.Bc13HF) : P.intl.format(P.t.Io7ozn, {
      days: r
    })
  }, [null == J || null == (n = J.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), eo = (null == J || null == (s = J.tenantMetadata) || null == (a = s.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (B = I.Z.toURLSafe((0, v._W)(W, null == J ? true : J.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? B : true, [es, el] = (0, h.Cf)(null == eo ? true : eo.toString(), "#000000"), ec = i.useMemo(() => {
    let e = o()(es).darken(1.5).alpha(.9).hex(),
      t = o()(es).alpha(0).hex(),
      [n, r] = x[z];
    return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat(L + n, "%, ").concat(t, " ").concat(L + r, "%)")
  }, [es, z]);
  if (null == J) return null;
  let eu = (null == (m = J.tenantMetadata) || null == (c = m.socialLayer) ? true : c.cardImageAssetId) != null && null != (Z = I.Z.toURLSafe((0, v._W)(W, J.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? Z : true;
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(_.kL8, {
      onClick: null != X ? X : () => {
        null != q && (0, E.uL)(N.Z5c.CHANNELS_GAME_SHOP(q, ei, K, J.slug))
      },
      className: l()(w.card, {
        [w.cardAnimation]: !ee && 3 !== z,
        [w.cardDark]: $,
        [$ ? w.cardDarkHighlighted : w.cardHighlighted]: et,
        [w.cardLarge]: 2 === z,
        [w.cardMedium]: 1 === z,
        [w.cardEmbedded]: 3 === z
      }),
      ref: Q,
      "aria-label": J.name,
      children: [null != ea && (0, r.jsx)(_.IGR, {
        text: ea,
        disableColor: true,
        className: w.badge
      }), (0, r.jsx)(j, {
        sku: J,
        isCardHovered: et
      }), null != eu || null != eo ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: w.cardBackgroundImage,
          style: {
            backgroundImage: null != eo ? "url(".concat(eo.toString(), ")") : true
          }
        }), null != eu && (0, r.jsx)("img", {
          draggable: "false",
          src: eu.toString(),
          alt: J.name,
          className: w.cardImage
        })]
      }) : (0, r.jsx)("div", {
        className: w.ticketIconContainer,
        children: (0, r.jsx)(d.Prq, {
          color: "white",
          size: "custom",
          height: D,
          width: D,
          className: w.ticketIcon
        })
      }), 3 !== z ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: l()(w.bottomGradient, {
            [w.bottomGradientLarge]: 2 === z
          }),
          style: {
            background: ec
          }
        }), (0, r.jsxs)("div", {
          className: w.details,
          children: [(0, r.jsx)("div", {
            className: w.titleContainer,
            children: (0, r.jsx)(_.Text, {
              color: "always-white",
              variant: "text-md/bold",
              lineClamp: 1,
              children: J.name
            })
          }), (0, r.jsxs)("div", {
            className: w.descriptionContainer,
            children: [null != en && (0, r.jsx)("img", {
              src: en.toString(),
              alt: er,
              className: w.iconAsset
            }), (0, r.jsx)(_.Text, {
              variant: "text-md/semibold",
              color: "always-white",
              lineClamp: 1,
              children: (0, O.T4)(null != (F = null == (M = J.price) ? true : M.amount) ? F : 0, null != (V = null == (k = J.price) ? true : k.currency) ? V : R.pK.USD)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: w.buttonHover,
          children: (0, r.jsxs)(d.hE2, {
            wrap: false,
            fullWidth: true,
            children: [(0, r.jsx)(d.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), (0, A.P)(J, {
                  isGift: false
                })
              },
              text: P.intl.format(P.t.Xp5WTn, {
                price: (0, O.T4)(null != (H = null == (U = J.price) ? true : U.amount) ? H : 0, null != (Y = null == (G = J.price) ? true : G.currency) ? Y : R.pK.USD)
              }),
              fullWidth: true
            }), (0, r.jsx)(C.Z, {
              onGift: e => {
                e.stopPropagation(), (0, A.P)(J, {
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