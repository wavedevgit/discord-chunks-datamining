/** Chunk was on 39048 **/
/** chunk id: 870758, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk239705 = require("./239705.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk86181 = require("./86181.js");

function o(e) {
  let {
    action: t,
    triggerType: n,
    toggled: o,
    onToggleAction: c
  } = e, d = e => () => c(e), u = (0, l.x)(t.type, t, n);
  if (null == u) return null;
  let {
    headerText: g,
    descriptionText: m,
    icon: p
  } = u;
  return (0, r.jsxs)("div", {
    className: a.Ik,
    children: [(0, r.jsx)("div", {
      className: a.TV,
      children: (0, r.jsx)(p, {
        size: "custom",
        color: "currentColor",
        className: a.gE
      })
    }), (0, r.jsxs)("div", {
      className: a.xj,
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
        children: [s.intl.string(s.t.Oa9oWJ), (0, r.jsx)(i.DUT, {
          onClick: d(true),
          className: a._2,
          tag: "span",
          role: "link",
          children: s.intl.string(s.t.QupmYY)
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.DUT, {
        onClick: u.isEditable ? d(false) : true,
        children: (0, r.jsx)(i.P7L, {
          checked: o,
          disabled: !u.isEditable
        })
      })
    })]
  })
}