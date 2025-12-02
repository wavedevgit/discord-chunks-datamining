/** Chunk was on 384 **/
/** chunk id: 683579, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk862085 = require("./862085.jsx"),
  Chunk769998 = require("./769998.jsx"),
  Chunk671066 = require("./671066.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk464992 = require("./464992.js");

function g(e) {
  let {
    action: t,
    triggerType: n,
    toggled: s,
    onToggleAction: o
  } = e, c = (0, a.c)(t.type, t, n);
  if (null == c) return null;
  let {
    headerText: d,
    descriptionText: g,
    icon: m
  } = c;
  return (0, r.jsxs)("div", {
    className: u.actionContainer,
    children: [(0, r.jsx)("div", {
      className: u.actionIconContainer,
      children: (0, r.jsx)(m, {
        size: "md",
        color: "currentColor",
        className: u.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: u.actionTextContainer,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: d
      }), (0, r.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: g
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.$q, {
        disabled: !c.isEditable,
        type: i.M0.INVERTED,
        value: s,
        onChange: () => o(false),
        className: u.__invalid_actionCheckbox
      })
    })]
  })
}

function m(e) {
  let {
    action: t,
    guildId: n,
    triggerType: i,
    toggled: l,
    onToggleAction: a
  } = e;
  switch (t.type) {
    case d.jj.FLAG_TO_CHANNEL:
      return (0, r.jsx)(c.Z, {
        action: t,
        triggerType: i,
        toggled: l,
        onToggleAction: a
      });
    case d.jj.USER_COMMUNICATION_DISABLED:
      return (0, r.jsx)(o.Z, {
        action: t,
        guildId: n,
        triggerType: i,
        toggled: l,
        onToggleAction: a
      });
    case d.jj.BLOCK_MESSAGE:
      return (0, r.jsx)(s.Z, {
        action: t,
        triggerType: i,
        toggled: l,
        onToggleAction: a
      });
    default:
      return (0, r.jsx)(g, {
        action: t,
        guildId: n,
        toggled: l,
        triggerType: i,
        onToggleAction: a
      })
  }
}