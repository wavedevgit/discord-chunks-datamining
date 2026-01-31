/** Chunk was on 17534 **/
/** chunk id: 265367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk793322 = require("./793322.js"),
  Chunk174768 = require("./174768.js"),
  Chunk814340 = require("./814340.jsx");
let u = "QUICK_SWITCHER_MODAL_KEY";
class d extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), i.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  _terminate() {
    i.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), i.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  handleShow() {
    o.A.isOpen() && !(0, l.kBI)(u) && (0, l.qfG)(e => (0, r.jsx)(c.A, function(e) {
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
      onCloseCallback: a.jD
    })
  }
  handleHide() {
    (0, l.OoC)(u)
  }
}
let h = new d