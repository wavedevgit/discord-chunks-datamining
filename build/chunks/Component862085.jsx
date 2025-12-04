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
  } = e, d = e => () => c(e), u = (0, l.c)(t.type, t, n);
  if (null == u) return null;
  let {
    headerText: g,
    descriptionText: m,
    icon: p
  } = u;
  return (0, r.jsxs)("div", {
    className: s.actionContainer,
    children: [(0, r.jsx)("div", {
      className: s.actionIconContainer,
      children: (0, r.jsx)(p, {
        size: "custom",
        color: "currentColor",
        className: s.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: s.actionTextContainer,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        children: g
      }), (0, r.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: m
      }), o ? (0, r.jsxs)(i.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [a.intl.string(a.t.Oa9oWJ), (0, r.jsx)(i.P3F, {
          onClick: d(true),
          className: s.editChannel,
          tag: "span",
          role: "link",
          children: a.intl.string(a.t.QupmYY)
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.P3F, {
        onClick: u.isEditable ? d(false) : true,
        children: (0, r.jsx)(i.FZ5, {
          checked: o,
          disabled: !u.isEditable
        })
      })
    })]
  })
}