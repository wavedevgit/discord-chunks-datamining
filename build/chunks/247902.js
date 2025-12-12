/** Chunk was on web.js **/
/** chunk id: 247902, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => c
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk246946 = require("./246946.js"),
  Chunk607802 = require("./607802.js"),
  Chunk981631 = require("./981631.js");

function l(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation);
  return r.useMemo(() => {
    let n = (0, o.R6)(e),
      r = [];
    return t || (r.push(s.dCx.FILTER_FROM), r.push(s.dCx.FILTER_MENTIONS)), r.push(s.dCx.FILTER_HAS), n && r.push(s.dCx.FILTER_IN), r.push(s.dCx.FILTER_ON), r.push(s.dCx.FILTER_BEFORE), r.push(s.dCx.FILTER_AFTER), r.push(s.dCx.FILTER_PINNED), r.push(s.dCx.FILTER_AUTHOR_TYPE), r
  }, [t, e])
}

function c(e) {
  let t = l(e);
  return r.useMemo(() => new Set(t), [t])
}