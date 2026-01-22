/** Chunk was on 43600 **/
/** chunk id: 663269, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => a
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk189213 = require("./189213.jsx"),
  Chunk167596 = require("./167596.jsx"),
  Chunk985018 = require("./985018.jsx");
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
    onClose: p,
    transitionState: v,
    isRoleAssignmentEnabled: A,
    assignableRoles: I,
    onToggleRole: m
  } = e, {
    maxAgeOptions: S,
    maxAge: x,
    maxUses: y,
    temporary: f,
    flags: E,
    roleIds: _
  } = n;
  return (0, l.jsx)(i.Modal, {
    transitionState: v,
    onClose: p,
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
    children: (0, l.jsx)(s.A, {
      shouldHideTemporaryInviteToggle: a,
      maxAgeOptions: S,
      maxAge: x,
      maxUses: y,
      temporary: f,
      onToggleTemporary: u,
      onSelectMaxAge: d,
      onSelectMaxUses: c,
      isGuestInviteCreationToggleEnabled: g,
      onSetInviteFlags: h,
      inviteFlags: E,
      isRoleAssignmentEnabled: A,
      assignableRoles: I,
      selectedRoleIds: _,
      onToggleRole: m
    })
  })
}