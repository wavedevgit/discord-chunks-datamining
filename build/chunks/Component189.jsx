/** Chunk was on 7384 **/
/** chunk id: 189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk680295 = require("./680295.jsx");
let l = e => {
  let {
    config: t
  } = e, n = r.useMemo(() => (0, s.cloneDeep)(t), [t]), l = r.useMemo(() => t.effects.some(e => null != e.randomizedSources && e.randomizedSources.length > 0), [t]), o = r.useMemo(() => {
    if (l) {
      var e;
      let i = 1 === (e = n.effects.reduce((e, t) => {
        var n;
        let i = 1 + (null != (n = t.randomizedSources) ? n : []).length;
        return i > 1 ? 1 === e ? i : Math.min(i, e) : e
      }, 1)) ? false : Math.floor(Math.random() * e);
      i > 0 && t.effects.forEach((e, t) => {
        null != e.randomizedSources && e.randomizedSources.length > 0 && (n.effects[t].src = e.randomizedSources[i - 1].src)
      })
    }
    return n
  }, [t.effects, n, l]);
  return (0, i.jsx)(a.n, {
    profileEffectConfig: o,
    profileEffectId: "debug"
  })
}