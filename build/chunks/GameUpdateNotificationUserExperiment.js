/** Chunk was on 30485 **/
/** chunk id: 378729, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  e8: () => r
});
var Chunk600975 = require("./600975.js"),
  Chunk428835 = require("./428835.js");
let s = (0, Chunk600975.C)({
    id: "2025-11_game_update_notification",
    kind: "user",
    label: "Game Update Notification",
    defaultConfig: {
      showToggle: false
    },
    treatments: [{
      id: 1,
      label: "User can receive game update notifications. Show settings toggle.",
      config: {
        showToggle: true
      }
    }]
  }),
  r = t => {
    var e, i;
    return (0, l.u5)(s, (e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
          return Object.getOwnPropertyDescriptor(i, t).enumerable
        }))), n.forEach(function(e) {
          var n;
          n = i[e], e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = n
        })
      }
      return t
    }({}, t), i = i = {
      autoTrackExposure: false
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        i.push.apply(i, n)
      }
      return i
    })(Object(i)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
    }), e))
  }