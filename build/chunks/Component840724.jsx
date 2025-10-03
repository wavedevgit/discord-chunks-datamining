/** Chunk was on 77033 **/
/** chunk id: 840724, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk551428 = require("./551428.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk591759 = require("./591759.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk450433 = require("./450433.js");

function C(e) {
  var n, t, r, d, C, L, O, y, k, E, T, N, R, Z, W, P, D, F;
  let {
    applicationId: H,
    skuId: w,
    isWide: M = false
  } = e, U = l.useRef(null), Y = (0, s.e7)([I.Z], () => I.Z.getForSKU(w), [w]), G = (0, s.e7)([v.Z], () => v.Z.get(w)), B = (0, s.e7)([_.Z], () => (0, c.wjy)(_.Z.theme)), K = (0, s.e7)([f.Z], () => f.Z.useReducedMotion), q = (0, g.Z)(U), z = (0, p.m)(U), X = l.useMemo(() => {
    var e, n;
    if ((null == G || null == (n = G.tenantMetadata) || null == (e = n.socialLayer) ? true : e.carouselItems) == null) return null;
    let t = {};
    for (let e of G.tenantMetadata.socialLayer.carouselItems) {
      if (null == e.labelIconAssetId) continue;
      let n = b.Z.toURLSafe((0, h._W)(H, e.labelIconAssetId, 512, "png"));
      null != n && (t[n.toString()] = e.label)
    }
    return t
  }, [null == G || null == (t = G.tenantMetadata) || null == (n = t.socialLayer) ? true : n.carouselItems, H]), $ = l.useMemo(() => {
    var e, n;
    if ((null == G || null == (n = G.tenantMetadata) || null == (e = n.socialLayer) ? true : e.expiresAt) == null) return null;
    let t = o()(),
      a = o()(G.tenantMetadata.socialLayer.expiresAt).diff(t, "days");
    return a <= 1 ? j.intl.string(j.t.Bc13HB) : j.intl.format(j.t.Io7ozs, {
      days: a
    })
  }, [null == G || null == (d = G.tenantMetadata) || null == (r = d.socialLayer) ? true : r.expiresAt]);
  if (null == Y || null == G) return null;
  let J = (null == (L = G.tenantMetadata) || null == (C = L.socialLayer) ? true : C.cardImageAssetId) != null && null != (R = b.Z.toURLSafe((0, h._W)(H, G.tenantMetadata.socialLayer.cardImageAssetId, 512, "png"))) ? R : true,
    Q = (null == (y = G.tenantMetadata) || null == (O = y.socialLayer) ? true : O.cardBackgroundImageAssetId) != null && null != (Z = b.Z.toURLSafe((0, h._W)(H, G.tenantMetadata.socialLayer.cardBackgroundImageAssetId, 1024, "png"))) ? Z : true;
  return (0, a.jsx)(c.tEY, {
    children: (0, a.jsxs)(u.kL8, {
      onClick: () => {},
      className: i()(A.card, {
        [A.cardAnimation]: !K,
        [A.cardDark]: B,
        [B ? A.cardDarkHighlighted : A.cardHighlighted]: q || z,
        [A.cardWide]: M
      }),
      ref: U,
      "aria-label": G.name,
      children: [null != $ && (0, a.jsx)(u.IGR, {
        text: $,
        disableColor: true,
        className: A.badge
      }), (0, a.jsxs)("div", {
        className: i()(A.cardHeaderImg, {
          [A.cardHeaderImgWide]: M
        }),
        style: null != Q ? {
          backgroundImage: null != Q ? "url(".concat(Q.toString(), ")") : true
        } : true,
        children: [null != J ? (0, a.jsx)("div", {
          className: A.cardImgContainer,
          children: (0, a.jsx)("img", {
            draggable: "false",
            src: J.toString(),
            alt: G.name,
            className: i()(A.cardImg, {
              [A.cardImgWide]: M
            })
          })
        }) : (0, a.jsx)(c.Prq, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80
        }), null != X && (0, a.jsx)("div", {
          className: A.iconAssets,
          children: Object.entries(X).map((e, n) => {
            let [t, l] = e;
            return (0, a.jsx)("img", {
              src: t,
              alt: l,
              className: A.iconAsset
            }, n)
          })
        })]
      }), (0, a.jsxs)("div", {
        className: A.details,
        children: [(0, a.jsx)(u.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: G.name
        }), (0, a.jsxs)("div", {
          className: A.detailsWrapper,
          children: [(0, a.jsx)("div", {
            className: A.innerBlur,
            children: (0, a.jsx)(u.Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: (0, x.T4)(null != (W = null == (k = G.price) ? true : k.amount) ? W : 0, null != (P = null == (E = G.price) ? true : E.currency) ? P : S.pK.USD)
            })
          }), (0, a.jsx)("div", {
            className: A.innerHover,
            children: (0, a.jsxs)(c.hE2, {
              wrap: false,
              fullWidth: true,
              children: [(0, a.jsx)(c.zxk, {
                variant: "primary",
                onClick: () => {},
                text: j.intl.format(j.t.Xp5WTk, {
                  price: (0, x.T4)(null != (D = null == (T = G.price) ? true : T.amount) ? D : 0, null != (F = null == (N = G.price) ? true : N.currency) ? F : S.pK.USD)
                }),
                fullWidth: true
              }), (0, a.jsx)(m.Z, {
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