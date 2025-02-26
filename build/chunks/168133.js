/** Chunk was on 94706 **/
i.d(e, {
  default: () => l
});
var a = i(200651),
  n = i(192379),
  c = i(442837),
  o = i(481060),
  u = i(239091),
  s = i(13245),
  r = i(237997),
  d = i(981631),
  f = i(388032);

function l(t) {
  let {
    onSelect: e,
    onClose: i
  } = t, {
    textChatNotificationMode: l
  } = (0, c.cj)([r.default], () => ({
    textChatNotificationMode: r.default.getTextChatNotificationMode()
  })), h = n.useRef(i);
  return n.useEffect(() => {
    h.current = i
  }), n.useEffect(() => () => h.current(), []), (0, a.jsx)(o.v2r, {
    navId: "overlay-notifications-widget-context-menu",
    onClose: u.Zy,
    "aria-label": f.NW.string(f.t.tPfVWl),
    onSelect: e,
    children: (0, a.jsx)(o.S89, {
      label: f.NW.string(f.t.Fy5kPj),
      checked: l === d.Ypu.ENABLED,
      id: "overlay-text-chat-notifications",
      action: () => s.Z.setTextChatNotificationMode(l === d.Ypu.ENABLED ? d.Ypu.DISABLED : d.Ypu.ENABLED)
    })
  })
}