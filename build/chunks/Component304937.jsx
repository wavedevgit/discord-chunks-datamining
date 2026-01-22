/** Chunk was on web.js **/
/** chunk id: 304937, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk212555 = require("./212555.jsx"),
  Chunk428855 = require("./428855.jsx"),
  Chunk880652 = require("./880652.js"),
  Chunk106181 = require("./106181.js"),
  Chunk206314 = require("./206314.js");

function f(e) {
  var t;
  let {
    question: n,
    questionId: i,
    responses: f,
    onResponseChange: p
  } = e, _ = (() => {
    var e, t;
    switch (n.QuestionType) {
      case c.SQ.TEXT_ENTRY:
        return (0, r.jsx)(l.A, {
          question: n,
          questionId: i,
          value: null != (e = f[i]) ? e : "",
          onValueChange: p
        });
      case c.SQ.MULTIPLE_CHOICE:
        return (0, r.jsx)(o.A, {
          question: n,
          questionId: i,
          value: null != (t = f[i]) ? t : "",
          onValueChange: p
        });
      case c.SQ.DESCRIPTIVE_BLOCK:
        return (0, r.jsx)("div", {});
      default:
        return null
    }
  })();
  return null == _ ? null : (0, r.jsxs)("div", {
    className: a()(d.PT, u.k),
    children: [(0, r.jsx)(s.EYj, {
      variant: "text-lg/normal",
      color: "text-strong",
      children: (0, r.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: null != (t = n.QuestionText_Unsafe) ? t : ""
        }
      })
    }), _]
  })
}