/** Chunk was on 32923 **/
/** chunk id: 862085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk556012 = require("./556012.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk75765 = require("./75765.js");

function c(e) {
  let {
    action: t,
    triggerType: n,
    toggled: c,
    onToggleAction: d
  } = e, u = e => () => d(e), g = (0, a.c)(t.type, t, n);
  if (null == g) return null;
  let {
    headerText: m,
    descriptionText: p,
    icon: f
  } = g;
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
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: m
      }), (0, r.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: p
      }), c ? (0, r.jsxs)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [s.intl.string(s.t.Oa9oWJ), (0, r.jsx)(l.P3F, {
          onClick: u(true),
          className: o.editChannel,
          tag: "span",
          role: "link",
          children: s.intl.string(s.t.QupmYY)
        })]
      }) : null]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(i.$q, {
        value: c,
        onChange: u(false),
        className: o.__invalid_actionCheckbox
      })
    })]
  })
}