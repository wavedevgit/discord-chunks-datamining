/** Chunk was on 77033 **/
/** chunk id: 840724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk607070 = require("./607070.js"),
  Chunk277941 = require("./277941.jsx"),
  Chunk466679 = require("./466679.js"),
  Chunk210887 = require("./210887.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450433 = require("./450433.js");

function S(e) {
  var t, n, l, d, S, A, C, L, E, k, T, R, N, Z, P, w, W, D;
  let {
    applicationId: F,
    skuId: H,
    isWide: M = false,
    guildId: Y
  } = e, U = r.useRef(null), G = (0, s.e7)([b.Z], () => b.Z.get(H)), K = (0, s.e7)([I.Z], () => (0, c.wjy)(I.Z.theme)), B = (0, s.e7)([f.Z], () => f.Z.useReducedMotion), q = (0, g.Z)(U), z = (0, m.m)(U), X = r.useMemo(() => {
    var e, t;
    if ((null == G || null == (t = G.tenantMetadata) || null == (e = t.socialLayer) ? true : e.carouselItems) == null) return null;
    let n = {};
    for (let e of G.tenantMetadata.socialLayer.carouselItems) {
      if (null == e.labelIconAssetId) continue;
      let t = h.Z.toURLSafe((0, _._W)(F, e.labelIconAssetId, 512, "png"));
      null != t && (n[t.toString()] = e.label)
    }
    return n
  }, [null == G || null == (n = G.tenantMetadata) || null == (t = n.socialLayer) ? true : t.carouselItems, F]), $ = r.useMemo(() => {
    var e, t;
    if ((null == G || null == (t = G.tenantMetadata) || null == (e = t.socialLayer) ? true : e.expiresAt) == null) return null;
    let n = o()(),
      a = o()(G.tenantMetadata.socialLayer.expiresAt).diff(n, "days");
    return a <= 1 ? j.intl.string(j.t.Bc13HB) : j.intl.format(j.t.Io7ozs, {
      days: a
    })
  }, [null == G || null == (d = G.tenantMetadata) || null == (l = d.socialLayer) ? true : l.expiresAt]);
  if (null == G) return null;
  let J = (null == (A = G.tenantMetadata) || null == (S = A.socialLayer) ? true : S.cardImageAssetId) != null && null != (N = h.Z.toURLSafe((0, _._W)(F, G.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? N : true,
    Q = (null == (L = G.tenantMetadata) || null == (C = L.socialLayer) ? true : C.cardBackgroundImageAssetId) != null && null != (Z = h.Z.toURLSafe((0, _._W)(F, G.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? Z : true;
  return (0, a.jsx)(c.tEY, {
    children: (0, a.jsxs)(u.kL8, {
      onClick: () => {
        (0, x.g)({
          skuId: H,
          applicationId: F,
          guildId: Y
        })
      },
      className: i()(y.card, {
        [y.cardAnimation]: !B,
        [y.cardDark]: K,
        [K ? y.cardDarkHighlighted : y.cardHighlighted]: q || z,
        [y.cardWide]: M
      }),
      ref: U,
      "aria-label": G.name,
      children: [null != $ && (0, a.jsx)(u.IGR, {
        text: $,
        disableColor: true,
        className: y.badge
      }), (0, a.jsxs)("div", {
        className: i()(y.cardHeaderImg, {
          [y.cardHeaderImgWide]: M
        }),
        style: null != Q ? {
          backgroundImage: null != Q ? "url(".concat(Q.toString(), ")") : true
        } : true,
        children: [null != J ? (0, a.jsx)("div", {
          className: y.cardImgContainer,
          children: (0, a.jsx)("img", {
            draggable: "false",
            src: J.toString(),
            alt: G.name,
            className: i()(y.cardImg, {
              [y.cardImgWide]: M
            })
          })
        }) : (0, a.jsx)(c.Prq, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80
        }), null != X && (0, a.jsx)("div", {
          className: y.iconAssets,
          children: Object.entries(X).map((e, t) => {
            let [n, r] = e;
            return (0, a.jsx)("img", {
              src: n,
              alt: r,
              className: y.iconAsset
            }, t)
          })
        })]
      }), (0, a.jsxs)("div", {
        className: y.details,
        children: [(0, a.jsx)(u.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: G.name
        }), (0, a.jsxs)("div", {
          className: y.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: y.innerBlur,
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: (0, v.T4)(null != (P = null == (E = G.price) ? true : E.amount) ? P : 0, null != (w = null == (k = G.price) ? true : k.currency) ? w : O.pK.USD)
            })
          }), (0, a.jsx)("div", {
            className: y.innerHover,
            children: (0, a.jsxs)(c.hE2, {
              wrap: false,
              fullWidth: true,
              children: [(0, a.jsx)(c.zxk, {
                variant: "primary",
                onClick: () => {},
                text: j.intl.format(j.t.Xp5WTk, {
                  price: (0, v.T4)(null != (W = null == (T = G.price) ? true : T.amount) ? W : 0, null != (D = null == (R = G.price) ? true : R.currency) ? D : O.pK.USD)
                }),
                fullWidth: true
              }), (0, a.jsx)(p.Z, {
                onGift: () => {},
                tooltipDelay: 250
              })]
            })
          })]
        })]
      })]
    })
  })
}