/** Chunk was on 22979 **/
/** chunk id: 189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk680295 = require("./680295.jsx"),
  Chunk410061 = require("./410061.js");
let o = e => {
  let {
    config: t
  } = e, n = r.useMemo(() => (0, i.cloneDeep)(t), [t]), o = r.useMemo(() => t.effects.some(e => null != e.randomizedSources && e.randomizedSources.length > 0), [t]), c = r.useMemo(() => {
    if (o) {
      var e;
      let a = 1 === (e = n.effects.reduce((e, t) => {
        var n;
        let a = 1 + (null != (n = t.randomizedSources) ? n : []).length;
        return a > 1 ? 1 === e ? a : Math.min(a, e) : e
      }, 1)) ? false : Math.floor(Math.random() * e);
      a > 0 && t.effects.forEach((e, t) => {
        null != e.randomizedSources && e.randomizedSources.length > 0 && (n.effects[t].src = e.randomizedSources[a - 1].src)
      })
    }
    return n
  }, [t.effects, n, o]), {
    layerData: d
  } = (0, s.Z)({
    config: c,
    skuId: "debug"
  }, true);
  return (0, a.jsx)(l.n, {
    profileEffectConfig: c,
    layerData: d,
    skuId: "debug"
  })
}