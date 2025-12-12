/** Chunk was on web.js **/
/** chunk id: 538036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./539854.js");
var Chunk981631 = require("./981631.js");
let i = [],
  o = false;

function a() {
  let e = window.navigator.connection;
  return null == module ? {
    type: Chunk981631.IWh.UNKNOWN,
    effectiveSpeed: Chunk981631.IyS.UNKNOWN
  } : {
    type: null != module.type ? module.type : Chunk981631.IWh.UNKNOWN,
    effectiveSpeed: module.effectiveType
  }
}

function s() {
  if (true === o) return;
  let e = window.navigator.connection;
  null != module && (o = true, module.addEventListener("change", c))
}

function l() {
  if (false === o) return;
  let e = window.navigator.connection;
  null != module && 0 === i.length && null != module && (module.removeEventListener("change", c), o = false)
}

function c() {
  let e = a();
  i.forEach(t => t(e))
}

function u(e) {
  i.push(e), s()
}

function d(e) {
  let t = i.indexOf(e);
  false !== t && (i.splice(t, 1), l())
}
let f = {
  addOnlineCallback(e) {
    window.addEventListener("online", e)
  },
  removeOnlineCallback(e) {
    window.removeEventListener("online", e)
  },
  addOfflineCallback(e) {
    window.addEventListener("offline", e)
  },
  removeOfflineCallback(e) {
    window.removeEventListener("offline", e)
  },
  addChangeCallback(e) {
    u(e)
  },
  removeChangeCallback(e) {
    d(e)
  },
  getNetworkInformation: () => Promise.resolve(a()),
  isOnline() {
    let e = navigator.onLine;
    return true === module || module
  }
}