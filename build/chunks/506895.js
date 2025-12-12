/** Chunk was on web.js **/
/** chunk id: 506895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => s,
  v: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk317381 = require("./317381.js"),
  Chunk374065 = require("./374065.js"),
  Chunk944486 = require("./944486.js");

function s(e) {
  let t = (0, r.e7)([a.Z], () => a.Z.getChannelId()),
    n = (0, r.e7)([i.ZP], () => {
      if (null == t) return null;
      let n = i.ZP.getEmbeddedActivitiesForChannel(t).filter(t => t.applicationId === e);
      return n.length > 0 ? n[0] : true
    }),
    s = null == n ? true : n.compositeInstanceId,
    l = null == n ? true : n.location,
    c = (0, r.e7)([i.ZP], () => i.ZP.getCurrentEmbeddedActivity()),
    u = (0, o.KF)(t) === o.jy.CAN_LAUNCH;
  return {
    currentChannelId: t,
    instanceId: s,
    instanceLocation: l,
    isCurrentlyInInstance: null != s && (null == c ? true : c.compositeInstanceId) === s,
    canLaunchInChannel: u
  }
}

function l(e, t) {
  let n = null != t ? t : a.Z.getChannelId();
  if (null == n) return {
    currentChannelId: null,
    instanceId: null,
    instanceLocation: null,
    isCurrentlyInInstance: false,
    canLaunchInChannel: false
  };
  let r = (null != n ? (0, o.Hn)(n) : o.jy.NO_CHANNEL) === o.jy.CAN_LAUNCH,
    s = i.ZP.getEmbeddedActivitiesForChannel(n).filter(t => t.applicationId === e),
    l = s.length > 0 ? s[0] : true,
    c = null == l ? true : l.compositeInstanceId,
    u = null == l ? true : l.location,
    d = i.ZP.getCurrentEmbeddedActivity();
  return {
    currentChannelId: n,
    instanceId: c,
    instanceLocation: u,
    isCurrentlyInInstance: null != c && (null == d ? true : d.compositeInstanceId) === c,
    canLaunchInChannel: r
  }
}