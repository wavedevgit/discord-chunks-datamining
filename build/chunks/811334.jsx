/** Chunk was on web.js **/
/** chunk id: 811334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B1: () => m,
  P7: () => y,
  UN: () => E,
  Z9: () => h,
  aO: () => p,
  az: () => b,
  i$: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk937615 = require("./937615.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk585871 = require("./585871.js");
let f = Chunk73800.createContext({
    isPremiumRebrand: false
  }),
  _ = () => Chunk73800.useContext(f).isPremiumRebrand;

function p(e) {
  let {
    children: t,
    className: n,
    isPremiumRebrand: i = false
  } = e;
  return <f.Provider value={{
      isPremiumRebrand: i
    }}><div className={a()(d.table, {
        [d.premiumRebrand]: i
      }, n)}>{t}</div></f.Provider>
}

function h(e) {
  let {
    children: t
  } = e;
  return _() ? <s.X6q variant={"heading-md/semibold"} color={"text-primary"} className={a()(d.header, d.premiumRebrand)}>{t}</s.X6q> : <div className={d.header}>{t}</div>
}

function m(e) {
  let {
    label: t,
    value: n,
    className: i
  } = e;
  return _() ? <div className={a()(d.row, i)}>{<s.Text variant={"text-sm/medium"} color={"currentColor"}>{t}</s.Text>}{<s.Text variant={"text-sm/medium"} color={"currentColor"} className={d.flex}>{n}</s.Text>}</div> : <div className={a()(d.row, i)}>{<div className={d.rowLabel}>{t}</div>}{<div className={d.rowAmount}>{n}</div>}</div>
}

function g(e) {
  let {
    label: t,
    value: n,
    discounts: i,
    originalAmount: o,
    interval: a,
    currency: f,
    className: _,
    intervalCount: p,
    inTrialPeriod: h
  } = e, g = e => null != i ? i.find(t => t.type === e) : null, E = g(l.eW.SUBSCRIPTION_PLAN), b = g(l.eW.ENTITLEMENT), y = null != E ? Math.floor(E.amount / o * 100) : null, O = (0, c.T4)(o, f);
  return <r.Fragment>{<m label={t} value={(0, r.jsxs)(r.Fragment, {
        children: [h ? u.intl.formatToPlainString(u.t.hXcaLS, {
          price: (0, c.T4)(0, f)
        }) : n, null != y ? (0, r.jsxs)("div", {
          className: d.rowPercentDiscount,
          children: ["-", y, "%"]
        }) : null]
      })} className={_} />}{h && <s.Text variant={"text-md/medium"} className={d.trialEndPrice}>{u.intl.format(u.t.v9QeOD, {
        price: O
      })}</s.Text>}{null != y ? <div className={d.rowDiscountOriginalPrice}>{"("}{null != a && null != p ? (0, c.og)(O, a, p) : O}{")"}</div> : null}{null != b ? <div className={d.entitlementDiscountRow}>{u.intl.string(u.t.A7Hpfn)}</div> : null}</r.Fragment>
}

function E(e) {
  let {
    extended: t = false,
    negativeMarginTop: n = false,
    negativeMarginBottom: i = false
  } = e;
  return <div className={a()(d.divider, {
      [d.dividerExtended]: t,
      [d.negativeMarginTop]: n,
      [d.negativeMarginBottom]: i
    })} />
}

function b(e) {
  let {
    label: t,
    value: n,
    className: i
  } = e;
  return <div className={a()(d.totalRow, i)}>{<div className={d.totalLabel}>{t}</div>}{<div className={d.totalAmount}>{n}</div>}</div>
}

function y(e) {
  let {
    children: t,
    className: n
  } = e;
  return <div className={a()(d.finePrint, n)}>{t}</div>
}