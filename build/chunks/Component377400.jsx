/** Chunk was on 94709 **/
/** chunk id: 377400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk175281 = require("./175281.jsx"),
  Chunk285371 = require("./285371.js");
class c extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), Chunk570140.Z.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), Chunk570140.Z.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  showKeyboardShortcuts() {
    (0, Chunk481060.h7j)(e => (0, r.jsx)(a.Z, function(e) {
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
    }({}, e)), {
      modalKey: Chunk285371.J
    })
  }
  hideKeyboardShortcuts() {
    (0, Chunk481060.Mr3)(Chunk285371.J)
  }
}
let u = new c