/** Chunk was on 4670 **/
/** chunk id: 953410, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  g: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk419954 = require("./419954.js"),
  Chunk670492 = require("./670492.js"),
  Chunk780964 = require("./780964.js"),
  Chunk455611 = require("./455611.jsx"),
  Chunk548018 = require("./548018.jsx"),
  Chunk32096 = require("./32096.js"),
  Chunk545214 = require("./545214.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk419954.E2)(Chunk780964.X.ACCOUNT_BACKUP_CODES_SETTING, {
  useSearchTerms: () => [c.intl.string(c.t.m0FidJ), c.intl.string(c.t.xZEzbu)],
  usePredicate: function() {
    let e = (0, d.b)(),
      t = (0, T.A)(),
      i = (0, o.f)(),
      n = (0, l.bG)([r.A], () => r.A.getBackupCodes().length > 0);
    return !e && !t && i && n
  },
  Component: function() {
    let e = (0, l.bG)([r.A], () => r.A.getBackupCodes());
    return (0, n.jsx)(u.A, {
      backupCodes: e
    })
  }
})