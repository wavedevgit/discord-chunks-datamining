/** Chunk was on 384 **/
/** chunk id: 862085, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk464992 = require("./464992.js");

function o(e) {
  let {
    action: t,
    triggerType: n,
    toggled: o,
    onToggleAction: c
  } = e, u = e => () => c(e), d = (0, l.c)(t.type, t, n);
  if (null == d) return null;
  let {
    headerText: g,
    descriptionText: m,
    icon: p
  } = d;
  return (0, r.jsxs)("div", {
    className: a.actionContainer,
    children: [(0, r.jsx)("div", {
      className: a.actionIconContainer,
      children: (0, r.jsx)(p, {
        size: "custom",
        color: "currentColor",
        className: a.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: a.actionTextContainer,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        children: g
      }), (0, r.jsx)(i.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: m
      }), o ? (0, r.jsxs)(i.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [s.intl.string(s.t.Oa9oWJ), (0, r.jsx)(i.P3F, {
          onClick: u(true),
          className: a.editChannel,
          tag: "span",
          role: "link",
          children: s.intl.string(s.t.QupmYY)
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.P3F, {
        onClick: d.isEditable ? u(false) : true,
        children: (0, r.jsx)(i.FZ5, {
          checked: o,
          disabled: !d.isEditable
        })
      })
    })]
  })
}