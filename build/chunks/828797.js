/** Chunk was on 28979 **/
/** chunk id: 828797, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  o: () => I
});
var Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk36535 = require("./36535.jsx"),
  Chunk548018 = require("./548018.jsx"),
  Chunk953410 = require("./953410.jsx"),
  Chunk102277 = require("./102277.js"),
  Chunk354093 = require("./354093.js"),
  Chunk909081 = require("./909081.jsx"),
  Chunk25894 = require("./25894.js"),
  Chunk32096 = require("./32096.js"),
  Chunk545214 = require("./545214.js"),
  Chunk985018 = require("./985018.jsx");
let I = (0, Chunk419954.zZ)(Chunk780964.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
  useTitle: () => c.intl.string(c.t.pKSjEj),
  useNotice: function() {
    return (0, n.bG)([r.default], () => {
      var t, e;
      return null != (t = null == (e = r.default.getCurrentUser()) ? true : e.mfaEnabled) && t
    }) ? {
      type: s.W.STRONGLY_DISCOURAGED_CUSTOM,
      notice: a.A
    } : null
  },
  buildLayout: () => [d.L, _.A, g.k, A.v, o.c, T.g, S.T, E.C]
})