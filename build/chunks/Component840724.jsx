/** Chunk was on 77033 **/
/** chunk id: 840724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => R,
  Z: () => E
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
  Chunk277941 = require("./277941.jsx"),
  Chunk220082 = require("./220082.js"),
  Chunk104505 = require("./104505.js"),
  Chunk210887 = require("./210887.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk164670 = require("./164670.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk402920 = require("./402920.js");
let A = [
  [0, 40],
  [0, 40],
  [0, 20]
];
var E = ((a = {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a[a.LARGE = 2] = "LARGE", a);

function R(e) {
  var t, n, a, i, d, s, E, R, T, N, Z, P, M, w, D, G;
  let {
    applicationId: F,
    skuId: U,
    variant: Y = 0,
    guildId: H
  } = e, K = l.useRef(null), W = (0, f.e7)([h.Z], () => h.Z.get(U)), B = (0, f.e7)([I.Z], () => (0, g.wjy)(I.Z.theme)), q = (0, f.e7)([m.Z], () => m.Z.useReducedMotion), {
    isHoveringOrFocusing: z
  } = (0, _.Z)(K), {
    primaryIconAsset: X,
    primaryIconLabel: $
  } = l.useMemo(() => (0, S.FE)(W, F), [W, F]), J = l.useMemo(() => {
    var e, t;
    if ((null == W || null == (t = W.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      a = u()(W.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return a <= 1 ? L.intl.string(L.t.Bc13HB) : L.intl.format(L.t.Io7ozs, {
      days: a
    })
  }, [null == W || null == (n = W.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), Q = (null == W || null == (i = W.tenantMetadata) || null == (a = i.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (Z = j.Z.toURLSafe((0, O._W)(F, null == W ? true : W.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? Z : true, [V, ee] = (0, v.Cf)(null == Q ? true : Q.toString(), "#000000"), et = l.useMemo(() => {
    let e = o()(V).darken(1.5).alpha(.9).hex(),
      t = o()(V).alpha(0).hex(),
      [n, a] = A[Y];
    return "linear-gradient(to top, ".concat(e, " ").concat(30 + n, "%, ").concat(t, " ").concat(30 + a, "%)")
  }, [V, Y]);
  if (null == W) return null;
  let en = (null == (s = W.tenantMetadata) || null == (d = s.socialLayer) ? true : d.cardImageAssetId) != null && null != (P = j.Z.toURLSafe((0, O._W)(F, W.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? P : true;
  return (0, r.jsx)(g.tEY, {
    children: (0, r.jsxs)(p.kL8, {
      onClick: () => {
        null != H && (0, C.g)({
          skuId: U,
          applicationId: F,
          guildId: H
        })
      },
      className: c()(k.card, {
        [k.cardAnimation]: !q,
        [k.cardDark]: B,
        [B ? k.cardDarkHighlighted : k.cardHighlighted]: z,
        [k.cardLarge]: 2 === Y,
        [k.cardMedium]: 1 === Y
      }),
      ref: K,
      "aria-label": W.name,
      children: [null != J && (0, r.jsx)(p.IGR, {
        text: J,
        disableColor: true,
        className: k.badge
      }), null != en || null != Q ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: k.cardBackgroundImage,
          style: {
            backgroundImage: null != Q ? "url(".concat(Q.toString(), ")") : true
          }
        }), null != en && (0, r.jsx)("img", {
          draggable: "false",
          src: en.toString(),
          alt: W.name,
          className: k.cardImage
        })]
      }) : (0, r.jsx)("div", {
        className: k.ticketIconContainer,
        children: (0, r.jsx)(g.Prq, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80,
          className: k.ticketIcon
        })
      }), (0, r.jsx)("div", {
        className: c()(k.bottomGradient, {
          [k.bottomGradientLarge]: 2 === Y
        }),
        style: {
          background: et
        }
      }), (0, r.jsxs)("div", {
        className: k.details,
        children: [(0, r.jsx)("div", {
          className: k.titleContainer,
          children: (0, r.jsx)(p.Text, {
            color: "always-white",
            variant: "text-lg/bold",
            lineClamp: 1,
            children: W.name
          })
        }), (0, r.jsxs)("div", {
          className: k.descriptionContainer,
          children: [null != X && (0, r.jsx)("img", {
            src: X.toString(),
            alt: $,
            className: k.iconAsset
          }), (0, r.jsx)(p.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            lineClamp: 1,
            children: (0, x.T4)(null != (M = null == (E = W.price) ? true : E.amount) ? M : 0, null != (w = null == (R = W.price) ? true : R.currency) ? w : y.pK.USD)
          })]
        })]
      }), (0, r.jsx)("div", {
        className: k.buttonHover,
        children: (0, r.jsxs)(g.hE2, {
          wrap: false,
          fullWidth: true,
          children: [(0, r.jsx)(g.zxk, {
            variant: "primary",
            onClick: () => {},
            text: L.intl.format(L.t.Xp5WTk, {
              price: (0, x.T4)(null != (D = null == (T = W.price) ? true : T.amount) ? D : 0, null != (G = null == (N = W.price) ? true : N.currency) ? G : y.pK.USD)
            }),
            fullWidth: true
          }), (0, r.jsx)(b.Z, {
            onGift: () => {},
            tooltipDelay: 250
          })]
        })
      })]
    })
  })
}