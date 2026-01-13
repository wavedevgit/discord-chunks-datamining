/** Chunk was on 90882 **/
/** chunk id: 513417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk491662 = require("./491662.js"),
  Chunk835473 = require("./835473.js"),
  Chunk931847 = require("./931847.js"),
  Chunk517157 = require("./517157.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk251296 = require("./251296.js");

function f(e) {
  let t = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    n = (0, d.no)({
      location: e.location
    }),
    f = r.useMemo(() => null == n ? true : n.filter(e => e.isEligibleForSuggestions()), [n]),
    g = r.useMemo(() => {
      var e;
      return null != (e = null == f ? true : f.map(e => e.applicationId)) ? e : []
    }, [f]),
    p = (0, a.Z)(g),
    {
      tokens: m,
      fetched: b
    } = (0, l.O)(g),
    y = (0, c.Z)(null == t ? true : t.id),
    h = null == t || null == f || null == m || !b;
  return r.useMemo(() => h ? {
    isLoading: h
  } : {
    isLoading: h,
    suggestions: f.map(e => {
      let t = p.find(t => (null == t ? true : t.id) === e.applicationId);
      return null == t || null == m.find(t => t.application.id === e.applicationId) || null != y.find(t => t instanceof o.q && t.applicationId === e.applicationId) ? null : {
        config: e,
        application: t,
        dismissibleContent: e.suggestedWidgetLinkedDc
      }
    }).filter(u.lm),
    currentUser: t
  }, [h, f, t, p, m, y])
}