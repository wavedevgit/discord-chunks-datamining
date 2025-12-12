/** Chunk was on web.js **/
/** chunk id: 247902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => u
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk246946 = require("./246946.js"),
  Chunk607802 = require("./607802.js"),
  Chunk375123 = require("./375123.js"),
  Chunk981631 = require("./981631.js");

function c(e) {
  let t = (0, s.C)({
      location: "useEligibleFilterTokens"
    }),
    n = (0, i.e7)([o.Z], () => o.Z.hidePersonalInformation);
  return r.useMemo(() => {
    let r = (0, a.R6)(e),
      i = [];
    return n || (i.push(l.dCx.FILTER_FROM), i.push(l.dCx.FILTER_MENTIONS)), i.push(l.dCx.FILTER_HAS), r && i.push(l.dCx.FILTER_IN), i.push(l.dCx.FILTER_ON), i.push(l.dCx.FILTER_BEFORE), i.push(l.dCx.FILTER_AFTER), i.push(l.dCx.FILTER_PINNED), t && i.push(l.dCx.FILTER_AUTHOR_TYPE), i
  }, [n, t, e])
}

function u(e) {
  let t = c(e);
  return r.useMemo(() => new Set(t), [t])
}