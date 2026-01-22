/** Chunk was on web.js **/
/** chunk id: 812745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => _,
  Be: () => u,
  Nj: () => d,
  y3: () => f
}), require("./747238.js"), require("./812715.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk666817 = require("./666817.js");

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

function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "dark";
  if ("light" === t) {
    if ("apple" === e) return n(685430);
    if ("venmo" === e) return n(779777)
  }
  switch (e) {
    case "visa":
      return n(998723);
    case "amex":
      return n(44377);
    case "discover":
      return n(216329);
    case "mastercard":
      return n(2832);
    case "paypal":
      return n(331273);
    case "paymentRequest":
      return n(414456);
    case "gPay":
      return n(696551);
    case "sofort":
      return n(320648);
    case "przelewy24":
      return n(418971);
    case "giropay":
      return n(856718);
    case "paysafecard":
      return n(130512);
    case "gcash":
      return n(446409);
    case "grabpay":
      return n(238355);
    case "momo_wallet":
      return n(510669);
    case "venmo":
      return n(280427);
    case "kakaopay":
      return n(503714);
    case "gopay_wallet":
      return n(235323);
    case "bancontact":
      return n(999776);
    case "eps":
      return n(116129);
    case "ideal":
      return n(147496);
    case "cash_app":
      return n(242187);
    case "apple":
      return n(685430);
    case "apple_light":
      return n(545350);
    default:
      return n(511403)
  }
}
let f = {
  SMALL: Chunk666817.cardIconSmall,
  MEDIUM: Chunk666817.cardIconMedium,
  LARGE: Chunk666817.cardIconLarge,
  XLARGE: Chunk666817.cardIconXLarge
};
class p extends(r = Chunk64700.PureComponent) {
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
    return (0, i.jsx)("div", {
      className: o()(r, l[t], n, {
        [l.flipped]: e
      }),
      children: t
    })
  }
}
c(p, "Types", u), c(p, "Sizes", f), c(p, "defaultProps", {
  size: f.SMALL,
  flipped: false
});
let _ = p