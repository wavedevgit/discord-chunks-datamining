/** Chunk was on web.js **/
/** chunk id: 104755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => u,
  v: () => d
});
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk973616 = require("./973616.js"),
  Chunk543696 = require("./543696.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
async function u(e) {
  try {
    let t = await r.tn.post({
        url: s.ANM.PLATFORM_APPLICATION,
        body: {
          sku: e
        },
        rejectWithError: false
      }),
      n = 200 === t.status ? t.body.application : null;
    i.Z.dispatch({
      type: "ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS",
      universeId: e,
      application: null != n ? a.ZP.createFromServer(n) : null
    })
  } catch (t) {
    i.Z.dispatch({
      type: "ROBLOX_SUBGAME_APPLICATION_FETCH_FAILURE",
      universeId: e,
      error: t
    })
  }
}
async function d(e) {
  let t = e,
    n = e => {
      let t = o.Z.getSupplementalData(e);
      return null == t || null == t.rootPlaceId
    };
  t = e.filter(n);
  let a = e.filter(e => !n(e)),
    l = {};
  return (a.forEach(e => {
    let t = o.Z.getSupplementalData(e);
    null != t && (l[e] = t)
  }), 0 === t.length) ? l : await r.tn.get({
    url: s.ANM.ROBLOX_APPLICATIONS_SUPPLEMENTAL_DATA,
    query: {
      skus: t
    },
    rejectWithError: false
  }).then(e => {
    if (200 !== e.status) return {};
    let t = e.body,
      n = c({}, l);
    return Object.keys(t).forEach(e => {
      n[e] = {
        rootPlaceId: t[e].root_place_id
      }
    }), Object.keys(n).length > 0 && i.Z.dispatch({
      type: "ROBLOX_SUBGAME_SUPPLEMENTAL_DATA_FETCH_SUCCESS",
      data: n
    }), n
  })
}