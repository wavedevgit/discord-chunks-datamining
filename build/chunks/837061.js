/** Chunk was on 77069 **/
/** chunk id: 837061, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  x: () => P
});
var Chunk657707 = require("./657707.js"),
  Chunk816814 = require("./816814.js"),
  Chunk809206 = require("./809206.js"),
  Chunk509613 = require("./509613.js"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk393681 = require("./393681.jsx"),
  Chunk995644 = require("./995644.js"),
  Chunk172320 = require("./172320.jsx"),
  Chunk439175 = require("./439175.jsx"),
  Chunk202011 = require("./202011.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let O = (0, Chunk509613.ZH)(Chunk313789.n.ACCOUNT_STANDING_TAB, {
    getTitle: () => Chunk388032.intl.string(Chunk388032.t["Vov/9o"]),
    onItemSelect: () => {
      Chunk626135.default.track(Chunk981631.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
        target_tab_name: Chunk393681.D.STANDING
      })
    },
    buildLayout: () => [Chunk202011.v]
  }),
  C = (0, Chunk509613.ZH)(Chunk313789.n.ACCOUNT_SECURITY_TAB, {
    getTitle: () => Chunk388032.intl.string(Chunk388032.t.Am9YHi),
    onItemSelect: () => {
      Chunk626135.default.track(Chunk981631.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
        target_tab_name: Chunk393681.D.SECURITY
      })
    },
    buildLayout: () => [Chunk172320.z, Chunk995644.v, Chunk439175.v]
  }),
  f = (0, Chunk509613.wf)(Chunk313789.n.ACCOUNT_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["JAIM/m"]),
    initialize: function() {
      let t = Chunk594174.default.getCurrentUser();
      return null != module && (0, Chunk484459.Z)(module.id, module.getAvatarURL(true, 80)), () => {
        Chunk816814.Z.clearBackupCodes(), (0, Chunk809206.Zy)()
      }
    },
    hideInStreamerMode: true,
    buildLayout: () => [C, O]
  }),
  L = (0, Chunk509613.wf)(Chunk313789.n.ACCOUNT_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["JAIM/m"]),
    StronglyDiscouragedCustomComponent: Chunk393681.Z,
    buildLayout: () => []
  }),
  P = (0, Chunk509613.m7)(Chunk313789.n.ACCOUNT_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk388032.t["JAIM/m"]),
    getLegacySearchKey: () => (0, Chunk526665.Gl)("AccountPanel") ? true : Chunk726985.s6.ACCOUNT,
    icon: Chunk657707.tBG,
    buildLayout: () => (0, Chunk526665.Gl)("AccountPanel") ? [f] : [L]
  })