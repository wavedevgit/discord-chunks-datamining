/** Chunk was on 342 **/
/** chunk id: 505966, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./733351.js");
var Chunk989349 = require("./989349.js"),
  r = require.n(Chunk989349),
  Chunk9448 = require("./9448.js"),
  Chunk974930 = require("./974930.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t) {
  return {
    entity: function(e) {
      let {
        entityType: t,
        channelId: n
      } = e, l = (0, i.k5)(e);
      return null == t || t === a.Ps.NONE ? "An event type must be specified." : (null == l || "" === l.trim()) && null == n ? "Either a location or channel must be specified." : true
    }(e),
    schedule: function(e, t) {
      let n = (0, s.N5)(e),
        {
          entityType: l
        } = e;
      if (null == n || (null == n ? true : n.startDate) == null) return o.intl.string(o.t.M73YyN);
      let {
        startDate: i,
        endDate: c
      } = n;
      return l === a.Ps.EXTERNAL && null == c ? o.intl.string(o.t["H16p/w"]) : !t && i.isBefore(r()()) ? o.intl.string(o.t.AXR5Ss) : null != c && null != i && c.isBefore(i) ? o.intl.string(o.t.LpjF4K) : null != c && c.isBefore(r()()) ? o.intl.string(o.t.ViDcm2) : true
    }(e, t),
    topic: function(e) {
      let {
        name: t
      } = e;
      return null == t || "" === t.trim() ? "Topic must be specified." : true
    }(e)
  }
}