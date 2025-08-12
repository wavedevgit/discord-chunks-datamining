/** Chunk was on 9646 **/
/** chunk id: 620954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => d,
  R: () => u
}), require("./35282.js");
var Chunk13245 = require("./13245.js"),
  Chunk556296 = require("./556296.js"),
  Chunk237997 = require("./237997.js"),
  Chunk13140 = require("./13140.js"),
  Chunk145597 = require("./145597.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js");

function u(e, t) {
  return {
    trackView() {
      i.Z.track(c.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, s.bv.Viewed)
    },
    trackClick(n) {
      var r, l;
      let u = o.default.isLocked((0, a.getPID)()) ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY;
      i.Z.track(c.rMx.NOTIFICATION_CLICKED, (r = function(e) {
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
      }({}, t), l = l = {
        location: u,
        action_type: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r)), i.Z.notificationEvent(e, s.bv.Clicked)
    }
  }
}

function d() {
  let e = Chunk556296.ZP.getOverlayKeybind();
  return null != module ? (0, Chunk13140.BB)(module.shortcut, true).split(" + ") : ["???"]
}