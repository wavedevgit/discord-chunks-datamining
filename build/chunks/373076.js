/** Chunk was on 52272 **/
n.d(t, {
  P: () => u
});
var r = n(192379),
  i = n(442837),
  o = n(687158),
  a = n(484459),
  l = n(594174),
  s = n(74538),
  c = n(474936);

function u(e) {
  let t = (0, o.ZP)(e),
    n = (0, i.e7)([l.default], () => s.ZP.canUseChatWallpapers(l.default.getUser(e))),
    u = n || (null == t ? void 0 : t.premiumType) === c.p9.TIER_2;
  return r.useEffect(() => {
    n || null != t || null == e || (0, a.Z)(e)
  }, [n, t, e]), u
}