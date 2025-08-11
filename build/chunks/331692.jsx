/** Chunk was on 75435 **/
/** chunk id: 331692, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk103879 = require("./103879.js"),
  Chunk800530 = require("./800530.js");
let a = {
  open(t, e) {
    (0, r.ZDy)(async () => {
      s.Z.dispatch({
        type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN"
      });
      let {
        default: e
      } = await i.e("82961").then(i.bind(i, 751744));
      return i => <e{...function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = i[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({
        classificationId: t
      }, i)} />
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