/** Chunk was on 33463 **/
i.d(t, {
  Z: () => s
});
var n = i(200651),
  o = i(192379),
  a = i(901461),
  r = i(464891);
let l = o.memo(r.ZP);

function s(e) {
  let {
    message: t,
    channel: i,
    author: o,
    compact: r,
    animateAvatar: s,
    guildId: c,
    isGroupStart: u = !0,
    roleIcon: d,
    hideTimestamp: f,
    preview: m
  } = e;
  return !(0, a.Z)(t) && (u || r) ? (0, n.jsx)(l, {
    message: t,
    channel: i,
    author: o,
    guildId: c,
    compact: r,
    animate: s,
    roleIcon: d,
    hideTimestamp: f,
    preview: m
  }) : void 0
}