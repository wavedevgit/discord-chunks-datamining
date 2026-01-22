/** Chunk was on web.js **/
/** chunk id: 581730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jn: () => g,
  Y9: () => h,
  hM: () => m
}), require("./747238.js");
var Chunk684013 = require("./684013.js"),
  Chunk532624 = require("./532624.js"),
  Chunk256415 = require("./256415.js"),
  Chunk350535 = require("./350535.js"),
  Chunk395011 = require("./395011.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _() {
  return a.default.isLocked(o.A.getTargetPID()) ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY
}

function h(e, t) {
  return {
    trackView() {
      let n = _();
      r.A.track(c.HAw.NOTIFICATION_VIEWED, p(d({}, t), {
        location: n
      })), r.A.notificationEvent(e, l.uj.Viewed)
    },
    trackClick(n) {
      let i = _();
      r.A.track(c.HAw.NOTIFICATION_CLICKED, p(d({}, t), {
        location: i,
        action_type: n
      })), r.A.notificationEvent(e, l.uj.Clicked)
    }
  }
}

function m() {
  let e = i.Ay.getOverlayKeybind();
  return null != e ? (0, s.dI)(e.shortcut, true) : "???"
}

function g() {
  return m().split(" + ")
}