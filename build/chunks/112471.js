/** Chunk was on 1272 **/
/** chunk id: 112471, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => c
}), require("./388685.js"), require("./539854.js"), require("./290780.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk537883 = require("./537883.js"),
  Chunk356164 = require("./356164.js"),
  Chunk164991 = require("./164991.js"),
  Chunk128449 = require("./128449.js");

function c() {
  let e = o.Z.useField("fetchedQuery"),
    t = o.Z.useField("resultsInitialCategoryId"),
    n = o.Z.useField("languageCode"),
    c = (0, i.e7)([a.Z], () => {
      if (null == t) return 0;
      let r = a.Z.getTotal({
        categoryId: t,
        query: e,
        languageCode: n
      });
      return null != r ? r : 0
    }),
    u = (0, i.e7)([a.Z], () => {
      let t = a.Z.getTotal({
        categoryId: s.Hk,
        query: e,
        languageCode: n
      });
      return null != t ? t : 0
    }),
    d = (0, i.e7)([l.Z], () => l.Z.getVisibleTabs());
  return r.useMemo(() => {
    if (null == d) return null;
    if (null == t) return d;
    let e = [],
      n = new Set;
    for (let [t, r] of d) n.add(t), e.push([t, r]);
    let r = false;
    return n.has(s.Hk) || (n.add(s.Hk), e.unshift([s.Hk, u]), r = true), n.has(t) || (n.add(t), e.push([t, c]), r = true), r ? e : d
  }, [d, t, u, c])
}