/** Chunk was on 77069 **/
/** chunk id: 743725, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  c: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk314897 = require("./314897.js"),
  Chunk325067 = require("./325067.js"),
  Chunk594174 = require("./594174.js"),
  Chunk313789 = require("./313789.js"),
  Chunk867289 = require("./867289.jsx"),
  Chunk857314 = require("./857314.jsx"),
  Chunk968021 = require("./968021.js"),
  Chunk921356 = require("./921356.js"),
  Chunk388032 = require("./388032.jsx");
let _ = (0, Chunk509613.ON)(Chunk313789.n.ACCOUNT_SMS_BACKUP_AUTHENTICATION_SETTING, {
  useSearchTerms: () => [Chunk388032.intl.string(Chunk388032.t.uHAJ5v)],
  usePredicate: function() {
    let t = (0, Chunk968021.Y)(),
      e = (0, Chunk921356.O)(),
      n = (0, Chunk857314.N)(),
      i = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.hasTOTPEnabled());
    return !module && !exports && require && Chunk54381
  },
  Component: function() {
    let t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
      e = (0, Chunk442837.e7)([Chunk325067.Z], () => Chunk325067.Z.togglingSMS);
    return null == module ? null : (0, Chunk54381.jsx)(Chunk867289.Z, {
      currentUser: module,
      togglingSMS: exports
    })
  }
})