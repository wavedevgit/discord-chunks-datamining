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
  Chunk602733 = require("./602733.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk572004 = require("./572004.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk164670 = require("./164670.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk705338 = require("./705338.js"),
  Chunk882508 = require("./882508.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk939716 = require("./939716.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk73262 = require("./73262.js");

function S(e) {
  var t, n, r, l;
  let {
    sku: i,
    guildId: o,
    shouldShowShopLink: c,
    onClose: u
  } = e;
  if (null == i) return null;
  let d = (0, h.T4)(null != (r = null == (t = i.price) ? true : t.amount) ? r : 0, null != (l = null == (n = i.price) ? true : n.currency) ? l : j.pK.USD);
  return (0, a.jsxs)("div", {
    className: k.detailsContainer,
    children: [(0, a.jsxs)("div", {
      className: k.titleDescriptionContainer,
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
      children: d
    }), (0, a.jsxs)("div", {
      className: k.buttonsContainer,
      children: [(0, a.jsx)(s.Button, {
        variant: "primary",
        onClick: () => {
          (0, v.P)(i, {
            isGift: false
          })
        },
        text: P.intl.string(P.t.boqtTA),
        fullWidth: true
      }), (0, a.jsxs)(s.ButtonGroup, {
        wrap: false,
        fullWidth: true,
        children: [c ? (0, a.jsx)(s.Button, {
          icon: s.EOn,
          variant: "secondary",
          onClick: () => {
            (0, _.Z)({
              guildId: o
            }), u()
          },
          text: P.intl.string(P.t["2QW9nR"]),
          fullWidth: true
        }) : null, (0, a.jsx)(s.Button, {
          icon: s.OgN,
          variant: "secondary",
          onClick: () => {
            (0, v.P)(i, {
              isGift: true
            })
          },
          text: P.intl.string(P.t.QAZA5f),
          fullWidth: true
        })]
      })]
    })]
  })
}

function y(e) {
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
          src: (0, g._W)(t, e, I.Q, "mp4"),
          videoThumbnailSrc: (0, g._W)(t, e, I.Q, "webp"),
          thumbnailSrc: null != l.thumbnailAssetId ? (0, g._W)(t, l.thumbnailAssetId, I.Q, "webp") : true,
          backgroundSrc: null != l.backgroundAssetId ? (0, g._W)(t, l.backgroundAssetId, I.Q, "webp") : true
        }) : r.push({
          type: "image",
          src: (0, g._W)(t, e, I.Q, "webp"),
          thumbnailSrc: null != l.thumbnailAssetId ? (0, g._W)(t, l.thumbnailAssetId, I.Q, "webp") : true,
          backgroundSrc: null != l.backgroundAssetId ? (0, g._W)(t, l.backgroundAssetId, I.Q, "webp") : true
        }))
      }
      return [a, r]
    }(null != (r = null == t || null == (a = t.tenantMetadata) || null == (e = a.socialLayer) ? true : e.carouselItems) ? r : [], n, l.assets);
    s(i), u(o)
  }, [t, l.assets, n]), 0 === c.length) ? null : (0, a.jsx)(I.Z, {
    className: k.carousel,
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
  let r = null != t.labelIconAssetId ? (0, g._W)(n, t.labelIconAssetId) : null;
  return (0, a.jsxs)("div", {
    className: k.labelIconContainer,
    children: [null != r && (0, a.jsx)("img", {
      className: k.labelIcon,
      src: r,
      alt: t.label
    }, r), (0, a.jsx)(s.Text, {
      variant: "text-xs/medium",
      color: "text-primary",
      children: t.label
    })]
  })
}

function N(e) {
  let {
    onClick: t,
    children: n,
    ariaLabel: r
  } = e;
  return (0, a.jsx)(s.P3F, {
    onClick: t,
    className: k.modalHeaderButton,
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
    skuId: h,
    applicationId: g,
    guildId: _,
    isStorefront: v,
    onClose: I
  } = e, j = (0, o.e7)([f.Z], () => f.Z.getStorefrontData(_), [_]), O = (0, o.e7)([m.Z], () => m.Z.isFetchingForSKU(h)), E = (0, o.e7)([d.Z], () => d.Z.get(h)), [R, Z] = r.useState(null);
  (0, u.p2)(), r.useEffect(() => {
    null == _ || null == h || m.Z.isFetchingForSKU(h) || (0, b.y)(_, h)
  }, [_, h]);
  let L = r.useCallback(() => {
    null != E && (0, p.JG)((0, C.wQ)(_, E), () => (0, s.showToast)((0, s.createToast)(P.intl.string(P.t["L/PwZf"]), s.ToastType.SUCCESS)))
  }, [_, E]);
  return null == (null == E || null == (t = E.tenantMetadata) ? true : t.socialLayer) || (null == j ? true : j.storefront) == null ? O ? (0, a.jsx)(s.$jN, {}) : null : (0, a.jsx)(s.Y0X, {
    transitionState: n,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: k.modalRoot,
    size: s.CgR.DYNAMIC,
    returnRef: l,
    children: (0, a.jsxs)(s.hzk, {
      className: k.modalContent,
      children: [(0, a.jsxs)("div", {
        className: k.infoContainer,
        children: [(0, a.jsx)(w, {
          applicationId: g,
          selectedCarouselItem: R
        }), (0, a.jsx)(S, {
          sku: E,
          guildId: _,
          shouldShowShopLink: !v,
          onClose: I
        })]
      }), (0, a.jsxs)("div", {
        className: k.carouselContainer,
        children: [(0, a.jsx)(y, {
          sku: E,
          applicationId: g,
          storefront: j.storefront,
          onSelectedCarouselItemChange: Z
        }), (0, a.jsxs)("div", {
          className: k.modalHeaderButtonsContainer,
          children: [(0, a.jsx)(N, {
            onClick: L,
            ariaLabel: P.intl.string(P.t.Ej3B3Y),
            children: (0, a.jsx)(s.xPt, {
              size: "refresh_sm",
              color: "currentColor"
            })
          }), null != E && (0, a.jsx)(c.s, {
            skuId: E.id,
            isCardHovered: true,
            className: i()(k.modalHeaderButton, k.wishlistButton),
            nuxGraphic: (0, x.c)(E)
          }), (0, a.jsx)(N, {
            onClick: I,
            ariaLabel: P.intl.string(P.t.cpT0Cq),
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