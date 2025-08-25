/** Chunk was on 52721 **/
/** chunk id: 683579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk862085 = require("./862085.jsx"),
  Chunk769998 = require("./769998.jsx"),
  Chunk671066 = require("./671066.jsx"),
  Chunk273504 = require("./273504.js"),
  Chunk464992 = require("./464992.js");

function u(e) {
  let {
    action: t,
    triggerType: n,
    toggled: a,
    onToggleAction: s
  } = e, o = (0, l.c)(t.type, t, n);
  if (null == o) return null;
  let {
    headerText: c,
    descriptionText: u,
    icon: m
  } = o;
  return (0, r.jsxs)("div", {
    className: d.actionContainer,
    children: [(0, r.jsx)("div", {
      className: d.actionIconContainer,
      children: (0, r.jsx)(m, {
        size: "md",
        color: "currentColor",
        className: d.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: d.actionTextContainer,
      children: [(0, r.jsx)(i.X6q, {
        variant: "heading-sm/semibold",
        children: c
      }), (0, r.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: u
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.XZJ, {
        disabled: !o.isEditable,
        type: i.XZJ.Types.INVERTED,
        value: a,
        onChange: () => s(false),
        className: d.__invalid_actionCheckbox
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
    onToggleAction: d
  } = e;
  switch (t.type) {
    case c.jj.FLAG_TO_CHANNEL:
      return (0, r.jsx)(o.Z, {
        action: t,
        triggerType: i,
        toggled: l,
        onToggleAction: d
      });
    case c.jj.USER_COMMUNICATION_DISABLED:
      return (0, r.jsx)(s.Z, {
        action: t,
        guildId: n,
        triggerType: i,
        toggled: l,
        onToggleAction: d
      });
    case c.jj.BLOCK_MESSAGE:
      return (0, r.jsx)(a.Z, {
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