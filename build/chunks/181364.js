/** Chunk was on 76977 **/
"use strict";
n.d(t, {
  Z: () => f
});
var i = n(200651);
n(192379);
var r = n(13245),
  s = n(593481),
  o = n(371651),
  a = n(237997),
  l = n(145597),
  c = n(312839),
  d = n(987650),
  u = n(388032);
let h = () => ({
    icon: n(328756),
    title: u.NW.string(u.t.pkXAeH),
    body: null,
    hint: p,
    notifType: d.n0.WelcomeNudge
  }),
  p = e => (0, s.QR)(e, (0, c.P)(), u.t["z8/sgI"]);

function f(e) {
  let {
    type: t
  } = e, {
    icon: n,
    title: s,
    body: p,
    hint: f,
    notifType: g
  } = function(e, t) {
    if (t.type === d.nc.NEWS) {
      var n, i, r, s, o, a, l, c;
      return {
        icon: null !== (o = null === (n = t.news) || void 0 === n ? void 0 : n.icon) && void 0 !== o ? o : e.icon,
        title: null !== (a = null === (i = t.news) || void 0 === i ? void 0 : i.title) && void 0 !== a ? a : e.title,
        body: null !== (l = null === (r = t.news) || void 0 === r ? void 0 : r.body) && void 0 !== l ? l : e.body,
        hint: null !== (c = null === (s = t.news) || void 0 === s ? void 0 : s.hint) && void 0 !== c ? c : e.hint,
        notifType: null != t.news ? d.n0.NewsNudge : e.notifType
      }
    }
    return e
  }(h(), e), {
    trackView: m,
    trackClick: y
  } = (0, c.R)(g, {
    notif_type: g
  });
  return {
    icon: n,
    title: s,
    body: p,
    hint: f,
    renderFooter: () => (0, i.jsx)("div", {
      style: {
        textAlign: "center",
        padding: 2
      },
      children: u.NW.string(u.t["9MyuT0"])
    }),
    onNotificationShow: () => {
      m()
    },
    onNotificationClick: (e, n) => {
      y("unlock"), t === d.nc.NEWS && r.Z.updateNotificationStatus(n), o.default.isOverlayOOPEnabledForPid((0, l.getPID)()) ? r.Z.setInputLocked(!1, (0, l.getPID)()) : a.default.isInstanceLocked() && r.Z.setInstanceLocked(!1)
    },
    onDismissClick: () => {
      y("dismiss")
    }
  }
}