/** Chunk was on web.js **/
/** chunk id: 496929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qv: () => c,
  p0: () => l,
  yD: () => s
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk73346 = require("./73346.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  return i.Z.wait(() => {
    i.Z.dispatch({
      type: "ENTITLEMENT_FETCH_APPLICATION_START",
      applicationId: e
    })
  }), r.tn.get({
    url: o.ANM.ENTITLEMENTS_FOR_APPLICATION(e),
    oldFormErrors: true,
    query: {
      exclude_consumed: t
    },
    rejectWithError: true
  }).then(t => (i.Z.dispatch({
    type: "ENTITLEMENT_FETCH_APPLICATION_SUCCESS",
    applicationId: e,
    entitlements: t.body
  }), t.body)).catch(() => {
    i.Z.dispatch({
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
    entitlementType: s
  } = e;
  i.Z.dispatch({
    type: "ENTITLEMENTS_FETCH_FOR_USER_START"
  });
  try {
    let e = await r.tn.get({
      url: o.ANM.ENTITLEMENTS_FOR_USER,
      query: {
        with_sku: t,
        with_application: n,
        entitlement_type: s,
        exclude_ended: a
      },
      rejectWithError: true
    });
    i.Z.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_SUCCESS",
      entitlements: e.body,
      excludeEnded: a
    })
  } catch (e) {
    i.Z.dispatch({
      type: "ENTITLEMENTS_FETCH_FOR_USER_FAIL"
    })
  }
}
async function c() {
  Chunk570140.Z.dispatch({
    type: "ENTITLEMENTS_GIFTABLE_FETCH"
  });
  try {
    let e = await (0, Chunk73346.Kb)({
      url: Chunk981631.ANM.ENTITLEMENTS_GIFTABLE,
      rejectWithError: true
    });
    Chunk570140.Z.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS",
      entitlements: module.body
    })
  } catch (e) {
    Chunk570140.Z.dispatch({
      type: "ENTITLEMENTS_GIFTABLE_FETCH_FAIL"
    })
  }
}