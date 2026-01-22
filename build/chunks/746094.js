/** Chunk was on 21738 **/
/** chunk id: 746094, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk272355 = require("./272355.js"),
  Chunk627363 = require("./627363.js"),
  Chunk800828 = require("./800828.js"),
  Chunk652215 = require("./652215.js");
class o extends Chunk272355.A {
  _initialize() {
    r.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  _terminate() {
    r.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  destroy() {
    r.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "handlePostConnectionOpen", () => {
        let e = a.A.getGameRelationships(),
          t = new Set;
        e.values().forEach(e => {
          e.type === s.eA$.PENDING_INCOMING && t.add(e.applicationId)
        }), l.Ay.fetchApplications(Array.from(t))
      })
  }
}
let c = new o