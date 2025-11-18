/** Chunk was on web.js **/
/** chunk id: 696014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk933867 = require("./933867.js");
let l = 2;

function c() {
  let [e, t] = Chunk473749.useState(false);

  function n(e) {
    let {
      showAll: n = false,
      className: i,
      children: a,
      lineClamp: c = l
    } = e, u = {
      lineClamp: c,
      WebkitLineClamp: c
    }, d = e => {
      null != e && t(e.scrollHeight - e.clientHeight > 1)
    };
    return (0, r.jsx)("div", {
      ref: d,
      className: o()(s.lineClamp, i),
      style: n ? true : u,
      children: a
    })
  }
  return {
    isTruncated: module,
    ExpandableTextContainer: Chunk473749.memo(require)
  }
}