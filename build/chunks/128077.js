/** Chunk was on web.js **/
/** chunk id: 128077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk128069 = require("./128069.js"),
  Chunk197550 = require("./197550.js"),
  Chunk711959 = require("./711959.js"),
  Chunk877820 = require("./877820.js"),
  Chunk751648 = require("./751648.js"),
  Chunk152521 = require("./152521.js"),
  Chunk85721 = require("./85721.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let [t, n] = (0, r.useState)(""), [m, h] = (0, r.useState)([]), [g, E] = (0, r.useState)(null), [b, y] = (0, r.useState)(false), O = (0, r.useRef)(null), {
    enabled: v
  } = f.Z.useConfig({
    location: "orb_checkout_modal"
  }), S = (0, i.e7)([c.Z], () => c.Z.isCreatingOrder), I = (0, i.e7)([c.Z], () => c.Z.currentOrder);
  (0, r.useEffect)(() => {
    var e;
    v && null != I && (null == (e = O.current) ? true : e.id) !== I.id && (O.current = I)
  }, [I, v]);
  let T = (0, r.useCallback)(async (e, t) => {
      let n = null != t ? t : (0, d.Nb)(e);
      try {
        var r;
        return null != (r = (await a.tn.get({
          url: p.ANM.ENTITLEMENTS_FOR_APPLICATION(n),
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
    A = (0, r.useCallback)(async (e, t, n) => {
      let r = O.current;
      if (null == r) {
        E(new o.ZP("Order not created yet")), y(false);
        return
      }
      y(true), E(null);
      try {
        let i = await (0, l.GP)({
          orderId: r.id,
          expectedRevision: r.revision,
          loadId: t
        });
        if (O.current = i, i.status !== s.iF.SIGNED) {
          let e = i;
          if (e.errors && e.errors.length > 0) {
            let t = e.errors;
            if (t.includes(2e3)) {
              let e = new o.ZP("Insufficient balance");
              throw e.code = o.SM.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE, e
            }
            let n = "Order signing failed with errors: ".concat(t.join(", "));
            throw Error(n)
          }
          if (i.status === s.iF.DRAFT) throw Error("Order could not be signed.");
          throw Error("Unexpected order status: ".concat(i.status))
        }
        let a = (0, d.Nb)(e),
          c = await T(e, a);
        if (0 === c.length) {
          await new Promise(e => setTimeout(e, 500));
          let t = await T(e, a);
          if (0 === t.length) throw Error("No entitlements found after order signing");
          h(t), y(false), null == n || n(t)
        } else h(c), y(false), null == n || n(c)
      } catch (e) {
        E(e instanceof o.ZP ? e : new o.ZP(e)), y(false)
      }
    }, [T]),
    C = (0, r.useCallback)(function(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] && arguments[3],
        i = () => {
          y(true), E(null)
        },
        a = e => {
          h(e), y(false), null == n || n(e)
        },
        o = e => {
          E(e), y(false)
        };
      return (0, u.df)({
        skuId: e,
        loadId: t,
        onRedeemStart: i,
        onRedeemSucceed: a,
        onRedeemFail: o,
        isRental: r
      })
    }, []),
    N = (0, r.useCallback)(function(e, t, n) {
      let r = arguments.length > 3 && true !== arguments[3] && arguments[3];
      if (v) {
        if (r) {
          E(new o.ZP("Rental orders are not supported via Orders API yet")), y(false);
          return
        }
        A(e, t, n)
      } else C(e, t, n, r)
    }, [v, A, C]);
  return (0, r.useEffect)(() => {
    if (null != g) return void n(_.intl.format(_.t["7gHWrd"], {
      amount: "1 orb",
      errorMessage: g.message
    }));
    if (null != m && m.length > 0) {
      let e = m.map(e => {
        var t;
        return null == (t = e.sku) ? true : t.name
      });
      n(_.intl.format(_.t.JxNFav, {
        amountDescription: "1 orb",
        redeemedItemDescription: "".concat(1 === e.length ? "SKU" : "SKUs", ": ").concat(e.join(", "), ". Entitlement ").concat(1 === m.length ? "ID" : "IDs", ": ").concat(m.map(e => e.id).join(", "))
      }));
      return
    }
    n("")
  }, [m, g]), {
    entitlements: m,
    error: g,
    isSubmitting: b || v && S,
    responseMessage: t,
    redeemVirtualCurrency: N
  }
}