/** Chunk was on web.js **/
/** chunk id: 339048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LM: () => o,
  XJ: () => c,
  qw: () => l
});
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk371794 = require("./371794.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return i.h.wait(() => {
    i.h.dispatch({
      type: "ENTITLEMENT_FETCH_APPLICATION_START",
      applicationId: e
    })
  }), r.Bo.get({
    url: s.Rsh.ENTITLEMENTS_FOR_APPLICATION(e),
    oldFormErrors: true,
    query: {
      exclude_consumed: t
    },
    rejectWithError: true
  }).then(t => (i.h.dispatch({
    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
    applicationId: e,
    entitlements: t.body
  }), t.body)).catch(() => {
    i.h.dispatch({
      type: "ENTITLEMENT_FETCH_APPLICATION_FAIL",
      applicationId: e
    })
  })
}
async function l(e) {
  let {
    withSku: t = false,
    withApplication: n = false,
    excludeEnded: a = true,
    entitlementType: o
  } = e;
  i.h.dispatch({
    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
  });
  try {
    let e = await r.Bo.get({
      url: s.Rsh.ENTITLEMENTS_FOR_USER,
      query: {
        with_sku: t,
        with_application: n,
        entitlement_type: o,
        exclude_ended: a
      },
      rejectWithError: true
    });
    i.h.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
      entitlements: e.body,
      excludeEnded: a
    })
  } catch (e) {
    i.h.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
    })
  }
}
async function c() {
  i.h.dispatch({
    type: "ENTITLEMENTS_GIFTABLE_FETCH"
  });
  try {
    let e = await (0, a.aP)({
      url: s.Rsh.ENTITLEMENTS_GIFTABLE,
      rejectWithError: true
    });
    i.h.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
      entitlements: e.body
    })
  } catch (e) {
    i.h.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
    })
  }
}