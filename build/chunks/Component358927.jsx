/** Chunk was on 97516 **/
/** chunk id: 358927, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk63063 = require("./63063.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let u = t => {
  let {
    modalProps: e,
    onConfirm: r,
    onCancel: u,
    newInvoice: f
  } = t, p = {
    newCurrencyAndPrice: (0, o.T4)(f.total, f.currency),
    helpCenterLink: c.Z.getArticleURL(l.BhN.LOCALIZED_PRICING)
  };
  return (0, n.jsx)(i.ConfirmModal, function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
        return Object.getOwnPropertyDescriptor(r, t).enumerable
      }))), n.forEach(function(e) {
        var n;
        n = r[e], e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : t[e] = n
      })
    }
    return t
  }({
    title: a.intl.string(a.t.eZFTbu),
    subtitle: a.intl.format(a.t.oZBduD, p),
    variant: "primary",
    confirmText: a.intl.string(a.t.p89ACt),
    cancelText: a.intl.string(a.t.gm1Vej),
    onConfirm: r,
    onCancel: u
  }, e))
}