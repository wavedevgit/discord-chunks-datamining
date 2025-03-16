/** Chunk was on 83346 **/
n.d(t, {
  Z: () => l
});
var i = n(200651),
  o = n(192379),
  a = n(901461),
  r = n(464891);
let s = o.memo(r.ZP);

function l(e) {
  let {
    message: t,
    channel: n,
    author: o,
    compact: r,
    animateAvatar: l,
    guildId: c,
    isGroupStart: u = !0,
    roleIcon: d,
    hideTimestamp: f
  } = e;
  return !(0, a.Z)(t) && (u || r) ? (0, i.jsx)(s, {
    message: t,
    channel: n,
    author: o,
    guildId: c,
    compact: r,
    animate: l,
    roleIcon: d,
    hideTimestamp: f
  }) : void 0
}