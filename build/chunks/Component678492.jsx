/** Chunk was on 1272 **/
/** chunk id: 678492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk388032 = require("./388032.jsx");
class c extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  handlePoggermodeTemporarilyDisabled() {
    (0, Chunk481060.h7j)(e => {
      var t, n;
      return (0, r.jsx)(l.ConfirmModal, (t = function(e) {
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
      }({}, e), n = n = {
        header: o.intl.string(o.t.wDQgnX),
        confirmText: o.intl.string(o.t["cY+Oob"]),
        confirmButtonColor: i.zx.Colors.GREEN,
        children: (0, r.jsx)(l.Text, {
          variant: "text-md/normal",
          children: o.intl.string(o.t.OJklbS)
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    })
  }
}
let u = new c