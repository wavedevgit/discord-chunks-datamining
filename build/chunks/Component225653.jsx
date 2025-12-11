/** Chunk was on 40184 **/
/** chunk id: 225653, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk771340 = require("./771340.js"),
  Chunk523746 = require("./523746.js"),
  Chunk903223 = require("./903223.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = (0, l.e7)([s.Z], () => s.Z.getCall(e), [e]),
    n = (0, l.e7)([c.Z], () => c.Z.getRegions(null));
  r.useEffect(() => {
    null == n && o.Z.fetchRegions(null)
  }, [n]);
  let d = r.useMemo(() => {
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
    p = r.useCallback(e => {
      null != t && o.Z.changeCallRegion(t.channelId, e.id)
    }, [t]),
    f = r.useMemo(() => null == n || 0 === n.length ? null : n.map(e => {
      let {
        id: t,
        name: n
      } = e;
      return (0, i.jsx)(a.k5B, {
        id: "region-".concat(t),
        group: "region-select",
        label: n,
        checked: t === d.id,
        action: () => p(e)
      }, "region-".concat(t))
    }), [n, d, p]);
  return (0, i.jsx)(a.sNh, {
    id: "region-select",
    label: u.intl.string(u.t.w8gMqh),
    subtext: d.name,
    children: f
  })
}