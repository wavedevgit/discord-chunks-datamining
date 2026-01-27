/** Chunk was on web.js **/
/** chunk id: 725606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l,
  w: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk933958 = require("./933958.js"),
  Chunk782091 = require("./782091.js"),
  Chunk309010 = require("./309010.js");

function s(e) {
  let t = (0, r.bG)([o.A], () => o.A.getChannelId()),
    n = (0, r.bG)([i.Ay], () => {
      if (null == t) return null;
      let n = i.Ay.getEmbeddedActivitiesForChannel(t).filter(t => t.applicationId === e);
      return n.length > 0 ? n[0] : true
    }),
    s = null == n ? true : n.compositeInstanceId,
    l = null == n ? true : n.location,
    c = (0, r.bG)([i.Ay], () => i.Ay.getCurrentEmbeddedActivity()),
    u = (0, a.et)(t) === a.xy.CAN_LAUNCH;
  return {
    currentChannelId: t,
    instanceId: s,
    instanceLocation: l,
    isCurrentlyInInstance: null != s && (null == c ? true : c.compositeInstanceId) === s,
    canLaunchInChannel: u
  }
}

function l(e, t) {
  let n = null != t ? t : o.A.getChannelId();
  if (null == n) return {
    currentChannelId: null,
    instanceId: null,
    instanceLocation: null,
    isCurrentlyInInstance: false,
    canLaunchInChannel: false
  };
  let r = (null != n ? (0, a.J4)(n) : a.xy.NO_CHANNEL) === a.xy.CAN_LAUNCH,
    s = i.Ay.getEmbeddedActivitiesForChannel(n).filter(t => t.applicationId === e),
    l = s.length > 0 ? s[0] : true,
    c = null == l ? true : l.compositeInstanceId,
    u = null == l ? true : l.location,
    d = i.Ay.getCurrentEmbeddedActivity();
  return {
    currentChannelId: n,
    instanceId: c,
    instanceLocation: u,
    isCurrentlyInInstance: null != c && (null == d ? true : d.compositeInstanceId) === c,
    canLaunchInChannel: r
  }
}