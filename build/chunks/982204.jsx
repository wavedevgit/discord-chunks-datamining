/** Chunk was on web.js **/
/** chunk id: 982204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => P,
  E: () => R
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk979554 = require("./979554.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk228624 = require("./228624.js"),
  Chunk473608 = require("./473608.jsx"),
  Chunk811334 = require("./811334.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk930153 = require("./930153.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk63477 = require("./63477.js");
let O = (e, t, n) => null != n && e.productLine === E.POd.COLLECTIBLES && n.type !== l.Z.BUNDLE && t ? "THREE_COLUMN" : "TWO_COLUMN",
  v = e => {
    if (null == e.discounts || 0 === e.discounts.length) return null;
    let t = e.discounts[0];
    return 0 === t.amount ? null : t
  },
  I = e => {
    let {
      children: t,
      className: n
    } = e;
    return <div className={o()(y.invoiceRow, n)}>{t}</div>
  },
  T = e => {
    let {
      children: t,
      className: n
    } = e;
    return <div className={o()(y.invoiceTagColumn, n)}>{t}</div>
  },
  S = e => {
    let {
      children: t,
      className: n
    } = e;
    return <div className={o()(y.invoiceDescriptionColumn, n)}>{t}</div>
  },
  A = e => {
    let {
      children: t,
      className: n
    } = e;
    return <div className={n}>{t}</div>
  },
  N = e => {
    let {
      sku: t
    } = e, n = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id));
    if (null != n && t.productLine === E.POd.COLLECTIBLES && n.type !== l.Z.BUNDLE) return <_.O sku={t} fallbackLabel={null} />
  },
  C = e => {
    let {
      discount: t
    } = e, n = (0, c.e7)([h.default], () => h.default.locale), i = null != t && null != t.percentage_amount ? (0, m.T3)(n, -(t.percentage_amount / 100 * 1)) : null;
    return <div className={y.invoiceDiscountTag}><u.Text variant={"text-sm/semibold"} color={"always-white"}>{i}</u.Text></div>
  },
  R = e => {
    let {
      sku: t,
      value: n
    } = e, i = (0, f.ed)("SKUInvoicePreview"), o = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)), a = O(t, i, o);
    return <p.aO className={y.invoiceTable}><I>{"THREE_COLUMN" === a && <T><N sku={t} /></T>}{<S className={y.invoiceRegularText}>{t.name}</S>}{<A className={y.invoiceRegularText}>{n}</A>}</I></p.aO>
  };

function P(e) {
  let {
    sku: t,
    skuPricePreview: n
  } = e;
  s()(null != n.amount, "SKU must have a price set."), s()(null != n.invoice_items && 1 === n.invoice_items.length, "SKU preview must have single line item");
  let i = (0, f.ed)("SKUInvoicePreview"),
    o = (0, c.e7)([d.Z], () => d.Z.getProduct(t.id)),
    a = O(t, i, o),
    l = n.invoice_items[0],
    u = l.unit_price.amount,
    _ = !n.tax_inclusive && n.tax > 0,
    h = v(l),
    m = u !== n.amount;
  return <p.aO className={y.invoiceTable}>{<I>{"THREE_COLUMN" === a && <T><N sku={t} /></T>}{<S className={y.invoiceRegularText}>{t.name}</S>}{<A className={y.invoiceRegularText}>{(0, g.T4)(u, n.currency)}</A>}</I>}{null != h && <I>{"THREE_COLUMN" === a && <T><C discount={h} /></T>}{<S className={y.invoiceDiscountText}>{h.description}</S>}{<A className={y.invoiceDiscountText}>{(0, g.T4)(false * h.amount, n.currency)}</A>}</I>}{_ && <I>{"THREE_COLUMN" === a && <T />}{<S className={y.invoiceRegularText}>{b.intl.string(b.t["/I8zmJ"])}</S>}{<A className={y.invoiceRegularText}>{(0, g.T4)(n.tax, n.currency)}</A>}</I>}{m && <r.Fragment>{<p.UN />}{<I className={y.totalRow}>{<T className={y.invoiceRegularText}>{b.intl.format(b.t["+B5KfH"], {})}</T>}{"THREE_COLUMN" === a && <S />}{<A className={y.invoiceRegularText}>{(0, g.T4)(n.amount, n.currency)}</A>}</I>}</r.Fragment>}</p.aO>
}