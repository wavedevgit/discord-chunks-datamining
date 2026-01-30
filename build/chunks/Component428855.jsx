/** Chunk was on 64935 **/
/** chunk id: 428855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk880652 = require("./880652.js"),
  Chunk474071 = require("./474071.js");

function s(e) {
  let {
    question: t,
    questionId: n,
    value: s,
    onValueChange: o
  } = e, c = t.Selector !== l.BO.SINGLE_LINE;
  return (0, r.jsx)("div", {
    className: a.k,
    children: c ? (0, r.jsx)(i.fs1, {
      value: s,
      onChange: e => o(n, e),
      placeholder: "Enter your response...",
      rows: 4
    }) : (0, r.jsx)(i.ksK, {
      value: s,
      onChange: e => o(n, e),
      placeholder: "Enter your response..."
    })
  })
}