/** Chunk was on 84802 **/
/** chunk id: 250317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
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
  Chunk424215 = require("./424215.js");

function C(e) {
  var t, n, r, l;
  let {
    sku: o
  } = e;
  if (null == o) return null;
  let c = (0, s.T4)(null != (r = null == (t = o.price) ? true : t.amount) ? r : 0, null != (l = null == (n = o.price) ? true : n.currency) ? l : g.pK.USD);
  return (0, a.jsxs)("div", {
    className: _.detailsContainer,
    children: [(0, a.jsxs)("div", {
      className: _.titleDescriptionContainer,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        lineClamp: 2,
        children: o.name
      }), (0, a.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: o.description
      })]
    }), (0, a.jsx)(i.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: c
    }), (0, a.jsxs)("div", {
      className: _.buttonsContainer,
      children: [(0, a.jsx)(i.Button, {
        variant: "primary",
        onClick: () => {
          (0, m.P)(o, {
            isGift: false
          })
        },
        text: h.intl.string(h.t.boqtTA),
        fullWidth: true
      }), (0, a.jsx)(i.Button, {
        icon: i.OgN,
        variant: "secondary",
        onClick: () => {
          (0, m.P)(o, {
            isGift: true
          })
        },
        text: h.intl.string(h.t.QAZA5f),
        fullWidth: true
      })]
    })]
  })
}

function b(e) {
  var t, n, r;
  let {
    sku: l,
    applicationId: i,
    storefront: o
  } = e;
  if (null == l) return null;
  let s = null == (n = l.tenantMetadata) || null == (t = n.socialLayer) ? true : t.carouselItems;
  if (null == s || 0 === s.length) return null;
  let u = (r = o.assets, null == s || 0 === s.length ? [] : s.map(e => {
    let t = null != e.assetId ? r[e.assetId] : null;
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
  return 0 === u.length ? null : (0, a.jsx)(p.Z, {
    className: _.carousel,
    items: u,
    paused: true
  })
}

function f(e) {
  let {
    socialLayerTenantMetadata: t,
    selectedCarouselItemIndex: n,
    applicationId: r
  } = e;
  if (null == t || t.carouselItems.length <= n) return null;
  let l = t.carouselItems[n];
  if (null == l) return null;
  let o = null != l.labelIconAssetId ? (0, c._W)(r, l.labelIconAssetId) : null;
  return (0, a.jsxs)("div", {
    className: _.labelIconContainer,
    children: [null != o && (0, a.jsx)("img", {
      className: _.labelIcon,
      src: o,
      alt: l.label
    }), (0, a.jsx)(i.Text, {
      variant: "text-xs/medium",
      color: "text-primary",
      children: l.label
    })]
  })
}

function I(e) {
  let {
    onClick: t,
    children: n,
    "aria-label": r
  } = e;
  return (0, a.jsx)(i.P3F, {
    onClick: t,
    className: _.modalHeaderButton,
    "aria-label": r,
    role: "button",
    children: n
  })
}

function v(e) {
  var t, n;
  let {
    transitionState: s,
    returnRef: c,
    skuId: m,
    applicationId: p,
    guildId: g,
    onClose: v
  } = e, x = (0, l.e7)([d.Z], () => d.Z.getStorefrontData(g), [g]), P = (0, l.e7)([o.Z], () => o.Z.get(m)), S = null == P || null == (t = P.tenantMetadata) ? true : t.socialLayer, [j, y] = r.useState(0);
  return (r.useEffect(() => {
    null == x && (0, u.Y)(g)
  }, [g, x]), null == S || null == x || null == x.storefront) ? null : (0, a.jsx)(i.Y0X, {
    transitionState: s,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: _.modalRoot,
    size: i.CgR.DYNAMIC,
    returnRef: c,
    children: (0, a.jsxs)(i.hzk, {
      className: _.modalContent,
      children: [(0, a.jsxs)("div", {
        className: _.infoContainer,
        children: [(0, a.jsx)(f, {
          applicationId: p,
          socialLayerTenantMetadata: null == P || null == (n = P.tenantMetadata) ? true : n.socialLayer,
          selectedCarouselItemIndex: j
        }), (0, a.jsx)(C, {
          sku: P
        })]
      }), (0, a.jsxs)("div", {
        className: _.carouselContainer,
        children: [(0, a.jsx)(b, {
          sku: P,
          applicationId: p,
          storefront: x.storefront
        }), (0, a.jsx)("div", {
          className: _.modalHeaderButtonsContainer,
          children: (0, a.jsx)(I, {
            onClick: v,
            "aria-label": h.intl.string(h.t.cpT0Cq),
            children: (0, a.jsx)(i.Dio, {
              size: "md",
              color: "currentColor"
            })
          })
        })]
      })]
    })
  })
}