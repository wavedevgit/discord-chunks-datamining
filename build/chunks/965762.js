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
  let e = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getClips()),
    t = (0, Chunk442837.e7)([Chunk435064.Z], () => Chunk435064.Z.getPendingClips()),
    n = (0, Chunk52436.f)();
  return Chunk473749.useMemo(() => {
    let l = [...exports, ...module],
      r = new Map,
      a = [];
    for (let e of Chunk473749) {
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
      }(module, require);
      if (exports && Chunk913527.push(module), null == module.applicationId) continue;
      let l = Chunk658722.get(module.applicationId);
      null == Chunk473749 ? Chunk658722.set(module.applicationId, {
        clips: [module],
        filteredClips: exports ? [module] : [],
        mostRecentClipId: module.id,
        name: module.applicationName
      }) : (Chunk473749.clips.push(module), exports && Chunk473749.filteredClips.push(module), module.id > Chunk473749.mostRecentClipId && (Chunk473749.mostRecentClipId = module.id))
    }
    let c = p(Chunk913527, require.sortOrder),
      u = p(Chunk913527.filter(e => e.isFavorite), require.sortOrder);
    return {
      clipsByGame: Array.from(Chunk658722.entries()).map(e => {
        let [t, l] = e;
        return {
          applicationId: t,
          name: l.name,
          count: l.filteredClips.length,
          mostRecentClipId: l.mostRecentClipId,
          filteredClips: p(l.filteredClips, n.sortOrder)
        }
      }).sort((e, t) => t.mostRecentClipId.localeCompare(e.mostRecentClipId)),
      allClips: Chunk473749,
      filteredClips: Chunk442837,
      favoriteClips: Chunk435064
    }
  }, [module, exports, require])
}