/** Chunk was on 1272 **/
/** chunk id: 468136, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk626135 = require("./626135.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let o = {
  [Chunk981631.Etm.GET_NETWORKING_CONFIG]: {
    scope: Chunk186901.lH,
    handler: () => Promise.all([Chunk544891.tn.get({
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
    }), Chunk544891.tn.post({
      url: Chunk981631.ANM.NETWORKING_TOKEN,
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
  [Chunk981631.Etm.NETWORKING_SYSTEM_METRICS]: {
    scope: Chunk186901.lH,
    handler(e) {
      let {
        socket: t,
        args: n
      } = e;
      n.application_id = t.application.id, i.default.track(a.rMx.NETWORKING_SYSTEM_METRICS, n)
    }
  },
  [Chunk981631.Etm.NETWORKING_PEER_METRICS]: {
    scope: Chunk186901.lH,
    handler(e) {
      let {
        socket: t,
        args: n
      } = e;
      n.application_id = t.application.id, i.default.track(a.rMx.NETWORKING_PEER_METRICS, n)
    }
  },
  [Chunk981631.Etm.NETWORKING_CREATE_TOKEN]: {
    scope: Chunk186901.lH,
    handler: () => Chunk544891.tn.post({
      url: Chunk981631.ANM.NETWORKING_TOKEN,
      retries: 1,
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => e.body)
  }
}