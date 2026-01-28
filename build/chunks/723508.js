/** Chunk was on 78528 **/
/** chunk id: 723508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk496431 = require("./496431.js"),
  Chunk592713 = require("./592713.js");

function s(e) {
  let {
    communicationDisabledUntil: t,
    userId: n,
    guildId: s
  } = null != e ? e : {}, a = (0, l.A)(null != t ? Date.parse(t) : Date.now()), o = a.seconds, c = (0, r.useRef)(null);
  return (0, r.useEffect)(() => null == e || null == s || null == n ? void clearTimeout(c.current) : (o <= 0 && null == c.current && (c.current = setTimeout(() => {
    i.A.clearGuildMemberTimeout(s, n)
  }, 1e3)), () => {
    null != c.current && (clearTimeout(c.current), c.current = null)
  }), [s, n, o, t, e]), a
}