/** Chunk was on 77069 **/
/** chunk id: 798922, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => T
});
var Chunk657707 = require("./657707.js"),
  Chunk704215 = require("./704215.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk36192 = require("./36192.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.x1)(Chunk313789.n.SESSIONS_PANE, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    StronglyDiscouragedCustomComponent: Chunk36192.Z,
    buildLayout: () => []
  }),
  S = (0, Chunk509613.wf)(Chunk313789.n.SESSIONS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    buildLayout: () => [d]
  }),
  T = (0, Chunk509613.m7)(Chunk313789.n.SESSIONS_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    getLegacySearchKey: () => Chunk726985.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
    icon: Chunk657707.dW3,
    trailing: {
      type: Chunk970013.W.BADGE_NEW,
      getDismissibleContentTypes: () => [Chunk704215.z.AUTH_SESSIONS_NEW]
    },
    buildLayout: () => [S]
  })