/** Chunk was on 28855 **/
/** chunk id: 189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk680295 = require("./680295.jsx");
let o = e => {
  let {
    config: t
  } = e, n = r.useMemo(() => (0, l.cloneDeep)(t), [t]), o = r.useMemo(() => t.effects.some(e => null != e.randomizedSources && e.randomizedSources.length > 0), [t]), s = r.useMemo(() => {
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
  }, [t.effects, n, o]);
  return (0, a.jsx)(i.n, {
    profileEffectConfig: s,
    skuId: "debug"
  })
}