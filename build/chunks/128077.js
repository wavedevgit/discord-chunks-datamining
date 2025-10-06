/** Chunk was on 74560 **/
/** chunk id: 128077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk751648 = require("./751648.js"),
  Chunk388032 = require("./388032.jsx");

function s() {
  let [e, t] = (0, Chunk647438.useState)(""), [n, s] = (0, Chunk647438.useState)([]), [o, l] = (0, Chunk647438.useState)(null), [c, d] = (0, Chunk647438.useState)(false);
  return (0, Chunk647438.useEffect)(() => {
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
    redeemVirtualCurrency: function(e, t, n) {
      return (0, r.df)({
        skuId: e,
        loadId: t,
        onRedeemStart: () => {
          d(true), l(null)
        },
        onRedeemSucceed: e => {
          s(e), d(false), null == n || n(e)
        },
        onRedeemFail: e => {
          l(e), d(false)
        }
      })
    }
  }
}