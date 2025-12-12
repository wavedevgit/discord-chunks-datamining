/** Chunk was on 77069 **/
/** chunk id: 798922, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => A
});
var Chunk657707 = require("./657707.js"),
  Chunk704215 = require("./704215.js"),
  Chunk43015 = require("./43015.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk36192 = require("./36192.jsx"),
  Chunk830031 = require("./830031.js"),
  Chunk211839 = require("./211839.js"),
  Chunk572161 = require("./572161.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let I = (0, Chunk509613.k4)(Chunk313789.n.SESSIONS_DESCRIPTION_CATEGORY, {
    buildLayout: () => [Chunk572161.Z]
  }),
  _ = (0, Chunk509613.k4)(Chunk313789.n.SESSIONS_CATEGORY, {
    buildLayout: () => [Chunk830031.P, Chunk211839.m],
    initialize: () => ((0, Chunk43015.fw)(), () => {
      (0, Chunk43015.$Z)()
    })
  }),
  N = (0, Chunk509613.wf)(Chunk313789.n.SESSIONS_PANEL, {
    usePredicate: () => !(0, Chunk526665.gN)("LegacySessionsPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk36192.ZP,
    buildLayout: () => []
  }),
  O = (0, Chunk509613.wf)(Chunk313789.n.SESSIONS_PANEL, {
    usePredicate: () => (0, Chunk526665.gN)("SessionsPanel"),
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    hideInStreamerMode: true,
    buildLayout: () => [I, _]
  }),
  A = (0, Chunk509613.m7)(Chunk313789.n.SESSIONS_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("SessionsPanel") ? true : Chunk726985.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
    icon: Chunk657707.dW3,
    trailing: {
      type: Chunk970013.W.BADGE_NEW,
      getDismissibleContentTypes: () => [Chunk704215.z.AUTH_SESSIONS_NEW]
    },
    buildLayout: () => (0, Chunk526665.Gl)("SessionsPanel") ? [O] : [N]
  })