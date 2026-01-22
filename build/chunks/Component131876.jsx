/** Chunk was on 21738 **/
/** chunk id: 131876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js");
let s = "CONNECTIONS_GRID_MODAL_KEY";
class o extends Chunk272355.A {
  _initialize() {
    l.h.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.h.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  _terminate() {
    l.h.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.h.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  handleShow(e) {
    let {
      onComplete: t,
      excludedPlatformTypes: l,
      includedPlatformTypes: a,
      integrations: o,
      onCompleteApplication: c
    } = e;
    (0, i.kBI)(s) || (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("95198").then(n.bind(n, 58829));
      return n => (0, r.jsx)(e, function(e) {
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
      }({
        onComplete: t,
        excludedPlatformTypes: l,
        includedPlatformTypes: a,
        integrations: o,
        onCompleteApplication: c
      }, n))
    })
  }
  handleHide() {
    (0, i.OoC)(s)
  }
}
let c = new o