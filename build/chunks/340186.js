/** Chunk was on 30485 **/
/** chunk id: 340186, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  g: () => C
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk16986 = require("./16986.jsx"),
  Chunk176817 = require("./176817.js"),
  Chunk74973 = require("./74973.js"),
  Chunk982770 = require("./982770.js"),
  Chunk461158 = require("./461158.js"),
  Chunk81453 = require("./81453.js"),
  Chunk289882 = require("./289882.js"),
  Chunk427887 = require("./427887.js"),
  Chunk222323 = require("./222323.js"),
  Chunk411476 = require("./411476.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let O = (0, Chunk419954.t_)(Chunk780964.X.CHAT_PANEL, {
    useTitle: () => I.intl.string(I.t["/VQax8"]),
    buildLayout: () => [d.M, a.f, o.z, c.J, A.n, E.p, g.U, T.W, S.o]
  }),
  N = (0, Chunk419954.t_)(Chunk780964.X.CHAT_PANEL, {
    useTitle: () => I.intl.string(I.t["/VQax8"]),
    StronglyDiscouragedCustomComponent: Chunk16986.A,
    buildLayout: () => []
  }),
  C = (0, Chunk419954.i4)(Chunk780964.X.CHAT_SIDEBAR_ITEM, {
    useTitle: () => I.intl.string(I.t["/VQax8"]),
    getLegacySearchKey: () => (0, r.WJ)("ChatPanel") ? true : _.H.CHAT,
    icon: Chunk934551.ChatIcon,
    buildLayout: () => [(0, r.WJ)("ChatPanel") ? O : N]
  })