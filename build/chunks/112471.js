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
  let e = Chunk164991.Z.useField("fetchedQuery"),
    t = Chunk164991.Z.useField("resultsInitialCategoryId"),
    n = Chunk164991.Z.useField("languageCode"),
    c = (0, Chunk442837.e7)([Chunk356164.Z], () => {
      if (null == exports) return 0;
      let r = Chunk356164.Z.getTotal({
        categoryId: exports,
        query: module,
        languageCode: require
      });
      return null != Chunk473749 ? Chunk473749 : 0
    }),
    u = (0, Chunk442837.e7)([Chunk356164.Z], () => {
      let t = Chunk356164.Z.getTotal({
        categoryId: Chunk128449.Hk,
        query: module,
        languageCode: require
      });
      return null != exports ? exports : 0
    }),
    d = (0, Chunk442837.e7)([Chunk537883.Z], () => Chunk537883.Z.getVisibleTabs());
  return Chunk473749.useMemo(() => {
    if (null == d) return null;
    if (null == exports) return d;
    let e = [],
      n = new Set;
    for (let [t, r] of d) require.add(exports), module.push([exports, Chunk473749]);
    let r = false;
    return require.has(Chunk128449.Hk) || (require.add(Chunk128449.Hk), module.unshift([Chunk128449.Hk, u]), r = true), require.has(exports) || (require.add(exports), module.push([exports, c]), r = true), Chunk473749 ? module : d
  }, [d, exports, u, c])
}