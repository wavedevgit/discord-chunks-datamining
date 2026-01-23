/** Chunk was on 58652 **/
/** chunk id: 319582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  MR: () => u,
  fY: () => c
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk403362 = require("./403362.js"),
  Chunk129443 = require("./129443.js"),
  Chunk83140 = require("./83140.js"),
  Chunk843540 = require("./843540.js"),
  Chunk17372 = require("./17372.js");
let d = {
  [Chunk17372.Wb.SAFETY_DM_SPAM_FILTER]: Chunk129443.A,
  [Chunk17372.Wb.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: Chunk843540.A,
  [Chunk17372.Wb.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: Chunk83140.A
};

function c(e) {
  return l.useMemo(() => {
    var t;
    let n;
    return null != e ? (t = e, n = [], Object.entries(d).forEach(e => {
      let [l, r] = e;
      (null == r.eligibleReportSubtypes || r.eligibleReportSubtypes.includes(t)) && n.push(l)
    }), 0 === n.length ? null : n) : null
  }, [e])
}

function u(e, t) {
  return l.useMemo(() => e.map(e => {
    var n, l;
    let r;
    return n = e, l = t, ! function(e, t) {
      let {
        predicate: n,
        eligibleChannelTypes: l
      } = e, r = null == n || (null == n ? true : n()) === true, i = null == t || null == l || l.includes(t);
      return r && i
    }(r = d[n], l) ? null : r
  }).filter(r.Vq), [e, t])
}