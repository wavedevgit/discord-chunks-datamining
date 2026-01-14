/** Chunk was on 77069 **/
/** chunk id: 798922, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  F: () => A
});
var Chunk473749 = require("./473749.js"),
  Chunk657707 = require("./657707.js"),
  Chunk704215 = require("./704215.js"),
  Chunk43015 = require("./43015.js"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk36192 = require("./36192.jsx"),
  Chunk830031 = require("./830031.js"),
  Chunk211839 = require("./211839.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");
let g = (0, Chunk509613.k4)(Chunk313789.n.SESSIONS_CATEGORY, {
    buildLayout: () => [c.P, E.m],
    initialize: () => ((0, u.fw)(), () => {
      (0, u.$Z)()
    }),
    useNotice: function() {
      return i.useMemo(() => ({
        type: a.v.STRONGLY_DISCOURAGED_CUSTOM,
        notice: S.kC
      }), [])
    }
  }),
  I = (0, Chunk509613.wf)(Chunk313789.n.SESSIONS_PANEL, {
    usePredicate: () => !(0, T.gN)("LegacySessionsPanel"),
    useTitle: () => _.intl.string(_.t["+1h0k/"]),
    hideInStreamerMode: true,
    StronglyDiscouragedCustomComponent: Chunk36192.ZP,
    buildLayout: () => []
  }),
  N = (0, Chunk509613.wf)(Chunk313789.n.SESSIONS_PANEL, {
    usePredicate: () => (0, T.gN)("SessionsPanel"),
    useTitle: () => _.intl.string(_.t["+1h0k/"]),
    hideInStreamerMode: true,
    buildLayout: () => [g]
  }),
  A = (0, Chunk509613.m7)(Chunk313789.n.SESSIONS_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(_.t["+1h0k/"]),
    getLegacySearchKey: () => (0, T.Gl)("SessionsPanel") ? true : d.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
    icon: Chunk657707.dW3,
    trailing: {
      type: Chunk970013.W.BADGE_NEW,
      getDismissibleContentTypes: () => [s.z.AUTH_SESSIONS_NEW]
    },
    buildLayout: () => (0, T.Gl)("SessionsPanel") ? [N] : [I]
  })