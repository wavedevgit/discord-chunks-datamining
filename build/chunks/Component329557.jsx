/** Chunk was on 65354 **/
/** chunk id: 329557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk51596 = require("./51596.js"),
  Chunk823385 = require("./823385.js"),
  Chunk900085 = require("./900085.jsx");
let u = "QUICK_SWITCHER_MODAL_KEY";
class d extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("QUICKSWITCHER_SHOW", this.handleShow), Chunk570140.Z.subscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), Chunk570140.Z.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  handleShow() {
    Chunk823385.Z.isOpen() && !(0, Chunk481060.nfh)(u) && (0, Chunk481060.h7j)(e => (0, r.jsx)(c.Z, function(e) {
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
      modalKey: u,
      instant: true,
      onCloseCallback: Chunk51596.Cp
    })
  }
  handleHide() {
    (0, Chunk481060.Mr3)(u)
  }
}
let f = new d