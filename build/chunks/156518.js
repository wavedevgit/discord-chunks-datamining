/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Y: () => h,
  Z: () => m
});
var r = n(200651),
  i = n(192379),
  o = n(442837),
  a = n(481060),
  s = n(777658),
  l = n(44652),
  c = n(47091),
  u = n(699516),
  d = n(823379),
  f = n(785717),
  p = n(981631),
  _ = n(388032);

function h(e) {
  let {
    user: t,
    analyticsLocation: n
  } = e, r = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(t.id) === p.OGo.PENDING_OUTGOING), {
    trackUserProfileAction: a
  } = (0, f.KZ)(), _ = (0, s.Z)({
    user: t,
    location: n,
    onFriendRemove: () => a({
      action: "REMOVE_FRIEND"
    }),
    onFriendRequestSent: () => a({
      action: "SEND_FRIEND_REQUEST"
    })
  }), h = (0, l.Z)({
    user: t
  }), m = (0, c.Z)({
    user: t
  });
  return i.useMemo(() => [r ? null : _, h, m].filter(d.lm), [h, _, r, m])
}

function m(e) {
  let {
    menuItems: t,
    children: n
  } = e;
  return (0, r.jsx)(a.yRy, {
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(a.v2r, {
        navId: "user-profile-friend-request-buttons",
        onSelect: void 0,
        onClose: n,
        "aria-label": _.NW.string(_.t.Jszi3N),
        children: t
      })
    },
    children: e => n(e)
  })
}