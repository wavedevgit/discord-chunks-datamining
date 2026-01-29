/** Chunk was on 4670 **/
/** chunk id: 378729, original params: e,t,i (module,exports,require) **/
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
  r = e => {
    var t, i;
    return (0, l.u5)(s, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
          return Object.getOwnPropertyDescriptor(i, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = i[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e), i = i = {
      autoTrackExposure: false
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        i.push.apply(i, n)
      }
      return i
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
    }), t))
  }