/** Chunk was on 51693 **/
/** chunk id: 566605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk704824 = require("./704824.js"),
  Chunk429913 = require("./429913.js"),
  Chunk633075 = require("./633075.js"),
  Chunk667049 = require("./667049.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk395332 = require("./395332.js");

function f(e) {
  let t = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
    n = (0, d.DB)({
      location: e.location
    }),
    f = r.useMemo(() => null == n ? true : n.filter(e => e.isEligibleForSuggestions()), [n]),
    p = r.useMemo(() => {
      var e;
      return null != (e = null == f ? true : f.map(e => e.applicationId)) ? e : []
    }, [f]),
    g = (0, a.A)(p),
    {
      tokens: m,
      fetched: b
    } = (0, i.j)(p),
    y = (0, s.A)(null == t ? true : t.id),
    O = null == t || null == f || null == m || !b;
  return r.useMemo(() => O ? {
    isLoading: O
  } : {
    isLoading: O,
    suggestions: f.map(e => {
      let t = g.find(t => (null == t ? true : t.id) === e.applicationId);
      return null == t || null == m.find(t => t.application.id === e.applicationId) || null != y.find(t => t instanceof o.R && t.applicationId === e.applicationId) ? null : {
        config: e,
        application: t,
        dismissibleContent: e.suggestedWidgetLinkedDc
      }
    }).filter(u.Vq),
    currentUser: t
  }, [O, f, t, g, m, y])
}