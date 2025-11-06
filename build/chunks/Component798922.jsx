/** Chunk was on 9452 **/
/** chunk id: 798922, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk657707 = require("./657707.js"),
  Chunk704215 = require("./704215.js"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk313789 = require("./313789.js"),
  Chunk36192 = require("./36192.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let d = (0, Chunk509613.x1)(Chunk313789.n.SESSIONS_PANE, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    buildLayout: () => [],
    render: () => (0, Chunk951288.jsx)(Chunk36192.Z, {})
  }),
  S = (0, Chunk509613.wf)(Chunk313789.n.SESSIONS_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    buildLayout: () => [d]
  }),
  T = (0, Chunk509613.m7)(Chunk313789.n.SESSIONS_SIDEBAR_ITEM, {
    icon: Chunk657707.dW3,
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["+1h0k/"]),
    getLegacySearchKey: () => Chunk726985.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
    buildLayout: () => [S],
    trailing: {
      type: Chunk28682.PU.BADGE_NEW,
      getDismissibleContentTypes: () => [Chunk704215.z.AUTH_SESSIONS_NEW]
    }
  })