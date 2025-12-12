/** Chunk was on web.js **/
/** chunk id: 878596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk64372 = require("./64372.js");
let a = e => {
  let {
    label: t,
    onClick: n,
    submitting: a
  } = e;
  return (0, r.jsx)(i.P3F, {
    onClick: a ? true : n,
    className: o.button,
    children: (0, r.jsxs)("div", {
      className: o.contentContainer,
      children: [a ? (0, r.jsx)(i.$jN, {
        type: i.$jN.Type.PULSING_ELLIPSIS,
        className: o.__invalid_spinner
      }) : (0, r.jsx)(i.Text, {
        variant: "text-md/medium",
        className: o.label,
        children: t
      }), (0, r.jsx)(i.CJ0, {
        size: "md",
        color: "currentColor",
        className: o.arrow
      })]
    })
  })
}