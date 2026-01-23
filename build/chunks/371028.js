/** Chunk was on 88615 **/
/** chunk id: 371028, original params: e,t,n (module,exports,require) **/
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
    spent: n
  } = (0, o.A)(e), u = (0, l.bG)([i.A], () => i.A.getAppliedGuildBoostsForGuild(e), [e]), d = n - r.useMemo(() => {
    var e, t, n;
    return null != (e = null == u || null == (n = u.filter) || null == (t = n.call(u, e => !e.ended && null == e.endsAt)) ? true : t.length) ? e : 0
  }, [u]);
  return r.useMemo(() => d <= 0 ? {
    shouldShow: false,
    title: "",
    description: "",
    requiredBoostCount: 0
  } : {
    shouldShow: true,
    title: a.intl.string(s.default.n5hQhc),
    description: a.intl.formatToPlainString(s.default.iAaAiG, {
      boostCount: d,
      perksString: t.join(", ")
    }),
    requiredBoostCount: d
  }, [d, t])
}