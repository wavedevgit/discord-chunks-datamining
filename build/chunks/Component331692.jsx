/** Chunk was on 75435 **/
/** chunk id: 331692, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk480916 = require("./480916.js"),
  Chunk103879 = require("./103879.js"),
  Chunk800530 = require("./800530.js");

function o(t) {
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
}

function A() {
  _.success(), _.start_verification_check()
}
let _ = {
    open(t, e) {
      (0, r.ZDy)(async () => {
        s.Z.dispatch({
          type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN"
        });
        let {
          default: e
        } = await i.e("82961").then(i.bind(i, 751744));
        return i => (0, n.jsx)(e, o({
          classificationId: t
        }, i))
      }, {
        onCloseCallback: e
      })
    },
    openV2(t, e) {
      (0, r.ZDy)(async () => {
        s.Z.dispatch({
          type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN"
        });
        let {
          default: e
        } = await i.e("50614").then(i.bind(i, 17597));
        return i => (0, n.jsx)(e, o({
          classificationId: t,
          entryPoint: c.cU.AUTOMATED_UNDERAGE_APPEALS,
          onComplete: A
        }, i))
      }, {
        onCloseCallback: e
      })
    },
    close() {
      s.Z.dispatch({
        type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE"
      })
    },
    success() {
      s.Z.dispatch({
        type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS"
      })
    },
    start_verification_check() {
      s.Z.dispatch({
        type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL"
      }), setTimeout(() => (0, l._w)(), a.TX)
    }
  },
  E = _