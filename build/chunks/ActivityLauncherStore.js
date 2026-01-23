/** Chunk was on web.js **/
/** chunk id: 689168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73153 = require("./73153.js"),
  Chunk375492 = require("./375492.js"),
  Chunk461213 = require("./461213.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = {},
  p = {},
  _ = 12e4,
  h = 15e3;

function m(e) {
  let {
    applicationId: t,
    activityType: n
  } = e, r = f[t];
  if (null == r) returnfalse;
  delete r[n]
}

function g(e, t, n) {
  null != p[e] && p[e].stop();
  let r = new a.Ep;
  r.start(n, () => s.h.dispatch({
    type: "ACTIVITY_LAUNCH_FAIL",
    applicationId: e,
    activityType: t
  })), p[e] = r
}

function E(e, t, n) {
  var r, i;
  let {
    applicationId: a,
    remotePartyId: s
  } = n;
  if (e === c.eAD.COMPLETE) {
    null == (i = f[a]) || delete i[t], null != p[a] && (p[a].stop(), delete p[a]);
    return
  }
  let o = null != (r = f[a]) ? r : {};
  o[t] = {
    state: e,
    remotePartyId: s
  }, f[a] = o, __OVERLAY__ || e !== c.eAD.FAILED ? e === c.eAD.LOADING && null != s && g(a, t, h) : g(a, t, _)
}

function y(e) {
  let {
    activityLauncherStates: t
  } = e;
  f = d({}, t)
}

function b(e) {
  return E(c.eAD.COMPLETE, c.xL.JOIN, e)
}

function O() {
  let e = Object.entries(f).map(e => {
      var t;
      let [n, r] = e;
      return {
        applicationId: n,
        remotePartyId: null == (t = r[c.xL.JOIN]) ? true : t.remotePartyId
      }
    }).filter(e => {
      let {
        remotePartyId: t
      } = e;
      return null != t
    }),
    t = false;
  return e.forEach(e => {
    var n, r;
    let {
      applicationId: i,
      remotePartyId: a
    } = e, s = o.A.getApplicationActivity(i), u = l.A.getApplicationActivity(i);
    ((null == s || null == (n = s.party) ? true : n.id) === a || (null == u || null == (r = u.party) ? true : r.id) === a) && (E(c.eAD.COMPLETE, c.xL.JOIN, {
      applicationId: i,
      remotePartyId: a
    }), t = true)
  }), t
}
class v extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([o.A, l.A], O)
  }
  getState(e, t) {
    var n;
    let r = f[e];
    return null == r || null == (n = r[t]) ? true : n.state
  }
  getStates() {
    return f
  }
}
u(v, "displayName", "ActivityLauncherStore");
let A = new v(Chunk73153.h, {
  OVERLAY_INITIALIZE: y,
  ACTIVITY_JOIN_LOADING: e => E(c.eAD.LOADING, c.xL.JOIN, e),
  ACTIVITY_JOIN_FAILED: e => E(c.eAD.FAILED, c.xL.JOIN, e),
  ACTIVITY_JOIN: b,
  EMBEDDED_ACTIVITY_CLOSE: b,
  ACTIVITY_LAUNCH_FAIL: m
})