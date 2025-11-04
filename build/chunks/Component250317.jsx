/** Chunk was on 84802 **/
/** chunk id: 250317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./539854.js"), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk143941 = require("./143941.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk602733 = require("./602733.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk572004 = require("./572004.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk164670 = require("./164670.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk882508 = require("./882508.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk939716 = require("./939716.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk424215 = require("./424215.js");

function y(e) {
  var t, n, r, l;
  let {
    sku: i,
    guildId: o,
    shouldShowShopLink: c,
    onClose: d
  } = e;
  if (null == i) return null;
  let m = (0, g.T4)(null != (r = null == (t = i.price) ? true : t.amount) ? r : 0, null != (l = null == (n = i.price) ? true : n.currency) ? l : P.pK.USD);
  return (0, a.jsxs)("div", {
    className: S.detailsContainer,
    children: [(0, a.jsxs)("div", {
      className: S.titleDescriptionContainer,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        lineClamp: 2,
        children: i.name
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: i.description
      })]
    }), (0, a.jsx)(s.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: m
    }), (0, a.jsxs)("div", {
      className: S.buttonsContainer,
      children: [(0, a.jsx)(s.Button, {
        variant: "primary",
        onClick: () => {
          (0, v.P)(i, {
            isGift: false
          })
        },
        text: k.intl.string(k.t.boqtTA),
        fullWidth: true
      }), (0, a.jsxs)(s.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [c ? (0, a.jsx)(s.Button, {
          icon: s.EOn,
          variant: "secondary",
          onClick: () => {
            (0, u.uL)(j.Z5c.CHANNELS_GAME_SHOP(o)), d()
          },
          text: k.intl.string(k.t["2QW9nR"]),
          fullWidth: true
        }) : null, (0, a.jsx)(s.Button, {
          icon: s.OgN,
          variant: "secondary",
          onClick: () => {
            (0, v.P)(i, {
              isGift: true
            })
          },
          text: k.intl.string(k.t.QAZA5f),
          fullWidth: true
        })]
      })]
    })]
  })
}

function N(e) {
  let {
    sku: t,
    applicationId: n,
    storefront: l,
    onSelectedCarouselItemChange: i
  } = e, [o, s] = r.useState([]), [c, u] = r.useState([]), d = r.useCallback(e => {
    var t;
    let n = c.findIndex(t => t === e);
    null == i || i(null != (t = o[n]) ? t : null)
  }, [i, o, c]);
  return (r.useEffect(() => {
    var e, a, r;
    let [i, o] = function(e, t, n) {
      let a = [],
        r = [];
      if (null == e || 0 === e.length) return [a, r];
      for (let l of e) {
        let e = null != l.assetId ? n[l.assetId] : null;
        null != e && (a.push(l), e.mime_type.startsWith("video/") ? r.push({
          type: "video",
          src: (0, C._W)(t, e, I.Q, "mp4"),
          videoThumbnailSrc: (0, C._W)(t, e, I.Q, "webp"),
          thumbnailSrc: null != l.thumbnailAssetId ? (0, C._W)(t, l.thumbnailAssetId, I.Q, "webp") : true,
          backgroundSrc: null != l.backgroundAssetId ? (0, C._W)(t, l.backgroundAssetId, I.Q, "webp") : true
        }) : r.push({
          type: "image",
          src: (0, C._W)(t, e, I.Q, "webp"),
          thumbnailSrc: null != l.thumbnailAssetId ? (0, C._W)(t, l.thumbnailAssetId, I.Q, "webp") : true,
          backgroundSrc: null != l.backgroundAssetId ? (0, C._W)(t, l.backgroundAssetId, I.Q, "webp") : true
        }))
      }
      return [a, r]
    }(null != (r = null == t || null == (a = t.tenantMetadata) || null == (e = a.socialLayer) ? true : e.carouselItems) ? r : [], n, l.assets);
    s(i), u(o)
  }, [t, l.assets, n]), 0 === c.length) ? null : (0, a.jsx)(I.Z, {
    className: S.carousel,
    items: c,
    onItemChange: d
  })
}

function w(e) {
  let {
    selectedCarouselItem: t,
    applicationId: n
  } = e;
  if (null == t) return null;
  let r = null != t.labelIconAssetId ? (0, C._W)(n, t.labelIconAssetId) : null;
  return (0, a.jsxs)("div", {
    className: S.labelIconContainer,
    children: [null != r && (0, a.jsx)("img", {
      className: S.labelIcon,
      src: r,
      alt: t.label
    }, r), (0, a.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "text-primary",
      children: t.label
    })]
  })
}

function E(e) {
  let {
    onClick: t,
    children: n,
    ariaLabel: r
  } = e;
  return (0, a.jsx)(s.P3F, {
    onClick: t,
    className: S.modalHeaderButton,
    "aria-label": r,
    role: "button",
    children: n
  })
}

function O(e) {
  var t;
  let {
    transitionState: n,
    returnRef: l,
    skuId: u,
    applicationId: g,
    guildId: C,
    isStorefront: v,
    onClose: I
  } = e, j = (0, o.e7)([f.Z], () => f.Z.getStorefrontData(C), [C]), P = (0, o.e7)([p.Z], () => p.Z.isFetchingForSKU(u)), O = (0, o.e7)([m.Z], () => m.Z.get(u)), [R, L] = r.useState(null);
  (0, d.p2)(), r.useEffect(() => {
    null == C || null == u || p.Z.isFetchingForSKU(u) || (0, b.y)(C, u)
  }, [C, u]);
  let Z = r.useCallback(() => {
    null != O && (0, h.JG)((0, _.wQ)(C, O), () => (0, s.showToast)((0, s.createToast)(k.intl.string(k.t["L/PwZf"]), s.ToastType.SUCCESS)))
  }, [C, O]);
  return null == (null == O || null == (t = O.tenantMetadata) ? true : t.socialLayer) || (null == j ? true : j.storefront) == null ? P ? (0, a.jsx)(s.$jN, {}) : null : (0, a.jsx)(s.Y0X, {
    transitionState: n,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: S.modalRoot,
    size: s.CgR.DYNAMIC,
    returnRef: l,
    children: (0, a.jsxs)(s.hzk, {
      className: S.modalContent,
      children: [(0, a.jsxs)("div", {
        className: S.infoContainer,
        children: [(0, a.jsx)(w, {
          applicationId: g,
          selectedCarouselItem: R
        }), (0, a.jsx)(y, {
          sku: O,
          guildId: C,
          shouldShowShopLink: !v,
          onClose: I
        })]
      }), (0, a.jsxs)("div", {
        className: S.carouselContainer,
        children: [(0, a.jsx)(N, {
          sku: O,
          applicationId: g,
          storefront: j.storefront,
          onSelectedCarouselItemChange: L
        }), (0, a.jsxs)("div", {
          className: S.modalHeaderButtonsContainer,
          children: [(0, a.jsx)(E, {
            onClick: Z,
            ariaLabel: k.intl.string(k.t.Ej3B3Y),
            children: (0, a.jsx)(s.xPt, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), null != O && (0, a.jsx)(c.s, {
            skuId: O.id,
            isCardHovered: true,
            className: i()(S.modalHeaderButton, S.wishlistButton),
            nuxGraphic: (0, x.c)(O)
          }), (0, a.jsx)(E, {
            onClick: I,
            ariaLabel: k.intl.string(k.t.cpT0Cq),
            children: (0, a.jsx)(s.Uz9, {
              size: "refresh_sm",
              color: "currentColor"
            })
          })]
        })]
      })]
    })
  })
}