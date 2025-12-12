/** Chunk was on 384 **/
/** chunk id: 683579, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk862085 = require("./862085.jsx"),
  Chunk769998 = require("./769998.jsx"),
  Chunk671066 = require("./671066.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk464992 = require("./464992.js");

function d(e) {
  let {
    action: t,
    triggerType: n,
    toggled: s,
    onToggleAction: a
  } = e, o = (0, l.c)(t.type, t, n);
  if (null == o) return null;
  let {
    headerText: c,
    descriptionText: d,
    icon: g
  } = o;
  return (0, r.jsxs)("div", {
    className: u.actionContainer,
    children: [(0, r.jsx)("div", {
      className: u.actionIconContainer,
      children: (0, r.jsx)(g, {
        size: "md",
        color: "currentColor",
        className: u.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: u.actionTextContainer,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        children: c
      }), (0, r.jsx)(i.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: d
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.P3F, {
        onClick: o.isEditable ? () => a(false) : true,
        children: (0, r.jsx)(i.FZ5, {
          checked: s,
          disabled: !o.isEditable
        })
      })
    })]
  })
}

function g(e) {
  let {
    action: t,
    guildId: n,
    triggerType: i,
    toggled: l,
    onToggleAction: u
  } = e;
  switch (t.type) {
    case c.jj.FLAG_TO_CHANNEL:
      return (0, r.jsx)(o.Z, {
        action: t,
        triggerType: i,
        toggled: l,
        onToggleAction: u
      });
    case c.jj.USER_COMMUNICATION_DISABLED:
      return (0, r.jsx)(a.Z, {
        action: t,
        guildId: n,
        triggerType: i,
        toggled: l,
        onToggleAction: u
      });
    case c.jj.BLOCK_MESSAGE:
      return (0, r.jsx)(s.Z, {
        action: t,
        triggerType: i,
        toggled: l,
        onToggleAction: u
      });
    default:
      return (0, r.jsx)(d, {
        action: t,
        guildId: n,
        toggled: l,
        triggerType: i,
        onToggleAction: u
      })
  }
}