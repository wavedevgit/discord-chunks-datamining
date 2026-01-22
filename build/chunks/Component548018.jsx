/** Chunk was on 28979 **/
/** chunk id: 548018, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  c: () => _,
  f: () => E
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk961350 = require("./961350.js"),
  Chunk670492 = require("./670492.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk709913 = require("./709913.jsx"),
  Chunk32096 = require("./32096.js"),
  Chunk545214 = require("./545214.js"),
  Chunk985018 = require("./985018.jsx");

function E() {
  return (0, l.bG)([a.default], () => {
    let t = a.default.getCurrentUser();
    return null != t && t.mfaEnabled
  })
}
let _ = (0, Chunk419954.E2)(Chunk780964.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
  useSearchTerms: function() {
    let t = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled()),
      e = [S.intl.string(S.t.m0FidJ), S.intl.string(S.t.xZEzbu)];
    return t ? e.push(S.intl.string(S.t["D+aE7g"])) : e.push(S.intl.string(S.t.cDgKte)), e
  },
  usePredicate: function() {
    let t = (0, A.b)(),
      e = (0, d.A)(),
      i = E();
    return !t && !e && i
  },
  Component: function() {
    let t = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
      e = (0, l.bG)([u.A], () => u.A.getBackupCodes()),
      i = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
    return null == t ? null : (0, n.jsx)(T.A, {
      backupCodes: e,
      currentUser: t,
      hasTOTPEnabled: i
    })
  }
})