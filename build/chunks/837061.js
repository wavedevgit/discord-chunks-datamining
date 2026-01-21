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
    getTitle: () => N.intl.string(N.t["Vov/9o"]),
    onItemSelect: () => {
      o.default.track(A.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
        target_tab_name: c.D.STANDING
      })
    },
    buildLayout: () => [g.v]
  }),
  C = (0, Chunk509613.ZH)(Chunk313789.n.ACCOUNT_SECURITY_TAB, {
    getTitle: () => N.intl.string(N.t.Am9YHi),
    onItemSelect: () => {
      o.default.track(A.rMx.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
        target_tab_name: c.D.SECURITY
      })
    },
    buildLayout: () => [d.z, E.v, _.v]
  }),
  f = (0, Chunk509613.wf)(Chunk313789.n.ACCOUNT_PANEL, {
    useTitle: () => N.intl.string(N.t["JAIM/m"]),
    initialize: function() {
      let t = a.default.getCurrentUser();
      return null != t && (0, r.Z)(t.id, t.getAvatarURL(true, 80)), () => {
        l.Z.clearBackupCodes(), (0, s.Zy)()
      }
    },
    hideInStreamerMode: true,
    buildLayout: () => [C, O]
  }),
  L = (0, Chunk509613.wf)(Chunk313789.n.ACCOUNT_PANEL, {
    useTitle: () => N.intl.string(N.t["JAIM/m"]),
    StronglyDiscouragedCustomComponent: Chunk393681.Z,
    buildLayout: () => []
  }),
  P = (0, Chunk509613.m7)(Chunk313789.n.ACCOUNT_SIDEBAR_ITEM, {
    useTitle: () => N.intl.string(N.t["JAIM/m"]),
    getLegacySearchKey: () => (0, S.Gl)("AccountPanel") ? true : I.s6.ACCOUNT,
    icon: Chunk657707.UserIcon,
    buildLayout: () => (0, S.Gl)("AccountPanel") ? [f] : [L]
  })