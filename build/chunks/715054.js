/** Chunk was on web.js **/
/** chunk id: 715054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => h
}), require("./896048.js"), require("./65821.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk136857 = require("./136857.js"),
  Chunk224771 = require("./224771.js"),
  Chunk624210 = require("./624210.js"),
  Chunk224949 = require("./224949.js"),
  Chunk786953 = require("./786953.js"),
  Chunk310829 = require("./310829.js"),
  Chunk211287 = require("./211287.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let [t, n] = (0, r.useState)(""), [h, m] = (0, r.useState)([]), [g, E] = (0, r.useState)(null), [y, b] = (0, r.useState)(false), O = (0, r.useRef)(null), {
    enabled: v
  } = f.A.useConfig({
    location: "orb_checkout_modal"
  }), A = (0, i.bG)([c.A], () => c.A.isCreatingOrder), I = (0, i.bG)([c.A], () => c.A.currentOrder);
  (0, r.useEffect)(() => {
    var e;
    v && null != I && (null == (e = O.current) ? true : e.id) !== I.id && (O.current = I)
  }, [I, v]);
  let S = (0, r.useCallback)(async (e, t) => {
      let n = null != t ? t : (0, d.p)(e);
      try {
        var r;
        return null != (r = (await a.Bo.get({
          url: p.Rsh.ENTITLEMENTS_FOR_APPLICATION(n),
          query: {
            sku_ids: e,
            exclude_consumed: true
          },
          rejectWithError: false
        })).body) ? r : []
      } catch (e) {
        return []
      }
    }, []),
    T = (0, r.useCallback)(async (e, t, n) => {
      let r = O.current;
      if (null == r) {
        E(new s.Ay("Order not created yet")), b(false);
        return
      }
      b(true), E(null);
      try {
        let i = await (0, l.Ub)({
          orderId: r.id,
          expectedRevision: r.revision,
          loadId: t
        });
        if (O.current = i, i.status !== o.Re.SIGNED) {
          let e = i;
          if (e.errors && e.errors.length > 0) {
            let t = e.errors;
            if (t.includes(2e3)) {
              let e = new s.Ay("Insufficient balance");
              throw e.code = s.tG.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE, e
            }
            let n = "Order signing failed with errors: ".concat(t.join(", "));
            throw Error(n)
          }
          if (i.status === o.Re.DRAFT) throw Error("Order could not be signed.");
          throw Error("Unexpected order status: ".concat(i.status))
        }
        let a = (0, d.p)(e),
          c = await S(e, a);
        if (0 === c.length) {
          await new Promise(e => setTimeout(e, 500));
          let t = await S(e, a);
          if (0 === t.length) throw Error("No entitlements found after order signing");
          m(t), b(false), null == n || n(t)
        } else m(c), b(false), null == n || n(c)
      } catch (e) {
        E(e instanceof s.Ay ? e : new s.Ay(e)), b(false)
      }
    }, [S]),
    C = (0, r.useCallback)(function(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
        i = () => {
          b(true), E(null)
        },
        a = e => {
          m(e), b(false), null == n || n(e)
        },
        s = e => {
          E(e), b(false)
        };
      return (0, u.J$)({
        skuId: e,
        loadId: t,
        onRedeemStart: i,
        onRedeemSucceed: a,
        onRedeemFail: s,
        isRental: r
      })
    }, []),
    N = (0, r.useCallback)(function(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
      if (v) {
        if (r) {
          E(new s.Ay("Rental orders are not supported via Orders API yet")), b(false);
          return
        }
        T(e, t, n)
      } else C(e, t, n, r)
    }, [v, T, C]);
  return (0, r.useEffect)(() => {
    if (null != g) return void n(_.intl.format(_.t["7gHWrd"], {
      amount: "1 orb",
      errorMessage: g.message
    }));
    if (null != h && h.length > 0) {
      let e = h.map(e => {
        var t;
        return null == (t = e.sku) ? true : t.name
      });
      n(_.intl.format(_.t.JxNFav, {
        amountDescription: "1 orb",
        redeemedItemDescription: "".concat(1 === e.length ? "SKU" : "SKUs", ": ").concat(e.join(", "), ". Entitlement ").concat(1 === h.length ? "ID" : "IDs", ": ").concat(h.map(e => e.id).join(", "))
      }));
      return
    }
    n("")
  }, [h, g]), {
    entitlements: h,
    error: g,
    isSubmitting: y || v && A,
    responseMessage: t,
    redeemVirtualCurrency: N
  }
}