/** Chunk was on 18831 **/
/** chunk id: 384725, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js");
let o = {
  open(e) {
    l.Z.dispatch({
      type: "SAFETY_HUB_APPEAL_OPEN",
      classificationId: e
    }), (0, a.ZDy)(async () => {
      let {
        default: t
      } = await i.e("65652").then(i.bind(i, 208265));
      return i => (0, n.jsx)(t, function(e) {
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
      }({
        classificationId: e
      }, i))
    })
  },
  close() {
    Chunk570140.Z.dispatch({
      type: "SAFETY_HUB_APPEAL_CLOSE"
    })
  }
}