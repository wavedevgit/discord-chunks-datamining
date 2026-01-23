/** Chunk was on 47841 **/
/** chunk id: 596484, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk958178 = require("./958178.js");

function c(e) {
  let {
    pills: t,
    pillClassName: n
  } = e;
  return (0, r.jsx)("div", {
    className: o.kL,
    children: t.map(e => (0, r.jsx)(s.m, {
      __unsupportedReactNodeAsText: e.tooltipText,
      shouldShow: null != e.tooltipText,
      children: (0, r.jsx)(a.DUT, {
        className: l()(o.Io, {
          [o.r9]: e.disabled
        }, n),
        onClick: e.disabled ? true : e.onClick,
        children: (0, r.jsx)(a.Text, {
          tag: "span",
          variant: "text-sm/medium",
          color: "interactive-text-default",
          children: e.text
        })
      })
    }, e.text))
  })
}