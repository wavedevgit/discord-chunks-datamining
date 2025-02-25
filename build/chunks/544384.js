/** Chunk was on web.js **/
"use strict";
n.d(t, {
  E: () => m,
  Z: () => E
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  a = n(410575),
  s = n(358221),
  l = n(682901),
  c = n(418469),
  u = n(786138),
  d = n(803647),
  f = n(199902),
  _ = n(594174),
  p = n(5192),
  h = n(981631),
  g = n(388032);

function m(e, t, n) {
  let r = (0, i.e7)([s.Z], () => null != e ? s.Z.getSelectedParticipantId(e.id) : null),
    o = (0, i.e7)([f.Z], () => null != r ? f.Z.getActiveStreamForStreamKey(r) : null, [r]);
  return (0, i.Wu)([_.default], () => {
    if (null == e) return [];
    let r = n.filter(e => e.ownerId !== (null == t ? void 0 : t.id)).map(t => ({
      stream: t,
      username: p.ZP.getName(e.getGuildId(), e.id, _.default.getUser(t.ownerId))
    }));
    return 1 === r.length && r[0].stream.ownerId === (null == o ? void 0 : o.ownerId) ? [] : r
  }, [e, o, n, t])
}

function E(e) {
  var t;
  let {
    channel: n,
    currentUser: i,
    activeStreams: s,
    hideSelfOptions: f = !1,
    showReportOption: _ = !1,
    handleGoLive: p,
    onClose: E,
    onSelect: v,
    appContext: b = h.IlC.APP,
    disableChangeWindows: y = !1,
    onInteraction: O
  } = e, S = null !== (t = s.find(e => e.ownerId === (null == i ? void 0 : i.id))) && void 0 !== t ? t : null, I = m(n, i, s), T = (0, c.Z)(S, b), {
    enabled: N
  } = (0, l.Z)({
    location: "ManageStreamsMenu"
  }), A = (0, u.b)({
    disableChangeWindows: y,
    stream: S,
    showReportOption: _,
    handleGoLive: p,
    simplified: N,
    appContext: b
  });
  return (0, r.jsx)(a.Z, {
    section: h.jXE.CONTEXT_MENU,
    children: (0, r.jsxs)(o.v2r, {
      onSelect: v,
      navId: "manage-streams",
      onClose: E,
      onInteraction: O,
      "aria-label": null != S ? g.NW.string(g.t.S5anIS) : g.NW.string(g.t.fjBNo6),
      children: [(0, r.jsx)(o.kSQ, {
        children: I.map(e => {
          let {
            stream: t,
            username: n
          } = e;
          return (0, r.jsx)(o.sNh, {
            id: t.ownerId,
            label: g.NW.formatToPlainString(g.t["7rkg+/"], {
              username: n
            }),
            icon: o.g5r,
            action: () => (0, d.Z)(t)
          }, "manage-stream-menu".concat(t.ownerId))
        })
      }), f ? null : A, N && !f ? (0, r.jsx)(o.kSQ, {
        children: (0, r.jsx)(o.sNh, {
          id: "more-options",
          label: g.NW.string(g.t.PdRCRk),
          children: T
        })
      }) : null]
    })
  })
}