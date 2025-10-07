/** Chunk was on 77033 **/
/** chunk id: 840724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => T,
  Z: () => R
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
  Chunk727637 = require("./727637.js"),
  Chunk607070 = require("./607070.js"),
  Chunk277941 = require("./277941.jsx"),
  Chunk220082 = require("./220082.js"),
  Chunk466679 = require("./466679.js"),
  Chunk210887 = require("./210887.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk164670 = require("./164670.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450433 = require("./450433.js");
let E = [
  [0, 40],
  [0, 40],
  [0, 20]
];
var R = ((a = {})[a.SMALL = 0] = "SMALL", a[a.MEDIUM = 1] = "MEDIUM", a[a.LARGE = 2] = "LARGE", a);

function T(e) {
  var t, n, a, i, d, s, R, T, N, Z, P, M, w, D, G, F;
  let {
    applicationId: U,
    skuId: Y,
    variant: H = 0,
    guildId: K
  } = e, W = l.useRef(null), B = (0, f.e7)([x.Z], () => x.Z.get(Y)), q = (0, f.e7)([h.Z], () => (0, g.wjy)(h.Z.theme)), z = (0, f.e7)([b.Z], () => b.Z.useReducedMotion), X = (0, m.Z)(W), $ = (0, I.m)(W), {
    primaryIconAsset: J,
    primaryIconLabel: Q
  } = l.useMemo(() => (0, C.FE)(B, U), [B, U]), V = l.useMemo(() => {
    var e, t;
    if ((null == B || null == (t = B.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = u()(),
      a = u()(B.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return a <= 1 ? k.intl.string(k.t.Bc13HB) : k.intl.format(k.t.Io7ozs, {
      days: a
    })
  }, [null == B || null == (n = B.tenantMetadata) || null == (t = n.socialLayer) ? true : t.expiresAt]), ee = (null == B || null == (i = B.tenantMetadata) || null == (a = i.socialLayer) ? true : a.cardBackgroundImageAssetId) != null && null != (P = S.Z.toURLSafe((0, O._W)(U, null == B ? true : B.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? P : true, [et, en] = (0, _.Cf)(null == ee ? true : ee.toString(), "#000000"), ea = l.useMemo(() => {
    let e = o()(et).darken(1.5).alpha(.9).hex(),
      t = o()(et).alpha(0).hex(),
      [n, a] = E[H];
    return "linear-gradient(to top, ".concat(e, " ").concat(30 + n, "%, ").concat(t, " ").concat(30 + a, "%)")
  }, [et, H]);
  if (null == B) return null;
  let er = (null == (s = B.tenantMetadata) || null == (d = s.socialLayer) ? true : d.cardImageAssetId) != null && null != (M = S.Z.toURLSafe((0, O._W)(U, B.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? M : true;
  return (0, r.jsx)(g.tEY, {
    children: (0, r.jsxs)(p.kL8, {
      onClick: () => {
        null != K && (0, y.g)({
          skuId: Y,
          applicationId: U,
          guildId: K
        })
      },
      className: c()(A.card, {
        [A.cardAnimation]: !z,
        [A.cardDark]: q,
        [q ? A.cardDarkHighlighted : A.cardHighlighted]: X || $,
        [A.cardLarge]: 2 === H,
        [A.cardMedium]: 1 === H
      }),
      ref: W,
      "aria-label": B.name,
      children: [null != V && (0, r.jsx)(p.IGR, {
        text: V,
        disableColor: true,
        className: A.badge
      }), null != er || null != ee ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: A.cardBackgroundImage,
          style: {
            backgroundImage: null != ee ? "url(".concat(ee.toString(), ")") : true
          }
        }), null != er && (0, r.jsx)("img", {
          draggable: "false",
          src: er.toString(),
          alt: B.name,
          className: A.cardImage
        })]
      }) : (0, r.jsx)("div", {
        className: A.ticketIconContainer,
        children: (0, r.jsx)(g.Prq, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80,
          className: A.ticketIcon
        })
      }), (0, r.jsx)("div", {
        className: c()(A.bottomGradient, {
          [A.bottomGradientLarge]: 2 === H
        }),
        style: {
          background: ea
        }
      }), (0, r.jsxs)("div", {
        className: A.details,
        children: [(0, r.jsx)("div", {
          className: A.titleContainer,
          children: (0, r.jsx)(p.Text, {
            color: "always-white",
            variant: "text-lg/bold",
            lineClamp: 1,
            children: B.name
          })
        }), (0, r.jsxs)("div", {
          className: A.descriptionContainer,
          children: [null != J && (0, r.jsx)("img", {
            src: J.toString(),
            alt: Q,
            className: A.iconAsset
          }), (0, r.jsx)(p.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            lineClamp: 1,
            children: (0, j.T4)(null != (w = null == (R = B.price) ? true : R.amount) ? w : 0, null != (D = null == (T = B.price) ? true : T.currency) ? D : L.pK.USD)
          })]
        })]
      }), (0, r.jsx)("div", {
        className: A.buttonHover,
        children: (0, r.jsxs)(g.hE2, {
          wrap: false,
          fullWidth: true,
          children: [(0, r.jsx)(g.zxk, {
            variant: "primary",
            onClick: () => {},
            text: k.intl.format(k.t.Xp5WTk, {
              price: (0, j.T4)(null != (G = null == (N = B.price) ? true : N.amount) ? G : 0, null != (F = null == (Z = B.price) ? true : Z.currency) ? F : L.pK.USD)
            }),
            fullWidth: true
          }), (0, r.jsx)(v.Z, {
            onGift: () => {},
            tooltipDelay: 250
          })]
        })
      })]
    })
  })
}