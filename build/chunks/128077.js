/** Chunk was on 20565 **/
r.d(t, {
  f: () => c
}), r(47120);
var n = r(192379),
  a = r(751648),
  o = r(388032);

function c() {
  let [e, t] = (0, n.useState)(""), [r, c] = (0, n.useState)([]), [l, i] = (0, n.useState)(null), [s, u] = (0, n.useState)(!1);
  return (0, n.useEffect)(() => {
    if (null != l) {
      t(o.NW.format(o.t["7gHWra"], {
        amount: "1 orb",
        errorMessage: l.message
      }));
      return
    }
    if (null != r && r.length > 0) {
      let e = r.map(e => {
        var t;
        return null === (t = e.sku) || void 0 === t ? void 0 : t.name
      });
      t(o.NW.format(o.t.JxNFam, {
        amountDescription: "1 orb",
        redeemedItemDescription: "".concat(1 === e.length ? "SKU" : "SKUs", ": ").concat(e.join(", "), ". Entitlement ").concat(1 === r.length ? "ID" : "IDs", ": ").concat(r.map(e => e.id).join(", "))
      }));
      return
    }
    t("")
  }, [r, l]), {
    entitlements: r,
    error: l,
    isSubmitting: s,
    responseMessage: e,
    redeemVirtualCurrency: function(e, t) {
      return (0, a.df)({
        skuId: e,
        onRedeemStart: () => {
          u(!0)
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