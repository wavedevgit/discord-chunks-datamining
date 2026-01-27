/** Chunk was on 60667 **/
/** chunk id: 428854, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g,
  R: () => p
}), require("./638769.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk36149 = require("./36149.js"),
  Chunk923531 = require("./923531.js"),
  Chunk207560 = require("./207560.js"),
  Chunk287809 = require("./287809.js"),
  Chunk64313 = require("./64313.js"),
  Chunk380587 = require("./380587.jsx"),
  Chunk589641 = require("./589641.jsx"),
  p = ((r = {}).CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL", r.DATA_AND_PRIVACY = "DATA_AND_PRIVACY", r);
let m = {
  CONTENT_AND_SOCIAL: [{
    order: 100,
    predicate: Chunk923531.$h,
    Component: Chunk589641.A
  }, {
    order: 200,
    predicate: () => {
      var e;
      return (null == (e = c.default.getCurrentUser()) ? true : e.nsfwAllowed) === false
    },
    Component: Chunk380587.Ev
  }, {
    order: 300,
    predicate: () => {
      let e = (0, d.o)("SensitiveContentFiltersNotice");
      return ((0, o.TR)() || e) && !(0, s.Q9)()
    },
    Component: Chunk380587.Ow
  }],
  DATA_AND_PRIVACY: [{
    order: 100,
    predicate: Chunk923531.$h,
    Component: Chunk589641.A
  }]
};

function g(e) {
  let {
    page: t
  } = e, n = l.useMemo(() => {
    let e = m[t].filter(e => e.predicate()).sort((e, t) => e.order - t.order).map(e => e.Component);
    return 0 === e.length ? null : e[0]
  }, [t]);
  return null == n ? null : (0, i.jsx)(n, {}, screen)
}