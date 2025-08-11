/** Chunk was on web.js **/
/** chunk id: 730954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./997841.js");
var Chunk904245 = require("./904245.js"),
  Chunk667204 = require("./667204.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function s(e, t, n) {
  let o = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (r.Z.deleteMessage(e.id, t.id, true), t.isCommandType()) {
    null != t.interactionData && null != o.applicationId && (0, i.d)(t, e, o);
    return
  }
  let {
    content: s,
    tts: l,
    messageReference: c,
    flags: u,
    nonce: d
  } = t;
  r.Z.sendMessage(e.id, {
    content: s,
    tts: l,
    invalidEmojis: [],
    validNonShortcutEmojis: []
  }, true, a({
    nonce: d,
    flags: u,
    messageReference: null != c ? c : true
  }, o))
}