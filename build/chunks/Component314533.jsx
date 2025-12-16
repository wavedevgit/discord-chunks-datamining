/** Chunk was on 1272 **/
/** chunk id: 314533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js");
let o = "CONNECTIONS_GRID_MODAL_KEY";
class s extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), Chunk570140.Z.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), Chunk570140.Z.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  handleShow(e) {
    let {
      onComplete: t,
      excludedPlatformTypes: l,
      includedPlatformTypes: a,
      integrations: s,
      onCompleteApplication: c
    } = e;
    (0, i.nfh)(o) || (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("28538").then(n.bind(n, 51299));
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
        integrations: s,
        onCompleteApplication: c
      }, n))
    })
  }
  handleHide() {
    (0, Chunk481060.Mr3)(o)
  }
}
let c = new s