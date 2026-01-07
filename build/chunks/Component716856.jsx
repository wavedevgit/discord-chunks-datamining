/** Chunk was on 77069 **/
/** chunk id: 716856, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  o: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk325067 = require("./325067.js"),
  Chunk313789 = require("./313789.js"),
  Chunk616495 = require("./616495.jsx"),
  Chunk857314 = require("./857314.jsx"),
  Chunk968021 = require("./968021.js"),
  Chunk921356 = require("./921356.js"),
  Chunk388032 = require("./388032.jsx");
let E = (0, Chunk509613.ON)(Chunk313789.n.ACCOUNT_BACKUP_CODES_SETTING, {
  useSearchTerms: () => [c.intl.string(c.t.m0FidJ), c.intl.string(c.t.xZEzbu)],
  usePredicate: function() {
    let t = (0, T.Y)(),
      e = (0, S.O)(),
      n = (0, o.N)(),
      i = (0, l.e7)([u.Z], () => u.Z.getBackupCodes().length > 0);
    return !t && !e && n && i
  },
  Component: function() {
    let t = (0, l.e7)([u.Z], () => u.Z.getBackupCodes());
    return (0, i.jsx)(a.Z, {
      backupCodes: t
    })
  }
})