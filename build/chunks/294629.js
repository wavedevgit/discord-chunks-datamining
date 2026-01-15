/** Chunk was on web.js **/
/** chunk id: 294629, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d,
  b: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk160404 = require("./160404.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk496675 = require("./496675.js"),
  Chunk979651 = require("./979651.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  var t;
  let {
    channel: n,
    authenticationStore: r = a.default,
    voiceStateStore: u = l.Z,
    mediaEngineStore: d = o.Z,
    permissionStore: f = s.Z,
    impersonateStore: p = i.Z
  } = e, _ = null != n ? u.getVoiceState(n.getGuildId(), r.getId()) : null, h = d.isSelfMute() || d.isSelfMutedTemporarily(), m = null == n ? true : n.getGuildId(), g = p.isViewingRoles(m) && !f.can(c.Plq.SPEAK, n);
  return {
    selfMute: h,
    suppress: (null == _ ? true : _.suppress) || g,
    mute: null != (t = null == _ ? true : _.mute) && t
  }
}

function d(e) {
  return (0, r.cj)([a.default, l.Z, o.Z, s.Z, i.Z], () => u({
    channel: e,
    authenticationStore: a.default,
    voiceStateStore: l.Z,
    mediaEngineStore: o.Z,
    permissionStore: s.Z,
    impersonateStore: i.Z
  }))
}