/** Chunk was on 88615 **/
/** chunk id: 371028, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk859241 = require("./859241.js"),
  Chunk864310 = require("./864310.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t) {
  let {
    spent: l
  } = (0, s.A)(e), u = (0, n.bG)([i.A], () => i.A.getAppliedGuildBoostsForGuild(e), [e]), d = l - r.useMemo(() => {
    var e, t, l;
    return null != (e = null == u || null == (l = u.filter) || null == (t = l.call(u, e => !e.ended && null == e.endsAt)) ? true : t.length) ? e : 0
  }, [u]);
  return r.useMemo(() => d <= 0 ? {
    shouldShow: false,
    title: "",
    description: "",
    requiredBoostCount: 0
  } : {
    shouldShow: true,
    title: a.intl.string(o.default.n5hQhc),
    description: a.intl.formatToPlainString(o.default.iAaAiG, {
      boostCount: d,
      perksString: t.join(", ")
    }),
    requiredBoostCount: d
  }, [d, t])
}