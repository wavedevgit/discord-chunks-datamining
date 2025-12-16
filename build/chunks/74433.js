/** Chunk was on 1272 **/
/** chunk id: 74433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./781311.js"), require("./388685.js");
var Chunk657305 = require("./657305.js"),
  Chunk841784 = require("./841784.js"),
  Chunk420660 = require("./420660.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t) {
  if (null != e && e.type === a.IIU.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  if (null != t) return null == e || e.type !== a.IIU.PLAYING ? o.intl.string(o.t.eXan7B) : e.name;
  if (null == e || null == e.name) return null;
  if ((0, l.Z)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
  if ((0, i.Z)(e)) return (0, r.Z)(e.name);
  var n = e.type,
    s = e.name;
  switch (n) {
    case a.IIU.LISTENING:
    case a.IIU.WATCHING:
    case a.IIU.COMPETING:
    case a.IIU.STREAMING:
      return s;
    case a.IIU.CUSTOM_STATUS:
    case a.IIU.HANG_STATUS:
      return null;
    case a.IIU.PLAYING:
    default:
      return s
  }
}

function c(e, t) {
  if (Array.isArray(e)) {
    let n = e;
    null != t && false !== t.discoverable && (n = [...n, null]);
    let r = null;
    for (let e of n) {
      let n = s(e, t);
      if (null != n) return {
        activity: e,
        activityText: n
      };
      (null == e ? true : e.type) === a.IIU.CUSTOM_STATUS && null != e.emoji && (r = e)
    }
    return (null == r ? true : r.emoji) != null ? {
      activity: r,
      activityText: null
    } : null
  }
  return s(e, t)
}