/** Chunk was on 77069 **/
/** chunk id: 857314, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  D: () => _,
  N: () => d
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk314897 = require("./314897.js"),
  Chunk325067 = require("./325067.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk805244 = require("./805244.jsx"),
  Chunk968021 = require("./968021.js"),
  Chunk921356 = require("./921356.js"),
  Chunk388032 = require("./388032.jsx");

function d() {
  return (0, l.e7)([a.default], () => {
    let t = a.default.getCurrentUser();
    return null != t && t.mfaEnabled
  })
}
let _ = (0, Chunk509613.ON)(Chunk313789.n.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
  useSearchTerms: function() {
    let t = (0, l.e7)([u.default], () => u.default.hasTOTPEnabled()),
      e = [E.intl.string(E.t.m0FidJ), E.intl.string(E.t.xZEzbu)];
    return t ? e.push(E.intl.string(E.t["D+aE7g"])) : e.push(E.intl.string(E.t.cDgKte)), e
  },
  usePredicate: function() {
    let t = (0, S.Y)(),
      e = (0, c.O)(),
      n = d();
    return !t && !e && n
  },
  Component: function() {
    let t = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
      e = (0, l.e7)([r.Z], () => r.Z.getBackupCodes()),
      n = (0, l.e7)([u.default], () => u.default.hasTOTPEnabled());
    return null == t ? null : (0, i.jsx)(T.Z, {
      backupCodes: e,
      currentUser: t,
      hasTOTPEnabled: n
    })
  }
})