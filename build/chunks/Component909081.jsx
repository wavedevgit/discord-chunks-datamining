/** Chunk was on 4670 **/
/** chunk id: 909081, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  T: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk961350 = require("./961350.js"),
  Chunk670492 = require("./670492.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk309198 = require("./309198.jsx"),
  Chunk548018 = require("./548018.jsx"),
  Chunk32096 = require("./32096.js"),
  Chunk545214 = require("./545214.js"),
  Chunk985018 = require("./985018.jsx");
let _ = (0, Chunk419954.E2)(Chunk780964.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
  useSearchTerms: () => [S.intl.string(S.t.uHAJ5v)],
  usePredicate: function() {
    let e = (0, c.b)(),
      t = (0, A.A)(),
      i = (0, T.f)(),
      n = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
    return !e && !t && i && n
  },
  Component: function() {
    let e = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
      t = (0, l.bG)([a.A], () => a.A.togglingSMS);
    return null == e ? null : (0, n.jsx)(d.A, {
      currentUser: e,
      togglingSMS: t
    })
  }
})