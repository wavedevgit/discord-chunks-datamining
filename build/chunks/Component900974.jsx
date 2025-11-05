/** Chunk was on 1272 **/
/** chunk id: 900974, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js");
let a = false,
  s = null,
  o = {
    init() {
      Chunk570140.Z.subscribe("CONNECTION_OPEN", e => {
        let {
          pendingPayments: t
        } = e;
        if (null != t && t.length > 0) {
          var l;
          if (s === t[0] || null == (s = t[0])) return;
          l = s, a || (a = true, (0, i.ZDy)(async () => {
            let {
              default: e
            } = await n.e("7232").then(n.bind(n, 645586));
            return t => {
              let {
                transitionState: n,
                onClose: i
              } = t;
              return (0, r.jsx)(e, {
                pendingPayment: l,
                transitionState: n,
                onClose: () => (a = false, i())
              })
            }
          }))
        }
      })
    }
  }