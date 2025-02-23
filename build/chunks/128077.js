/** Chunk was on 20565 (75b7e589e2b574d7.js) **/
n.d(t, {
  f: () => s
}), n(47120);
var r = n(192379),
  a = n(751648),
  i = n(388032);

function s() {
  let [e, t] = (0, r.useState)(""), [n, s] = (0, r.useState)([]), [c, l] = (0, r.useState)(null), [o, d] = (0, r.useState)(!1);
  return (0, r.useEffect)(() => {
    if (null != c) {
      t(i.NW.format(i.t["7gHWra"], {
        amount: "1 orb",
        errorMessage: c.message
      }));
      return
    }
    if (null != n && n.length > 0) {
      let e = n.map(e => {
        var t;
        return null === (t = e.sku) || void 0 === t ? void 0 : t.name
      });
      t(i.NW.format(i.t.JxNFam, {
        amountDescription: "1 orb",
        redeemedItemDescription: "".concat(1 === e.length ? "SKU" : "SKUs", ": ").concat(e.join(", "), ". Entitlement ").concat(1 === n.length ? "ID" : "IDs", ": ").concat(n.map(e => e.id).join(", "))
      }));
      return
    }
    t("")
  }, [n, c]), {
    entitlements: n,
    error: c,
    isSubmitting: o,
    responseMessage: e,
    redeemVirtualCurrency: function(e, t) {
      return (0, a.df)({
        skuId: e,
        onRedeemStart: () => {
          d(!0)
        },
        onRedeemSucceed: e => {
          s(e), d(!1), null == t || t()
        },
        onRedeemFail: e => {
          l(e), d(!1)
        }
      })
    }
  }
}