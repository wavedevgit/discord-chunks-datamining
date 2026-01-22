/** Chunk was on 21738 **/
/** chunk id: 856588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js");
let a = false,
  s = null,
  o = {
    init() {
      l.h.subscribe("CONNECTION_OPEN", e => {
        let {
          pendingPayments: t
        } = e;
        if (null != t && t.length > 0) {
          var l;
          if (s === t[0] || null == (s = t[0])) return;
          l = s, a || (a = true, (0, i.mMO)(async () => {
            let {
              default: e
            } = await n.e("56999").then(n.bind(n, 302810));
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