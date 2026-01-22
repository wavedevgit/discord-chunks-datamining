/** Chunk was on 86142 **/
/** chunk id: 317940, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk819670 = require("./819670.js");

function c(e) {
  let {
    title: t,
    subtitle: n,
    buttonText: c,
    image: u,
    onButtonClick: d,
    loading: h
  } = e;
  return (0, r.jsx)(a.Ay, {
    className: o.kL,
    children: (0, r.jsxs)(i.BJc, {
      align: "center",
      justify: "center",
      gap: 24,
      children: [(0, r.jsxs)(i.BJc, {
        gap: 8,
        align: "center",
        children: [(0, r.jsxs)(i.BJc, {
          gap: 24,
          align: "center",
          children: [null != u && (0, r.jsx)(i.BJc, {
            align: "center",
            justify: "center",
            className: o.Sl,
            children: u
          }), h && (0, r.jsx)(l.y$y, {
            type: l.y$y.Type.SPINNING_CIRCLE
          }), (0, r.jsx)(i.DZT, {
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: t
          })]
        }), null != n && "" !== n && (0, r.jsx)(i.EYj, {
          variant: "text-md/normal",
          color: "text-default",
          className: o.VA,
          children: n
        })]
      }), !h && (0, r.jsx)(s.$nd, {
        onClick: d,
        text: c,
        variant: "overlay-primary"
      })]
    })
  })
}