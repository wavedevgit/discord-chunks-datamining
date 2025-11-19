/** Chunk was on 7654 **/
/** chunk id: 585385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => a
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk775086 = require("./775086.jsx"),
  Chunk948851 = require("./948851.jsx"),
  Chunk388032 = require("./388032.jsx");
let a = e => {
  let {
    handleDone: t,
    modalState: n,
    shouldHideTemporaryInviteToggle: a,
    onGenerateNewLink: o,
    onToggleTemporary: u,
    onSelectMaxAge: d,
    onSelectMaxUses: c,
    isGuestInviteCreationToggleEnabled: g,
    onSetInviteFlags: h,
    onClose: v,
    transitionState: p
  } = e, {
    maxAgeOptions: I,
    maxAge: m,
    maxUses: x,
    temporary: S,
    flags: f
  } = n;
  return (0, i.jsx)(l.Modal, {
    transitionState: p,
    onClose: v,
    title: r.intl.string(r.t.Atdlyu),
    actions: [{
      variant: "secondary",
      text: r.intl.string(r.t["ETE/oC"]),
      onClick: t
    }, {
      variant: "primary",
      text: r.intl.string(r.t.pz1lRG),
      onClick: () => {
        o(), t()
      }
    }],
    children: (0, i.jsx)(s.Z, {
      shouldHideTemporaryInviteToggle: a,
      maxAgeOptions: I,
      maxAge: m,
      maxUses: x,
      temporary: S,
      onToggleTemporary: u,
      onSelectMaxAge: d,
      onSelectMaxUses: c,
      onGenerateNewLink: o,
      isGuestInviteCreationToggleEnabled: g,
      onSetInviteFlags: h,
      inviteFlags: f
    })
  })
}