/** Chunk was on 77033 **/
/** chunk id: 840724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => T,
  Z: () => w
}), require("./388685.js");
var a, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk688619 = require("./688619.js"),
  o = require.n(Chunk688619),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
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
  Chunk402920 = require("./402920.js");
let P = [
  [0, 30],
  [0, 30],
  [0, 20]
];
var w = ((a = {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a[a.LARGE = 2] = "LARGE", a);

function M(e) {
  let {
    sku: t,
    isCardHovered: n
  } = e;
  return (0, l.jsx)("div", {
    className: Z.wishlistButtonContainer,
    children: (0, l.jsx)(v.s, {
      skuId: t.id,
      isCardHovered: n
    })
  })
}

function T(e) {
  var t, n, a, i, d, s, v, w, T, G, R, D, H, F, U, B;
  let {
    applicationId: W,
    skuId: Y,
    variant: z = 0,
    guildId: K
  } = e, J = r.useRef(null), $ = (0, p.e7)([_.Z], () => _.Z.get(Y)), q = (0, p.e7)([x.Z], () => (0, g.wjy)(x.Z.theme)), X = (0, p.e7)([m.Z], () => m.Z.useReducedMotion), {
    isHoveringOrFocusing: Q
  } = (0, I.Z)(J), {
    primaryIconAsset: V,
    primaryIconLabel: ee
  } = r.useMemo(() => (0, k.FE)($, W), [$, W]), et = (0, p.e7)([O.Z], () => {
    var e, t;
    return null != K && null != (t = null == (e = O.Z.getStorefrontState(K)) ? true : e.activePage) ? t : 0
  }), en = r.useMemo(() => {
    var e, t;
    if ((null == $ || null == (t = $.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      a = u()($.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return a <= 1 ? E.intl.string(E.t.Bc13HF) : E.intl.format(E.t.Io7ozn, {
      days: a
    })
  }, [null == $ || null == (n = $.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), ea = (null == $ || null == (i = $.tenantMetadata) || null == (a = i.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (R = C.Z.toURLSafe((0, y._W)(W, null == $ ? true : $.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? R : true, [el, er] = (0, b.Cf)(null == ea ? true : ea.toString(), "#000000"), ei = r.useMemo(() => {
    let e = o()(el).darken(1.5).alpha(.9).hex(),
      t = o()(el).alpha(0).hex(),
      [n, a] = P[z];
    return "linear-gradient(to top, ".concat(e, " ").concat(30 + n, "%, ").concat(t, " ").concat(30 + a, "%)")
  }, [el, z]);
  if (null == $) return null;
  let eo = (null == (s = $.tenantMetadata) || null == (d = s.socialLayer) ? true : d.cardImageAssetId) != null && null != (D = C.Z.toURLSafe((0, y._W)(W, $.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? D : true;
  return (0, l.jsx)(g.tEY, {
    children: (0, l.jsxs)(f.kL8, {
      onClick: () => {
        null != K && (0, h.uL)(A.Z5c.CHANNELS_GAME_SHOP(K, et, Y, $.slug))
      },
      className: c()(Z.card, {
        [Z.cardAnimation]: !X,
        [Z.cardDark]: q,
        [q ? Z.cardDarkHighlighted : Z.cardHighlighted]: Q,
        [Z.cardLarge]: 2 === z,
        [Z.cardMedium]: 1 === z
      }),
      ref: J,
      "aria-label": $.name,
      children: [null != en && (0, l.jsx)(f.IGR, {
        text: en,
        disableColor: true,
        className: Z.badge
      }), (0, l.jsx)(M, {
        sku: $,
        isCardHovered: Q
      }), null != eo || null != ea ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: Z.cardBackgroundImage,
          style: {
            backgroundImage: null != ea ? "url(".concat(ea.toString(), ")") : true
          }
        }), null != eo && (0, l.jsx)("img", {
          draggable: "false",
          src: eo.toString(),
          alt: $.name,
          className: Z.cardImage
        })]
      }) : (0, l.jsx)("div", {
        className: Z.ticketIconContainer,
        children: (0, l.jsx)(g.Prq, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80,
          className: Z.ticketIcon
        })
      }), (0, l.jsx)("div", {
        className: c()(Z.bottomGradient, {
          [Z.bottomGradientLarge]: 2 === z
        }),
        style: {
          background: ei
        }
      }), (0, l.jsxs)("div", {
        className: Z.details,
        children: [(0, l.jsx)("div", {
          className: Z.titleContainer,
          children: (0, l.jsx)(f.Text, {
            color: "always-white",
            variant: "text-md/bold",
            lineClamp: 1,
            children: $.name
          })
        }), (0, l.jsxs)("div", {
          className: Z.descriptionContainer,
          children: [null != V && (0, l.jsx)("img", {
            src: V.toString(),
            alt: ee,
            className: Z.iconAsset
          }), (0, l.jsx)(f.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            lineClamp: 1,
            children: (0, j.T4)(null != (H = null == (v = $.price) ? true : v.amount) ? H : 0, null != (F = null == (w = $.price) ? true : w.currency) ? F : N.pK.USD)
          })]
        })]
      }), (0, l.jsx)("div", {
        className: Z.buttonHover,
        children: (0, l.jsxs)(g.hE2, {
          wrap: false,
          fullWidth: true,
          children: [(0, l.jsx)(g.zxk, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), (0, L.P)($, {
                isGift: false
              })
            },
            text: E.intl.format(E.t.Xp5WTn, {
              price: (0, j.T4)(null != (U = null == (T = $.price) ? true : T.amount) ? U : 0, null != (B = null == (G = $.price) ? true : G.currency) ? B : N.pK.USD)
            }),
            fullWidth: true
          }), (0, l.jsx)(S.Z, {
            onGift: e => {
              e.stopPropagation(), (0, L.P)($, {
                isGift: true
              })
            },
            tooltipDelay: 250
          })]
        })
      })]
    })
  })
}