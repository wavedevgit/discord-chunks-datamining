/** Chunk was on 77069 **/
/** chunk id: 9297, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  i: () => T
});
var Chunk473749 = require("./473749.js"),
  Chunk630759 = require("./630759.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk612039 = require("./612039.js"),
  Chunk616211 = require("./616211.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.k4)(Chunk313789.n.VOICE_SECURITY_CATEGORY, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.WWaFn5),
  useNotice: function() {
    return Chunk473749.useMemo(() => ({
      type: Chunk970013.v.INLINE_NOTICE,
      noticeType: "info",
      useText: () => Chunk388032.intl.format(Chunk388032.t["/6sFWa"], {
        helpArticle: (0, Chunk630759.uV)()
      })
    }), [])
  },
  buildLayout: () => [Chunk612039.E, Chunk616211.n]
})