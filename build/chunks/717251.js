/** Chunk was on 71567 (60ad2434a2d9f37a.js) **/
"use strict";
n.d(t, {
  Z: () => c
}), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(2150),
  o = n(397357);

function c(e) {
  let {
    title: t,
    description: n,
    action: i,
    highlightColor: c = l.q.NONE,
    selected: d = !1,
    subsection: u = null,
    onClick: m,
    className: p,
    disabled: g
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(o.container, p),
    children: [(0, r.jsx)(a.P3F, {
      className: s()(o.clickableContainer, {
        [o.noAction]: null == m,
        [o.disabled]: g
      }, p),
      onClick: g ? void 0 : m,
      children: (0, r.jsxs)("div", {
        className: s()(o.backgroundModifierContainer, o[c], {
          [o.selected]: d,
          [o.disabled]: g,
          [o.noAction]: null == m
        }),
        children: [(0, r.jsxs)("div", {
          className: o.settingsDescriptionContainer,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "interactive-active",
            children: t
          }), (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "interactive-normal",
            className: o.description,
            children: n
          })]
        }), (0, r.jsx)("div", {
          className: o.__invalid_action,
          children: i
        })]
      })
    }), null != u && (0, r.jsx)("div", {
      className: o.subsectionContainer,
      children: u
    })]
  })
}