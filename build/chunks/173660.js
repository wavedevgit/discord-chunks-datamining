/** Chunk was on web.js **/
/** chunk id: 173660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d,
  k: () => u
});
var Chunk311907 = require("./311907.js"),
  Chunk164956 = require("./164956.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk576705 = require("./576705.js"),
  Chunk977997 = require("./977997.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  var t;
  let {
    channel: n,
    authenticationStore: r = a.default,
    voiceStateStore: u = l.A,
    mediaEngineStore: d = s.A,
    permissionStore: f = o.A,
    impersonateStore: p = i.A
  } = e, _ = null != n ? u.getVoiceState(n.getGuildId(), r.getId()) : null, h = d.isSelfMute() || d.isSelfMutedTemporarily(), m = null == n ? true : n.getGuildId(), g = p.isViewingRoles(m) && !f.can(c.xBc.SPEAK, n);
  return {
    selfMute: h,
    suppress: (null == _ ? true : _.suppress) || g,
    mute: null != (t = null == _ ? true : _.mute) && t
  }
}

function d(e) {
  return (0, r.cf)([a.default, l.A, s.A, o.A, i.A], () => u({
    channel: e,
    authenticationStore: a.default,
    voiceStateStore: l.A,
    mediaEngineStore: s.A,
    permissionStore: o.A,
    impersonateStore: i.A
  }))
}