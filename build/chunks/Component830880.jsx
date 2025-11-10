/** Chunk was on 1272 **/
/** chunk id: 830880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk907995 = require("./907995.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk484710 = require("./484710.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk252319 = require("./252319.js");

function _() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
  return Chunk647438.useMemo(() => module === Chunk704215.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [module]) ? (0, Chunk951288.jsx)(Chunk907995.f, {
    label: Chunk388032.t.zqv4nV,
    labelHook: () => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.CONTENT_AND_SOCIAL_PANEL, {
        section: Chunk981631.oAB.CONTENT_AND_SOCIAL,
        subsection: Chunk726985.s6.RESTRICTED_USERS,
        scrollPosition: Chunk526761.FY.RESTRICTED_ACCOUNTS
      })
    },
    dismissNotice: () => exports(Chunk921944.L.USER_DISMISS),
    className: Chunk252319.blockedIgnoredSettingsNotice,
    noticeType: Chunk484710.nq.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  }) : null
}