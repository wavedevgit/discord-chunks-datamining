/** Chunk was on 21738 **/
/** chunk id: 905911, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk954571 = require("./954571.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let s = {
  [Chunk652215.e$_.GET_NETWORKING_CONFIG]: {
    scope: Chunk613057.hj,
    handler: () => Promise.all([r.Bo.get({
      url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
      retries: 3,
      rejectWithError: false
    }).then(e => {
      let {
        body: {
          address: t
        }
      } = e;
      return t
    }), r.Bo.post({
      url: a.Rsh.NETWORKING_TOKEN,
      retries: 3,
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      let {
        body: {
          token: t
        }
      } = e;
      return t
    })]).then(e => {
      let [t, n] = e;
      return {
        address: t,
        token: n
      }
    })
  },
  [Chunk652215.e$_.NETWORKING_SYSTEM_METRICS]: {
    scope: Chunk613057.hj,
    handler(e) {
      let {
        socket: t,
        args: n
      } = e;
      n.application_id = t.application.id, i.default.track(a.HAw.NETWORKING_SYSTEM_METRICS, n)
    }
  },
  [Chunk652215.e$_.NETWORKING_PEER_METRICS]: {
    scope: Chunk613057.hj,
    handler(e) {
      let {
        socket: t,
        args: n
      } = e;
      n.application_id = t.application.id, i.default.track(a.HAw.NETWORKING_PEER_METRICS, n)
    }
  },
  [Chunk652215.e$_.NETWORKING_CREATE_TOKEN]: {
    scope: Chunk613057.hj,
    handler: () => r.Bo.post({
      url: a.Rsh.NETWORKING_TOKEN,
      retries: 1,
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => e.body)
  }
}