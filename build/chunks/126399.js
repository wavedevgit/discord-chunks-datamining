/** Chunk was on 27978 **/
/** chunk id: 126399, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk893776 = require("./893776.js"),
  Chunk899742 = require("./899742.js"),
  Chunk743142 = require("./743142.js"),
  Chunk117240 = require("./117240.js"),
  Chunk626135 = require("./626135.js"),
  Chunk317770 = require("./317770.js"),
  Chunk981631 = require("./981631.js");

function h(e, t) {
  c.default.track(d.rMx.BROWSER_HANDOFF_SUCCEEDED, {
    authenticated: e,
    handoff_source: t
  })
}
class p extends Chunk317770.Z {
  _initialize() {
    Chunk570140.Z.subscribe("BROWSER_HANDOFF_END", this.handleEnd), Chunk570140.Z.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
  }
  _terminate() {
    Chunk570140.Z.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd), Chunk570140.Z.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
  }
  handleHandoff(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      fingerprint: i,
      handoffSource: s
    } = e;
    null != n ? r.tn.post({
      url: d.ANM.HANDOFF_EXCHANGE,
      body: {
        key: t,
        handoff_token: n
      },
      rejectWithError: false
    }).then(e => {
      let {
        body: t
      } = e;
      (0, a.Vb)(t.user), l.Z.loginToken(t.token, false), h(true, s)
    }, e => {
      if (null != i && h(false, s), l.Z.setFingerprint(i), (0, a.lx)(), s === o.F.ROLE_SUBSCRIPTION) {
        var t;
        c.default.track(d.rMx.MOBILE_WEB_HANDOFF_FAILURE, {
          reason: null != (t = e.message) ? t : e.text,
          handoff_source: s
        })
      }
    }) : null != i ? (l.Z.setFingerprint(i), h(false, s), (0, a.lx)()) : (l.Z.setFingerprint(i), (0, a.by)())
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
      }(this, "handleEnd", e => {
        let {
          handoffToken: t,
          fingerprint: n
        } = e, r = s.Z.key;
        null != r && s.Z.isHandoffAvailable() ? this.handleHandoff({
          handoffKey: r,
          handoffToken: t,
          fingerprint: n,
          handoffSource: true
        }) : (l.Z.setFingerprint(null), (0, a.by)())
      })
  }
}
let m = new p