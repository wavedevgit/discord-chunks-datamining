/** Chunk was on 72593 **/
n.d(t, {
  Z: () => y
});
var r = n(200651),
  i = n(192379),
  l = n(704215),
  o = n(481060),
  a = n(475179),
  s = n(561472),
  c = n(287746),
  u = n(325708),
  d = n(541716),
  p = n(605236),
  h = n(665149),
  f = n(703558),
  m = n(585483),
  g = n(909820),
  b = n(981631),
  _ = n(921944),
  C = n(388032),
  v = n(187298);
let y = function(e) {
  let {
    channel: t,
    guild: n,
    maxWidth: y
  } = e;
  i.useEffect(() => {
    (0, p.EW)(l.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
      dismissAction: _.L.AUTO
    })
  }, []);
  let x = i.useCallback(() => {
      a.Z.updateChatOpen(t.id, !1), m.S.safeDispatch(b.CkL.FOCUS_CHAT_BUTTON)
    }, [t.id]),
    j = (0, r.jsx)(h.ZP.Icon, {
      icon: o.Dio,
      tooltip: C.NW.string(C.t.cpT0Cg),
      onClick: x
    });
  return (0, r.jsxs)(u.Z, {
    sidebarType: u.y.CallChatSidebar,
    maxWidth: y,
    floatingLayer: g.ZP,
    children: [(0, r.jsx)(s.Z, {
      channel: t,
      draftType: f.d.ChannelMessage
    }), (0, r.jsxs)(h.ZP, {
      toolbar: j,
      "aria-label": C.NW.string(C.t.BIYAqa),
      children: [(0, r.jsx)(h.ZP.Icon, {
        icon: o.kBi,
        disabled: !0,
        "aria-label": C.NW.string(C.t.Kx5kCA)
      }), (0, r.jsx)(h.ZP.Title, {
        children: t.name
      })]
    }), (0, r.jsx)("div", {
      className: v.chat,
      children: (0, r.jsx)(c.Z, {
        channel: t,
        guild: n,
        chatInputType: d.Ie.SIDEBAR
      }, t.id)
    })]
  })
}