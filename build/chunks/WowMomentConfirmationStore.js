/** Chunk was on web.js **/
/** chunk id: 573359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function o(e, t, n) {
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
class d extends(r = Chunk311907.Ay.Store) {
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
o(d, "displayName", "WowMomentConfirmationStore");
let f = new d(Chunk73153.h, {
  LOGOUT: c,
  WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: u
})