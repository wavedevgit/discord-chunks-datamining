/** Chunk was on 28979 **/
/** chunk id: 909081, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  T: () => g
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
let g = (0, Chunk419954.E2)(Chunk780964.X.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
  useSearchTerms: () => [E.intl.string(E.t.uHAJ5v)],
  usePredicate: function() {
    let t = (0, A.b)(),
      e = (0, S.A)(),
      i = (0, d.f)(),
      n = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
    return !t && !e && i && n
  },
  Component: function() {
    let t = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
      e = (0, l.bG)([u.A], () => u.A.togglingSMS);
    return null == t ? null : (0, n.jsx)(T.A, {
      currentUser: t,
      togglingSMS: e
    })
  }
})