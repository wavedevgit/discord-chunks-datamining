/** Chunk was on 45585 (b90461f187d1c1d2.js) **/
n.d(t, {
  Z: () => c
});
var i = n(593481),
  r = n(768581),
  s = n(312839),
  o = n(981631),
  l = n(987650),
  a = n(388032);

function c(e, t) {
  let n = e.username,
    c = a.NW.format(a.t["Yk+uYG"], {
      username: ""
    }),
    d = (0, r.ov)(e),
    {
      trackView: u,
      trackClick: h
    } = (0, s.R)(l.n0.ActivityUserJoin, {
      notif_type: l.n0.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: o.mFx.JOIN,
      activity_name: t.name
    });
  return {
    icon: d,
    title: n,
    body: c,
    hint: e => (0, i.Yj)(e, a.NW.string(a.t.WRj1Wl)),
    onNotificationShow: () => {
      u()
    },
    onDismissClick: () => {
      h("dismiss")
    }
  }
}