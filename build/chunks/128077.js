/** Chunk was on 20565 **/
n.d(t, {
  f: () => c
}), n(47120);
var r = n(192379),
  a = n(751648),
  o = n(388032);

function c() {
  let [e, t] = (0, r.useState)(""), [n, c] = (0, r.useState)([]), [l, i] = (0, r.useState)(null), [s, u] = (0, r.useState)(!1);
  return (0, r.useEffect)(() => {
    if (null != l) {
      t(o.NW.format(o.t["7gHWra"], {
        amount: "1 orb",
        errorMessage: l.message
      }));
      return
    }
    if (null != n && n.length > 0) {
      let e = n.map(e => {
        var t;
        return null === (t = e.sku) || void 0 === t ? void 0 : t.name
      });
      t(o.NW.format(o.t.JxNFam, {
        amountDescription: "1 orb",
        redeemedItemDescription: "".concat(1 === e.length ? "SKU" : "SKUs", ": ").concat(e.join(", "), ". Entitlement ").concat(1 === n.length ? "ID" : "IDs", ": ").concat(n.map(e => e.id).join(", "))
      }));
      return
    }
    t("")
  }, [n, l]), {
    entitlements: n,
    error: l,
    isSubmitting: s,
    responseMessage: e,
    redeemVirtualCurrency: function(e, t) {
      return (0, a.df)({
        skuId: e,
        onRedeemStart: () => {
          u(!0), i(null)
        },
        onRedeemSucceed: e => {
          c(e), u(!1), null == t || t(e)
        },
        onRedeemFail: e => {
          i(e), u(!1)
        }
      })
    }
  }
}