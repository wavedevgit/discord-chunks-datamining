/** Chunk was on 67000 **/
/** chunk id: 377400, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk175281 = require("./175281.jsx"),
  Chunk285371 = require("./285371.js");
class c extends Chunk317770.Z {
  _initialize() {
    l.Z.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), l.Z.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  _terminate() {
    l.Z.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), l.Z.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  showKeyboardShortcuts() {
    (0, i.h7j)(e => (0, r.jsx)(o.Z, function(e) {
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
      modalKey: s.J
    })
  }
  hideKeyboardShortcuts() {
    (0, i.Mr3)(s.J)
  }
}
let u = new c