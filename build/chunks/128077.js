/** Chunk was on 86031 **/
/** chunk id: 128077, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => l
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk751648 = require("./751648.js"),
  Chunk388032 = require("./388032.jsx");

function l() {
  let [e, t] = (0, Chunk73800.useState)(""), [r, l] = (0, Chunk73800.useState)([]), [o, s] = (0, Chunk73800.useState)(null), [c, u] = (0, Chunk73800.useState)(false);
  return (0, Chunk73800.useEffect)(() => {
    if (null != o) return void exports(Chunk388032.intl.format(Chunk388032.t["7gHWra"], {
      amount: "1 orb",
      errorMessage: o.message
    }));
    if (null != require && require.length > 0) {
      let e = require.map(e => {
        var t;
        return null == (t = e.sku) ? true : t.name
      });
      exports(Chunk388032.intl.format(Chunk388032.t.JxNFam, {
        amountDescription: "1 orb",
        redeemedItemDescription: "".concat(1 === module.length ? "SKU" : "SKUs", ": ").concat(module.join(", "), ". Entitlement ").concat(1 === require.length ? "ID" : "IDs", ": ").concat(require.map(e => e.id).join(", "))
      }));
      return
    }
    exports("")
  }, [require, o]), {
    entitlements: require,
    error: o,
    isSubmitting: c,
    responseMessage: module,
    redeemVirtualCurrency: function(e, t, r) {
      return (0, a.df)({
        skuId: e,
        loadId: t,
        onRedeemStart: () => {
          u(true), s(null)
        },
        onRedeemSucceed: e => {
          l(e), u(false), null == r || r(e)
        },
        onRedeemFail: e => {
          s(e), u(false)
        }
      })
    }
  }
}