/** Chunk was on web.js **/
/** chunk id: 533307, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => h,
  b: () => m
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk625128 = require("./625128.js"),
  Chunk335131 = require("./335131.js"),
  Chunk669079 = require("./669079.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}
async function m(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  o.Z.dispatch({
    type: "GIFT_CODE_RESOLVE",
    code: e
  });
  try {
    let r = await (0, u.bT)(e, t, n);
    if (null != r.application_id && r.application_id !== f.CL) {
      let e = s.Z.getApplication(r.application_id);
      if (null == e) try {
        await a.ZP.fetchApplication(r.application_id)
      } catch (e) {}
    }
    return r.application_id === d.XAJ && await (0, c.jr)(r.sku_id), o.Z.dispatch({
      type: "GIFT_CODE_RESOLVE_SUCCESS",
      giftCode: r
    }), {
      giftCode: r
    }
  } catch (t) {
    throw o.Z.dispatch({
      type: "GIFT_CODE_RESOLVE_FAILURE",
      code: e,
      error: t
    }), t
  }
}
r = require("./775644.js").Z;
let h = _({
  resolveGiftCode: m,
  async fetchUserGiftCodesForSKU(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
    o.Z.dispatch({
      type: "GIFT_CODES_FETCH",
      skuId: e,
      subscriptionPlanId: t
    });
    try {
      let n = await i.tn.get({
        url: d.ANM.USER_GIFT_CODES,
        query: {
          sku_id: e,
          subscription_plan_id: t
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      o.Z.dispatch({
        type: "GIFT_CODES_FETCH_SUCCESS",
        giftCodes: n.body,
        skuId: e,
        subscriptionPlanId: t
      })
    } catch (n) {
      o.Z.dispatch({
        type: "GIFT_CODES_FETCH_FAILURE",
        skuId: e,
        subscriptionPlanId: t
      })
    }
  },
  async createGiftCode(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null;
    o.Z.dispatch({
      type: "GIFT_CODE_CREATE_START",
      skuId: e,
      subscriptionPlanId: t
    });
    try {
      let r = await i.tn.post({
        url: d.ANM.USER_GIFT_CODE_CREATE,
        body: {
          sku_id: e,
          subscription_plan_id: t,
          gift_style: n
        },
        oldFormErrors: true,
        rejectWithError: true
      });
      return o.Z.dispatch({
        type: "GIFT_CODE_CREATE_SUCCESS",
        giftCode: r.body
      }), r.body
    } catch (n) {
      o.Z.dispatch({
        type: "GIFT_CODE_CREATE_FAILURE",
        skuId: e,
        subscriptionPlanId: t
      })
    }
  },
  async revokeGiftCode(e) {
    o.Z.dispatch({
      type: "GIFT_CODE_REVOKE",
      code: e
    });
    try {
      await i.tn.del({
        url: d.ANM.USER_GIFT_CODE_REVOKE(e),
        oldFormErrors: true,
        rejectWithError: true
      }), o.Z.dispatch({
        type: "GIFT_CODE_REVOKE_SUCCESS",
        code: e
      })
    } catch (t) {
      o.Z.dispatch({
        type: "GIFT_CODE_REVOKE_FAILURE",
        code: e
      })
    }
  },
  openNativeGiftCodeModal(e) {
    l.Z.openNativeAppModal(e, d.Etm.GIFT_CODE_BROWSER)
  }
}, r)