/** Chunk was on 21738 **/
/** chunk id: 575474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk554146 = require("./554146.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk866945 = require("./866945.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk835002 = require("./835002.js"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk91492 = require("./91492.js");

function _() {
  let [e, t] = (0, a.kn)([l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
  return i.useMemo(() => e === l.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e]) ? (0, r.jsx)(s.e, {
    label: m.t.zqv4nV,
    labelHook: () => {
      let e = (0, c.WJ)("RestrictedAccountsSettingNotice");
      (0, u.openUserSettings)(e ? o.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY : o.X.CONTENT_AND_SOCIAL_PANEL, {
        section: d.nc_.CONTENT_AND_SOCIAL,
        subsection: f.H.RESTRICTED_USERS,
        scrollPosition: e ? true : g.d1.RESTRICTED_ACCOUNTS
      })
    },
    dismissNotice: () => t(p.i.USER_DISMISS),
    className: A._,
    noticeType: h.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  }) : null
}