/** Chunk was on web.js **/
/** chunk id: 620954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Pb: () => g,
  Rg: () => h,
  wq: () => m
}), require("./35282.js");
var Chunk13245 = require("./13245.js"),
  Chunk556296 = require("./556296.js"),
  Chunk237997 = require("./237997.js"),
  Chunk13140 = require("./13140.js"),
  Chunk610394 = require("./610394.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p() {
  return Chunk237997.default.isLocked(Chunk610394.Z.getTargetPID()) ? Chunk981631.Sbl.LOCKED_OVERLAY : Chunk981631.Sbl.UNLOCKED_OVERLAY
}

function h(e, t) {
  return {
    trackView() {
      let n = p();
      r.Z.track(c.rMx.NOTIFICATION_VIEWED, _(d({}, t), {
        location: n
      })), r.Z.notificationEvent(e, l.bv.Viewed)
    },
    trackClick(n) {
      let i = p();
      r.Z.track(c.rMx.NOTIFICATION_CLICKED, _(d({}, t), {
        location: i,
        action_type: n
      })), r.Z.notificationEvent(e, l.bv.Clicked)
    }
  }
}

function m() {
  let e = Chunk556296.ZP.getOverlayKeybind();
  return null != module ? (0, Chunk13140.BB)(module.shortcut, true) : "???"
}

function g() {
  return m().split(" + ")
}