/** Chunk was on 37372 **/
/** chunk id: 869038, original params: e,t,r (module,exports,require) **/
let n;
require.d(exports, {
  A: () => p,
  G: () => f
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk197111 = require("./197111.js"),
  Chunk979286 = require("./979286.js"),
  Chunk45938 = require("./45938.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");
async function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    r = arguments.length > 2 && true !== arguments[2] && arguments[2];
  i.h.dispatch({
    type: "GIFT_CODE_RESOLVE",
    code: e
  });
  try {
    let n = await (0, u.GM)(e, t, r);
    if (null != n.application_id && n.application_id !== E.tv) {
      let e = s.A.getApplication(n.application_id);
      if (null == e) try {
        await o.Ay.fetchApplication(n.application_id)
      } catch (e) {}
    }
    return n.application_id === d.FYj && await (0, c.Jp)(n.sku_id), i.h.dispatch({
      type: "GIFT_CODE_RESOLVE_SUCCESS",
      giftCode: n
    }), {
      giftCode: n
    }
  } catch (t) {
    throw i.h.dispatch({
      type: "GIFT_CODE_RESOLVE_FAILURE",
      code: e,
      error: t
    }), t
  }
}
n = require("./75255.js").A;
let p = function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}({
  resolveGiftCode: f,
  async fetchUserGiftCodesForSKU(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    i.h.dispatch({
      type: "GIFT_CODES_FETCH",
      skuId: e,
      subscriptionPlanId: t
    });
    try {
      let r = await l.Bo.get({
        url: d.Rsh.USER_GIFT_CODES,
        query: {
          sku_id: e,
          subscription_plan_id: t
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      i.h.dispatch({
        type: "GIFT_CODES_FETCH_SUCCESS",
        giftCodes: r.body,
        skuId: e,
        subscriptionPlanId: t
      })
    } catch (r) {
      i.h.dispatch({
        type: "GIFT_CODES_FETCH_FAILURE",
        skuId: e,
        subscriptionPlanId: t
      })
    }
  },
  async createGiftCode(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
    i.h.dispatch({
      type: "GIFT_CODE_CREATE_START",
      skuId: e,
      subscriptionPlanId: t
    });
    try {
      let n = await l.Bo.post({
        url: d.Rsh.USER_GIFT_CODE_CREATE,
        body: {
          sku_id: e,
          subscription_plan_id: t,
          gift_style: r
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      return i.h.dispatch({
        type: "GIFT_CODE_CREATE_SUCCESS",
        giftCode: n.body
      }), n.body
    } catch (r) {
      i.h.dispatch({
        type: "GIFT_CODE_CREATE_FAILURE",
        skuId: e,
        subscriptionPlanId: t
      })
    }
  },
  async revokeGiftCode(e) {
    i.h.dispatch({
      type: "GIFT_CODE_REVOKE",
      code: e
    });
    try {
      await l.Bo.del({
        url: d.Rsh.USER_GIFT_CODE_REVOKE(e),
        oldFormErrors: true,
        rejectWithError: true
      }), i.h.dispatch({
        type: "GIFT_CODE_REVOKE_SUCCESS",
        code: e
      })
    } catch (t) {
      i.h.dispatch({
        type: "GIFT_CODE_REVOKE_FAILURE",
        code: e
      })
    }
  },
  openNativeGiftCodeModal(e) {
    a.A.openNativeAppModal(e, d.e$_.GIFT_CODE_BROWSER)
  }
}, n)