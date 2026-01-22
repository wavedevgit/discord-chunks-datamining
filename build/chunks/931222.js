/** Chunk was on 21738 **/
/** chunk id: 931222, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => c
}), require("./896048.js"), require("./321073.js"), require("./667532.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk499118 = require("./499118.js"),
  Chunk351022 = require("./351022.js"),
  Chunk282026 = require("./282026.js"),
  Chunk324580 = require("./324580.js");

function c() {
  let e = s.A.useField("fetchedQuery"),
    t = s.A.useField("resultsInitialCategoryId"),
    n = s.A.useField("languageCode"),
    c = (0, i.bG)([a.A], () => {
      if (null == t) return 0;
      let r = a.A.getTotal({
        categoryId: t,
        query: e,
        languageCode: n
      });
      return null != r ? r : 0
    }),
    u = (0, i.bG)([a.A], () => {
      let t = a.A.getTotal({
        categoryId: o.Iq,
        query: e,
        languageCode: n
      });
      return null != t ? t : 0
    }),
    d = (0, i.bG)([l.A], () => l.A.getVisibleTabs());
  return r.useMemo(() => {
    if (null == d) return null;
    if (null == t) return d;
    let e = [],
      n = new Set;
    for (let [t, r] of d) n.add(t), e.push([t, r]);
    let r = false;
    return n.has(o.Iq) || (n.add(o.Iq), e.unshift([o.Iq, u]), r = true), n.has(t) || (n.add(t), e.push([t, c]), r = true), r ? e : d
  }, [d, t, u, c])
}