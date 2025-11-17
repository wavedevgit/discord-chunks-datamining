/** Chunk was on web.js **/
/** chunk id: 128077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk751648 = require("./751648.js"),
  Chunk388032 = require("./388032.jsx");

function o() {
  let [e, t] = (0, Chunk473749.useState)(""), [n, o] = (0, Chunk473749.useState)([]), [s, l] = (0, Chunk473749.useState)(null), [c, u] = (0, Chunk473749.useState)(false);

  function d(e, t, n) {
    let r = () => {
        u(true), l(null)
      },
      a = e => {
        o(e), u(false), null == n || n(e)
      },
      s = e => {
        l(e), u(false)
      };
    return (0, i.df)({
      skuId: e,
      loadId: t,
      onRedeemStart: r,
      onRedeemSucceed: a,
      onRedeemFail: s
    })
  }
  return (0, Chunk473749.useEffect)(() => {
    if (null != s) return void exports(Chunk388032.intl.format(Chunk388032.t["7gHWrd"], {
      amount: "1 orb",
      errorMessage: s.message
    }));
    if (null != require && require.length > 0) {
      let e = require.map(e => {
        var t;
        return null == (t = e.sku) ? true : t.name
      });
      exports(Chunk388032.intl.format(Chunk388032.t.JxNFav, {
        amountDescription: "1 orb",
        redeemedItemDescription: "".concat(1 === module.length ? "SKU" : "SKUs", ": ").concat(module.join(", "), ". Entitlement ").concat(1 === require.length ? "ID" : "IDs", ": ").concat(require.map(e => e.id).join(", "))
      }));
      return
    }
    exports("")
  }, [require, s]), {
    entitlements: require,
    error: s,
    isSubmitting: c,
    responseMessage: module,
    redeemVirtualCurrency: d
  }
}