/** Chunk was on 7654 **/
/** chunk id: 585385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => h
}), require("./997841.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk948851 = require("./948851.jsx"),
  Chunk868728 = require("./868728.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk869306 = require("./869306.js"),
  Chunk10198 = require("./10198.js");
let h = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: i,
    shouldHideTemporaryInviteToggle: h,
    onGenerateNewLink: m,
    onToggleTemporary: p,
    onSelectMaxAge: v,
    onSelectMaxUses: x,
    isGuestInviteCreationToggleEnabled: I,
    onSetInviteFlags: f
  } = e, j = (0, s.ZP)(), {
    maxAgeOptions: N,
    maxAge: _,
    maxUses: E,
    temporary: S,
    flags: b
  } = i;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(a.xBx, {
      children: [(0, l.jsx)("div", {
        className: c.closeButton,
        children: (0, l.jsx)(a.olH, {
          onClick: t
        })
      }), (0, l.jsx)("div", {
        className: c.headerContainer,
        children: (0, l.jsx)(a.vwX, {
          id: n,
          tag: "h2",
          className: r()(g.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: d.intl.string(d.t.Atdlys)
        })
      })]
    }), (0, l.jsx)(o.Z, {
      shouldHideTemporaryInviteToggle: h,
      maxAgeOptions: N,
      maxAge: _,
      maxUses: E,
      temporary: S,
      onToggleTemporary: p,
      onSelectMaxAge: v,
      onSelectMaxUses: x,
      onGenerateNewLink: m,
      isGuestInviteCreationToggleEnabled: I,
      onSetInviteFlags: f,
      inviteFlags: b
    }), (0, l.jsx)(a.mzw, {
      className: c.settingsFooter,
      children: (0, l.jsx)(u.Z, {
        theme: j,
        onConfirm: () => {
          m(), t()
        },
        onDismiss: t
      })
    })]
  })
}