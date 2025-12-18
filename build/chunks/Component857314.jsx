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
  return (0, Chunk442837.e7)([Chunk594174.default], () => {
    let t = Chunk594174.default.getCurrentUser();
    return null != module && module.mfaEnabled
  })
}
let _ = (0, Chunk509613.ON)(Chunk313789.n.ACCOUNT_AUTHENTICATOR_APP_SETTING, {
  useSearchTerms: function() {
    let t = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.hasTOTPEnabled()),
      e = [Chunk388032.intl.string(Chunk388032.t.m0FidJ), Chunk388032.intl.string(Chunk388032.t.xZEzbu)];
    return module ? exports.push(Chunk388032.intl.string(Chunk388032.t["D+aE7g"])) : exports.push(Chunk388032.intl.string(Chunk388032.t.cDgKte)), exports
  },
  usePredicate: function() {
    let t = (0, Chunk968021.Y)(),
      e = (0, Chunk921356.O)(),
      n = d();
    return !module && !exports && require
  },
  Component: function() {
    let t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
      e = (0, Chunk442837.e7)([Chunk325067.Z], () => Chunk325067.Z.getBackupCodes()),
      n = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.hasTOTPEnabled());
    return null == module ? null : (0, Chunk54381.jsx)(Chunk805244.Z, {
      backupCodes: exports,
      currentUser: module,
      hasTOTPEnabled: require
    })
  }
})