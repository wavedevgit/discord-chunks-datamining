/** Chunk was on 88119 **/
n.d(t, {
  $: () => o
});
var r = n(192379),
  i = n(774078),
  l = n(202107);

function o(e) {
  let {
    communicationDisabledUntil: t,
    userId: n,
    guildId: o
  } = null != e ? e : {}, a = (0, i.Z)(null != t ? Date.parse(t) : Date.now()), s = a.seconds, c = (0, r.useRef)(null);
  return (0, r.useEffect)(() => {
    if (null == e || null == o || null == n) {
      clearTimeout(c.current);
      return
    }
    return s <= 0 && null == c.current && (c.current = setTimeout(() => {
      l.Z.clearGuildMemberTimeout(o, n)
    }, 1e3)), () => {
      null != c.current && (clearTimeout(c.current), c.current = null)
    }
  }, [o, n, s, t, e]), a
}