/** Chunk was on web.js **/
/** chunk id: 982204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => D,
  E: () => R
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk473608 = require("./473608.jsx"),
  Chunk811334 = require("./811334.jsx"),
  Chunk703400 = require("./703400.jsx"),
  Chunk848118 = require("./848118.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk930153 = require("./930153.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk221152 = require("./221152.js");
let v = (e, t) => {
    let n = null != t && e.productLine === b.POd.COLLECTIBLES && t.type !== l.Z.BUNDLE,
      r = e.productLine === b.POd.SOCIAL_LAYER_GAME_ITEM;
    return n || r ? "THREE_COLUMN" : "TWO_COLUMN"
  },
  S = e => {
    if (null == e.discounts || 0 === e.discounts.length) return null;
    let t = e.discounts[0];
    return 0 === t.amount ? null : t
  },
  I = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(O.invoiceRow, n),
      children: t
    })
  },
  T = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(O.invoiceTagColumn, n),
      children: t
    })
  },
  C = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(O.invoiceDescriptionColumn, n),
      children: t
    })
  },
  A = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: n,
      children: t
    })
  },
  N = e => {
    let {
      sku: t
    } = e, n = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id));
    return null != n && t.productLine === b.POd.COLLECTIBLES && n.type !== l.Z.BUNDLE ? (0, r.jsx)(f.O, {
      sku: t,
      fallbackLabel: null
    }) : t.productLine === b.POd.SOCIAL_LAYER_GAME_ITEM ? (0, r.jsx)(m.A, {
      containerClassName: O.slayerStorefrontProductPreview,
      sku: t,
      shape: "square"
    }) : null
  },
  P = e => {
    let {
      discount: t
    } = e, n = (0, c.e7)([h.default], () => h.default.locale), i = null != t && null != t.percentage_amount ? (0, g.T3)(n, -(t.percentage_amount / 100 * 1)) : null;
    return (0, r.jsx)("div", {
      className: O.invoiceDiscountTag,
      children: (0, r.jsx)(u.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: i
      })
    })
  },
  R = e => {
    let {
      sku: t,
      value: n
    } = e, i = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)), a = v(t, i);
    return (0, r.jsx)(p.aO, {
      className: O.invoiceTable,
      children: (0, r.jsxs)(I, {
        children: ["THREE_COLUMN" === a && (0, r.jsx)(T, {
          children: (0, r.jsx)(N, {
            sku: t
          })
        }), (0, r.jsx)(C, {
          className: O.invoiceRegularText,
          children: t.name
        }), (0, r.jsx)(A, {
          className: O.invoiceRegularText,
          children: n
        })]
      })
    })
  };

function D(e) {
  let {
    sku: t,
    skuPricePreview: n,
    application: i
  } = e;
  s()(null != n.amount, "SKU must have a price set."), s()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
  let a = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
    o = v(t, a),
    l = n.invoice_items[0],
    f = l.unit_price.amount,
    m = !n.tax_inclusive && n.tax > 0,
    h = S(l),
    g = f !== n.amount,
    R = t.productLine === b.POd.SOCIAL_LAYER_GAME_ITEM;
  return (0, r.jsxs)(p.aO, {
    className: O.invoiceTable,
    children: [(0, r.jsxs)(I, {
      children: ["THREE_COLUMN" === o && (0, r.jsx)(T, {
        children: (0, r.jsx)(N, {
          sku: t
        })
      }), (0, r.jsxs)(C, {
        className: O.invoiceRegularText,
        children: [R && (0, r.jsx)(_.e, {
          application: i
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/semibold",
          children: t.name
        })]
      }), (0, r.jsx)(A, {
        className: O.invoiceRegularText,
        children: (0, E.T4)(f, n.currency)
      })]
    }), null != h && (0, r.jsxs)(I, {
      children: ["THREE_COLUMN" === o && (0, r.jsx)(T, {
        children: (0, r.jsx)(P, {
          discount: h
        })
      }), (0, r.jsx)(C, {
        className: O.invoiceDiscountText,
        children: h.description
      }), (0, r.jsx)(A, {
        className: O.invoiceDiscountText,
        children: (0, E.T4)(false * h.amount, n.currency)
      })]
    }), m && (0, r.jsxs)(I, {
      children: ["THREE_COLUMN" === o && (0, r.jsx)(T, {}), (0, r.jsx)(C, {
        className: O.invoiceRegularText,
        children: y.intl.string(y.t["/I8zmP"])
      }), (0, r.jsx)(A, {
        className: O.invoiceRegularText,
        children: (0, E.T4)(n.tax, n.currency)
      })]
    }), g && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.UN, {}), (0, r.jsxs)(I, {
        className: O.totalRow,
        children: [(0, r.jsx)(T, {
          className: O.invoiceRegularText,
          children: y.intl.format(y.t["+B5KfG"], {})
        }), "THREE_COLUMN" === o && (0, r.jsx)(C, {}), (0, r.jsx)(A, {
          className: O.invoiceRegularText,
          children: (0, E.T4)(n.amount, n.currency)
        })]
      })]
    })]
  })
}