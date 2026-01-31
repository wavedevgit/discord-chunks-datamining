/** Chunk was on 17534 **/
/** chunk id: 241756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk834757 = require("./834757.js"),
  Chunk562153 = require("./562153.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t, n) {
  let s = (0, r.AO)(n),
    a = l.Ay.getName(e.getGuildId(), e.id, t);
  return null == n ? a : (null == s ? true : s.name) != null ? i.intl.formatToPlainString(i.t["9jpVOZ"], {
    applicationName: null == s ? true : s.name,
    username: a
  }) : i.intl.formatToPlainString(i.t["+h0Z59"], {
    username: a
  })
}