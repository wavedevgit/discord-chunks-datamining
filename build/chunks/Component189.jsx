/** Chunk was on 20501 **/
/** chunk id: 189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk680295 = require("./680295.jsx");
let l = e => 1 === e ? false : Math.floor(Math.random() * e),
  o = e => {
    let {
      config: t
    } = e, n = r.useMemo(() => (0, s.cloneDeep)(t), [t]), o = r.useMemo(() => t.effects.some(e => null != e.randomizedSources && e.randomizedSources.length > 0), [t]), c = r.useMemo(() => {
      if (o) {
        let e = l(n.effects.reduce((e, t) => {
          var n;
          let i = 1 + (null != (n = t.randomizedSources) ? n : []).length;
          return i > 1 ? 1 === e ? i : Math.min(i, e) : e
        }, 1));
        e > 0 && t.effects.forEach((t, i) => {
          null != t.randomizedSources && t.randomizedSources.length > 0 && (n.effects[i].src = t.randomizedSources[e - 1].src)
        })
      }
      return n
    }, [t.effects, n, o]);
    return (0, i.jsx)(a.n, {
      profileEffectConfig: c,
      profileEffectId: "debug"
    })
  }