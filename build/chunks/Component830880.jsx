/** Chunk was on 1272 **/
/** chunk id: 830880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk704215 = require("./704215.js"),
  Chunk230711 = require("./230711.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk907995 = require("./907995.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk484710 = require("./484710.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk903548 = require("./903548.js");

function m() {
  let [e, t] = (0, Chunk243778.US)([Chunk704215.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
  return Chunk73800.useMemo(() => module === Chunk704215.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [module]) ? (0, Chunk255367.jsx)(Chunk907995.f, {
    label: Chunk388032.t.zqv4nZ,
    labelHook: () => {
      Chunk230711.Z.open(Chunk981631.oAB.CONTENT_AND_SOCIAL, Chunk726985.s6.RESTRICTED_USERS, {
        scrollPosition: Chunk526761.FY.RESTRICTED_ACCOUNTS
      })
    },
    dismissNotice: () => exports(Chunk921944.L.USER_DISMISS),
    className: Chunk903548.blockedIgnoredSettingsNotice,
    noticeType: Chunk484710.nq.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  }) : null
}