/** Chunk was on 64982 **/
/** chunk id: 681460, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  j: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk696955 = require("./696955.js");

function c(e) {
  let {
    pills: t,
    pillClassName: n
  } = e;
  return (0, r.jsx)("div", {
    className: o.container,
    children: t.map(e => (0, r.jsx)(a.u, {
      __unsupportedReactNodeAsText: e.tooltipText,
      shouldShow: null != e.tooltipText,
      children: (0, r.jsx)(s.P3F, {
        className: l()(o.pill, {
          [o.disabled]: e.disabled
        }, n),
        onClick: e.disabled ? true : e.onClick,
        children: (0, r.jsx)(s.Text, {
          tag: "span",
          variant: "text-sm/medium",
          color: "interactive-normal",
          children: e.text
        })
      })
    }, e.text))
  })
}