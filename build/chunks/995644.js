/** Chunk was on 77069 **/
/** chunk id: 995644, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  v: () => N
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk562436 = require("./562436.jsx"),
  Chunk857314 = require("./857314.jsx"),
  Chunk716856 = require("./716856.jsx"),
  Chunk442639 = require("./442639.js"),
  Chunk341968 = require("./341968.js"),
  Chunk743725 = require("./743725.jsx"),
  Chunk374509 = require("./374509.js"),
  Chunk968021 = require("./968021.js"),
  Chunk921356 = require("./921356.js"),
  Chunk388032 = require("./388032.jsx");
let N = (0, Chunk509613.k4)(Chunk313789.n.ACCOUNT_AUTHENTICATION_CATEGORY, {
  useTitle: () => I.intl.string(I.t.pKSjEj),
  useNotice: function() {
    return (0, i.e7)([u.default], () => {
      var t, e;
      return null != (e = null == (t = u.default.getCurrentUser()) ? true : t.mfaEnabled) && e
    }) ? {
      type: s.v.STRONGLY_DISCOURAGED_CUSTOM,
      notice: a.Z
    } : null
  },
  buildLayout: () => [c.W, _.M, g.a, S.g, o.D, T.o, E.c, d.g]
})