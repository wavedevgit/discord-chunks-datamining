/** Chunk was on web.js **/
/** chunk id: 982204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => N,
  E: () => C
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk473608 = require("./473608.jsx"),
  Chunk811334 = require("./811334.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk930153 = require("./930153.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk221152 = require("./221152.js");
let b = (e, t) => null != t && e.productLine === m.POd.COLLECTIBLES ? "THREE_COLUMN" : "TWO_COLUMN",
  y = e => {
    if (null == e.discounts || 0 === e.discounts.length) return null;
    let t = e.discounts[0];
    return 0 === t.amount ? null : t
  },
  O = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(E.invoiceRow, n),
      children: t
    })
  },
  v = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(E.invoiceTagColumn, n),
      children: t
    })
  },
  I = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: a()(E.invoiceDescriptionColumn, n),
      children: t
    })
  },
  T = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: n,
      children: t
    })
  },
  S = e => {
    let {
      sku: t
    } = e;
    if (null != (0, l.e7)([u.Z], () => u.Z.getProduct(t.id)) && t.productLine === m.POd.COLLECTIBLES) return (0, r.jsx)(d.O, {
      sku: t,
      fallbackLabel: null
    })
  },
  A = e => {
    let {
      discount: t
    } = e, n = (0, l.e7)([_.default], () => _.default.locale), i = null != t && null != t.percentage_amount ? (0, p.T3)(n, -(t.percentage_amount / 100 * 1)) : null;
    return (0, r.jsx)("div", {
      className: E.invoiceDiscountTag,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: i
      })
    })
  },
  C = e => {
    let {
      sku: t,
      value: n
    } = e, i = (0, l.e7)([u.Z], () => u.Z.getProduct(t.id)), a = b(t, i);
    return (0, r.jsx)(f.aO, {
      className: E.invoiceTable,
      children: (0, r.jsxs)(O, {
        children: ["THREE_COLUMN" === a && (0, r.jsx)(v, {
          children: (0, r.jsx)(S, {
            sku: t
          })
        }), (0, r.jsx)(I, {
          className: E.invoiceRegularText,
          children: t.name
        }), (0, r.jsx)(T, {
          className: E.invoiceRegularText,
          children: n
        })]
      })
    })
  };

function N(e) {
  let {
    sku: t,
    skuPricePreview: n
  } = e;
  s()(null != n.amount, "SKU must have a price set."), s()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
  let i = (0, l.e7)([u.Z], () => u.Z.getProduct(t.id)),
    a = b(t, i),
    o = n.invoice_items[0],
    c = o.unit_price.amount,
    d = !n.tax_inclusive && n.tax > 0,
    _ = y(o),
    p = c !== n.amount;
  return (0, r.jsxs)(f.aO, {
    className: E.invoiceTable,
    children: [(0, r.jsxs)(O, {
      children: ["THREE_COLUMN" === a && (0, r.jsx)(v, {
        children: (0, r.jsx)(S, {
          sku: t
        })
      }), (0, r.jsx)(I, {
        className: E.invoiceRegularText,
        children: t.name
      }), (0, r.jsx)(T, {
        className: E.invoiceRegularText,
        children: (0, h.T4)(c, n.currency)
      })]
    }), null != _ && (0, r.jsxs)(O, {
      children: ["THREE_COLUMN" === a && (0, r.jsx)(v, {
        children: (0, r.jsx)(A, {
          discount: _
        })
      }), (0, r.jsx)(I, {
        className: E.invoiceDiscountText,
        children: _.description
      }), (0, r.jsx)(T, {
        className: E.invoiceDiscountText,
        children: (0, h.T4)(false * _.amount, n.currency)
      })]
    }), d && (0, r.jsxs)(O, {
      children: ["THREE_COLUMN" === a && (0, r.jsx)(v, {}), (0, r.jsx)(I, {
        className: E.invoiceRegularText,
        children: g.intl.string(g.t["/I8zmJ"])
      }), (0, r.jsx)(T, {
        className: E.invoiceRegularText,
        children: (0, h.T4)(n.tax, n.currency)
      })]
    }), p && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(f.UN, {}), (0, r.jsxs)(O, {
        className: E.totalRow,
        children: [(0, r.jsx)(v, {
          className: E.invoiceRegularText,
          children: g.intl.format(g.t["+B5KfH"], {})
        }), "THREE_COLUMN" === a && (0, r.jsx)(I, {}), (0, r.jsx)(T, {
          className: E.invoiceRegularText,
          children: (0, h.T4)(n.amount, n.currency)
        })]
      })]
    })]
  })
}