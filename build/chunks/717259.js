/** Chunk was on 99014 **/
n.d(t, {
  Z: () => l
});
var r = n(442837),
  o = n(430824),
  i = n(535396);

function l(e, t) {
  let n = (0, r.e7)([o.Z], () => o.Z.getGuild(e));
  if (null == t || null == n) return !1;
  let l = i.Rx[t.skuId];
  return null != l && n.premiumTier >= l
}