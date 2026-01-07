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
  useSearchTerms: () => [d.intl.string(d.t.uHAJ5v)],
  usePredicate: function() {
    let t = (0, c.Y)(),
      e = (0, E.O)(),
      n = (0, S.N)(),
      i = (0, l.e7)([u.default], () => u.default.hasTOTPEnabled());
    return !t && !e && n && i
  },
  Component: function() {
    let t = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
      e = (0, l.e7)([r.Z], () => r.Z.togglingSMS);
    return null == t ? null : (0, i.jsx)(T.Z, {
      currentUser: t,
      togglingSMS: e
    })
  }
})