/** Chunk was on 64982 **/
/** chunk id: 671066, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk464992 = require("./464992.js");

function p(e) {
  var t;
  let {
    action: n,
    triggerType: p,
    toggled: f,
    onToggleAction: h
  } = e, x = e => () => h(e), b = (0, u.c)(n.type, n, p), j = null == (t = n.metadata) ? true : t.channelId, v = (0, i.e7)([d.default, c.Z, o.Z], () => {
    let e = o.Z.getChannel(j);
    return null == e ? null : (0, a.F6)(e, d.default, c.Z)
  }, [j]);
  if (null == b) return null;
  let {
    headerText: _,
    descriptionText: O,
    icon: y
  } = b;
  return (0, r.jsxs)("div", {
    className: g.actionContainer,
    children: [(0, r.jsx)("div", {
      className: g.actionIconContainer,
      children: (0, r.jsx)(y, {
        size: "md",
        color: "currentColor",
        className: g.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: g.actionTextContainer,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-sm/semibold",
        children: _
      }), (0, r.jsx)(s.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: O
      }), f && (0, r.jsxs)(s.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [null != v && m.intl.format(m.t["8Sr/am"], {
          channelName: v
        }), (0, r.jsx)(s.P3F, {
          onClick: x(true),
          className: g.editChannel,
          tag: "span",
          role: "link",
          children: m.intl.string(m.t["3gUsJS"])
        })]
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(l.$q, {
        type: l.M0.INVERTED,
        value: f,
        onChange: x(false),
        className: g.__invalid_actionCheckbox
      })
    })]
  })
}