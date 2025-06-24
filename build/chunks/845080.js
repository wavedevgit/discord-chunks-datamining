/** Chunk was on 26179 **/
a.d(t, {
  Z: () => s
});
var o = a(255367),
  n = a(73800),
  i = a(901461),
  r = a(464891);
let c = n.memo(r.ZP);

function s(e) {
  let {
    message: t,
    channel: a,
    author: n,
    compact: r,
    animateAvatar: s,
    guildId: l,
    isGroupStart: _ = !0,
    roleIcon: d,
    hideTimestamp: p,
    preview: m
  } = e;
  return !(0, i.Z)(t) && (_ || r) ? (0, o.jsx)(c, {
    message: t,
    channel: a,
    author: n,
    guildId: l,
    compact: r,
    animate: s,
    roleIcon: d,
    hideTimestamp: p,
    preview: m
  }) : void 0
}