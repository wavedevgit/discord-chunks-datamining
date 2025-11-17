/** Chunk was on 1272 **/
/** chunk id: 750910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk726115 = require("./726115.js");

function l(e) {
  let {
    guildDiscoveryCardSeenManager: t,
    loadId: n
  } = e, l = r.useCallback((e, r) => {
    t.markAsSeen(r, e, n)
  }, [t, n]), a = r.useCallback((e, t, r, l) => (0, i.vL)({
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