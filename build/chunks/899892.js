/** Chunk was on 44799 **/
/** chunk id: 899892, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk899667 = require("./899667.js"),
  Chunk317169 = require("./317169.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  let {
    spent: n
  } = (0, l.Z)(e), u = (0, i.e7)([o.Z], () => o.Z.getAppliedGuildBoostsForGuild(e), [e]), c = n - r.useMemo(() => {
    var e, t, n;
    return null != (n = null == u || null == (t = u.filter) || null == (e = t.call(u, e => !e.ended && null == e.endsAt)) ? true : e.length) ? n : 0
  }, [u]);
  return r.useMemo(() => c <= 0 ? {
    shouldShow: false,
    title: "",
    description: "",
    requiredBoostCount: 0
  } : {
    shouldShow: true,
    title: s.intl.string(a.default.n5hQhc),
    description: s.intl.formatToPlainString(a.default.iAaAiG, {
      boostCount: c,
      perksString: t.join(", ")
    }),
    requiredBoostCount: c
  }, [c, t])
}