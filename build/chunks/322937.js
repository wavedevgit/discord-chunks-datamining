/** Chunk was on 13873 **/
/** chunk id: 322937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk774078 = require("./774078.js"),
  Chunk202107 = require("./202107.js");

function a(e) {
  let {
    communicationDisabledUntil: t,
    userId: n,
    guildId: a
  } = null != e ? e : {}, o = (0, i.Z)(null != t ? Date.parse(t) : Date.now()), s = o.seconds, c = (0, r.useRef)(null);
  return (0, r.useEffect)(() => null == e || null == a || null == n ? void clearTimeout(c.current) : (s <= 0 && null == c.current && (c.current = setTimeout(() => {
    l.Z.clearGuildMemberTimeout(a, n)
  }, 1e3)), () => {
    null != c.current && (clearTimeout(c.current), c.current = null)
  }), [a, n, s, t, e]), o
}