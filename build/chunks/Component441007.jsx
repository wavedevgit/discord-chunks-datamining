/** Chunk was on web.js **/
/** chunk id: 441007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => d,
  Z: () => p
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk81643 = require("./81643.js"),
  Chunk546791 = require("./546791.js"),
  Chunk594174 = require("./594174.js"),
  Chunk128064 = require("./128064.js"),
  Chunk931461 = require("./931461.jsx"),
  Chunk116233 = require("./116233.jsx"),
  d = function(e) {
    return e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL", e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY", e
  }({});
let f = {
  CONTENT_AND_SOCIAL: [{
    order: 100,
    predicate: Chunk546791.MH,
    Component: Chunk116233.Z
  }, {
    order: 200,
    predicate: () => {
      var e;
      return (null == (e = Chunk594174.default.getCurrentUser()) ? true : module.nsfwAllowed) === false
    },
    Component: Chunk931461.c
  }, {
    order: 300,
    predicate: () => (0, Chunk128064.c_)("SensitiveContentFiltersNotice") && !(0, Chunk81643.kJ)(),
    Component: Chunk931461.j
  }],
  DATA_AND_PRIVACY: [{
    order: 100,
    predicate: Chunk546791.MH,
    Component: Chunk116233.Z
  }]
};

function p(e) {
  let {
    page: t
  } = e, n = i.useMemo(() => {
    let e = f[t].filter(e => e.predicate()).sort((e, t) => e.order - t.order).map(e => e.Component);
    return 0 === e.length ? null : e[0]
  }, [t]);
  return null == n ? null : (0, r.jsx)(n, {}, screen)
}