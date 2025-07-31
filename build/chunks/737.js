/** Chunk was on 12769 **/
r.d(t, {
  Z: () => h
}), r(388685), r(539854);
var n = r(442837),
  i = r(963374),
  s = r(735020),
  a = r(627050),
  c = r(905405),
  l = r(937889),
  o = r(23750),
  u = r(699516),
  d = r(171900),
  _ = r(518944);
let p = [];

function h(e) {
  let t = (0, c.p)(),
    r = a.d.useExperiment({
      location: "useMessageRenderedContent"
    }).enabled,
    h = (0, n.e7)([_.Z, d.Z, s.Z], () => {
      var n;
      let a = _.Z.getSearchResultsQuery(e),
        c = d.Z.getMessages(e);
      if (null == a || null == c || 0 === c.length) return p;
      let u = (0, i.nC)(null != (n = a.content) ? n : ""),
        h = [];
      return c.forEach(e => {
        let n = new o.ZP(e),
          i = (n = function(e, t) {
            let [r] = t, n = r.getMessage(e.id, e.channel_id);
            return null != n && (e = e.merge({
              attachments: n.attachments,
              embeds: n.embeds
            })), e
          }(n, [s.Z])).isSearchHit ? n.set("customRenderedContent", (0, l.ZP)(n, {
            postProcessor: u,
            allowHeading: !0,
            allowList: !0,
            allowGameMentions: r,
            shouldFilterKeywords: t
          })) : n;
        h.push([i])
      }), h
    }, [r, e, t], n.pF);
  return (0, n.e7)([u.Z], () => {
    let e = 0,
      t = 0;
    return {
      searchResults: h.map(r => r.filter(r => {
        let n = u.Z.isBlockedForMessage(r),
          i = u.Z.isIgnoredForMessage(r);
        return n && r.isSearchHit ? e++ : i && r.isSearchHit && t++, !n && !i || r.isSearchHit
      })),
      blockCount: e,
      ignoreCount: t
    }
  }, [h], n.pF)
}