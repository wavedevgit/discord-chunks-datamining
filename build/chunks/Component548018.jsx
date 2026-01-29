/** Chunk was on 4670 **/
/** chunk id: 548018, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  c: () => _,
  f: () => S
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

function S() {
  return (0, l.bG)([u.default], () => {
    let e = u.default.getCurrentUser();
    return null != e && e.mfaEnabled
  })
}
let _ = (0, Chunk419954.E2)(Chunk780964.X.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
  useSearchTerms: function() {
    let e = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled()),
      t = [A.intl.string(A.t.m0FidJ), A.intl.string(A.t.xZEzbu)];
    return e ? t.push(A.intl.string(A.t["D+aE7g"])) : t.push(A.intl.string(A.t.cDgKte)), t
  },
  usePredicate: function() {
    let e = (0, T.b)(),
      t = (0, c.A)(),
      i = S();
    return !e && !t && i
  },
  Component: function() {
    let e = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
      t = (0, l.bG)([a.A], () => a.A.getBackupCodes()),
      i = (0, l.bG)([r.default], () => r.default.hasTOTPEnabled());
    return null == e ? null : (0, n.jsx)(d.A, {
      backupCodes: t,
      currentUser: e,
      hasTOTPEnabled: i
    })
  }
})