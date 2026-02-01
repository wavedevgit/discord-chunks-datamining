/** Chunk was on 61344 **/
/** chunk id: 723508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk496431 = require("./496431.js"),
  Chunk592713 = require("./592713.js");

function a(e) {
  let {
    communicationDisabledUntil: t,
    userId: n,
    guildId: a
  } = null != e ? e : {}, s = (0, r.A)(null != t ? Date.parse(t) : Date.now()), o = s.seconds, c = (0, l.useRef)(null);
  return (0, l.useEffect)(() => null == e || null == a || null == n ? void clearTimeout(c.current) : (o <= 0 && null == c.current && (c.current = setTimeout(() => {
    i.A.clearGuildMemberTimeout(a, n)
  }, 1e3)), () => {
    null != c.current && (clearTimeout(c.current), c.current = null)
  }), [a, n, o, t, e]), s
}