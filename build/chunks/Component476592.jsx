/** Chunk was on 61344 **/
/** chunk id: 476592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492917 = require("./492917.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk916874 = require("./916874.js");

function c(e) {
  let {
    header: t,
    description: n,
    onDismiss: c,
    buttons: u,
    dismissible: d = true
  } = e, h = r.useCallback(() => {
    null == c || c()
  }, [c]);
  return (0, l.jsxs)("div", {
    className: o.HZ,
    children: [(0, l.jsxs)("div", {
      className: o.Be,
      children: [(0, l.jsx)(i.k_4, {
        alt: "",
        size: 32
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: t
        }), (0, l.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-strong",
          children: n
        })]
      })]
    }), (0, l.jsx)("div", {
      className: o.Uo,
      children: null == u ? true : u.map((e, t) => {
        var n;
        return (0, l.jsx)(a.Button, {
          text: e.text,
          variant: null != (n = e.variant) ? n : "secondary",
          onClick: e.onClick,
          size: "sm"
        }, t)
      })
    }), d ? (0, l.jsx)(a.DUT, {
      className: o.b,
      onClick: h,
      role: "button",
      "aria-label": s.intl.string(s.t.WAI6xu),
      children: (0, l.jsx)(a.PGe, {
        size: "md",
        color: "currentColor",
        className: o.b
      })
    }) : null]
  })
}