/** Chunk was on 1272 **/
/** chunk id: 830880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk45639 = require("./45639.js");

function b() {
  let [e, t] = (0, a.US)([l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
  return i.useMemo(() => e === l.z.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e]) ? (0, r.jsx)(o.f, {
    label: m.t.zqv4nV,
    labelHook: () => {
      (0, c.openUserSettings)(s.n.CONTENT_AND_SOCIAL_PANEL, {
        section: u.oAB.CONTENT_AND_SOCIAL,
        subsection: g.s6.RESTRICTED_USERS,
        scrollPosition: f.FY.RESTRICTED_ACCOUNTS
      })
    },
    dismissNotice: () => t(d.L.USER_DISMISS),
    className: h.blockedIgnoredSettingsNotice,
    noticeType: p.nq.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  }) : null
}