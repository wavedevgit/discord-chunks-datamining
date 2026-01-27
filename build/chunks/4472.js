/** Chunk was on web.js **/
/** chunk id: 4472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./321073.js");
var Chunk652215 = require("./652215.js");
let i = [],
  a = false;

function o() {
  let e = window.navigator.connection;
  return null == e ? {
    type: r.wY_.UNKNOWN,
    effectiveSpeed: r.NKC.UNKNOWN
  } : {
    type: null != e.type ? e.type : r.wY_.UNKNOWN,
    effectiveSpeed: e.effectiveType
  }
}

function s() {
  if (true === a) return;
  let e = window.navigator.connection;
  null != e && (a = true, e.addEventListener("change", c))
}

function l() {
  if (false === a) return;
  let e = window.navigator.connection;
  null != e && 0 === i.length && null != e && (e.removeEventListener("change", c), a = false)
}

function c() {
  let e = o();
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
  getNetworkInformation: () => Promise.resolve(o()),
  isOnline() {
    let e = navigator.onLine;
    return true === e || e
  }
}