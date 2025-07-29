/** Chunk was on 87294 **/
r.d(t, {
  Z: () => d
}), r(388685), r(539854);
var n = r(442837),
  l = r(963374),
  i = r(735020),
  a = r(627050),
  o = r(905405),
  c = r(937889),
  s = r(23750),
  u = r(699516),
  b = r(171900),
  f = r(518944);
let p = [];

function d(e) {
  let t = (0, o.p)(),
    r = a.d.useExperiment({
      location: "useMessageRenderedContent"
    }).enabled,
    d = (0, n.e7)([f.Z, b.Z, i.Z], () => {
      var n;
      let a = f.Z.getSearchResultsQuery(e),
        o = b.Z.getMessages(e);
      if (null == a || null == o || 0 === o.length) return p;
      let u = (0, l.nC)(null != (n = a.content) ? n : ""),
        d = [];
      return o.forEach(e => {
        let n = new s.ZP(e),
          l = (n = function(e, t) {
            let [r] = t, n = r.getMessage(e.id, e.channel_id);
            return null != n && (e = e.merge({
              attachments: n.attachments,
              embeds: n.embeds
            })), e
          }(n, [i.Z])).isSearchHit ? n.set("customRenderedContent", (0, c.ZP)(n, {
            postProcessor: u,
            allowHeading: !0,
            allowList: !0,
            allowGameMentions: r,
            shouldFilterKeywords: t
          })) : n;
        d.push([l])
      }), d
    }, [r, e, t], n.pF);
  return (0, n.e7)([u.Z], () => {
    let e = 0,
      t = 0;
    return {
      searchResults: d.map(r => r.filter(r => {
        let n = u.Z.isBlockedForMessage(r),
          l = u.Z.isIgnoredForMessage(r);
        return n && r.isSearchHit ? e++ : l && r.isSearchHit && t++, !n && !l || r.isSearchHit
      })),
      blockCount: e,
      ignoreCount: t
    }
  }, [d], n.pF)
}