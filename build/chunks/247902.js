/** Chunk was on 56266 **/
/** chunk id: 247902, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  N: () => o
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk246946 = require("./246946.js"),
  Chunk607802 = require("./607802.js"),
  Chunk375123 = require("./375123.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  let t = function(e) {
    let t = (0, s.C)({
        location: "useEligibleFilterTokens"
      }),
      l = (0, r.e7)([u.Z], () => u.Z.hidePersonalInformation);
    return n.useMemo(() => {
      let n = (0, a.R6)(e),
        r = [];
      return l || (r.push(i.dCx.FILTER_FROM), r.push(i.dCx.FILTER_MENTIONS)), r.push(i.dCx.FILTER_HAS), n && r.push(i.dCx.FILTER_IN), r.push(i.dCx.FILTER_ON), r.push(i.dCx.FILTER_BEFORE), r.push(i.dCx.FILTER_AFTER), r.push(i.dCx.FILTER_PINNED), t && r.push(i.dCx.FILTER_AUTHOR_TYPE), r
    }, [l, t, e])
  }(e);
  return n.useMemo(() => new Set(t), [t])
}