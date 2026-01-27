/** Chunk was on web.js **/
/** chunk id: 417876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk49463 = require("./49463.js"),
  Chunk961350 = require("./961350.js"),
  Chunk652215 = require("./652215.js");
let c = e => {
    let {
      hasLoadedExperiments: t,
      token: n
    } = e;
    return null != n ? (0, r.jsx)(i.rd, {
      to: l.BVt.APP
    }) : t ? (0, r.jsx)(i.rd, {
      to: l.BVt.DEFAULT_LOGGED_OUT
    }) : null
  },
  u = Chunk311907.Ay.connectStores([Chunk49463.A, Chunk961350.default], () => {
    let e = s.default.getToken();
    return {
      token: e,
      hasLoadedExperiments: null != e || o.A.hasLoadedExperiments
    }
  })(c)