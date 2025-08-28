/** Chunk was on 36745 **/
/** chunk id: 247902, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  N: () => i
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk246946 = require("./246946.js"),
  Chunk607802 = require("./607802.js"),
  Chunk375123 = require("./375123.js"),
  Chunk981631 = require("./981631.js");

function i(e) {
  let t = function(e) {
    let t = (0, s.C)({
        location: "useEligibleFilterTokens"
      }),
      l = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation);
    return n.useMemo(() => {
      let n = (0, a.R6)(e),
        r = [];
      return l || (r.push(o.dCx.FILTER_FROM), r.push(o.dCx.FILTER_MENTIONS)), r.push(o.dCx.FILTER_HAS), n && r.push(o.dCx.FILTER_IN), r.push(o.dCx.FILTER_ON), r.push(o.dCx.FILTER_BEFORE), r.push(o.dCx.FILTER_AFTER), r.push(o.dCx.FILTER_PINNED), t && r.push(o.dCx.FILTER_AUTHOR_TYPE), r
    }, [l, t, e])
  }(e);
  return n.useMemo(() => new Set(t), [t])
}