/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => A
});
var r = n(192379),
  i = n(442837),
  s = n(80932),
  a = n(110924),
  l = n(471613),
  o = n(889564);
let c = [];

function A(e) {
  let {
    revision: t,
    emojis: n
  } = (0, i.cj)([l.Z], () => ({
    revision: l.Z.getEmojiRevision(e),
    emojis: l.Z.getEmojis(e)
  })), A = (0, a.Z)(t);
  return r.useEffect(() => {
    (0, s.OQ)(e)
  }, [e]), r.useEffect(() => {
    null != A && A < t && (0, s.OQ)(e)
  }, [t, A, e]), r.useMemo(() => null == n ? c : n.filter(t => (0, o.Kt)(t, e)), [n, e])
}