/** Chunk was on 86142 **/
/** chunk id: 526423, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk830215 = require("./830215.js"),
  Chunk6981 = require("./6981.js"),
  Chunk351671 = require("./351671.js"),
  Chunk115036 = require("./115036.js"),
  Chunk954571 = require("./954571.js"),
  Chunk272355 = require("./272355.js"),
  Chunk652215 = require("./652215.js");

function h(e, t) {
  c.default.track(u.HAw.BROWSER_HANDOFF_SUCCEEDED, {
    authenticated: e,
    handoff_source: t
  })
}
class p extends Chunk272355.A {
  _initialize() {
    i.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd), i.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
  }
  _terminate() {
    i.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd), i.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
  }
  handleHandoff(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      fingerprint: i,
      handoffSource: o
    } = e;
    null != n ? r.Bo.post({
      url: u.Rsh.HANDOFF_EXCHANGE,
      body: {
        key: t,
        handoff_token: n
      },
      rejectWithError: false
    }).then(e => {
      let {
        body: t
      } = e;
      (0, l.uA)(t.user), s.A.loginToken(t.token, false), h(true, o)
    }, e => {
      if (null != i && h(false, o), s.A.setFingerprint(i), (0, l.mZ)(), o === a.L.ROLE_SUBSCRIPTION) {
        var t;
        c.default.track(u.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
          reason: null != (t = e.message) ? t : e.text,
          handoff_source: o
        })
      }
    }) : null != i ? (s.A.setFingerprint(i), h(false, o), (0, l.mZ)()) : (s.A.setFingerprint(i), (0, l.J0)())
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
        } = e, r = o.A.key;
        null != r && o.A.isHandoffAvailable() ? this.handleHandoff({
          handoffKey: r,
          handoffToken: t,
          fingerprint: n,
          handoffSource: true
        }) : (s.A.setFingerprint(null), (0, l.J0)())
      })
  }
}
let g = new p