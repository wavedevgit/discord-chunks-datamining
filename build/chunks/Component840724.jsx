/** Chunk was on web.js **/
/** chunk id: 840724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => U,
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
let x = 80,
  L = [
    [0, 30],
    [0, 30],
    [0, 20],
    [0, 0]
  ],
  M = 30;
var j = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.EMBEDDED = 2] = "EMBEDDED", e
}({});

function k(e) {
  let {
    sku: t,
    isCardHovered: n
  } = e;
  return (0, r.jsx)("div", {
    className: D.wishlistButtonContainer,
    children: (0, r.jsx)(m.s, {
      skuId: t.id,
      isCardHovered: n,
      nuxGraphic: (0, A.c)(t)
    })
  })
}

function U(e) {
  var t, n, a, s, c, m, A, j, U, G, B, Z, F, V, H, Y;
  let {
    applicationId: W,
    skuId: K,
    variant: z = 0,
    guildId: q,
    onClick: X
  } = e, Q = i.useRef(null), J = (0, f.e7)([b.Z], () => b.Z.get(K)), $ = (0, f.e7)([E.Z], () => (0, d.wjy)(E.Z.theme)), ee = (0, f.e7)([p.Z], () => p.Z.useReducedMotion), {
    isHoveringOrFocusing: et
  } = (0, g.Z)(Q), {
    primaryIconAsset: en,
    primaryIconLabel: er
  } = i.useMemo(() => (0, I.FE)(J, W), [J, W]), ei = (0, f.e7)([T.Z], () => {
    var e, t;
    return null != q && null != (t = null == (e = T.Z.getStorefrontState(q)) ? true : e.activePage) ? t : 0
  }), ea = i.useMemo(() => {
    var e, t;
    if ((null == J || null == (t = J.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      r = u()(J.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return r <= 1 ? w.intl.string(w.t.Bc13HF) : w.intl.format(w.t.Io7ozn, {
      days: r
    })
  }, [null == J || null == (n = J.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), eo = (null == J || null == (s = J.tenantMetadata) || null == (a = s.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (B = v.Z.toURLSafe((0, O._W)(W, null == J ? true : J.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? B : true, [es, el] = (0, h.Cf)(null == eo ? true : eo.toString(), "#000000"), ec = i.useMemo(() => {
    let e = o()(es).darken(1.5).alpha(.9).hex(),
      t = o()(es).alpha(0).hex(),
      [n, r] = L[z];
    return 0 === n && 0 === r ? "none" : "linear-gradient(to top, ".concat(e, " ").concat(M + n, "%, ").concat(t, " ").concat(M + r, "%)")
  }, [es, z]);
  if (null == J) return null;
  let eu = (null == (m = J.tenantMetadata) || null == (c = m.socialLayer) ? true : c.cardImageAssetId) != null && null != (Z = v.Z.toURLSafe((0, O._W)(W, J.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? Z : true;
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)(_.kL8, {
      onClick: null != X ? X : () => {
        null != q && (0, S.Z)({
          guildId: q,
          pageIndex: ei,
          skuId: K,
          slug: J.slug
        })
      },
      className: l()(D.card, {
        [D.cardAnimation]: !ee && 2 !== z,
        [D.cardDark]: $,
        [$ ? D.cardDarkHighlighted : D.cardHighlighted]: et,
        [D.cardSmall]: 0 === z,
        [D.cardMedium]: 1 === z,
        [D.cardEmbedded]: 2 === z
      }),
      ref: Q,
      "aria-label": J.name,
      children: [null != ea && (0, r.jsx)(_.IGR, {
        text: ea,
        disableColor: true,
        className: D.badge
      }), (0, r.jsx)(k, {
        sku: J,
        isCardHovered: et
      }), null != eu ? (0, r.jsx)(N.p, {
        containerClassName: D.cardImageContainer,
        foregroundImageClassName: D.cardImage,
        cardImage: eu,
        altText: J.name,
        shape: "custom",
        backgroundImageClassName: D.cardBackgroundImage,
        cardBackgroundImage: eo
      }) : (0, r.jsx)("div", {
        className: D.ticketIconContainer,
        children: (0, r.jsx)(d.Prq, {
          color: "white",
          size: "custom",
          height: x,
          width: x,
          className: D.ticketIcon
        })
      }), 2 !== z ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: D.bottomGradient,
          style: {
            background: ec
          }
        }), (0, r.jsxs)("div", {
          className: D.details,
          children: [(0, r.jsx)("div", {
            className: D.titleContainer,
            children: (0, r.jsx)(_.Text, {
              color: "always-white",
              variant: "text-md/bold",
              lineClamp: 1,
              children: J.name
            })
          }), (0, r.jsxs)("div", {
            className: D.descriptionContainer,
            children: [null != en && (0, r.jsx)("img", {
              src: en.toString(),
              alt: er,
              className: D.iconAsset
            }), (0, r.jsx)(_.Text, {
              variant: "text-md/semibold",
              color: "always-white",
              lineClamp: 1,
              children: (0, y.T4)(null != (F = null == (A = J.price) ? true : A.amount) ? F : 0, null != (V = null == (j = J.price) ? true : j.currency) ? V : P.pK.USD)
            })]
          })]
        }), (0, r.jsx)("div", {
          className: D.buttonHover,
          children: (0, r.jsxs)(d.hE2, {
            wrap: false,
            fullWidth: true,
            children: [(0, r.jsx)(d.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), (0, C.P)(J, {
                  isGift: false
                })
              },
              text: w.intl.format(w.t.Xp5WTn, {
                price: (0, y.T4)(null != (H = null == (U = J.price) ? true : U.amount) ? H : 0, null != (Y = null == (G = J.price) ? true : G.currency) ? Y : P.pK.USD)
              }),
              fullWidth: true
            }), (0, r.jsx)(R.Z, {
              onGift: e => {
                e.stopPropagation(), (0, C.P)(J, {
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