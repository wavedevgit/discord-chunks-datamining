/** Chunk was on web.js **/
/** chunk id: 533594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => l
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk61358 = require("./61358.js");

function l(e) {
  let {
    className: t,
    header: n,
    headerClassName: o,
    children: l
  } = e, c = i.useMemo(() => {
    let e = false;
    return i.Children.forEach(l, t => {
      null != t && (e = true)
    }), e
  }, [l]);
  return (0, r.jsxs)("div", {
    className: a()(s.wrapper, t),
    children: [(0, r.jsx)("div", {
      className: a()(s.header, o),
      children: n
    }), c && (0, r.jsx)("div", {
      className: s.content,
      children: l
    })]
  })
}