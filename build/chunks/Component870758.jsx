/** Chunk was on 47841 **/
/** chunk id: 870758, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk239705 = require("./239705.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk86181 = require("./86181.js");

function c(e) {
  let {
    action: t,
    triggerType: n,
    toggled: c,
    onToggleAction: o
  } = e, d = e => () => o(e), u = (0, l.x)(t.type, t, n);
  if (null == u) return null;
  let {
    headerText: f,
    descriptionText: g,
    icon: b
  } = u;
  return (0, r.jsxs)("div", {
    className: a.Ik,
    children: [(0, r.jsx)("div", {
      className: a.TV,
      children: (0, r.jsx)(b, {
        size: "custom",
        color: "currentColor",
        className: a.gE
      })
    }), (0, r.jsxs)("div", {
      className: a.xj,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        children: f
      }), (0, r.jsx)(i.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: g
      }), c ? (0, r.jsxs)(i.Text, {
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
          checked: c,
          disabled: !u.isEditable
        })
      })
    })]
  })
}