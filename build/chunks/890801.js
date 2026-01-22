/** Chunk was on 28979 **/
/** chunk id: 890801, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  $: () => E
});
var Chunk934551 = require("./934551.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk490510 = require("./490510.jsx"),
  Chunk635603 = require("./635603.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.zZ)(Chunk780964.X.KEYBINDS_CATEGORY, {
    buildLayout: () => [a.O]
  }),
  d = (0, Chunk419954.t_)(Chunk780964.X.KEYBINDS_PANEL, {
    usePredicate: () => !(0, r.dk)("LegacyKeybindsPanel"),
    useTitle: () => T.intl.string(T.t.T9DA2K),
    StronglyDiscouragedCustomComponent: Chunk490510.A,
    buildLayout: () => []
  }),
  S = (0, Chunk419954.t_)(Chunk780964.X.KEYBINDS_PANEL, {
    usePredicate: () => (0, r.dk)("KeybindsPanel"),
    useTitle: () => T.intl.string(T.t.T9DA2K),
    buildLayout: () => [A]
  }),
  E = (0, Chunk419954.i4)(Chunk780964.X.KEYBINDS_SIDEBAR_ITEM, {
    useTitle: () => T.intl.string(T.t.T9DA2K),
    getLegacySearchKey: () => (0, r.WJ)("KeybindsPanel") ? true : o.H.KEYBINDS,
    icon: Chunk934551.KeyboardIcon,
    buildLayout: () => (0, r.WJ)("KeybindsPanel") ? [S] : [d]
  })