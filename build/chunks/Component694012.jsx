/** Chunk was on 47841 **/
/** chunk id: 694012, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk257554 = require("./257554.js");

function o(e) {
  let {
    className: t,
    enabled: n,
    previewCTA: i,
    onPreview: o,
    onToggle: d,
    animateStatus: u,
    firstLine: f,
    secondLine: g,
    disabled: b
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(t, c.TV),
    children: [n ? (0, r.jsx)(s.A9s, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(c.nu, {
        [c.i0]: u
      })
    }) : (0, r.jsx)(s.R2l, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(c.Vi, {
        [c.i0]: u
      })
    }), (0, r.jsxs)("div", {
      className: c.A5,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: f
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: g
      })]
    }), (0, r.jsxs)("div", {
      className: c.UD,
      children: [null == o ? null : (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: c.jc,
        children: (0, r.jsx)(s.Button, {
          variant: "secondary",
          size: "sm",
          text: null != i ? i : a.intl.string(a.t["5U0kL8"]),
          onClick: o,
          disabled: b
        })
      }), (0, r.jsx)(s.Button, {
        variant: n ? "critical-primary" : "primary",
        size: "sm",
        disabled: null == d || !n || b,
        text: n ? a.intl.string(a.t.R9GHya) : a.intl.string(a.t.JFfins),
        onClick: d
      })]
    })]
  })
}