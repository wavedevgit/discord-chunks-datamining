/** Chunk was on 78650 **/
n.d(t, {
  Z: () => h
});
var i = n(255367);
n(73800);
var r = n(442837),
  l = n(481060),
  a = n(240872),
  o = n(456269),
  s = n(346479),
  d = n(665906),
  u = n(592125),
  c = n(176505),
  f = n(388032);

function h(e) {
  let t = (0, r.e7)([u.Z], () => u.Z.getChannel(e.parent_id)),
    n = (0, d.Xb)(e),
    h = (0, o.kF)(e);
  return (null == t ? void 0 : t.isForumLikeChannel()) && n ? e.hasFlag(c.zZ.PINNED) ? (0, i.jsx)(l.sNh, {
    id: "unpin-thread",
    label: f.intl.string(f.t.trD8am),
    action: () => s.Z.unpin(e)
  }) : (0, i.jsx)(l.sNh, {
    id: "pin-thread",
    label: f.intl.string(f.t.EnaWho),
    action: function() {
      null != h ? a.Z.show({
        title: f.intl.string(f.t.IMbjxs),
        body: f.intl.string(f.t["mi5+Vl"]),
        onConfirm: async () => {
          await s.Z.unpin(h), s.Z.pin(e)
        }
      }) : s.Z.pin(e)
    }
  }) : null
}