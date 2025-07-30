/** Chunk was on 12769 **/
r.d(t, {
  Z: () => f
}), r(388685), r(539854);
var n = r(442837),
  i = r(963374),
  a = r(735020),
  s = r(627050),
  l = r(905405),
  c = r(937889),
  o = r(23750),
  u = r(699516),
  d = r(171900),
  _ = r(518944);
let h = [];

function f(e) {
  let t = (0, l.p)(),
    r = s.d.useExperiment({
      location: "useMessageRenderedContent"
    }).enabled,
    f = (0, n.e7)([_.Z, d.Z, a.Z], () => {
      var n;
      let s = _.Z.getSearchResultsQuery(e),
        l = d.Z.getMessages(e);
      if (null == s || null == l || 0 === l.length) return h;
      let u = (0, i.nC)(null != (n = s.content) ? n : ""),
        f = [];
      return l.forEach(e => {
        let n = new o.ZP(e),
          i = (n = function(e, t) {
            let [r] = t, n = r.getMessage(e.id, e.channel_id);
            return null != n && (e = e.merge({
              attachments: n.attachments,
              embeds: n.embeds
            })), e
          }(n, [a.Z])).isSearchHit ? n.set("customRenderedContent", (0, c.ZP)(n, {
            postProcessor: u,
            allowHeading: !0,
            allowList: !0,
            allowGameMentions: r,
            shouldFilterKeywords: t
          })) : n;
        f.push([i])
      }), f
    }, [r, e, t], n.pF);
  return (0, n.e7)([u.Z], () => {
    let e = 0,
      t = 0;
    return {
      searchResults: f.map(r => r.filter(r => {
        let n = u.Z.isBlockedForMessage(r),
          i = u.Z.isIgnoredForMessage(r);
        return n && r.isSearchHit ? e++ : i && r.isSearchHit && t++, !n && !i || r.isSearchHit
      })),
      blockCount: e,
      ignoreCount: t
    }
  }, [f], n.pF)
}