/** Chunk was on 71567 (60ad2434a2d9f37a.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(556012),
  a = n(388032),
  l = n(644378);

function o(e) {
  let {
    action: t,
    triggerType: n,
    toggled: o,
    onToggleAction: c
  } = e, d = e => () => c(e), u = (0, s.c)(t.type, t, n);
  if (null == u) return null;
  let {
    headerText: m,
    descriptionText: p,
    icon: g
  } = u;
  return (0, r.jsxs)("div", {
    className: l.actionContainer,
    children: [(0, r.jsx)("div", {
      className: l.actionIconContainer,
      children: (0, r.jsx)(g, {
        size: "custom",
        color: "currentColor",
        className: l.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: l.actionTextContainer,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-sm/semibold",
        children: m
      }), (0, r.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: p
      }), o ? (0, r.jsxs)(i.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [a.NW.string(a.t.Oa9oWF), (0, r.jsx)(i.P3F, {
          onClick: d(!0),
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
        onChange: d(!1),
        className: l.__invalid_actionCheckbox
      })
    })]
  })
}