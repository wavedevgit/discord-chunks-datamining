/** Chunk was on 61 **/
/** chunk id: 129526, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./781311.js");
var Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
  Chunk230900 = require("./230900.js"),
  Chunk854698 = require("./854698.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  return {
    entity: function(e) {
      let {
        entityType: t,
        channelId: n
      } = e, l = (0, i.xV)(e);
      return null == t || t === s.WX.NONE ? "An event type must be specified." : (null == l || "" === l.trim()) && null == n ? "Either a location or channel must be specified." : true
    }(e),
    schedule: function(e, t) {
      let n = (0, a.v1)(e),
        {
          entityType: l
        } = e;
      if (null == n || (null == n ? true : n.startDate) == null) return o.intl.string(o.t.M73YyN);
      let {
        startDate: i,
        endDate: c
      } = n;
      return l === s.WX.EXTERNAL && null == c ? o.intl.string(o.t["H16p/w"]) : !t && i.isBefore(r()()) ? o.intl.string(o.t.AXR5Ss) : null != c && null != i && c.isBefore(i) ? o.intl.string(o.t.LpjF4K) : null != c && c.isBefore(r()()) ? o.intl.string(o.t.ViDcm2) : true
    }(e, t),
    topic: function(e) {
      let {
        name: t
      } = e;
      return null == t || "" === t.trim() ? "Topic must be specified." : true
    }(e)
  }
}