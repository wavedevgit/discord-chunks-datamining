/** Chunk was on 21738 **/
/** chunk id: 424956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk965660 = require("./965660.js");

function l(e) {
  let {
    guildDiscoveryCardSeenManager: t,
    loadId: n
  } = e, l = r.useCallback((e, r) => {
    t.markAsSeen(r, e, n)
  }, [t, n]), a = r.useCallback((e, t, r, l) => (0, i.Wl)({
    loadId: n,
    guildId: e,
    index: t,
    categoryId: r,
    analyticsLocation: l
  }), [n]);
  return r.useMemo(() => ({
    onGuildCardSeen: l,
    onGuildCardClick: a
  }), [a, l])
}