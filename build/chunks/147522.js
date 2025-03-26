/** Chunk was on 52272 **/
n.d(t, {
  Z: () => d
}), n(13667), n(390547), n(653041);
var r = n(200651);
n(192379);
var i = n(392711),
  o = n.n(i),
  a = n(661824),
  l = n(289481),
  s = n(809780),
  c = n(388032),
  u = n(735058);

function d(e, t, n) {
  let {
    markChannelRead: i,
    markGuildRead: d,
    deleteChannel: p,
    toggle: m,
    getNumUnreadChannels: f
  } = t, h = null;
  return o().flatMap(e, e => {
    let t = e.sortOrder !== h;
    h = e.sortOrder;
    let o = [];
    return t && (e.hasLoadedAnything && e.sortOrder === s.As.ReallyOldChannel ? o.push((0, r.jsx)(a.Z, {
      className: u.divider,
      contentClassName: u.dividerContent,
      children: c.NW.string(c.t.roBMzs)
    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === s.As.NoNotifications && o.push((0, r.jsx)(a.Z, {
      className: u.divider,
      contentClassName: u.dividerContent,
      children: c.NW.string(c.t["2Ys7np"])
    }, "disabled-divider"))), o.push((0, r.jsx)(l.Z, {
      channel: e,
      markChannelRead: i,
      markGuildRead: d,
      toggle: m,
      deleteChannel: p,
      onJump: n,
      getNumUnreadChannels: f
    }, e.channelId)), o
  })
}