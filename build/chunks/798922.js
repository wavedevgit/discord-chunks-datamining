/** Chunk was on 77069 **/
/** chunk id: 798922, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => O
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
let g = (0, Chunk509613.k4)(Chunk313789.n.SESSIONS_DESCRIPTION_CATEGORY, {
    buildLayout: () => [E.Z]
  }),
  I = (0, Chunk509613.k4)(Chunk313789.n.SESSIONS_CATEGORY, {
    buildLayout: () => [S.P, c.m],
    initialize: () => ((0, s.fw)(), () => {
      (0, s.$Z)()
    })
  }),
  N = (0, Chunk509613.wf)(Chunk313789.n.SESSIONS_PANEL, {
    usePredicate: () => !(0, o.gN)("LegacySessionsPanel"),
    useTitle: () => _.intl.string(_.t["+1h0k/"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk36192.ZP,
    buildLayout: () => []
  }),
  A = (0, Chunk509613.wf)(Chunk313789.n.SESSIONS_PANEL, {
    usePredicate: () => (0, o.gN)("SessionsPanel"),
    useTitle: () => _.intl.string(_.t["+1h0k/"]),
    hideInStreamerMode: true,
    buildLayout: () => [g, I]
  }),
  O = (0, Chunk509613.m7)(Chunk313789.n.SESSIONS_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(_.t["+1h0k/"]),
    getLegacySearchKey: () => (0, o.Gl)("SessionsPanel") ? true : d.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
    icon: Chunk657707.dW3,
    trailing: {
      type: Chunk970013.W.BADGE_NEW,
      getDismissibleContentTypes: () => [l.z.AUTH_SESSIONS_NEW]
    },
    buildLayout: () => (0, o.Gl)("SessionsPanel") ? [A] : [N]
  })