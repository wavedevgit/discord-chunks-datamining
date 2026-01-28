/** Chunk was on 78572 **/
/** chunk id: 581730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Jn: () => g,
  Y9: () => f,
  hM: () => m
}), require("./747238.js");
var Chunk684013 = require("./684013.js"),
  Chunk532624 = require("./532624.js"),
  Chunk256415 = require("./256415.js"),
  Chunk350535 = require("./350535.js"),
  Chunk395011 = require("./395011.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p() {
  return l.default.isLocked(s.A.getTargetPID()) ? c.ThZ.LOCKED_OVERLAY : c.ThZ.UNLOCKED_OVERLAY
}

function f(e, t) {
  return {
    trackView() {
      let n = p();
      r.A.track(c.HAw.NOTIFICATION_VIEWED, d(u({}, t), {
        location: n
      })), r.A.notificationEvent(e, o.uj.Viewed)
    },
    trackClick(n) {
      let i = p();
      r.A.track(c.HAw.NOTIFICATION_CLICKED, d(u({}, t), {
        location: i,
        action_type: n
      })), r.A.notificationEvent(e, o.uj.Clicked)
    }
  }
}

function m() {
  let e = i.Ay.getOverlayKeybind();
  return null != e ? (0, a.dI)(e.shortcut, true) : "???"
}

function g() {
  return m().split(" + ")
}