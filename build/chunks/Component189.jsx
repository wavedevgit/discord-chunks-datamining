/** Chunk was on 945 **/
/** chunk id: 189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk680295 = require("./680295.jsx");
let s = e => {
  let {
    config: t
  } = e, n = r.useMemo(() => (0, i.cloneDeep)(t), [t]), s = r.useMemo(() => t.effects.some(e => null != e.randomizedSources && e.randomizedSources.length > 0), [t]), o = r.useMemo(() => {
    if (s) {
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
  }, [t.effects, n, s]);
  return (0, a.jsx)(l.n, {
    profileEffectConfig: o,
    skuId: "debug"
  })
}