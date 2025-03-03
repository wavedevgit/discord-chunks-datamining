/** Chunk was on 50751 **/
n.d(t, {
  Z: () => s
});
var i = n(768581),
  r = n(620954),
  o = n(987650),
  l = n(981631),
  a = n(388032);

function s(e, t) {
  let n = e.username,
    s = a.NW.format(a.t["Yk+uYG"], {
      username: ""
    }),
    u = (0, i.ov)(e),
    c = a.NW.string(a.t.WRj1Wl),
    {
      trackView: d,
      trackClick: p
    } = (0, r.R)(o.n0.ActivityUserJoin, {
      notif_type: o.n0.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: l.mFx.JOIN,
      activity_name: t.name
    });
  return {
    icon: u,
    title: n,
    body: s,
    hint: c,
    onNotificationShow: () => {
      d()
    },
    onDismissClick: () => {
      p("dismiss")
    }
  }
}