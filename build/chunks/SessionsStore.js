/** Chunk was on web.js **/
/** chunk id: 528767, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk961350 = require("./961350.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = Object.freeze([]),
  d = {};

function f(e) {
  d = {}, e.sessions.forEach(e => {
    d[e.sessionId] = e
  })
}
class p extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.default)
  }
  getSessions() {
    return d
  }
  getSession() {
    let e = l.default.getSessionId();
    return null != e ? this.getSessionById(e) : null
  }
  getRemoteActivities() {
    let e = l.default.getSessionId(),
      t = a().find(d, t => t.active && t.sessionId !== e);
    return null != t ? t.activities : u
  }
  getHiddenActivities() {
    let e = l.default.getSessionId(),
      t = a().find(d, t => t.active && t.sessionId !== e);
    return null != t && null != t.hiddenActivities ? t.hiddenActivities : u
  }
  getSessionById(e) {
    return d[e]
  }
  getActiveSession() {
    return a().find(d, e => {
      let {
        active: t
      } = e;
      return t
    })
  }
  getRemoteApplicationActivity(e) {
    var t;
    if (null == e) return null;
    let n = l.default.getSessionId(),
      r = a().find(d, e => e.active && e.sessionId !== n);
    if (null == r) return null;
    let i = r.activities.find(t => t.application_id === e);
    return null != i ? i : null == (t = r.hiddenActivities) ? true : t.find(t => t.application_id === e)
  }
}
c(p, "displayName", "SessionsStore");
let _ = new p(Chunk73153.h, {
  CONNECTION_OPEN: f,
  SESSIONS_REPLACE: f
})