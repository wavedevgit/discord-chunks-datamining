/** Chunk was on 64935 **/
/** chunk id: 304937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk212555 = require("./212555.jsx"),
  Chunk428855 = require("./428855.jsx"),
  Chunk880652 = require("./880652.js"),
  Chunk106181 = require("./106181.js"),
  Chunk206314 = require("./206314.js");

function p(e) {
  var t;
  let {
    question: n,
    questionId: i,
    responses: p,
    onResponseChange: m
  } = e, f = (() => {
    var e, t;
    switch (n.QuestionType) {
      case c.SQ.TEXT_ENTRY:
        return (0, r.jsx)(o.A, {
          question: n,
          questionId: i,
          value: null != (e = p[i]) ? e : "",
          onValueChange: m
        });
      case c.SQ.MULTIPLE_CHOICE:
        return (0, r.jsx)(s.A, {
          question: n,
          questionId: i,
          value: null != (t = p[i]) ? t : "",
          onValueChange: m
        });
      case c.SQ.DESCRIPTIVE_BLOCK:
        return (0, r.jsx)("div", {});
      default:
        return null
    }
  })();
  return null == f ? null : (0, r.jsxs)("div", {
    className: l()(d.PT, u.k),
    children: [(0, r.jsx)(a.EYj, {
      variant: "text-lg/normal",
      color: "text-strong",
      children: (0, r.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: null != (t = n.QuestionText_Unsafe) ? t : ""
        }
      })
    }), f]
  })
}