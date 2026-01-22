/** Chunk was on web.js **/
/** chunk id: 893162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => c
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk351906 = require("./351906.js"),
  Chunk822382 = require("./822382.js"),
  Chunk652215 = require("./652215.js");

function l(e) {
  let t = (0, i.bG)([a.A], () => a.A.hidePersonalInformation);
  return r.useMemo(() => {
    let n = (0, s.Wg)(e),
      r = [];
    return t || (r.push(o.LWr.FILTER_FROM), r.push(o.LWr.FILTER_MENTIONS)), r.push(o.LWr.FILTER_HAS), n && r.push(o.LWr.FILTER_IN), r.push(o.LWr.FILTER_ON), r.push(o.LWr.FILTER_BEFORE), r.push(o.LWr.FILTER_AFTER), r.push(o.LWr.FILTER_PINNED), r.push(o.LWr.FILTER_AUTHOR_TYPE), r
  }, [t, e])
}

function c(e) {
  let t = l(e);
  return r.useMemo(() => new Set(t), [t])
}