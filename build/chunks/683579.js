/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(556012),
  a = n(862085),
  l = n(769998),
  o = n(671066),
  A = n(273504),
  c = n(15470);

function d(e) {
  let {
    action: t,
    triggerType: n,
    toggled: a,
    onToggleAction: l
  } = e, o = (0, s.c)(t.type, t, n);
  if (null == o) return null;
  let {
    headerText: A,
    descriptionText: d,
    icon: u
  } = o;
  return (0, r.jsxs)("div", {
    className: c.actionContainer,
    children: [(0, r.jsx)("div", {
      className: c.actionIconContainer,
      children: (0, r.jsx)(u, {
        size: "md",
        color: "currentColor",
        className: c.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: c.actionTextContainer,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-sm/semibold",
        children: A
      }), (0, r.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: d
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.XZJ, {
        disabled: !o.isEditable,
        type: i.XZJ.Types.INVERTED,
        value: a,
        onChange: () => l(!1),
        className: c.__invalid_actionCheckbox
      })
    })]
  })
}

function u(e) {
  let {
    action: t,
    guildId: n,
    triggerType: i,
    toggled: s,
    onToggleAction: c
  } = e;
  switch (t.type) {
    case A.jj.FLAG_TO_CHANNEL:
      return (0, r.jsx)(o.Z, {
        action: t,
        triggerType: i,
        toggled: s,
        onToggleAction: c
      });
    case A.jj.USER_COMMUNICATION_DISABLED:
      return (0, r.jsx)(l.Z, {
        action: t,
        guildId: n,
        triggerType: i,
        toggled: s,
        onToggleAction: c
      });
    case A.jj.BLOCK_MESSAGE:
      return (0, r.jsx)(a.Z, {
        action: t,
        triggerType: i,
        toggled: s,
        onToggleAction: c
      });
    default:
      return (0, r.jsx)(d, {
        action: t,
        guildId: n,
        toggled: s,
        triggerType: i,
        onToggleAction: c
      })
  }
}