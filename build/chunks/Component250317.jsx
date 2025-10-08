/** Chunk was on 84802 **/
/** chunk id: 250317, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk55563 = require("./55563.js"),
  Chunk937615 = require("./937615.js"),
  Chunk73346 = require("./73346.js"),
  Chunk594914 = require("./594914.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk424215 = require("./424215.js");

function p(e) {
  var n, t, a, i;
  let {
    sku: o
  } = e;
  if (null == o) return null;
  let s = (0, c.T4)(null != (a = null == (n = o.price) ? true : n.amount) ? a : 0, null != (i = null == (t = o.price) ? true : t.currency) ? i : u.pK.USD),
    p = e => {
      let {
        isGift: n
      } = e;
      (0, d.P)(o, {
        isGift: n
      })
    };
  return (0, l.jsxs)("div", {
    className: m.detailsContainer,
    children: [(0, l.jsxs)("div", {
      className: m.titleDescriptionContainer,
      children: [(0, l.jsx)(r.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        lineClamp: 2,
        children: o.name
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: o.description
      })]
    }), (0, l.jsx)(r.X6q, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: s
    }), (0, l.jsxs)("div", {
      className: m.buttonsContainer,
      children: [(0, l.jsx)(r.zxk, {
        variant: "primary",
        onClick: () => {
          p({
            isGift: false
          })
        },
        text: f.intl.string(f.t.boqtTE),
        fullWidth: true
      }), (0, l.jsx)(r.zxk, {
        icon: r.OgN,
        variant: "secondary",
        onClick: () => {
          p({
            isGift: true
          })
        },
        text: f.intl.string(f.t.QAZA5e),
        fullWidth: true
      })]
    })]
  })
}

function x(e) {
  let {
    socialLayerTenantMetadata: n,
    selectedCarouselItemIndex: t,
    applicationId: a
  } = e;
  if (null == n || n.carouselItems.length <= t) return null;
  let i = n.carouselItems[t];
  if (null == i) return null;
  let o = null != i.labelIconAssetId ? (0, s._W)(a, i.labelIconAssetId) : null;
  return (0, l.jsxs)("div", {
    className: m.labelIconContainer,
    children: [null != o && (0, l.jsx)("img", {
      className: m.labelIcon,
      src: o,
      alt: i.label
    }), (0, l.jsx)(r.Text, {
      variant: "text-xs/medium",
      color: "text-primary",
      children: i.label
    })]
  })
}

function b(e) {
  var n, t;
  let {
    transitionState: c,
    returnRef: s,
    skuId: d,
    applicationId: u
  } = e, f = (0, i.e7)([o.Z], () => o.Z.get(d)), b = null == f || null == (n = f.tenantMetadata) ? true : n.socialLayer, [h, C] = a.useState(0);
  return null == b ? null : (0, l.jsx)(r.Y0X, {
    transitionState: c,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: m.modalRoot,
    size: r.CgR.DYNAMIC,
    returnRef: s,
    children: (0, l.jsx)(r.hzk, {
      className: m.modalContent,
      children: (0, l.jsxs)("div", {
        className: m.infoContainer,
        children: [(0, l.jsx)(x, {
          applicationId: u,
          socialLayerTenantMetadata: null == f || null == (t = f.tenantMetadata) ? true : t.socialLayer,
          selectedCarouselItemIndex: h
        }), (0, l.jsx)(p, {
          sku: f
        })]
      })
    })
  })
}