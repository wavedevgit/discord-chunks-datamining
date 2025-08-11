/** Chunk was on 66317 **/
/** chunk id: 128077, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  f: () => i
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk751648 = require("./751648.js"),
  Chunk388032 = require("./388032.js");

function i() {
  let [e, t] = (0, Chunk73800.useState)(""), [r, i] = (0, Chunk73800.useState)([]), [o, u] = (0, Chunk73800.useState)(null), [c, s] = (0, Chunk73800.useState)(false);
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
          s(true), u(null)
        },
        onRedeemSucceed: e => {
          i(e), s(false), null == r || r(e)
        },
        onRedeemFail: e => {
          u(e), s(false)
        }
      })
    }
  }
}