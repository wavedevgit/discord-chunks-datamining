/** Chunk was on 21738 **/
/** chunk id: 847177, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./733351.js"), require("./896048.js");
var Chunk440594 = require("./440594.js"),
  Chunk765379 = require("./765379.js"),
  Chunk960076 = require("./960076.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t) {
  if (null != e && e.type === a.$pd.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
  if (null != t) return null == e || e.type !== a.$pd.PLAYING ? s.intl.string(s.t.eXan7B) : e.name;
  if (null == e || null == e.name) return null;
  if ((0, l.A)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
  if ((0, i.A)(e)) return (0, r.A)(e.name);
  var n = e.type,
    o = e.name;
  switch (n) {
    case a.$pd.LISTENING:
    case a.$pd.WATCHING:
    case a.$pd.COMPETING:
    case a.$pd.STREAMING:
      return o;
    case a.$pd.CUSTOM_STATUS:
    case a.$pd.HANG_STATUS:
      return null;
    case a.$pd.PLAYING:
    default:
      return o
  }
}

function c(e, t) {
  if (Array.isArray(e)) {
    let n = e;
    null != t && false !== t.discoverable && (n = [...n, null]);
    let r = null;
    for (let e of n) {
      let n = o(e, t);
      if (null != n) return {
        activity: e,
        activityText: n
      };
      (null == e ? true : e.type) === a.$pd.CUSTOM_STATUS && null != e.emoji && (r = e)
    }
    return (null == r ? true : r.emoji) != null ? {
      activity: r,
      activityText: null
    } : null
  }
  return o(e, t)
}