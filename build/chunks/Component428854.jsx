/** Chunk was on web.js **/
/** chunk id: 428854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  R: () => f
}), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk36149 = require("./36149.js"),
  Chunk923531 = require("./923531.js"),
  Chunk207560 = require("./207560.js"),
  Chunk287809 = require("./287809.js"),
  Chunk64313 = require("./64313.js"),
  Chunk380587 = require("./380587.jsx"),
  Chunk589641 = require("./589641.jsx"),
  f = function(e) {
    return e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL", e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY", e
  }({});
let p = {
  CONTENT_AND_SOCIAL: [{
    order: 100,
    predicate: Chunk923531.$h,
    Component: Chunk589641.A
  }, {
    order: 200,
    predicate: () => {
      var e;
      return (null == (e = l.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    },
    Component: Chunk380587.Ev
  }, {
    order: 300,
    predicate: () => {
      let e = (0, c.o)("SensitiveContentFiltersNotice");
      return ((0, o.TR)() || e) && !(0, a.Q9)()
    },
    Component: Chunk380587.Ow
  }],
  DATA_AND_PRIVACY: [{
    order: 100,
    predicate: Chunk923531.$h,
    Component: Chunk589641.A
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