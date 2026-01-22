/** Chunk was on 21738 **/
/** chunk id: 266686, original params: e,t,n (module,exports,require) **/
let r;
require.d(exports, {
  A: () => p
});
var Chunk626584 = require("./626584.js"),
  Chunk111162 = require("./111162.js"),
  Chunk84002 = require("./84002.js"),
  Chunk538665 = require("./538665.js"),
  Chunk546983 = require("./546983.js"),
  Chunk233959 = require("./233959.js"),
  Chunk652215 = require("./652215.js");
let d = new Chunk626584.A("RPCServer:PostMessage"),
  p = (r = new Chunk538665.A(Chunk546983.j7, d, Chunk233959.A, (e, t, n) => {
    (l.default.isLoggingOverlayEvents || e.cmd !== u.e$_.OVERLAY) && t.info("Socket Message: ".concat(n.id), (0, a.A)(e))
  }), window.addEventListener("message", e => {
    if (window === e.source) return;
    if (null == e.source || null == e.source.postMessage) return void d.error("Unknown event source");
    let t = e.source,
      n = e.data,
      i = e.origin;
    r.handleMessage(n, i, (e, n) => {
      ! function(e) {
        try {
          return e.closed
        } catch (e) {
          returnfalse
        }
      }(t) && t.postMessage(e, n)
    })
  }), r)