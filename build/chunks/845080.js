/** Chunk was on 60432 **/
n.d(t, {
  Z: () => s
});
var r = n(255367),
  a = n(73800),
  i = n(901461),
  o = n(464891);
let c = a.memo(o.ZP);

function s(e) {
  let {
    message: t,
    channel: n,
    author: a,
    compact: o,
    animateAvatar: s,
    guildId: l,
    isGroupStart: u = !0,
    roleIcon: d,
    hideTimestamp: p,
    hideGuildTag: m,
    preview: _
  } = e;
  return !(0, i.Z)(t) && (u || o) ? (0, r.jsx)(c, {
    message: t,
    channel: n,
    author: a,
    guildId: l,
    compact: o,
    animate: s,
    roleIcon: d,
    hideTimestamp: p,
    hideGuildTag: m,
    preview: _
  }) : void 0
}