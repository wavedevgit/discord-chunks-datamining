/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(556012),
  a = n(388032),
  l = n(15470);

function o(e) {
  let {
    action: t,
    triggerType: n,
    toggled: o,
    onToggleAction: c
  } = e, A = e => () => c(e), d = (0, s.c)(t.type, t, n);
  if (null == d) return null;
  let {
    headerText: u,
    descriptionText: g,
    icon: f
  } = d;
  return (0, r.jsxs)("div", {
    className: l.actionContainer,
    children: [(0, r.jsx)("div", {
      className: l.actionIconContainer,
      children: (0, r.jsx)(f, {
        size: "custom",
        color: "currentColor",
        className: l.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: l.actionTextContainer,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-sm/semibold",
        children: u
      }), (0, r.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: g
      }), o ? (0, r.jsxs)(i.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [a.NW.string(a.t.Oa9oWF), (0, r.jsx)(i.P3F, {
          onClick: A(!0),
          className: l.editChannel,
          tag: "span",
          role: "link",
          children: a.NW.string(a.t.QupmYW)
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.XZJ, {
        type: i.XZJ.Types.INVERTED,
        value: o,
        onChange: A(!1),
        className: l.__invalid_actionCheckbox
      })
    })]
  })
}