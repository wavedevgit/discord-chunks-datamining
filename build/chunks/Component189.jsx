/** Chunk was on web.js **/
/** chunk id: 189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk680295 = require("./680295.jsx");
let s = e => 1 === e ? false : Math.floor(Math.random() * e),
  l = e => {
    let {
      config: t
    } = e, n = i.useMemo(() => (0, o.cloneDeep)(t), [t]), l = i.useMemo(() => t.effects.some(e => null != e.randomizedSources && e.randomizedSources.length > 0), [t]), c = i.useMemo(() => {
      if (l) {
        let e = s(n.effects.reduce((e, t) => {
          var n;
          let r = 1 + (null != (n = t.randomizedSources) ? n : []).length;
          return r > 1 ? 1 === e ? r : Math.min(r, e) : e
        }, 1));
        e > 0 && t.effects.forEach((t, r) => {
          let i = t;
          null != i.randomizedSources && i.randomizedSources.length > 0 && (n.effects[r].src = i.randomizedSources[e - 1].src)
        })
      }
      return n
    }, [t.effects, n, l]);
    return (0, r.jsx)(a.n, {
      profileEffectConfig: c,
      profileEffectId: "debug"
    })
  }