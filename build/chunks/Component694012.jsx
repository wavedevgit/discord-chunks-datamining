/** Chunk was on 39048 **/
/** chunk id: 694012, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk257554 = require("./257554.js");

function c(e) {
  let {
    className: t,
    enabled: n,
    previewCTA: i,
    onPreview: c,
    onToggle: d,
    animateStatus: u,
    firstLine: g,
    secondLine: m,
    disabled: p
  } = e;
  return (0, r.jsxs)("div", {
    className: l()(t, o.TV),
    children: [n ? (0, r.jsx)(s.A9s, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(o.nu, {
        [o.i0]: u
      })
    }) : (0, r.jsx)(s.R2l, {
      size: "custom",
      color: "currentColor",
      width: 24,
      height: 24,
      className: l()(o.Vi, {
        [o.i0]: u
      })
    }), (0, r.jsxs)("div", {
      className: o.A5,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: g
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: m
      })]
    }), (0, r.jsxs)("div", {
      className: o.UD,
      children: [null == c ? null : (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: o.jc,
        children: (0, r.jsx)(s.Button, {
          variant: "secondary",
          size: "sm",
          text: null != i ? i : a.intl.string(a.t["5U0kL8"]),
          onClick: c,
          disabled: p
        })
      }), (0, r.jsx)(s.Button, {
        variant: n ? "critical-primary" : "primary",
        size: "sm",
        disabled: null == d || !n || p,
        text: n ? a.intl.string(a.t.R9GHya) : a.intl.string(a.t.JFfins),
        onClick: d
      })]
    })]
  })
}