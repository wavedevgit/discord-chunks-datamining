/** Chunk was on 75435 **/
/** chunk id: 331692, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk103879 = require("./103879.js"),
  Chunk800530 = require("./800530.js");
let s = {
  open(t, e) {
    (0, r.ZDy)(async () => {
      o.Z.dispatch({
        type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN"
      });
      let {
        default: e
      } = await n.e("82961").then(n.bind(n, 751744));
      return n => (0, i.jsx)(e, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({
        classificationId: t
      }, n))
    }, {
      onCloseCallback: e
    })
  },
  close() {
    Chunk570140.Z.dispatch({
      type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE"
    })
  },
  success() {
    Chunk570140.Z.dispatch({
      type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS"
    })
  },
  start_verification_check() {
    Chunk570140.Z.dispatch({
      type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL"
    }), setTimeout(() => (0, Chunk103879._w)(), Chunk800530.TX)
  }
}