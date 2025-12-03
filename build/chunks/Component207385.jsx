/** Chunk was on web.js **/
/** chunk id: 207385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk848275 = require("./848275.jsx"),
  Chunk786773 = require("./786773.jsx"),
  Chunk284881 = require("./284881.js"),
  Chunk129103 = require("./129103.js"),
  Chunk430864 = require("./430864.js");

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
      case c.S.TEXT_ENTRY:
        return (0, r.jsx)(l.Z, {
          question: n,
          questionId: i,
          value: null != (e = f[i]) ? e : "",
          onValueChange: p
        });
      case c.S.MULTIPLE_CHOICE:
        return (0, r.jsx)(s.Z, {
          question: n,
          questionId: i,
          value: null != (t = f[i]) ? t : "",
          onValueChange: p
        });
      case c.S.DESCRIPTIVE_BLOCK:
        return (0, r.jsx)("div", {});
      default:
        return null
    }
  })();
  return null == _ ? null : (0, r.jsxs)("div", {
    className: a()(d.markup, u.container),
    children: [(0, r.jsx)(o.xvT, {
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