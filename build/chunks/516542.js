/** Chunk was on 50751 **/
n.d(t, {
  Z: () => g
}), n(47120);
var i = n(200651),
  r = n(192379),
  o = n(904245),
  l = n(13245),
  a = n(655687),
  s = n(541716),
  u = n(752305),
  c = n(893718),
  d = n(957730),
  p = n(849522),
  h = n(145597),
  f = n(981631),
  m = n(880679);

function g(e) {
  let {
    id: t,
    channel: n,
    onSend: g
  } = e, O = (0, p.Z)(), {
    placeholder: y,
    accessibilityLabel: v
  } = (0, a.Z)({
    channel: n
  }), [E, b] = r.useState(() => (0, u.H2)()), {
    textValue: j,
    richValue: x
  } = E, [S, I] = r.useState(!1), C = r.useCallback(() => I(!0), []), N = r.useCallback(() => I(!1), []), Z = r.useCallback((e, t, n) => {
    b({
      textValue: t,
      richValue: n
    })
  }, []), w = r.useCallback(e => {
    "Escape" === e.key && l.Z.updateNotificationStatus(t, f._1z.ACTIVE)
  }, [t]), P = r.useCallback(() => (j.length > O || (o.Z.sendMessage(n.id, d.ZP.parse(n, j), !1), l.Z.setInputLocked(!0, (0, h.getPID)()), l.Z.updateNotificationStatus(t, f._1z.DISMISSED), null == g || g(j)), Promise.resolve({
    shouldClear: !1,
    shouldRefocus: !0
  })), [j, O, n, t, g]);
  return (0, i.jsx)("div", {
    children: (0, i.jsx)(c.Z, {
      innerClassName: m.textArea,
      onChange: Z,
      placeholder: y,
      accessibilityLabel: v,
      channel: n,
      textValue: j,
      richValue: x,
      type: s.Ie.OVERLAY_INLINE_REPLY,
      allowNewLines: !1,
      onBlur: N,
      onFocus: C,
      focused: S,
      onSubmit: P,
      onKeyDown: w,
      autoCompletePosition: "bottom",
      disableThemedBackground: !0
    })
  })
}