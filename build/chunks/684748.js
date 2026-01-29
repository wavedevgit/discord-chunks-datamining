/** Chunk was on 84018 **/
/** chunk id: 684748, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  J: () => p,
  Y: () => u
}), require("./747238.js");
var Chunk684013 = require("./684013.js"),
  Chunk532624 = require("./532624.js"),
  Chunk256415 = require("./256415.js"),
  Chunk350535 = require("./350535.js"),
  Chunk652215 = require("./652215.js"),
  Chunk672396 = require("./672396.js");

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
      let n = s.default.isInstanceLocked() ? o.ThZ.LOCKED_OVERLAY : o.ThZ.UNLOCKED_OVERLAY;
      i.A.track(o.HAw.NOTIFICATION_VIEWED, d(c({}, t), {
        location: n
      })), i.A.notificationEvent(e, a.uj.Viewed)
    },
    trackClick(n) {
      let r = s.default.isInstanceLocked() ? o.ThZ.LOCKED_OVERLAY : o.ThZ.UNLOCKED_OVERLAY;
      i.A.track(o.HAw.NOTIFICATION_CLICKED, d(c({}, t), {
        location: r,
        action_type: n
      })), i.A.notificationEvent(e, a.uj.Clicked)
    }
  }
}

function p() {
  let e = r.Ay.getOverlayKeybind();
  return null != e ? (0, l.dI)(e.shortcut, true).split(" + ") : ["???"]
}