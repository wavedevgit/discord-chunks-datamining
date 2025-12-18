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
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.pKSjEj),
  useNotice: function() {
    return (0, Chunk442837.e7)([Chunk594174.default], () => {
      var t, e;
      return null != (e = null == (t = Chunk594174.default.getCurrentUser()) ? true : module.mfaEnabled) && exports
    }) ? {
      type: Chunk970013.v.STRONGLY_DISCOURAGED_CUSTOM,
      notice: Chunk562436.Z
    } : null
  },
  buildLayout: () => [Chunk341968.W, Chunk968021.M, Chunk921356.a, Chunk442639.g, Chunk857314.D, Chunk716856.o, Chunk743725.c, Chunk374509.g]
})