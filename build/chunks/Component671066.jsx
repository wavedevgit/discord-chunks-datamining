/** Chunk was on 9536 **/
/** chunk id: 671066, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239244 = require("./239244.js");

function m(e) {
  var t;
  let {
    action: n,
    triggerType: m,
    toggled: f,
    onToggleAction: b
  } = e, p = e => () => b(e), h = (0, d.c)(n.type, n, m), x = null == (t = n.metadata) ? true : t.channelId, j = (0, i.e7)([c.default, o.Z, s.Z], () => {
    let e = s.Z.getChannel(x);
    return null == e ? null : (0, a.F6)(e, c.default, o.Z)
  }, [x]);
  if (null == h) return null;
  let {
    headerText: v,
    descriptionText: O,
    icon: y
  } = h;
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
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: v
      }), (0, r.jsx)(l.Text, {
        color: "interactive-text-default",
        variant: "text-xs/medium",
        children: O
      }), f && (0, r.jsxs)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [null != j && u.intl.format(u.t["8Sr/ar"], {
          channelName: j
        }), (0, r.jsx)(l.P3F, {
          onClick: p(true),
          className: g.editChannel,
          tag: "span",
          role: "link",
          children: u.intl.string(u.t["3gUsJb"])
        })]
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(l.P3F, {
        onClick: h.isEditable ? p(false) : true,
        children: (0, r.jsx)(l.FZ5, {
          checked: f,
          disabled: !h.isEditable
        })
      })
    })]
  })
}