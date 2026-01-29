/** Chunk was on 1113 **/
/** chunk id: 457246, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk534963 = require("./534963.js"),
  Chunk470710 = require("./470710.js"),
  Chunk717518 = require("./717518.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let t = (0, i.bG)([o.A], () => o.A.getCall(e), [e]),
    n = (0, i.bG)([c.A], () => c.A.getRegions(null));
  l.useEffect(() => {
    null == n && a.A.fetchRegions(null)
  }, [n]);
  let d = l.useMemo(() => {
      var e;
      return null != t && t.regionUpdated && null != n && null != t.region ? null != (e = n.find(e => {
        let {
          id: n
        } = e;
        return n === t.region
      })) ? e : {
        name: t.region,
        id: t.region
      } : {
        id: "automatic",
        name: u.intl.string(u.t.JEmsap)
      }
    }, [t, n]),
    h = l.useCallback(e => {
      null != t && a.A.changeCallRegion(t.channelId, e.id)
    }, [t]),
    p = l.useMemo(() => null == n || 0 === n.length ? null : n.map(e => {
      let {
        id: t,
        name: n
      } = e;
      return (0, r.jsx)(s.iDA, {
        id: "region-".concat(t),
        group: "region-select",
        label: n,
        checked: t === d.id,
        action: () => h(e)
      }, "region-".concat(t))
    }), [n, d, h]);
  return (0, r.jsx)(s.Drp, {
    id: "region-select",
    label: u.intl.string(u.t.w8gMqh),
    subtext: d.name,
    children: p
  })
}