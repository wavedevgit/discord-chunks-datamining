/** Chunk was on web.js **/
/** chunk id: 696014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk921891 = require("./921891.js");
let l = 2;

function c() {
  let [e, t] = Chunk73800.useState(false);

  function n(e) {
    let {
      showAll: n = false,
      className: i,
      children: o,
      lineClamp: c = l
    } = e, u = {
      lineClamp: c,
      WebkitLineClamp: c
    }, d = e => {
      null != e && t(e.scrollHeight - e.clientHeight > 1)
    };
    return (0, r.jsx)("div", {
      ref: d,
      className: a()(s.lineClamp, i),
      style: n ? true : u,
      children: o
    })
  }
  return {
    isTruncated: module,
    ExpandableTextContainer: Chunk73800.memo(require)
  }
}