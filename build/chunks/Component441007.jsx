/** Chunk was on web.js **/
/** chunk id: 441007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => f,
  Z: () => _
}), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk81643 = require("./81643.js"),
  Chunk546791 = require("./546791.js"),
  Chunk594174 = require("./594174.js"),
  Chunk128064 = require("./128064.js"),
  Chunk312870 = require("./312870.js"),
  Chunk931461 = require("./931461.jsx"),
  Chunk116233 = require("./116233.jsx"),
  f = function(e) {
    return e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL", e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY", e
  }({});
let p = {
  CONTENT_AND_SOCIAL: [{
    order: 100,
    predicate: Chunk546791.MH,
    Component: Chunk116233.Z
  }, {
    order: 200,
    predicate: () => {
      var e;
      return (null == (e = s.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    },
    Component: Chunk931461.cs
  }, {
    order: 300,
    predicate: () => {
      let e = (0, l.c_)("SensitiveContentFiltersNotice"),
        t = (0, c.U)("SensitiveContentFiltersNotice");
      return (e || t) && !(0, a.kJ)()
    },
    Component: Chunk931461.jF
  }],
  DATA_AND_PRIVACY: [{
    order: 100,
    predicate: Chunk546791.MH,
    Component: Chunk116233.Z
  }]
};

function _(e) {
  let {
    page: t
  } = e, n = i.useMemo(() => {
    let e = p[t].filter(e => e.predicate()).sort((e, t) => e.order - t.order).map(e => e.Component);
    return 0 === e.length ? null : e[0]
  }, [t]);
  return null == n ? null : (0, r.jsx)(n, {}, screen)
}