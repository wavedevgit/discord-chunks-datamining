/** Chunk was on web.js **/
/** chunk id: 878596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk64372 = require("./64372.js");
let o = e => {
  let {
    label: t,
    onClick: n,
    submitting: o
  } = e;
  return (0, r.jsx)(i.P3F, {
    onClick: o ? true : n,
    className: a.button,
    children: (0, r.jsxs)("div", {
      className: a.contentContainer,
      children: [o ? (0, r.jsx)(i.$jN, {
        type: i.$jN.Type.PULSING_ELLIPSIS,
        className: a.__invalid_spinner
      }) : (0, r.jsx)(i.Text, {
        variant: "text-md/medium",
        className: a.label,
        children: t
      }), (0, r.jsx)(i.CJ0, {
        size: "md",
        color: "currentColor",
        className: a.arrow
      })]
    })
  })
}