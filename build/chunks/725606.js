/** Chunk was on web.js **/
/** chunk id: 725606, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => l,
  w: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk933958 = require("./933958.js"),
  Chunk782091 = require("./782091.js"),
  Chunk309010 = require("./309010.js");

function o(e) {
  let t = (0, r.bG)([s.A], () => s.A.getChannelId()),
    n = (0, r.bG)([i.Ay], () => {
      if (null == t) return null;
      let n = i.Ay.getEmbeddedActivitiesForChannel(t).filter(t => t.applicationId === e);
      return n.length > 0 ? n[0] : true
    }),
    o = null == n ? true : n.compositeInstanceId,
    l = null == n ? true : n.location,
    c = (0, r.bG)([i.Ay], () => i.Ay.getCurrentEmbeddedActivity()),
    u = (0, a.et)(t) === a.xy.CAN_LAUNCH;
  return {
    currentChannelId: t,
    instanceId: o,
    instanceLocation: l,
    isCurrentlyInInstance: null != o && (null == c ? true : c.compositeInstanceId) === o,
    canLaunchInChannel: u
  }
}

function l(e, t) {
  let n = null != t ? t : s.A.getChannelId();
  if (null == n) return {
    currentChannelId: null,
    instanceId: null,
    instanceLocation: null,
    isCurrentlyInInstance: false,
    canLaunchInChannel: false
  };
  let r = (null != n ? (0, a.J4)(n) : a.xy.NO_CHANNEL) === a.xy.CAN_LAUNCH,
    o = i.Ay.getEmbeddedActivitiesForChannel(n).filter(t => t.applicationId === e),
    l = o.length > 0 ? o[0] : true,
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