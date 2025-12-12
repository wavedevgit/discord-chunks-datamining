/** Chunk was on web.js **/
/** chunk id: 797258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk314897 = require("./314897.js");

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
class p extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk314897.default)
  }
  getSessions() {
    return d
  }
  getSession() {
    let e = Chunk314897.default.getSessionId();
    return null != module ? this.getSessionById(module) : null
  }
  getRemoteActivities() {
    let e = Chunk314897.default.getSessionId(),
      t = o().find(d, t => t.active && t.sessionId !== e);
    return null != exports ? exports.activities : u
  }
  getHiddenActivities() {
    let e = Chunk314897.default.getSessionId(),
      t = o().find(d, t => t.active && t.sessionId !== e);
    return null != exports && null != exports.hiddenActivities ? exports.hiddenActivities : u
  }
  getSessionById(e) {
    return d[e]
  }
  getActiveSession() {
    return o().find(d, e => {
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
      r = o().find(d, e => e.active && e.sessionId !== n);
    if (null == r) return null;
    let i = r.activities.find(t => t.application_id === e);
    return null != i ? i : null == (t = r.hiddenActivities) ? true : t.find(t => t.application_id === e)
  }
}
c(p, "displayName", "SessionsStore");
let _ = new p(Chunk570140.Z, {
  CONNECTION_OPEN: f,
  SESSIONS_REPLACE: f
})