/** Chunk was on web.js **/
/** chunk id: 207385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk848275 = require("./848275.jsx"),
  Chunk786773 = require("./786773.jsx"),
  Chunk284881 = require("./284881.js"),
  Chunk298762 = require("./298762.js"),
  Chunk602009 = require("./602009.js");

function f(e) {
  var t;
  let {
    question: n,
    questionId: i,
    responses: f,
    onResponseChange: _
  } = e, p = (() => {
    var e, t;
    switch (n.QuestionType) {
      case c.S.TEXT_ENTRY:
        return (0, r.jsx)(l.Z, {
          question: n,
          questionId: i,
          value: null != (e = f[i]) ? e : "",
          onValueChange: _
        });
      case c.S.MULTIPLE_CHOICE:
        return (0, r.jsx)(s.Z, {
          question: n,
          questionId: i,
          value: null != (t = f[i]) ? t : "",
          onValueChange: _
        });
      case c.S.DESCRIPTIVE_BLOCK:
        return (0, r.jsx)("div", {});
      default:
        return null
    }
  })();
  return null == p ? null : (0, r.jsxs)("div", {
    className: a()(d.markup, u.container),
    children: [(0, r.jsx)(o.xvT, {
      variant: "text-lg/normal",
      color: "text-primary",
      children: (0, r.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: null != (t = n.QuestionText_Unsafe) ? t : ""
        }
      })
    }), p]
  })
}