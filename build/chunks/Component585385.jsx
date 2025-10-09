/** Chunk was on 7654 **/
/** chunk id: 585385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => h
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk948851 = require("./948851.jsx"),
  Chunk868728 = require("./868728.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451964 = require("./451964.js"),
  Chunk197571 = require("./197571.js");
let h = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: i,
    shouldHideTemporaryInviteToggle: h,
    onGenerateNewLink: m,
    onToggleTemporary: p,
    onSelectMaxAge: v,
    onSelectMaxUses: I,
    isGuestInviteCreationToggleEnabled: x,
    onSetInviteFlags: f
  } = e, N = (0, a.ZP)(), {
    maxAgeOptions: S,
    maxAge: _,
    maxUses: b,
    temporary: j,
    flags: E
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
        children: (0, l.jsx)(r.X6q, {
          id: n,
          variant: "heading-md/semibold",
          className: s()(g.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: u.intl.string(u.t.Atdlys)
        })
      })]
    }), (0, l.jsx)(o.Z, {
      shouldHideTemporaryInviteToggle: h,
      maxAgeOptions: S,
      maxAge: _,
      maxUses: b,
      temporary: j,
      onToggleTemporary: p,
      onSelectMaxAge: v,
      onSelectMaxUses: I,
      onGenerateNewLink: m,
      isGuestInviteCreationToggleEnabled: x,
      onSetInviteFlags: f,
      inviteFlags: E
    }), (0, l.jsx)(r.mzw, {
      className: c.settingsFooter,
      children: (0, l.jsx)(d.Z, {
        theme: N,
        onConfirm: () => {
          m(), t()
        },
        onDismiss: t
      })
    })]
  })
}