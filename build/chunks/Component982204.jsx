/** Chunk was on web.js **/
/** chunk id: 982204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => R,
  E: () => N
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
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
let y = (e, t) => null != t && e.productLine === g.POd.COLLECTIBLES && t.type !== l.Z.BUNDLE ? "THREE_COLUMN" : "TWO_COLUMN",
  O = e => {
    if (null == e.discounts || 0 === e.discounts.length) return null;
    let t = e.discounts[0];
    return 0 === t.amount ? null : t
  },
  v = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: o()(b.invoiceRow, n),
      children: t
    })
  },
  I = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: o()(b.invoiceTagColumn, n),
      children: t
    })
  },
  T = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: o()(b.invoiceDescriptionColumn, n),
      children: t
    })
  },
  S = e => {
    let {
      children: t,
      className: n
    } = e;
    return (0, r.jsx)("div", {
      className: n,
      children: t
    })
  },
  A = e => {
    let {
      sku: t
    } = e, n = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id));
    if (null != n && t.productLine === g.POd.COLLECTIBLES && n.type !== l.Z.BUNDLE) return (0, r.jsx)(f.O, {
      sku: t,
      fallbackLabel: null
    })
  },
  C = e => {
    let {
      discount: t
    } = e, n = (0, c.e7)([p.default], () => p.default.locale), i = null != t && null != t.percentage_amount ? (0, h.T3)(n, -(t.percentage_amount / 100 * 1)) : null;
    return (0, r.jsx)("div", {
      className: b.invoiceDiscountTag,
      children: (0, r.jsx)(u.Text, {
        variant: "text-sm/semibold",
        color: "always-white",
        children: i
      })
    })
  },
  N = e => {
    let {
      sku: t,
      value: n
    } = e, i = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)), o = y(t, i);
    return (0, r.jsx)(_.aO, {
      className: b.invoiceTable,
      children: (0, r.jsxs)(v, {
        children: ["THREE_COLUMN" === o && (0, r.jsx)(I, {
          children: (0, r.jsx)(A, {
            sku: t
          })
        }), (0, r.jsx)(T, {
          className: b.invoiceRegularText,
          children: t.name
        }), (0, r.jsx)(S, {
          className: b.invoiceRegularText,
          children: n
        })]
      })
    })
  };

function R(e) {
  let {
    sku: t,
    skuPricePreview: n
  } = e;
  s()(null != n.amount, "SKU must have a price set."), s()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
  let i = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
    o = y(t, i),
    a = n.invoice_items[0],
    l = a.unit_price.amount,
    u = !n.tax_inclusive && n.tax > 0,
    f = O(a),
    p = l !== n.amount;
  return (0, r.jsxs)(_.aO, {
    className: b.invoiceTable,
    children: [(0, r.jsxs)(v, {
      children: ["THREE_COLUMN" === o && (0, r.jsx)(I, {
        children: (0, r.jsx)(A, {
          sku: t
        })
      }), (0, r.jsx)(T, {
        className: b.invoiceRegularText,
        children: t.name
      }), (0, r.jsx)(S, {
        className: b.invoiceRegularText,
        children: (0, m.T4)(l, n.currency)
      })]
    }), null != f && (0, r.jsxs)(v, {
      children: ["THREE_COLUMN" === o && (0, r.jsx)(I, {
        children: (0, r.jsx)(C, {
          discount: f
        })
      }), (0, r.jsx)(T, {
        className: b.invoiceDiscountText,
        children: f.description
      }), (0, r.jsx)(S, {
        className: b.invoiceDiscountText,
        children: (0, m.T4)(false * f.amount, n.currency)
      })]
    }), u && (0, r.jsxs)(v, {
      children: ["THREE_COLUMN" === o && (0, r.jsx)(I, {}), (0, r.jsx)(T, {
        className: b.invoiceRegularText,
        children: E.intl.string(E.t["/I8zmJ"])
      }), (0, r.jsx)(S, {
        className: b.invoiceRegularText,
        children: (0, m.T4)(n.tax, n.currency)
      })]
    }), p && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(_.UN, {}), (0, r.jsxs)(v, {
        className: b.totalRow,
        children: [(0, r.jsx)(I, {
          className: b.invoiceRegularText,
          children: E.intl.format(E.t["+B5KfH"], {})
        }), "THREE_COLUMN" === o && (0, r.jsx)(T, {}), (0, r.jsx)(S, {
          className: b.invoiceRegularText,
          children: (0, m.T4)(n.amount, n.currency)
        })]
      })]
    })]
  })
}