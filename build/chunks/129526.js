/** Chunk was on 58023 **/
n.d(t, {
  Z: () => c
}), n(566702);
var r = n(913527),
  l = n.n(r),
  i = n(230900),
  a = n(854698),
  s = n(765305),
  o = n(388032);

function c(e, t) {
  return {
    entity: function(e) {
      let {
        entityType: t,
        channelId: n
      } = e, r = (0, i.xV)(e);
      return null == t || t === s.WX.NONE ? "An event type must be specified." : (null == r || "" === r.trim()) && null == n ? "Either a location or channel must be specified." : void 0
    }(e),
    schedule: function(e, t) {
      let n = (0, a.v1)(e),
        {
          entityType: r
        } = e;
      if (null == n || (null == n ? void 0 : n.startDate) == null) return o.NW.string(o.t.M73YyM);
      let {
        startDate: i,
        endDate: c
      } = n;
      return r === s.WX.EXTERNAL && null == c ? o.NW.string(o.t["H16p//"]) : !t && i.isBefore(l()()) ? o.NW.string(o.t.AXR5Sk) : null != c && null != i && c.isBefore(i) ? o.NW.string(o.t.LpjF4O) : null != c && c.isBefore(l()()) ? o.NW.string(o.t.ViDcm5) : void 0
    }(e, t),
    topic: function(e) {
      let {
        name: t
      } = e;
      return null == t || "" === t.trim() ? "Topic must be specified." : void 0
    }(e)
  }
}