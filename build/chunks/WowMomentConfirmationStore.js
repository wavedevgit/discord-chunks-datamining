/** Chunk was on web.js **/
/** chunk id: 453227, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
  isDisplayingWowMomentConfirmation: false,
  isAnimated: false
};

function l() {
  s = {
    isDisplayingWowMomentConfirmation: false,
    isAnimated: false
  }
}

function c() {
  l()
}

function u(e) {
  let {
    value: t,
    isAnimated: n
  } = e;
  s.isDisplayingWowMomentConfirmation = t, s.isAnimated = n
}
class d extends(r = Chunk442837.ZP.Store) {
  getState() {
    return s
  }
  get isDisplayingWowMomentConfirmation() {
    return s.isDisplayingWowMomentConfirmation
  }
  get isAnimated() {
    return s.isAnimated
  }
}
a(d, "displayName", "WowMomentConfirmationStore");
let f = new d(Chunk570140.Z, {
  LOGOUT: c,
  WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: u
})