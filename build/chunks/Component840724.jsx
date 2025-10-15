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
  Chunk277941 = require("./277941.jsx"),
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
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450433 = require("./450433.js");
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
  } = e, K = r.useRef(null), $ = (0, p.e7)([_.Z], () => _.Z.get(Y)), q = (0, p.e7)([x.Z], () => (0, g.wjy)(x.Z.theme)), J = (0, p.e7)([m.Z], () => m.Z.useReducedMotion), {
    isHoveringOrFocusing: X
  } = (0, I.Z)(K), {
    primaryIconAsset: Q,
    primaryIconLabel: V
  } = r.useMemo(() => (0, k.FE)($, W), [$, W]), ee = (0, p.e7)([O.Z], () => {
    var e, t;
    return null != z && null != (t = null == (e = O.Z.getStorefrontState(z)) ? true : e.activePage) ? t : 0
  }), et = r.useMemo(() => {
    var e, t;
    if ((null == $ || null == (t = $.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      a = u()($.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return a <= 1 ? E.intl.string(E.t.Bc13HF) : E.intl.format(E.t.Io7ozn, {
      days: a
    })
  }, [null == $ || null == (n = $.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), en = (null == $ || null == (i = $.tenantMetadata) || null == (a = i.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (G = C.Z.toURLSafe((0, y._W)(W, null == $ ? true : $.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? G : true, [ea, el] = (0, v.Cf)(null == en ? true : en.toString(), "#000000"), er = r.useMemo(() => {
    let e = o()(ea).darken(1.5).alpha(.9).hex(),
      t = o()(ea).alpha(0).hex(),
      [n, a] = Z[B];
    return "linear-gradient(to top, ".concat(e, " ").concat(30 + n, "%, ").concat(t, " ").concat(30 + a, "%)")
  }, [ea, B]);
  if (null == $) return null;
  let ei = (null == (s = $.tenantMetadata) || null == (d = s.socialLayer) ? true : d.cardImageAssetId) != null && null != (R = C.Z.toURLSafe((0, y._W)(W, $.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? R : true;
  return (0, l.jsx)(g.tEY, {
    children: (0, l.jsxs)(f.kL8, {
      onClick: () => {
        null != z && (0, h.uL)(S.Z5c.CHANNELS_GAME_SHOP(z, ee, Y, $.slug))
      },
      className: c()(N.card, {
        [N.cardAnimation]: !J,
        [N.cardDark]: q,
        [q ? N.cardDarkHighlighted : N.cardHighlighted]: X,
        [N.cardLarge]: 2 === B,
        [N.cardMedium]: 1 === B
      }),
      ref: K,
      "aria-label": $.name,
      children: [null != et && (0, l.jsx)(f.IGR, {
        text: et,
        disableColor: true,
        className: N.badge
      }), null != ei || null != en ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: N.cardBackgroundImage,
          style: {
            backgroundImage: null != en ? "url(".concat(en.toString(), ")") : true
          }
        }), null != ei && (0, l.jsx)("img", {
          draggable: "false",
          src: ei.toString(),
          alt: $.name,
          className: N.cardImage
        })]
      }) : (0, l.jsx)("div", {
        className: N.ticketIconContainer,
        children: (0, l.jsx)(g.Prq, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80,
          className: N.ticketIcon
        })
      }), (0, l.jsx)("div", {
        className: c()(N.bottomGradient, {
          [N.bottomGradientLarge]: 2 === B
        }),
        style: {
          background: er
        }
      }), (0, l.jsxs)("div", {
        className: N.details,
        children: [(0, l.jsx)("div", {
          className: N.titleContainer,
          children: (0, l.jsx)(f.Text, {
            color: "always-white",
            variant: "text-md/bold",
            lineClamp: 1,
            children: $.name
          })
        }), (0, l.jsxs)("div", {
          className: N.descriptionContainer,
          children: [null != Q && (0, l.jsx)("img", {
            src: Q.toString(),
            alt: V,
            className: N.iconAsset
          }), (0, l.jsx)(f.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            lineClamp: 1,
            children: (0, j.T4)(null != (D = null == (P = $.price) ? true : P.amount) ? D : 0, null != (H = null == (M = $.price) ? true : M.currency) ? H : A.pK.USD)
          })]
        })]
      }), (0, l.jsx)("div", {
        className: N.buttonHover,
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
              price: (0, j.T4)(null != (F = null == (w = $.price) ? true : w.amount) ? F : 0, null != (U = null == (T = $.price) ? true : T.currency) ? U : A.pK.USD)
            }),
            fullWidth: true
          }), (0, l.jsx)(b.Z, {
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