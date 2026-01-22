/** Chunk was on web.js **/
/** chunk id: 428855, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk880652 = require("./880652.js"),
  Chunk474071 = require("./474071.js");

function o(e) {
  let {
    question: t,
    questionId: n,
    value: o,
    onValueChange: l
  } = e, c = t.Selector !== a.BO.SINGLE_LINE;
  return (0, r.jsx)("div", {
    className: s.k,
    children: c ? (0, r.jsx)(i.fs1, {
      value: o,
      onChange: e => l(n, e),
      placeholder: "Enter your response...",
      rows: 4
    }) : (0, r.jsx)(i.ksK, {
      value: o,
      onChange: e => l(n, e),
      placeholder: "Enter your response..."
    })
  })
}