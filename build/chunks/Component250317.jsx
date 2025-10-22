/** Chunk was on 84802 **/
/** chunk id: 250317, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk411935 = require("./411935.js"),
  Chunk210218 = require("./210218.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk939716 = require("./939716.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk73262 = require("./73262.js");

function C(e) {
  var t, a, l, r;
  let {
    sku: o
  } = e;
  if (null == o) return null;
  let c = (0, s.T4)(null != (l = null == (t = o.price) ? true : t.amount) ? l : 0, null != (r = null == (a = o.price) ? true : a.currency) ? r : g.pK.USD);
  return (0, n.jsxs)("div", {
    className: h.detailsContainer,
    children: [(0, n.jsxs)("div", {
      className: h.titleDescriptionContainer,
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        lineClamp: 2,
        children: o.name
      }), (0, n.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: o.description
      })]
    }), (0, n.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: c
    }), (0, n.jsxs)("div", {
      className: h.buttonsContainer,
      children: [(0, n.jsx)(i.Button, {
        variant: "primary",
        onClick: () => {
          (0, m.P)(o, {
            isGift: false
          })
        },
        text: b.intl.string(b.t.boqtTA),
        fullWidth: true
      }), (0, n.jsx)(i.Button, {
        icon: i.OgN,
        variant: "secondary",
        onClick: () => {
          (0, m.P)(o, {
            isGift: true
          })
        },
        text: b.intl.string(b.t.QAZA5f),
        fullWidth: true
      })]
    })]
  })
}

function _(e) {
  var t, a, l;
  let {
    sku: r,
    applicationId: i,
    storefront: o
  } = e;
  if (null == r) return null;
  let s = null == (a = r.tenantMetadata) || null == (t = a.socialLayer) ? true : t.carouselItems;
  if (null == s || 0 === s.length) return null;
  let u = (l = o.assets, null == s || 0 === s.length ? [] : s.map(e => {
    let t = null != e.assetId ? l[e.assetId] : null;
    return null == t ? null : t.mime_type.startsWith("video/") ? {
      type: "video",
      src: (0, c._W)(i, t, p.Q, "mp4"),
      videoThumbnailSrc: (0, c._W)(i, t, p.Q, "webp"),
      thumbnailSrc: null != e.thumbnailAssetId ? (0, c._W)(i, e.thumbnailAssetId, p.Q, "webp") : true,
      backgroundSrc: null != e.backgroundAssetId ? (0, c._W)(i, e.backgroundAssetId, p.Q, "webp") : true
    } : {
      type: "image",
      src: (0, c._W)(i, t, p.Q, "webp"),
      thumbnailSrc: null != e.thumbnailAssetId ? (0, c._W)(i, e.thumbnailAssetId, p.Q, "webp") : true,
      backgroundSrc: null != e.backgroundAssetId ? (0, c._W)(i, e.backgroundAssetId, p.Q, "webp") : true
    }
  }).filter(e => null != e));
  return 0 === u.length ? null : (0, n.jsx)(p.Z, {
    className: h.carousel,
    items: u,
    paused: true
  })
}

function f(e) {
  let {
    socialLayerTenantMetadata: t,
    selectedCarouselItemIndex: a,
    applicationId: l
  } = e;
  if (null == t || t.carouselItems.length <= a) return null;
  let r = t.carouselItems[a];
  if (null == r) return null;
  let o = null != r.labelIconAssetId ? (0, c._W)(l, r.labelIconAssetId) : null;
  return (0, n.jsxs)("div", {
    className: h.labelIconContainer,
    children: [null != o && (0, n.jsx)("img", {
      className: h.labelIcon,
      src: o,
      alt: r.label
    }), (0, n.jsx)(i.Text, {
      variant: "text-xs/medium",
      color: "text-primary",
      children: r.label
    })]
  })
}

function v(e) {
  let {
    onClick: t,
    children: a,
    "aria-label": l
  } = e;
  return (0, n.jsx)(i.P3F, {
    onClick: t,
    className: h.modalHeaderButton,
    "aria-label": l,
    role: "button",
    children: a
  })
}

function I(e) {
  var t, a;
  let {
    transitionState: s,
    returnRef: c,
    skuId: m,
    applicationId: p,
    guildId: g,
    onClose: I
  } = e, x = (0, r.e7)([d.Z], () => d.Z.getStorefrontData(g), [g]), j = (0, r.e7)([o.Z], () => o.Z.get(m)), y = null == j || null == (t = j.tenantMetadata) ? true : t.socialLayer, [k, P] = l.useState(0);
  return (l.useEffect(() => {
    null == x && (0, u.Y)(g)
  }, [g, x]), null == y || null == x || null == x.storefront) ? null : (0, n.jsx)(i.Y0X, {
    transitionState: s,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: h.modalRoot,
    size: i.CgR.DYNAMIC,
    returnRef: c,
    children: (0, n.jsxs)(i.hzk, {
      className: h.modalContent,
      children: [(0, n.jsxs)("div", {
        className: h.infoContainer,
        children: [(0, n.jsx)(f, {
          applicationId: p,
          socialLayerTenantMetadata: null == j || null == (a = j.tenantMetadata) ? true : a.socialLayer,
          selectedCarouselItemIndex: k
        }), (0, n.jsx)(C, {
          sku: j
        })]
      }), (0, n.jsxs)("div", {
        className: h.carouselContainer,
        children: [(0, n.jsx)(_, {
          sku: j,
          applicationId: p,
          storefront: x.storefront
        }), (0, n.jsx)("div", {
          className: h.modalHeaderButtonsContainer,
          children: (0, n.jsx)(v, {
            onClick: I,
            "aria-label": b.intl.string(b.t.cpT0Cq),
            children: (0, n.jsx)(i.Dio, {
              size: "md",
              color: "currentColor"
            })
          })
        })]
      })]
    })
  })
}