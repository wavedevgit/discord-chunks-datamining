/** Chunk was on web.js **/
/** chunk id: 386952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk968338 = require("./968338.js");
let l = 2;

function c() {
  let [e, t] = i.useState(false);

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
      className: s()(o.I, i),
      style: n ? true : u,
      children: a
    })
  }
  return {
    isTruncated: e,
    ExpandableTextContainer: i.memo(n)
  }
}