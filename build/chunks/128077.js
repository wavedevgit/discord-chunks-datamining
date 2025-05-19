/** Chunk was on 20565 **/
n.d(t, {
  f: () => c
}), n(388685);
var r = n(73800),
  o = n(751648),
  a = n(388032);

function c() {
  let [e, t] = (0, r.useState)(""), [n, c] = (0, r.useState)([]), [s, l] = (0, r.useState)(null), [i, d] = (0, r.useState)(!1);
  return (0, r.useEffect)(() => {
    if (null != s) return void t(a.intl.format(a.t["7gHWra"], {
      amount: "1 orb",
      errorMessage: s.message
    }));
    if (null != n && n.length > 0) {
      let e = n.map(e => {
        var t;
        return null == (t = e.sku) ? void 0 : t.name
      });
      t(a.intl.format(a.t.JxNFam, {
        amountDescription: "1 orb",
        redeemedItemDescription: "".concat(1 === e.length ? "SKU" : "SKUs", ": ").concat(e.join(", "), ". Entitlement ").concat(1 === n.length ? "ID" : "IDs", ": ").concat(n.map(e => e.id).join(", "))
      }));
      return
    }
    t("")
  }, [n, s]), {
    entitlements: n,
    error: s,
    isSubmitting: i,
    responseMessage: e,
    redeemVirtualCurrency: function(e, t) {
      return (0, o.df)({
        skuId: e,
        onRedeemStart: () => {
          d(!0), l(null)
        },
        onRedeemSucceed: e => {
          c(e), d(!1), null == t || t(e)
        },
        onRedeemFail: e => {
          l(e), d(!1)
        }
      })
    }
  }
}