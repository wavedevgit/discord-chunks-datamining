/** Chunk was on 84802 **/
/** chunk id: 250317, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function C(n) {
  var e, t, a, i;
  let {
    sku: r
  } = n;
  if (null == r) return null;
  let c = (0, s.T4)(null != (a = null == (e = r.price) ? true : e.amount) ? a : 0, null != (i = null == (t = r.price) ? true : t.currency) ? i : u.pK.USD);
  return (0, l.jsxs)("div", {
    className: x.detailsContainer,
    children: [(0, l.jsxs)("div", {
      className: x.titleDescriptionContainer,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-xl/bold",
        color: "header-primary",
        lineClamp: 2,
        children: r.name
      }), (0, l.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        children: r.description
      })]
    }), (0, l.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: c
    }), (0, l.jsxs)("div", {
      className: x.buttonsContainer,
      children: [(0, l.jsx)(o.Button, {
        variant: "primary",
        onClick: () => {
          (0, d.P)(r, {
            isGift: false
          })
        },
        text: m.intl.string(m.t.boqtTE),
        fullWidth: true
      }), (0, l.jsx)(o.Button, {
        icon: o.OgN,
        variant: "secondary",
        onClick: () => {
          (0, d.P)(r, {
            isGift: true
          })
        },
        text: m.intl.string(m.t.QAZA5e),
        fullWidth: true
      })]
    })]
  })
}

function f(n) {
  let {
    socialLayerTenantMetadata: e,
    selectedCarouselItemIndex: t,
    applicationId: a
  } = n;
  if (null == e || e.carouselItems.length <= t) return null;
  let i = e.carouselItems[t];
  if (null == i) return null;
  let r = null != i.labelIconAssetId ? (0, c._W)(a, i.labelIconAssetId) : null;
  return (0, l.jsxs)("div", {
    className: x.labelIconContainer,
    children: [null != r && (0, l.jsx)("img", {
      className: x.labelIcon,
      src: r,
      alt: i.label
    }), (0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      color: "text-primary",
      children: i.label
    })]
  })
}

function h(n) {
  var e, t;
  let {
    transitionState: s,
    returnRef: c,
    skuId: d,
    applicationId: u
  } = n, m = (0, i.e7)([r.Z], () => r.Z.get(d)), h = null == m || null == (e = m.tenantMetadata) ? true : e.socialLayer, [p, _] = a.useState(0);
  return null == h ? null : (0, l.jsx)(o.Y0X, {
    transitionState: s,
    "hide-shadow": true,
    parentComponent: "SocialLayerStorefrontProductDetailsModal",
    className: x.modalRoot,
    size: o.CgR.DYNAMIC,
    returnRef: c,
    children: (0, l.jsx)(o.hzk, {
      className: x.modalContent,
      children: (0, l.jsxs)("div", {
        className: x.infoContainer,
        children: [(0, l.jsx)(f, {
          applicationId: u,
          socialLayerTenantMetadata: null == m || null == (t = m.tenantMetadata) ? true : t.socialLayer,
          selectedCarouselItemIndex: p
        }), (0, l.jsx)(C, {
          sku: m
        })]
      })
    })
  })
}