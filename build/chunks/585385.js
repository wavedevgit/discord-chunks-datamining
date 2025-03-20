/** Chunk was on 7654 **/
n.d(t, {
  D: () => g
}), n(789020);
var l = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  r = n(481060),
  a = n(410030),
  o = n(948851),
  d = n(868728),
  u = n(388032),
  c = n(724897),
  h = n(802138);
let g = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: i,
    shouldHideTemporaryInviteToggle: g,
    onGenerateNewLink: v,
    onToggleTemporary: x,
    onSelectMaxAge: m,
    onSelectMaxUses: p,
    isGuestInviteCreationToggleEnabled: N,
    onSetInviteFlags: I
  } = e, S = (0, a.ZP)(), {
    maxAge: j,
    maxUses: f,
    temporary: E,
    flags: C
  } = i;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(r.xBx, {
      children: [(0, l.jsx)("div", {
        className: c.closeButton,
        children: (0, l.jsx)(r.olH, {
          onClick: t
        })
      }), (0, l.jsx)("div", {
        className: c.headerContainer,
        children: (0, l.jsx)(r.vwX, {
          id: n,
          tag: "h2",
          className: s()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: u.NW.string(u.t.Atdlys)
        })
      })]
    }), (0, l.jsx)(o.Z, {
      shouldHideTemporaryInviteToggle: g,
      maxAge: j,
      maxUses: f,
      temporary: E,
      onToggleTemporary: x,
      onSelectMaxAge: m,
      onSelectMaxUses: p,
      onGenerateNewLink: v,
      isGuestInviteCreationToggleEnabled: N,
      onSetInviteFlags: I,
      inviteFlags: C
    }), (0, l.jsx)(r.mzw, {
      className: c.settingsFooter,
      children: (0, l.jsx)(d.Z, {
        theme: S,
        onConfirm: () => {
          v(), t()
        },
        onDismiss: t
      })
    })]
  })
}