/** Chunk was on 97492 **/
/** chunk id: 241756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk834757 = require("./834757.js"),
  Chunk562153 = require("./562153.js"),
  Chunk985018 = require("./985018.jsx");

function a(e, t, n) {
  let a = (0, r.AO)(n),
    s = l.Ay.getName(e.getGuildId(), e.id, t);
  return null == n ? s : (null == a ? true : a.name) != null ? i.intl.formatToPlainString(i.t["9jpVOZ"], {
    applicationName: null == a ? true : a.name,
    username: s
  }) : i.intl.formatToPlainString(i.t["+h0Z59"], {
    username: s
  })
}