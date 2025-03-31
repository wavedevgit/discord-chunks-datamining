/** Chunk was on 86507 **/
n.d(t, {
  Z: () => y
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(904245),
  l = n(13245),
  a = n(45114),
  s = n(493773),
  c = n(655687),
  u = n(541716),
  d = n(752305),
  p = n(893718),
  h = n(957730),
  f = n(849522),
  m = n(145597),
  g = n(981631),
  v = n(880679);

function y(e) {
  let {
    id: t,
    replyToMessageId: n,
    channel: y,
    onSend: O
  } = e, b = (0, f.Z)(), {
    placeholder: _,
    accessibilityLabel: E
  } = (0, c.Z)({
    channel: y
  }), [x, I] = r.useState(() => (0, d.H2)()), {
    textValue: j,
    richValue: C
  } = x, [S, N] = r.useState(!1), Z = r.useCallback(() => N(!0), []), w = r.useCallback(() => N(!1), []);
  (0, s.ZP)(() => {
    (0, a.In)(y.id, !0, !0, n, {
      section: g.jXE.OVERLAY
    })
  });
  let P = r.useCallback((e, t, n) => {
      I({
        textValue: t,
        richValue: n
      })
    }, []),
    T = r.useCallback(e => {
      "Escape" === e.key && l.Z.updateNotificationStatus(t, g._1z.ACTIVE)
    }, [t]),
    k = r.useCallback(() => (j.length > b || (o.Z.sendMessage(y.id, h.ZP.parse(y, j), !1), l.Z.setInputLocked(!0, (0, m.getPID)()), l.Z.updateNotificationStatus(t, g._1z.DISMISSED), null == O || O(j)), Promise.resolve({
      shouldClear: !1,
      shouldRefocus: !0
    })), [j, b, y, t, O]);
  return (0, i.jsx)("div", {
    className: v.container,
    children: (0, i.jsx)(p.Z, {
      innerClassName: v.textArea,
      onChange: P,
      placeholder: _,
      accessibilityLabel: E,
      channel: y,
      textValue: j,
      richValue: C,
      type: u.Ie.OVERLAY_INLINE_REPLY,
      allowNewLines: !1,
      onBlur: w,
      onFocus: Z,
      focused: S,
      onSubmit: k,
      onKeyDown: T,
      autoCompletePosition: "bottom",
      disableThemedBackground: !0
    })
  })
}