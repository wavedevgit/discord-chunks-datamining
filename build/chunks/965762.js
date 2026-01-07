/** Chunk was on 61342 **/
/** chunk id: 965762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => m
}), require("./781311.js"), require("./642613.js"), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk709054 = require("./709054.js"),
  Chunk435064 = require("./435064.js"),
  Chunk52436 = require("./52436.js");

function p(e, t) {
  return "ascending" === t ? e.sort((e, t) => e.id.localeCompare(t.id)) : "descending" === t ? e.sort((e, t) => t.id.localeCompare(e.id)) : e
}

function m() {
  let e = (0, c.e7)([u.Z], () => u.Z.getClips()),
    t = (0, c.e7)([u.Z], () => u.Z.getPendingClips()),
    n = (0, d.f)();
  return l.useMemo(() => {
    let l = [...t, ...e],
      r = new Map,
      a = [];
    for (let e of l) {
      let t = function(e, t) {
        var n, l, r, a;
        if (t.selectedUserIds.size > 0 && !Array.from(t.selectedUserIds).every(t => e.users.includes(t))) returnfalse;
        if ("" !== t.query.trim()) {
          let r = t.query.toLowerCase(),
            a = null != e.name && i()(r, e.name.toLowerCase()),
            s = i()(r, e.applicationName.toLowerCase()),
            c = (null == (n = e.activity) ? true : n.state) != null && i()(r, e.activity.state.toLowerCase()),
            o = (null == (l = e.activity) ? true : l.details) != null && i()(r, e.activity.details.toLowerCase());
          if (!a && !s && !c && !o) returnfalse
        }
        if (null !== t.selectedGuildId && e.guildId !== t.selectedGuildId) returnfalse;
        if (null !== t.selectedActivity) {
          let n = null == (r = e.activity) ? true : r.state,
            l = null == (a = e.activity) ? true : a.details;
          if (n !== t.selectedActivity && l !== t.selectedActivity) returnfalse
        }
        return (null === t.selectedYear || s()(o.default.extractTimestamp(e.id)).year() === t.selectedYear) && true
      }(e, n);
      if (t && a.push(e), null == e.applicationId) continue;
      let l = r.get(e.applicationId);
      null == l ? r.set(e.applicationId, {
        clips: [e],
        filteredClips: t ? [e] : [],
        mostRecentClipId: e.id,
        name: e.applicationName
      }) : (l.clips.push(e), t && l.filteredClips.push(e), e.id > l.mostRecentClipId && (l.mostRecentClipId = e.id))
    }
    let c = p(a, n.sortOrder),
      u = p(a.filter(e => e.isFavorite), n.sortOrder);
    return {
      clipsByGame: Array.from(r.entries()).map(e => {
        let [t, l] = e;
        return {
          applicationId: t,
          name: l.name,
          count: l.filteredClips.length,
          mostRecentClipId: l.mostRecentClipId,
          filteredClips: p(l.filteredClips, n.sortOrder)
        }
      }).sort((e, t) => t.mostRecentClipId.localeCompare(e.mostRecentClipId)),
      allClips: l,
      filteredClips: c,
      favoriteClips: u
    }
  }, [e, t, n])
}