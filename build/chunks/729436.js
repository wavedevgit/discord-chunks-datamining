/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  C: () => s,
  H: () => o
}), n(230036);
var r = n(192379),
  i = n(392711);
let o = e => e.sort((e, t) => {
    var n, r;
    return (null !== (n = e.zIndex) && void 0 !== n ? n : 0) - (null !== (r = t.zIndex) && void 0 !== r ? r : 0)
  }),
  a = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
  s = e => r.useMemo(() => {
    if (null == e) return e;
    let t = (0, i.cloneDeep)(e),
      n = a(0, t.effects.reduce((e, t) => {
        var n;
        let r = null === (n = t.randomizedSources) || void 0 === n ? void 0 : n.length;
        return r > 0 && (e = 0 === e ? r : Math.min(e, r)), e
      }, 0) - 1);
    return t.effects = t.effects.map(e => {
      var t;
      return (null === (t = e.randomizedSources) || void 0 === t ? void 0 : t.length) > 0 && (e.src = e.randomizedSources[n].src), e
    }), t
  }, [e])