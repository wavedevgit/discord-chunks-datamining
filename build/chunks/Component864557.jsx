/** Chunk was on 47841 **/
/** chunk id: 864557, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk239705 = require("./239705.js"),
  Chunk870758 = require("./870758.jsx"),
  Chunk741207 = require("./741207.jsx"),
  Chunk437242 = require("./437242.jsx"),
  Chunk411335 = require("./411335.js"),
  Chunk86181 = require("./86181.js");

function u(e) {
  let {
    action: t,
    triggerType: n,
    toggled: s,
    onToggleAction: a
  } = e, c = (0, l.x)(t.type, t, n);
  if (null == c) return null;
  let {
    headerText: o,
    descriptionText: u,
    icon: f
  } = c;
  return (0, r.jsxs)("div", {
    className: d.Ik,
    children: [(0, r.jsx)("div", {
      className: d.TV,
      children: (0, r.jsx)(f, {
        size: "md",
        color: "currentColor",
        className: d.gE
      })
    }), (0, r.jsxs)("div", {
      className: d.xj,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        children: o
      }), (0, r.jsx)(i.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: u
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.DUT, {
        onClick: c.isEditable ? () => a(false) : true,
        children: (0, r.jsx)(i.P7L, {
          checked: s,
          disabled: !c.isEditable
        })
      })
    })]
  })
}

function f(e) {
  let {
    action: t,
    guildId: n,
    triggerType: i,
    toggled: l,
    onToggleAction: d
  } = e;
  switch (t.type) {
    case o.AH.FLAG_TO_CHANNEL:
      return (0, r.jsx)(c.A, {
        action: t,
        triggerType: i,
        toggled: l,
        onToggleAction: d
      });
    case o.AH.USER_COMMUNICATION_DISABLED:
      return (0, r.jsx)(a.A, {
        action: t,
        guildId: n,
        triggerType: i,
        toggled: l,
        onToggleAction: d
      });
    case o.AH.BLOCK_MESSAGE:
      return (0, r.jsx)(s.A, {
        action: t,
        triggerType: i,
        toggled: l,
        onToggleAction: d
      });
    default:
      return (0, r.jsx)(u, {
        action: t,
        guildId: n,
        toggled: l,
        triggerType: i,
        onToggleAction: d
      })
  }
}