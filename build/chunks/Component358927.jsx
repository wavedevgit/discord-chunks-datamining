/** Chunk was on 97516 **/
/** chunk id: 358927, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let s = e => {
  var t, r;
  let {
    modalProps: s,
    onConfirm: u,
    onCancel: b,
    newInvoice: f
  } = e, O = {
    newCurrencyAndPrice: (0, l.T4)(f.total, f.currency),
    helpCenterLink: i.Z.getArticleURL(a.BhN.LOCALIZED_PRICING)
  };
  return (0, n.jsx)(c.ConfirmModal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    header: p.intl.string(p.t.eZFTbu),
    confirmText: p.intl.string(p.t.p89ACt),
    cancelText: p.intl.string(p.t.gm1Vej),
    onConfirm: u,
    onCancel: b,
    confirmButtonColor: o.zx.Colors.BRAND
  }, s), r = r = {
    children: (0, n.jsx)(c.Text, {
      variant: "text-md/normal",
      children: p.intl.format(p.t.oZBduD, O)
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}