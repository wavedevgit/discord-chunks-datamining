/** Chunk was on 7654 **/
/** chunk id: 585385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => g
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
let g = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: l,
    shouldHideTemporaryInviteToggle: g,
    onGenerateNewLink: m,
    onToggleTemporary: p,
    onSelectMaxAge: v,
    onSelectMaxUses: x,
    isGuestInviteCreationToggleEnabled: I,
    onSetInviteFlags: S
  } = e, y = (0, r.ZP)(), {
    maxAgeOptions: j,
    maxAge: C,
    maxUses: N,
    temporary: f,
    flags: E
  } = l;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(a.xBx, {
      children: [(0, i.jsx)("div", {
        className: c.closeButton,
        children: (0, i.jsx)(a.olH, {
          onClick: t
        })
      }), (0, i.jsx)("div", {
        className: c.headerContainer,
        children: (0, i.jsx)(a.Heading, {
          id: n,
          variant: "heading-md/semibold",
          className: s()(h.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: u.intl.string(u.t.Atdlys)
        })
      })]
    }), (0, i.jsx)(o.Z, {
      shouldHideTemporaryInviteToggle: g,
      maxAgeOptions: j,
      maxAge: C,
      maxUses: N,
      temporary: f,
      onToggleTemporary: p,
      onSelectMaxAge: v,
      onSelectMaxUses: x,
      onGenerateNewLink: m,
      isGuestInviteCreationToggleEnabled: I,
      onSetInviteFlags: S,
      inviteFlags: E
    }), (0, i.jsx)(a.mzw, {
      className: c.settingsFooter,
      children: (0, i.jsx)(d.Z, {
        theme: y,
        onConfirm: () => {
          m(), t()
        },
        onDismiss: t
      })
    })]
  })
}