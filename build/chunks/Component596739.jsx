/** Chunk was on 81985 **/
/** chunk id: 596739, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => c
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk970683 = require("./970683.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37830 = require("./37830.js");

function c(e) {
  let {
    header: t,
    description: n,
    onDismiss: c,
    buttons: u,
    dismissible: d = true
  } = e, p = i.useCallback(() => {
    null == c || c()
  }, [c]);
  return (0, r.jsxs)("div", {
    className: s.safetyBanner,
    children: [(0, r.jsxs)("div", {
      className: s.shieldAndHeading,
      children: [(0, r.jsx)(l.i$7, {
        alt: "",
        size: 32
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: t
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-strong",
          children: n
        })]
      })]
    }), (0, r.jsx)("div", {
      className: s.buttons,
      children: null == u ? true : u.map((e, t) => {
        var n;
        return (0, r.jsx)(a.Button, {
          text: e.text,
          variant: null != (n = e.variant) ? n : "secondary",
          onClick: e.onClick,
          size: "sm"
        }, t)
      })
    }), d ? (0, r.jsx)(a.P3F, {
      className: s.closeButton,
      onClick: p,
      role: "button",
      "aria-label": o.intl.string(o.t.WAI6xu),
      children: (0, r.jsx)(a.Dio, {
        size: "md",
        color: "currentColor",
        className: s.closeButton
      })
    }) : null]
  })
}