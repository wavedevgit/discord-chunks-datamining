/** Chunk was on 93530 **/
/** chunk id: 67521, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk847599 = require("./847599.js"),
  Chunk308645 = require("./308645.js"),
  Chunk239093 = require("./239093.js");

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
      (0, r.mMO)(async () => {
        s.h.dispatch({
          type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN"
        });
        let {
          default: e
        } = await i.e("9018").then(i.bind(i, 244321));
        return i => (0, n.jsx)(e, o({
          classificationId: t
        }, i))
      }, {
        onCloseCallback: e
      })
    },
    openV2(t, e) {
      (0, r.mMO)(async () => {
        s.h.dispatch({
          type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN"
        });
        let {
          default: e
        } = await i.e("18128").then(i.bind(i, 767379));
        return i => (0, n.jsx)(e, o({
          classificationId: t,
          entryPoint: c.q1.AUTOMATED_UNDERAGE_APPEALS,
          onComplete: A
        }, i))
      }, {
        onCloseCallback: e
      })
    },
    close() {
      s.h.dispatch({
        type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE"
      })
    },
    success() {
      s.h.dispatch({
        type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS"
      })
    },
    start_verification_check() {
      s.h.dispatch({
        type: "SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL"
      }), setTimeout(() => (0, l.d)(), a.wQ)
    }
  },
  d = _