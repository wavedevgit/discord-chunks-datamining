/** Chunk was on web.js **/
/** chunk id: 219929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qy: () => u,
  Uy: () => d,
  ZP: () => _
}), require("./704826.js"), require("./35282.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk843030 = require("./843030.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var u = function(e) {
  return e.UNKNOWN = "unknown", e.VISA = "visa", e.DISCOVER = "discover", e.MASTERCARD = "mastercard", e.AMEX = "amex", e.PAYPAL = "paypal", e.PAYMENT_REQUEST = "paymentRequest", e.G_PAY = "gPay", e.DINERS = "diners", e.JCB = "jcb", e.UNIONPAY = "unionpay", e.SOFORT = "sofort", e.PRZELEWY24 = "przelewy24", e.GIROPAY = "giropay", e.PAYSAFECARD = "paysafecard", e.GCASH = "gcash", e.GRABPAY = "grabpay", e.MOMO_WALLET = "momo_wallet", e.VENMO = "venmo", e.KAKAOPAY = "kakaopay", e.GOPAY_WALLET = "gopay_wallet", e.BANCONTACT = "bancontact", e.EPS = "eps", e.IDEAL = "ideal", e.CASH_APP = "cash_app", e.APPLE = "apple", e.APPLE_LIGHT = "apple_light", e
}({});
let d = {
  SMALL: Chunk843030.cardIconSmall,
  MEDIUM: Chunk843030.cardIconMedium,
  LARGE: Chunk843030.cardIconLarge,
  XLARGE: Chunk843030.cardIconXLarge
};
class f extends(r = Chunk73800.PureComponent) {
  static getType(e) {
    return null == e ? "unknown" : u[e.replace(/[^a-z0-9_]/gi, "").toUpperCase()] || "unknown"
  }
  render() {
    let {
      flipped: e,
      type: t,
      className: n,
      size: r
    } = this.props;
    return (0, Chunk255367.jsx)("div", {
      className: s()(r, Chunk843030[exports], require, {
        [Chunk843030.flipped]: module
      }),
      children: exports
    })
  }
}
c(f, "Types", u), c(f, "Sizes", d), c(f, "defaultProps", {
  size: d.SMALL,
  flipped: false
});
let _ = f