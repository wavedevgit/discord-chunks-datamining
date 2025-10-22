/** Chunk was on 77033 **/
/** chunk id: 840724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => M,
  Z: () => P
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
let Z = [
  [0, 30],
  [0, 30],
  [0, 20]
];
var P = ((a = {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a[a.LARGE = 2] = "LARGE", a);

function M(e) {
  var t, n, a, i, d, s, P, M, w, T, G, R, D, H, F, U;
  let {
    applicationId: W,
    skuId: Y,
    variant: B = 0,
    guildId: z
  } = e, K = r.useRef(null), J = (0, p.e7)([x.Z], () => x.Z.get(Y)), $ = (0, p.e7)([h.Z], () => (0, g.wjy)(h.Z.theme)), q = (0, p.e7)([m.Z], () => m.Z.useReducedMotion), {
    isHoveringOrFocusing: X
  } = (0, v.Z)(K), {
    primaryIconAsset: Q,
    primaryIconLabel: V
  } = r.useMemo(() => (0, C.FE)(J, W), [J, W]), ee = (0, p.e7)([k.Z], () => {
    var e, t;
    return null != z && null != (t = null == (e = k.Z.getStorefrontState(z)) ? true : e.activePage) ? t : 0
  }), et = r.useMemo(() => {
    var e, t;
    if ((null == J || null == (t = J.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      a = u()(J.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return a <= 1 ? N.intl.string(N.t.Bc13HF) : N.intl.format(N.t.Io7ozn, {
      days: a
    })
  }, [null == J || null == (n = J.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), en = (null == J || null == (i = J.tenantMetadata) || null == (a = i.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (G = y.Z.toURLSafe((0, j._W)(W, null == J ? true : J.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? G : true, [ea, el] = (0, b.Cf)(null == en ? true : en.toString(), "#000000"), er = r.useMemo(() => {
    let e = o()(ea).darken(1.5).alpha(.9).hex(),
      t = o()(ea).alpha(0).hex(),
      [n, a] = Z[B];
    return "linear-gradient(to top, ".concat(e, " ").concat(30 + n, "%, ").concat(t, " ").concat(30 + a, "%)")
  }, [ea, B]);
  if (null == J) return null;
  let ei = (null == (s = J.tenantMetadata) || null == (d = s.socialLayer) ? true : d.cardImageAssetId) != null && null != (R = y.Z.toURLSafe((0, j._W)(W, J.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? R : true;
  return (0, l.jsx)(g.tEY, {
    children: (0, l.jsxs)(f.kL8, {
      onClick: () => {
        null != z && (0, I.uL)(S.Z5c.CHANNELS_GAME_SHOP(z, ee, Y, J.slug))
      },
      className: c()(E.card, {
        [E.cardAnimation]: !q,
        [E.cardDark]: $,
        [$ ? E.cardDarkHighlighted : E.cardHighlighted]: X,
        [E.cardLarge]: 2 === B,
        [E.cardMedium]: 1 === B
      }),
      ref: K,
      "aria-label": J.name,
      children: [null != et && (0, l.jsx)(f.IGR, {
        text: et,
        disableColor: true,
        className: E.badge
      }), null != ei || null != en ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: E.cardBackgroundImage,
          style: {
            backgroundImage: null != en ? "url(".concat(en.toString(), ")") : true
          }
        }), null != ei && (0, l.jsx)("img", {
          draggable: "false",
          src: ei.toString(),
          alt: J.name,
          className: E.cardImage
        })]
      }) : (0, l.jsx)("div", {
        className: E.ticketIconContainer,
        children: (0, l.jsx)(g.Prq, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80,
          className: E.ticketIcon
        })
      }), (0, l.jsx)("div", {
        className: c()(E.bottomGradient, {
          [E.bottomGradientLarge]: 2 === B
        }),
        style: {
          background: er
        }
      }), (0, l.jsxs)("div", {
        className: E.details,
        children: [(0, l.jsx)("div", {
          className: E.titleContainer,
          children: (0, l.jsx)(f.Text, {
            color: "always-white",
            variant: "text-md/bold",
            lineClamp: 1,
            children: J.name
          })
        }), (0, l.jsxs)("div", {
          className: E.descriptionContainer,
          children: [null != Q && (0, l.jsx)("img", {
            src: Q.toString(),
            alt: V,
            className: E.iconAsset
          }), (0, l.jsx)(f.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            lineClamp: 1,
            children: (0, _.T4)(null != (D = null == (P = J.price) ? true : P.amount) ? D : 0, null != (H = null == (M = J.price) ? true : M.currency) ? H : A.pK.USD)
          })]
        })]
      }), (0, l.jsx)("div", {
        className: E.buttonHover,
        children: (0, l.jsxs)(g.hE2, {
          wrap: false,
          fullWidth: true,
          children: [(0, l.jsx)(g.zxk, {
            variant: "primary",
            onClick: e => {
              e.stopPropagation(), (0, O.P)(J, {
                isGift: false
              })
            },
            text: N.intl.format(N.t.Xp5WTn, {
              price: (0, _.T4)(null != (F = null == (w = J.price) ? true : w.amount) ? F : 0, null != (U = null == (T = J.price) ? true : T.currency) ? U : A.pK.USD)
            }),
            fullWidth: true
          }), (0, l.jsx)(L.Z, {
            onGift: e => {
              e.stopPropagation(), (0, O.P)(J, {
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