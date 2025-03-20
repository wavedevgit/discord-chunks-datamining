/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => c
});
var r = n(192379),
  i = n(442837),
  s = n(80932),
  a = n(110924),
  l = n(471613),
  o = n(889564);
let A = [];

function c(e) {
  let {
    revision: t,
    emojis: n
  } = (0, i.cj)([l.Z], () => ({
    revision: l.Z.getEmojiRevision(e),
    emojis: l.Z.getEmojis(e)
  })), c = (0, a.Z)(t);
  return r.useEffect(() => {
    (0, s.OQ)(e)
  }, [e]), r.useEffect(() => {
    null != c && c < t && (0, s.OQ)(e)
  }, [t, c, e]), r.useMemo(() => null == n ? A : n.filter(t => (0, o.Kt)(t, e)), [n, e])
}