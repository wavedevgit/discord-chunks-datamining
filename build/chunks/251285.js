/** Chunk was on 88448 **/
r.d(t, {
  G: () => g,
  Z: () => j
}), r(388685), r(539854);
var n = r(442837),
  l = r(963374),
  i = r(735020),
  a = r(627050),
  o = r(905405),
  c = r(786761),
  s = r(937889),
  u = r(23750),
  b = r(699516),
  f = r(171900),
  p = r(518944),
  d = r(607802);

function O(e, t) {
  let [r] = t, n = r.getMessage(e.id, e.channel_id);
  return null != n && (e = e.merge({
    attachments: n.attachments,
    embeds: n.embeds
  })), e
}

function y(e) {
  return (0, n.e7)([b.Z], () => {
    let t = 0,
      r = 0;
    return [e.map(e => e.filter(e => {
      let n = b.Z.isBlockedForMessage(e),
        l = b.Z.isIgnoredForMessage(e);
      return n && e.isSearchHit ? t++ : l && e.isSearchHit && r++, !n && !l || e.isSearchHit
    })), t, r]
  }, [e], n.pF)
}

function g(e) {
  let t = (0, o.p)(),
    [r, a, c] = y((0, n.e7)([p.Z, f.Z, i.Z], () => {
      var r;
      let n = (0, d.WJ)(e),
        a = p.Z.getSearchResultsQuery(n),
        o = f.Z.getMessages(n);
      if (null == o || 0 === o.length) return [];
      let c = (0, l.nC)(null != (r = null == a ? void 0 : a.content) ? r : ""),
        b = [];
      return o.forEach(e => {
        let r = new u.ZP(e);
        (r = O(r, [i.Z])).set("customRenderedContent", (0, s.ZP)(r, {
          postProcessor: c,
          allowHeading: !0,
          allowList: !0,
          shouldFilterKeywords: t
        })), b.push([r])
      }), b
    }, [e, t], n.pF));
  return {
    searchResults: r,
    blockCount: a,
    ignoreCount: c
  }
}
let m = [];

function j(e) {
  let t = (0, o.p)(),
    r = a.d.useExperiment({
      location: "useMessageRenderedContent"
    }).enabled,
    [u, b, d] = y((0, n.e7)([p.Z, f.Z, i.Z], () => {
      var n;
      let a = p.Z.getSearchResultsQuery(e),
        o = f.Z.getRawMessages(e);
      if (null == a || null == o) return m;
      let u = (0, l.nC)(null != (n = a.content) ? n : "");
      return o.map(e => e.map(e => {
        let n = O((0, c.e5)(e), [i.Z]);
        return n.isSearchHit ? n.set("customRenderedContent", (0, s.ZP)(n, {
          postProcessor: u,
          allowHeading: !0,
          allowList: !0,
          allowGameMentions: r,
          shouldFilterKeywords: t
        })) : n
      }))
    }, [e, t, r], n.pF));
  return {
    searchResults: u,
    blockCount: b,
    ignoreCount: d
  }
}