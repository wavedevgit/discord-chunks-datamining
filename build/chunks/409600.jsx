/** Chunk was on 61670 **/
/** chunk id: 409600, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk987209 = require("./987209.js"),
  Chunk563132 = require("./563132.js"),
  Chunk107998 = require("./107998.jsx"),
  Chunk791785 = require("./791785.js"),
  Chunk961830 = require("./961830.js"),
  Chunk382263 = require("./382263.jsx"),
  Chunk231338 = require("./231338.js");

function p(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: a,
    applicationId: s,
    analyticsLocationObject: o,
    skuId: u
  } = e, {} = (0, r.JL)(), {
    analyticsLocations: d
  } = (0, l.ZP)();
  return <c.PaymentModal onClose={t} onComplete={n} applicationId={s} skuId={u} initialPlanId={null} analyticsObject={o} analyticsLocations={d} transitionState={a} />
}

function m(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: c,
    analyticsLocations: m,
    isGift: b = false
  } = e, {
    analyticsLocations: g
  } = (0, l.ZP)(m, a.Z.PREMIUM_PAYMENT_MODAL);
  return <l.Gt value={g}><r.PaymentContextProvider loadId={t} stepConfigs={function() {
        let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
        return [u.WA, ...e ? [d.PT] : [], u.s2, ...u.yp, u.wo, u.F7]
      }(b)} applicationId={n} skuIDs={[c]} activeSubscription={null} purchaseType={f.GZ.ONE_TIME} isGift={b}><o.c1><s.KB isGift={b}><p{...function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = n[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, e)} /></s.KB></o.c1></r.PaymentContextProvider></l.Gt>
}