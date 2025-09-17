/** Chunk was on web.js **/
/** chunk id: 456799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk99542 = require("./99542.js");
let l = function(e) {
  let {
    allowClicks: t = false,
    children: n,
    withBorder: i = false
  } = e;

  function l(e) {
    e.stopPropagation()
  }
  return (0, r.jsx)(o.Rny, {
    children: (0, r.jsx)(o.Zbd, {
      className: a()(s.componentPreviewWrapper, {
        [s.componentPreviewWrapperBordered]: i
      }),
      outline: i,
      children: (0, r.jsx)("div", {
        className: s.componentPreview,
        onClickCapture: t ? true : l,
        children: n
      })
    })
  })
}