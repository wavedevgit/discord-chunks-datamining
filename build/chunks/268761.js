/** Chunk was on web.js **/
/** chunk id: 268761, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gk: () => l,
  Gl: () => c
});
var Chunk531815 = require("./531815.js"),
  i = require.n(Chunk531815);
require("./989349.js");
var Chunk927813 = require("./927813.js"),
  Chunk37411 = require("./37411.js"),
  Chunk985018 = require("./985018.jsx");

function l() {
  return [{
    id: "1hour",
    label: o.intl.string(o.t.cs8A1c),
    value: a.A.Minutes.HOUR
  }, {
    id: "24hours",
    label: o.intl.string(o.t.zFKbrF),
    value: a.A.Minutes.DAY
  }, {
    id: "3days",
    label: o.intl.string(o.t.TmPIZX),
    value: 3 * a.A.Minutes.DAY
  }, {
    id: "1week",
    label: o.intl.string(o.t["/7i2el"]),
    value: a.A.Minutes.WEEK
  }]
}

function c(e, t) {
  var n;
  return null != (n = null != t ? t : null == e ? true : e.defaultAutoArchiveDuration) ? n : s.cM
}
Chunk927813.A.Minutes.HOUR, Chunk927813.A.Minutes.DAY, Chunk927813.A.Minutes.DAY, Chunk927813.A.Minutes.WEEK, i()(() => l().map(e => e.value))