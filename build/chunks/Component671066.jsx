/** Chunk was on 54052 **/
/** chunk id: 671066, original params: e,t,n (module,exports,require) **/
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
  Chunk75765 = require("./75765.js");

function p(e) {
  var t;
  let {
    action: n,
    triggerType: p,
    toggled: f,
    onToggleAction: h
  } = e, b = e => () => h(e), x = (0, u.c)(n.type, n, p), j = null == (t = n.metadata) ? true : t.channelId, _ = (0, i.e7)([d.default, c.Z, o.Z], () => {
    let e = o.Z.getChannel(j);
    return null == e ? null : (0, s.F6)(e, d.default, c.Z)
  }, [j]);
  if (null == x) return null;
  let {
    headerText: v,
    descriptionText: O,
    icon: y
  } = x;
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
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-sm/semibold",
        children: v
      }), (0, r.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: O
      }), f && (0, r.jsxs)(a.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [null != _ && m.intl.format(m.t["8Sr/am"], {
          channelName: _
        }), (0, r.jsx)(a.P3F, {
          onClick: b(true),
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
        onChange: b(false),
        className: g.__invalid_actionCheckbox
      })
    })]
  })
}