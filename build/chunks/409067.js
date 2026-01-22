/** Chunk was on 4918 **/
/** chunk id: 409067, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  a: () => m
}), require("./733351.js"), require("./638769.js"), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk91871 = require("./91871.js"),
  i = require.n(Chunk91871),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk661191 = require("./661191.js"),
  Chunk274372 = require("./274372.js"),
  Chunk792852 = require("./792852.js");

function p(e, t) {
  return "ascending" === t ? e.sort((e, t) => e.id.localeCompare(t.id)) : "descending" === t ? e.sort((e, t) => t.id.localeCompare(e.id)) : e
}

function m() {
  let e = (0, c.bG)([u.A], () => u.A.getClips()),
    t = (0, c.bG)([u.A], () => u.A.getPendingClips()),
    l = (0, d.P)();
  return n.useMemo(() => {
    let n = [...t, ...e],
      r = new Map,
      a = [];
    for (let e of n) {
      let t = function(e, t) {
        var l, n, r, a;
        if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every(t => e.users.includes(t))) returnfalse;
        if ("" !== t.query.trim()) {
          let r = t.query.toLowerCase(),
            a = null != e.name && i()(r, e.name.toLowerCase()),
            s = i()(r, e.applicationName.toLowerCase()),
            c = (null == (l = e.activity) ? true : l.state) != null && i()(r, e.activity.state.toLowerCase()),
            o = (null == (n = e.activity) ? true : n.details) != null && i()(r, e.activity.details.toLowerCase());
          if (!a && !s && !c && !o) returnfalse
        }
        if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) returnfalse;
        if (null !== t.selectedActivity) {
          let l = null == (r = e.activity) ? true : r.state,
            n = null == (a = e.activity) ? true : a.details;
          if (l !== t.selectedActivity && n !== t.selectedActivity) returnfalse
        }
        return (null === t.selectedYear || s()(o.default.extractTimestamp(e.id)).year() === t.selectedYear) && true
      }(e, l);
      if (t && a.push(e), null == e.applicationId) continue;
      let n = r.get(e.applicationId);
      null == n ? r.set(e.applicationId, {
        clips: [e],
        filteredClips: t ? [e] : [],
        mostRecentClipId: e.id,
        name: e.applicationName
      }) : (n.clips.push(e), t && n.filteredClips.push(e), e.id > n.mostRecentClipId && (n.mostRecentClipId = e.id))
    }
    let c = p(a, l.sortOrder),
      u = p(a.filter(e => e.isFavorite), l.sortOrder);
    return {
      clipsByGame: Array.from(r.entries()).map(e => {
        let [t, n] = e;
        return {
          applicationId: t,
          name: n.name,
          count: n.filteredClips.length,
          mostRecentClipId: n.mostRecentClipId,
          filteredClips: p(n.filteredClips, l.sortOrder)
        }
      }).sort((e, t) => t.mostRecentClipId.localeCompare(e.mostRecentClipId)),
      allClips: n,
      filteredClips: c,
      favoriteClips: u
    }
  }, [e, t, l])
}