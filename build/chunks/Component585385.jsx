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
    modalState: l,
    shouldHideTemporaryInviteToggle: h,
    onGenerateNewLink: m,
    onToggleTemporary: v,
    onSelectMaxAge: p,
    onSelectMaxUses: x,
    isGuestInviteCreationToggleEnabled: I,
    onSetInviteFlags: S
  } = e, f = (0, a.ZP)(), {
    maxAgeOptions: E,
    maxAge: C,
    maxUses: y,
    temporary: _,
    flags: N
  } = l;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(r.xBx, {
      children: [(0, i.jsx)("div", {
        className: c.closeButton,
        children: (0, i.jsx)(r.olH, {
          onClick: t
        })
      }), (0, i.jsx)("div", {
        className: c.headerContainer,
        children: (0, i.jsx)(r.Heading, {
          id: n,
          variant: "heading-md/semibold",
          className: s()(g.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: u.intl.string(u.t.Atdlyu)
        })
      })]
    }), (0, i.jsx)(o.Z, {
      shouldHideTemporaryInviteToggle: h,
      maxAgeOptions: E,
      maxAge: C,
      maxUses: y,
      temporary: _,
      onToggleTemporary: v,
      onSelectMaxAge: p,
      onSelectMaxUses: x,
      onGenerateNewLink: m,
      isGuestInviteCreationToggleEnabled: I,
      onSetInviteFlags: S,
      inviteFlags: N
    }), (0, i.jsx)(r.mzw, {
      className: c.settingsFooter,
      children: (0, i.jsx)(d.Z, {
        theme: f,
        onConfirm: () => {
          m(), t()
        },
        onDismiss: t
      })
    })]
  })
}