/** Chunk was on 5665 **/
/** chunk id: 247902, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => c
}), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk246946 = require("./246946.js"),
  Chunk607802 = require("./607802.js"),
  Chunk375123 = require("./375123.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = function(e) {
    let t = (0, o.C)({
        location: "useEligibleFilterTokens"
      }),
      n = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
    return r.useMemo(() => {
      let r = (0, a.R6)(e),
        i = [];
      return n || (i.push(s.dCx.FILTER_FROM), i.push(s.dCx.FILTER_MENTIONS)), i.push(s.dCx.FILTER_HAS), r && i.push(s.dCx.FILTER_IN), i.push(s.dCx.FILTER_ON), i.push(s.dCx.FILTER_BEFORE), i.push(s.dCx.FILTER_AFTER), i.push(s.dCx.FILTER_PINNED), t && i.push(s.dCx.FILTER_AUTHOR_TYPE), i
    }, [n, t, e])
  }(e);
  return r.useMemo(() => new Set(t), [t])
}