/** Chunk was on 49297 **/
/** chunk id: 760941, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk975571 = require("./975571.js"),
  Chunk580630 = require("./580630.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let u = t => {
  let {
    modalProps: e,
    onConfirm: r,
    onCancel: u,
    newInvoice: p
  } = t, s = {
    newCurrencyAndPrice: (0, o.$g)(p.total, p.currency),
    helpCenterLink: c.A.getArticleURL(l.MVz.LOCALIZED_PRICING)
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
    subtitle: a.intl.format(a.t.oZBduD, s),
    variant: "primary",
    confirmText: a.intl.string(a.t.p89ACt),
    cancelText: a.intl.string(a.t.gm1Vej),
    onConfirm: r,
    onCancel: u
  }, e))
}