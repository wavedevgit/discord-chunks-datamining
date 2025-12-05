/** Chunk was on 63141 **/
/** chunk id: 312839, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  P: () => p,
  R: () => u
}), require("./35282.js");
var Chunk13245 = require("./13245.js"),
  Chunk556296 = require("./556296.js"),
  Chunk237997 = require("./237997.js"),
  Chunk13140 = require("./13140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js");

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e, t) {
  return {
    trackView() {
      let n = s.default.isInstanceLocked() ? l.Sbl.LOCKED_OVERLAY : l.Sbl.UNLOCKED_OVERLAY;
      i.Z.track(l.rMx.NOTIFICATION_VIEWED, d(c({}, t), {
        location: n
      })), i.Z.notificationEvent(e, a.bv.Viewed)
    },
    trackClick(n) {
      let r = s.default.isInstanceLocked() ? l.Sbl.LOCKED_OVERLAY : l.Sbl.UNLOCKED_OVERLAY;
      i.Z.track(l.rMx.NOTIFICATION_CLICKED, d(c({}, t), {
        location: r,
        action_type: n
      })), i.Z.notificationEvent(e, a.bv.Clicked)
    }
  }
}

function p() {
  let e = Chunk556296.ZP.getOverlayKeybind();
  return null != module ? (0, Chunk13140.BB)(module.shortcut, true).split(" + ") : ["???"]
}