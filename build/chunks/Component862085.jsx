/** Chunk was on 88479 **/
/** chunk id: 862085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk464992 = require("./464992.js");

function c(e) {
  let {
    action: t,
    triggerType: n,
    toggled: c,
    onToggleAction: d
  } = e, u = e => () => d(e), m = (0, a.c)(t.type, t, n);
  if (null == m) return null;
  let {
    headerText: g,
    descriptionText: p,
    icon: f
  } = m;
  return (0, r.jsxs)("div", {
    className: o.actionContainer,
    children: [(0, r.jsx)("div", {
      className: o.actionIconContainer,
      children: (0, r.jsx)(f, {
        size: "custom",
        color: "currentColor",
        className: o.actionIcon
      })
    }), (0, r.jsxs)("div", {
      className: o.actionTextContainer,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-sm/semibold",
        children: g
      }), (0, r.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: p
      }), c ? (0, r.jsxs)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [s.intl.string(s.t.Oa9oWF), (0, r.jsx)(l.P3F, {
          onClick: u(true),
          className: o.editChannel,
          tag: "span",
          role: "link",
          children: s.intl.string(s.t.QupmYW)
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.$q, {
        type: i.M0.INVERTED,
        value: c,
        onChange: u(false),
        className: o.__invalid_actionCheckbox
      })
    })]
  })
}