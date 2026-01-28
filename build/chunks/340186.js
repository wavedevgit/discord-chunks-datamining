/** Chunk was on 28979 **/
/** chunk id: 340186, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  g: () => b
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk16986 = require("./16986.jsx"),
  Chunk176817 = require("./176817.js"),
  Chunk74973 = require("./74973.js"),
  Chunk982770 = require("./982770.js"),
  Chunk196837 = require("./196837.js"),
  Chunk461158 = require("./461158.js"),
  Chunk81453 = require("./81453.js"),
  Chunk289882 = require("./289882.js"),
  Chunk427887 = require("./427887.js"),
  Chunk222323 = require("./222323.js"),
  Chunk411476 = require("./411476.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let N = (0, Chunk419954.t_)(Chunk780964.X.CHAT_PANEL, {
    useTitle: () => O.intl.string(O.t["/VQax8"]),
    buildLayout: () => [T.M, a.f, o.z, g.J, S.n, _.p, c.U, A.W, E.o, d.B]
  }),
  C = (0, Chunk419954.t_)(Chunk780964.X.CHAT_PANEL, {
    useTitle: () => O.intl.string(O.t["/VQax8"]),
    StronglyDiscouragedCustomComponent: Chunk16986.A,
    buildLayout: () => []
  }),
  b = (0, Chunk419954.i4)(Chunk780964.X.CHAT_SIDEBAR_ITEM, {
    useTitle: () => O.intl.string(O.t["/VQax8"]),
    getLegacySearchKey: () => (0, r.WJ)("ChatPanel") ? true : I.H.CHAT,
    icon: Chunk934551.ChatIcon,
    buildLayout: () => [(0, r.WJ)("ChatPanel") ? N : C]
  })