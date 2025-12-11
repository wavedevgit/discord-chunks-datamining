/** Chunk was on web.js **/
/** chunk id: 786773, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk284881 = require("./284881.js"),
  Chunk978784 = require("./978784.js");

function s(e) {
  let {
    question: t,
    questionId: n,
    value: s,
    onValueChange: l
  } = e, c = t.Selector !== a.E_.SINGLE_LINE;
  return (0, r.jsx)("div", {
    className: o.container,
    children: c ? (0, r.jsx)(i.Kx8, {
      value: s,
      onChange: e => l(n, e),
      placeholder: "Enter your response...",
      rows: 4
    }) : (0, r.jsx)(i.oil, {
      value: s,
      onChange: e => l(n, e),
      placeholder: "Enter your response..."
    })
  })
}