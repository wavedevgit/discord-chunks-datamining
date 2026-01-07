/** Chunk was on 1272 **/
/** chunk id: 188861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk710845 = require("./710845.js"),
  Chunk857192 = require("./857192.js"),
  Chunk901077 = require("./901077.js"),
  Chunk46832 = require("./46832.js"),
  Chunk852926 = require("./852926.js"),
  Chunk748635 = require("./748635.js"),
  Chunk981631 = require("./981631.js");
let u = new Chunk710845.Z("RPCServer:PostMessage"),
  d = (e, t, n) => {
    (i.default.isLoggingOverlayEvents || e.cmd !== c.Etm.OVERLAY) && t.info("Socket Message: ".concat(n.id), (0, l.Z)(e))
  },
  p = function() {
    let e = new a.Z(o.em, u, s.Z, d);
    return window.addEventListener("message", t => {
      if (window === t.source) return;
      if (null == t.source || null == t.source.postMessage) return void u.error("Unknown event source");
      let n = t.source,
        r = t.data,
        i = t.origin;
      e.handleMessage(r, i, (e, t) => {
        ! function(e) {
          try {
            return e.closed
          } catch (e) {
            returnfalse
          }
        }(n) && n.postMessage(e, t)
      })
    }), e
  }()