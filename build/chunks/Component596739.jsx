/** Chunk was on 86642 **/
/** chunk id: 596739, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk582220 = require("./582220.js"),
  Chunk560580 = require("./560580.js");

function c(e) {
  let {
    header: t,
    description: n,
    onDismiss: c,
    buttons: u,
    dismissible: d = true
  } = e, p = r.useCallback(() => {
    null == c || c()
  }, [c]);
  return (0, i.jsxs)("div", {
    className: o.safetyBanner,
    children: [(0, i.jsxs)("div", {
      className: o.shieldAndHeading,
      children: [(0, i.jsx)("img", {
        className: o.safetyShieldIcon,
        src: s,
        alt: ""
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: t
        }), (0, i.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "text-primary",
          children: n
        })]
      })]
    }), (0, i.jsx)("div", {
      className: o.buttons,
      children: null == u ? true : u.map((e, t) => {
        var n;
        return (0, i.jsx)(l.Button, {
          text: e.text,
          variant: null != (n = e.variant) ? n : "secondary",
          onClick: e.onClick,
          size: "sm"
        }, t)
      })
    }), d ? (0, i.jsx)(l.P3F, {
      className: o.closeButton,
      onClick: p,
      role: "button",
      "aria-label": a.intl.string(a.t.WAI6xu),
      children: (0, i.jsx)(l.Dio, {
        size: "md",
        color: "currentColor",
        className: o.closeButton
      })
    }) : null]
  })
}