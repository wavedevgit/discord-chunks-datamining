/** Chunk was on web.js **/
/** chunk id: 142888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => s,
  u: () => a
}), require("./638769.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js");
let a = e => e.sort((e, t) => {
    var n, r;
    return (null != (n = e.zIndex) ? n : 0) - (null != (r = t.zIndex) ? r : 0)
  }),
  o = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
  s = e => r.useMemo(() => {
    if (null == e) return e;
    let t = (0, i.cloneDeep)(e),
      n = o(0, t.effects.reduce((e, t) => {
        var n, r;
        let i = null != (n = null == (r = t.randomizedSources) ? true : r.length) ? n : 0;
        return i > 0 && (e = 0 === e ? i : Math.min(e, i)), e
      }, 0) - 1);
    return t.effects = t.effects.map(e => (null != e.randomizedSources && e.randomizedSources.length > 0 && (e.src = e.randomizedSources[n].src), e)), t
  }, [e])