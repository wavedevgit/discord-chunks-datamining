/** Chunk was on 1272 **/
/** chunk id: 657030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk317770 = require("./317770.js"),
  Chunk728345 = require("./728345.js"),
  Chunk91896 = require("./91896.js"),
  Chunk981631 = require("./981631.js");
class s extends Chunk317770.Z {
  _initialize() {
    r.Z.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  _terminate() {
    r.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
  }
  destroy() {
    r.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
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
        let e = a.Z.getGameRelationships(),
          t = new Set;
        e.values().forEach(e => {
          e.type === o.OGo.PENDING_INCOMING && t.add(e.applicationId)
        }), l.ZP.fetchApplications(Array.from(t))
      })
  }
}
let c = new s