/** Chunk was on 54844 **/
/** chunk id: 155647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  fW: () => u,
  jc: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk823379 = require("./823379.js"),
  Chunk568315 = require("./568315.js"),
  Chunk83126 = require("./83126.js"),
  Chunk218471 = require("./218471.js"),
  Chunk46912 = require("./46912.js"),
  Chunk82554 = require("./82554.js");
let c = {
  [Chunk82554.zR.SAFETY_DM_SPAM_FILTER]: Chunk568315.Z,
  [Chunk82554.zR.SAFETY_SC_FILTERS_SEXUAL_MEDIA]: Chunk46912.Z,
  [Chunk82554.zR.SAFETY_SC_FILTERS_GRAPHIC_MEDIA]: Chunk218471.Z,
  [Chunk82554.zR.SAFETY_LANGUAGE_FILTER]: Chunk83126.Z
};

function u(e) {
  return r.useMemo(() => null != e ? function(e) {
    let t = [];
    return Object.entries(c).forEach(n => {
      let [r, i] = n;
      (null == i.eligibleReportSubtypes || i.eligibleReportSubtypes.includes(e)) && t.push(r)
    }), 0 === t.length ? null : t
  }(e) : null, [e])
}

function m(e, t) {
  return r.useMemo(() => e.map(e => (function(e, t) {
    let n = c[e];
    return ! function(e, t) {
      let {
        predicate: n,
        eligibleChannelTypes: r
      } = e, i = null == n || (null == n ? true : n()) === true, l = null == t || null == r || r.includes(t);
      return i && l
    }(n, t) ? null : n
  })(e, t)).filter(i.lm), [e, t])
}