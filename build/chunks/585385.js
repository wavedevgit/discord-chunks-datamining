/** Chunk was on 7654 **/
n.d(t, {
  D: () => g
}), n(789020);
var l = n(200651);
n(192379);
var i = n(120356),
  r = n.n(i),
  s = n(481060),
  a = n(410030),
  o = n(948851),
  d = n(868728),
  u = n(388032),
  c = n(821022),
  h = n(20493);
let g = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: i,
    shouldHideTemporaryInviteToggle: g,
    onGenerateNewLink: m,
    onToggleTemporary: x,
    onSelectMaxAge: v,
    onSelectMaxUses: p,
    isGuestInviteCreationToggleEnabled: N,
    onSetInviteFlags: I
  } = e, f = (0, a.ZP)(), {
    maxAge: j,
    maxUses: S,
    temporary: E,
    flags: T
  } = i;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(s.xBx, {
      children: [(0, l.jsx)("div", {
        className: c.closeButton,
        children: (0, l.jsx)(s.olH, {
          onClick: t
        })
      }), (0, l.jsx)("div", {
        className: c.headerContainer,
        children: (0, l.jsx)(s.vwX, {
          id: n,
          tag: "h2",
          className: r()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: u.NW.string(u.t.Atdlys)
        })
      })]
    }), (0, l.jsx)(o.Z, {
      shouldHideTemporaryInviteToggle: g,
      maxAge: j,
      maxUses: S,
      temporary: E,
      onToggleTemporary: x,
      onSelectMaxAge: v,
      onSelectMaxUses: p,
      onGenerateNewLink: m,
      isGuestInviteCreationToggleEnabled: N,
      onSetInviteFlags: I,
      inviteFlags: T
    }), (0, l.jsx)(s.mzw, {
      className: c.settingsFooter,
      children: (0, l.jsx)(d.Z, {
        theme: f,
        onConfirm: () => {
          m(), t()
        },
        onDismiss: t
      })
    })]
  })
}