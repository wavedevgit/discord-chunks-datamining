/** Chunk was on 81501 **/
/** chunk id: 128077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => c
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk751648 = require("./751648.js"),
  Chunk388032 = require("./388032.jsx");

function c() {
  let [e, t] = (0, Chunk647438.useState)(""), [n, c] = (0, Chunk647438.useState)([]), [i, s] = (0, Chunk647438.useState)(null), [l, d] = (0, Chunk647438.useState)(false);
  return (0, Chunk647438.useEffect)(() => {
    if (null != i) return void exports(Chunk388032.intl.format(Chunk388032.t["7gHWrd"], {
      amount: "1 orb",
      errorMessage: i.message
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
  }, [require, i]), {
    entitlements: require,
    error: i,
    isSubmitting: l,
    responseMessage: module,
    redeemVirtualCurrency: function(e, t, n) {
      return (0, a.df)({
        skuId: e,
        loadId: t,
        onRedeemStart: () => {
          d(true), s(null)
        },
        onRedeemSucceed: e => {
          c(e), d(false), null == n || n(e)
        },
        onRedeemFail: e => {
          s(e), d(false)
        }
      })
    }
  }
}