/** Chunk was on 87557 **/
/** chunk id: 930442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk517286 = require("./517286.js");
let o = e => {
  let {
    config: t
  } = e, n = l.useMemo(() => (0, r.cloneDeep)(t), [t]), o = l.useMemo(() => t.effects.some(e => null != e.randomizedSources && e.randomizedSources.length > 0), [t]), c = l.useMemo(() => {
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
  } = (0, s.A)({
    config: c,
    skuId: "debug"
  }, true);
  return (0, a.jsx)(i.p, {
    profileEffectConfig: c,
    layerData: d,
    skuId: "debug"
  })
}